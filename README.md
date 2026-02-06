# Nik Farees - Resume Website

A modern, professional resume website built with VitePress featuring a clean documentation-style design and comprehensive portfolio presentation.

## Features

- Modern responsive design with clean documentation-style layout
- Dark and light theme support with automatic switching
- Built-in local search functionality
- Mobile-friendly and works across all devices
- Fast static site generation powered by VitePress

## Project Structure

```
.
├── .vitepress/               # VitePress configuration directory
│   ├── config.mts            # Site configuration
│   └── theme/                # Theme customization
│       ├── index.ts          # Theme setup
│       └── custom.css        # Custom styles
├── public/                   # Static assets and images
├── about/                    # About section
├── contact.md                # Contact information
├── education/                # Education details
├── experience/               # Work experience
├── projects/                 # Project portfolio
├── skills/                   # Skills and certifications
└── index.md                  # Home page
```

## Getting Started

### Requirements

- Node.js 18 or higher
- npm or yarn package manager

### Installation

```bash
npm install
```

### Development Server

Start the local development server:

```bash
npm run docs:dev
```

The site will be available at `http://localhost:5173`

### Build for Production

Generate static files for deployment:

```bash
npm run docs:build
```

Built files are output to `.vitepress/dist/`

### Preview Production Build

Preview the production build locally:

```bash
npm run docs:preview
```

## Customization

### Theme Colors

Modify `.vitepress/theme/custom.css` to change the color scheme:

```css
:root {
  --vp-c-brand-1: #5f67ee;
  --vp-c-brand-2: #747bff;
  --vp-c-brand-3: #9499ff;
}
```

### Navigation and Sidebar

Edit `.vitepress/config.mts` to customize navigation menus and sidebar configuration.

## License

This project is open source under the MIT License.

## Author

Nik Farees Bin Nik Faizal

- GitHub: [NikFarees](https://github.com/NikFarees)
- LinkedIn: [nikfarees](https://linkedin.com/in/nikfarees)
- Email: nfarees.faizal@gmail.com

