# Rasmus Linde - E-Portfolio

A modern, interactive portfolio website built with React and ReactBits.dev components.

## 🚀 Features

- **Floating Lines Background** - Interactive animated background with mouse tracking
- **Click Spark Effect** - Particle effects on mouse clicks
- **Smooth Navigation** - Fixed navbar with smooth scrolling
- **Responsive Design** - Works on all devices (mobile, tablet, desktop)
- **WCAG Accessible** - Meets accessibility standards
- **Fast Performance** - Optimized for 1-3 second load times

## 🎨 Color Scheme

- Primary: `#2cdb29` (Neon Green)
- Background: `#000000` (Black)
- Accent: `#8f8990` (Gray)

## 📦 Tech Stack

- React 18
- Vite
- CSS3 (with animations)
- ReactBits.dev components

## 🛠️ Development

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── backgrounds/
│   │   ├── FloatingLines.jsx    # Animated background
│   │   └── FloatingLines.css
│   ├── effects/
│   │   ├── ClickSpark.jsx       # Click particle effect
│   │   └── ClickSpark.css
│   ├── sections/
│   │   ├── Hero.jsx             # Landing section
│   │   ├── About.jsx            # About me
│   │   ├── Skills.jsx           # Skills & languages
│   │   ├── Education.jsx        # Education timeline
│   │   ├── Experience.jsx       # Work experience
│   │   ├── Projects.jsx         # Portfolio projects
│   │   └── Contact.jsx          # Contact info
│   ├── Navbar.jsx               # Navigation
│   └── Navbar.css
├── App.jsx
├── App.css
└── index.css
```

## ✏️ Customization

### Adding New ReactBits Components

1. Create new component in `src/components/backgrounds/` or `src/components/effects/`
2. Import in `App.jsx`
3. Add to JSX structure

Example:

```jsx
import NewEffect from "./components/effects/NewEffect";

function App() {
  return (
    <>
      <FloatingLines />
      <ClickSpark />
      <NewEffect /> {/* Add here */}
      ...
    </>
  );
}
```

### Updating Content

- **Personal info**: Edit `src/components/sections/Hero.jsx` and `About.jsx`
- **Skills**: Update the `skills` array in `src/components/sections/Skills.jsx`
- **Projects**: Update the `projects` array in `src/components/sections/Projects.jsx`
- **Contact**: Edit `src/components/sections/Contact.jsx`

### Changing Colors

Global colors are used throughout. To change the color scheme, search and replace:

- `#2cdb29` (green) → your primary color
- `#8f8990` (gray) → your accent color
- `#000000` (black) → your background color

## 🖼️ Adding Your Logo

Replace the placeholder SVG logos in `/public/assets/`:

- `logo-light.svg` - For light backgrounds
- `logo-dark.svg` - For dark backgrounds

## 📝 To-Do

- [ ] Replace placeholder logo with actual logo images
- [ ] Add real project details from GitHub
- [ ] Add project screenshots/images
- [ ] Test on multiple browsers
- [ ] Run performance tests
- [ ] Deploy to hosting service

## 🌐 Deployment

This project can be deployed to:

- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## 📧 Contact

- Email: rasmuslinde00@gmail.com
- GitHub: [rasmuslinde-design](https://github.com/rasmuslinde-design)
- Location: Tartu, Estonia

---

Built with ❤️ using React & ReactBits.dev
