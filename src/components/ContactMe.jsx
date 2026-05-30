import { useEffect, useRef, useState } from "react";
import "./ContactMe.css";

const CONTACT = {
  email: "rasmus.linde@voco.ee",
  phone: "+372 5555 8714",
  location: "Tartu, Estonia",
  github: {
    label: "github.com/rasmuslinde-design",
    href: "https://github.com/rasmuslinde-design",
  },
};

function copyToClipboard(text) {
  if (navigator?.clipboard?.writeText) {
    return navigator.clipboard.writeText(text);
  }

  // Fallback for older browsers
  return new Promise((resolve, reject) => {
    try {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "absolute";
      textarea.style.left = "-9999px";
      document.body.appendChild(textarea);
      textarea.select();
      const ok = document.execCommand("copy");
      document.body.removeChild(textarea);
      ok ? resolve() : reject(new Error("Copy failed"));
    } catch (e) {
      reject(e);
    }
  });
}

const ContactMe = () => {
  const [isPinned, setIsPinned] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [copied, setCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);
  const copiedTimerRef = useRef(null);
  const phoneCopiedTimerRef = useRef(null);

  const isOpen = isPinned || isHovering;

  useEffect(() => {
    return () => {
      if (copiedTimerRef.current) {
        window.clearTimeout(copiedTimerRef.current);
      }
      if (phoneCopiedTimerRef.current) {
        window.clearTimeout(phoneCopiedTimerRef.current);
      }
    };
  }, []);

  const onCopyEmail = async () => {
    try {
      await copyToClipboard(CONTACT.email);
      setCopied(true);
      if (copiedTimerRef.current) {
        window.clearTimeout(copiedTimerRef.current);
      }
      copiedTimerRef.current = window.setTimeout(() => setCopied(false), 1200);
    } catch {
      // No-op: if copy fails, user can still click mailto.
    }
  };

  const onCopyPhone = async () => {
    try {
      await copyToClipboard(CONTACT.phone);
      setPhoneCopied(true);
      if (phoneCopiedTimerRef.current) {
        window.clearTimeout(phoneCopiedTimerRef.current);
      }
      phoneCopiedTimerRef.current = window.setTimeout(
        () => setPhoneCopied(false),
        1200,
      );
    } catch {
      // No-op
    }
  };

  return (
    <div className="contact-me">
      <div className="contact-me__inner">
        <button
          type="button"
          className="contact-me__button"
          aria-label={isPinned ? "Close contact panel" : "Open contact panel"}
          aria-pressed={isPinned}
          onClick={() => setIsPinned((v) => !v)}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          Contact me
        </button>

        <div
          className={`contact-me__panel ${isOpen ? "is-open" : ""}`}
          role="dialog"
          aria-label="Contact information"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="contact-me__row">
            <span className="contact-me__label">Email</span>
            <div className="contact-me__value">
              <a
                className="contact-me__link"
                href={`mailto:${CONTACT.email}`}
                onClick={(e) => {
                  e.preventDefault();
                  onCopyEmail();
                }}
                title="Click to copy"
              >
                {CONTACT.email}
              </a>
              <button
                type="button"
                className="contact-me__pill"
                onClick={onCopyEmail}
              >
                {copied ? "Copied" : "Copy"}
              </button>
            </div>
          </div>

          <div className="contact-me__row">
            <span className="contact-me__label">Phone</span>
            <div className="contact-me__value">
              <a className="contact-me__link" href={`tel:${CONTACT.phone}`}>
                {CONTACT.phone}
              </a>
              <button
                type="button"
                className="contact-me__pill"
                onClick={onCopyPhone}
              >
                {phoneCopied ? "Copied" : "Copy"}
              </button>
            </div>
          </div>

          <div className="contact-me__row">
            <span className="contact-me__label">Location</span>
            <span className="contact-me__text">{CONTACT.location}</span>
          </div>

          <div className="contact-me__row">
            <span className="contact-me__label">GitHub</span>
            <a
              className="contact-me__link"
              href={CONTACT.github.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {CONTACT.github.label}
            </a>
          </div>

          <div className="contact-me__hint">
            {isPinned ? "Pinned" : "Hover to preview, click to pin"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
