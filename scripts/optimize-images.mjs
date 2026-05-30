import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { glob } from "glob";
import sharp from "sharp";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");

const PUBLIC_ASSETS_DIR = path.join(repoRoot, "public", "assets");
const SRC_ASSETS_DIR = path.join(repoRoot, "src", "assets");

const OUT_DIR = path.join(repoRoot, "public", "optimized");

const IMAGE_EXTS = ["jpg", "jpeg", "png", "webp"];

function relFromRepo(abs) {
  return path.relative(repoRoot, abs).replaceAll(path.sep, "/");
}

function safeMkdir(dir) {
  return fs.mkdir(dir, { recursive: true });
}

async function fileExists(p) {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
}

async function globAsync(pattern) {
  return glob(pattern, {
    nodir: true,
    absolute: true,
  });
}

async function optimizeOne(inputPath) {
  const ext = path.extname(inputPath).slice(1).toLowerCase();
  if (!IMAGE_EXTS.includes(ext)) return;

  const rel = relFromRepo(inputPath);
  const isPublic = rel.startsWith("public/assets/");
  const isSrc = rel.startsWith("src/assets/");
  if (!isPublic && !isSrc) return;

  const baseRel = isPublic
    ? rel.replace(/^public\/assets\//, "")
    : rel.replace(/^src\/assets\//, "src/");

  const inStat = await fs.stat(inputPath);

  const image = sharp(inputPath, { failOn: "none" });
  const meta = await image.metadata();
  if (!meta.width || !meta.height) return;

  // Skip tiny icons/logos; not worth generating multiple sizes.
  const maxSide = Math.max(meta.width, meta.height);
  const shouldResize = maxSide > 900;

  const targets = shouldResize ? [480, 768, 1024, 1280] : [maxSide];

  const outRecords = [];

  for (const width of targets) {
    const resized = shouldResize
      ? image.clone().resize({ width, withoutEnlargement: true })
      : image.clone();

    const outBase = path.join(OUT_DIR, baseRel);
    const outDir = path.dirname(outBase);
    await safeMkdir(outDir);

    const stem = path.basename(outBase, path.extname(outBase));
    const widthSuffix = shouldResize ? `-${width}w` : "";

    const webpPath = path.join(outDir, `${stem}${widthSuffix}.webp`);
    const avifPath = path.join(outDir, `${stem}${widthSuffix}.avif`);

    // WebP
    await resized.clone().webp({ quality: 78 }).toFile(webpPath);

    // AVIF (slower, but better)
    await resized.clone().avif({ quality: 55 }).toFile(avifPath);

    const webpStat = await fs.stat(webpPath);
    const avifStat = await fs.stat(avifPath);

    outRecords.push({
      width: shouldResize ? width : meta.width,
      webp: `/optimized/${baseRel.replace(path.extname(baseRel), "")}${widthSuffix}.webp`,
      avif: `/optimized/${baseRel.replace(path.extname(baseRel), "")}${widthSuffix}.avif`,
      avifBytes: avifStat.size,
      webpBytes: webpStat.size,
    });
  }

  return {
    input: `/${(isPublic ? "assets/" : "src/assets/").replaceAll("src/assets/", "src/assets/")}${isPublic ? baseRel : baseRel.replace(/^src\//, "")}`,
    rel,
    bytes: inStat.size,
    width: meta.width,
    height: meta.height,
    variants: outRecords.sort((a, b) => a.width - b.width),
  };
}

async function main() {
  await safeMkdir(OUT_DIR);

  const patterns = [
    path.join(PUBLIC_ASSETS_DIR, `**/*.+(${IMAGE_EXTS.join("|")})`),
    path.join(SRC_ASSETS_DIR, `**/*.+(${IMAGE_EXTS.join("|")})`),
  ];

  const files = (await Promise.all(patterns.map((p) => globAsync(p)))).flat();

  const manifest = {
    generatedAt: new Date().toISOString(),
    outDir: "public/optimized",
    entries: {},
  };

  for (const f of files) {
    const item = await optimizeOne(f);
    if (!item) continue;

    // Key by repo-relative source path (stable).
    manifest.entries[item.rel] = {
      bytes: item.bytes,
      width: item.width,
      height: item.height,
      variants: item.variants,
    };
  }

  const manifestPath = path.join(OUT_DIR, "manifest.json");
  await fs.writeFile(
    manifestPath,
    JSON.stringify(manifest, null, 2) + "\n",
    "utf8",
  );

  const count = Object.keys(manifest.entries).length;
  console.log(`Optimized ${count} images into ${relFromRepo(OUT_DIR)}`);
}

if (
  (await fileExists(PUBLIC_ASSETS_DIR)) ||
  (await fileExists(SRC_ASSETS_DIR))
) {
  main().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
