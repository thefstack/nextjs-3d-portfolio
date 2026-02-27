# nextjs-3d-portfolio

An interactive, animated personal portfolio built with **Next.js 15**, **Three.js**, and **Framer Motion**, featuring a live 3D robot that reacts to mouse movement, smooth scroll-triggered animations, and a fully responsive dark/light theme.

---

## Live Demo

> Deploy your own instance — see [Getting Started](#getting-started) below.

---

## Features

### 3D Interactive Hero
- A custom **GLTF robot model** (`genkub_greeting_robot.glb`) rendered inside a Three.js canvas via `@react-three/fiber`.
- The robot **follows the cursor** in real time using smooth interpolation.
- Plays a **waving animation** on load and repeats it every 10 seconds with a greeting bubble.
- Falls back gracefully to a placeholder mesh if the model fails to load.

### Animated Loading Screen
- A 3-second branded loading screen with a pulsing animation holds the UI until the 3D model and assets are ready.
- Fades out smoothly using Framer Motion's `AnimatePresence`.

### Scroll-Aware Navbar
- Fixed top navigation that turns **frosted-glass** on scroll (`backdrop-blur`, background opacity).
- Active section highlighted with a spring-animated underline indicator (`layoutId`).
- Fully **responsive** — collapses to a hamburger menu on mobile with an animated slide-down panel.

### Dark / Light Theme
- Powered by `next-themes` with a floating toggle button.
- Custom Tailwind color palette (`blue-dark`, `blue-medium`, `blue-gray`, `blue-light`, `blue-pale`) for a consistent brand identity.
- All components switch cleanly between themes.

### Sections

| Section | Details |
|---|---|
| **Hero** | 3D robot, name, title, CTA buttons |
| **Experience** | Role at IVY Knowledge Service Pvt Ltd (Sep 2024 – Present) |
| **Projects** | 6 projects with filterable tabs and project detail cards |
| **Skills** | Animated progress bars for technical skills; badge grid for soft skills |
| **Education** | B.Sc (Hons.) Computer Science — University of Delhi (2021–2024) |
| **Contact** | Contact form + direct contact info (email, phone, LinkedIn, GitHub) |

### Projects Showcase
All projects are filterable by tag (`All`, `Featured`, `React`, `Next.js`, `AI`, `Node.js`).

| Project | Tags | Highlights |
|---|---|---|
| **TheFStack Portfolio** | Next.js, React, AI | Windows 10-style desktop UI, OpenAI chatbot integration |
| **PrepAI** | AI, React, Node.js | AI quiz system, ATS resume builder, personalized review |
| **PDF Splitter** | React, Node.js, Express | Drag-and-drop, PDF.js preview, pdf-lib manipulation |
| **Real Time Chat** | Socket.io, React, Strapi | Real-time messaging, Strapi CMS backend |
| **Rocket Health** | HTML, CSS | Static healthcare site, CSS typing animation |
| **Basic E-Commerce API** | Node.js, MongoDB, Express | JWT auth, OTP email verification, CRUD products |

### Scroll-Triggered Animations
- Every section uses **Framer Motion** `whileInView` variants with staggered children.
- Skill progress bars animate from `0` to the target percentage on viewport entry.
- Cards lift on hover (`y: -5` transform).

---

## Tech Stack

| Category | Technology |
|---|---|
| Framework | Next.js 15.2.4 (App Router) |
| Language | JavaScript (JSX) + TypeScript |
| 3D Rendering | Three.js, @react-three/fiber, @react-three/drei |
| Animations | Framer Motion |
| UI Components | shadcn/ui (Radix UI primitives) |
| Styling | Tailwind CSS 3, tailwindcss-animate |
| Icons | Lucide React |
| Theming | next-themes |
| Forms | React Hook Form + Zod |
| Package Manager | npm / pnpm |

---

## Project Structure

```
3d-portfolio/
├── app/
│   ├── layout.jsx          # Root layout with ThemeProvider
│   ├── page.jsx            # Main page — composes all sections
│   └── globals.css         # Global styles and CSS variables
├── components/
│   ├── hero-section.jsx    # Three.js canvas + robot model
│   ├── navbar.jsx          # Fixed responsive navigation
│   ├── experience.jsx      # Work experience timeline
│   ├── projects.jsx        # Filterable project cards
│   ├── skills.jsx          # Animated skill bars + soft skills
│   ├── education.jsx       # Education card
│   ├── contact.jsx         # Contact form + info
│   ├── footer.jsx          # Footer
│   ├── theme-toggle.jsx    # Dark/light mode toggle button
│   ├── theme-provider.tsx  # next-themes provider wrapper
│   └── ui/                 # shadcn/ui components
├── public/
│   └── genkub_greeting_robot.glb  # 3D robot model asset
├── tailwind.config.js
├── next.config.mjs
└── package.json
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/thefstack/3d-portfolio.git
cd 3d-portfolio

# Install dependencies (use legacy peer deps due to React 19)
npm install --legacy-peer-deps
# or
pnpm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run start
```

---

## Customization

To make this portfolio your own, update the data in the following component files:

| What to change | File |
|---|---|
| Name, title, bio | [components/hero-section.jsx](components/hero-section.jsx) |
| Work experience | [components/experience.jsx](components/experience.jsx) |
| Projects list | [components/projects.jsx](components/projects.jsx) |
| Skills & levels | [components/skills.jsx](components/skills.jsx) |
| Education | [components/education.jsx](components/education.jsx) |
| Contact info | [components/contact.jsx](components/contact.jsx) |
| Color palette | [tailwind.config.js](tailwind.config.js) |

---

## Contact

**Raj Sharma** — Full Stack Developer

- **Email**: rajsharmahwh19@gmail.com
- **Phone**: +91 9142892678
- **LinkedIn**: [linkedin.com/in/thefstack](https://linkedin.com/in/thefstack)
- **GitHub**: [github.com/thefstack](https://github.com/thefstack)
- **Location**: Kolkata, India

---

## License

This project is open source and available under the [MIT License](LICENSE).
