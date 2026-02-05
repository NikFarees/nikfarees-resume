# Nik Farees - Resume Website

A modern, VitePress-powered resume website with a clean documentation-style design.

## 🌟 Features

- **Modern Design** - Clean, professional documentation-style layout
- **Dark/Light Theme** - Automatic theme switching support
- **Search Functionality** - Built-in local search
- **Responsive** - Works on all devices
- **Fast** - Static site generation with VitePress

## 📁 Structure

```
docs/
├── .vitepress/
│   ├── config.mts        # VitePress configuration
│   └── theme/
│       ├── index.ts      # Theme setup
│       └── custom.css    # Custom styles
├── public/               # Static assets
├── about/                # About section
├── experience/           # Work experience
├── projects/             # Project portfolio
├── skills/               # Skills & certifications
├── education/            # Education & achievements
├── contact.md            # Contact information
└── index.md              # Home page
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
cd docs
npm install
```

### Development

```bash
npm run docs:dev
```

Visit `http://localhost:5173` to view the site.

### Build

```bash
npm run docs:build
```

The built files will be in `.vitepress/dist/`.

### Preview Build

```bash
npm run docs:preview
```

## 🎨 Customization

### Colors

Edit `.vitepress/theme/custom.css` to change the color scheme:

```css
:root {
  --vp-c-brand-1: #5f67ee;
  --vp-c-brand-2: #747bff;
  --vp-c-brand-3: #9499ff;
}
```

### Navigation

Edit `.vitepress/config.mts` to modify the navigation and sidebar.

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Nik Farees Bin Nik Faizal**

- GitHub: [@NikFarees](https://github.com/NikFarees)
- LinkedIn: [nikfarees](https://linkedin.com/in/nikfarees)
- Email: nfarees.faizal@gmail.com
