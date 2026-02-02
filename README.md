# JSON-Based Minimalist Graphics Designer Portfolio

A premium, JSON-driven portfolio website built with Angular 17+ featuring standalone components, signals architecture, and a beautiful minimalist design with earthy tones.

![Portfolio Preview](https://github.com/user-attachments/assets/d3ffbdc0-fdae-4933-acce-477efae283ff)

## 🎨 Features

### Core Features
- **100% JSON-Driven**: All content managed through JSON files - no code changes needed
- **Angular 17+ Standalone Components**: Modern architecture with Signals for reactive state
- **Minimalist Design**: Premium Apple/Behance-quality aesthetics with earthy color palette
- **Dark Mode**: Seamless light/dark theme switching with preferences saved
- **Fully Responsive**: Mobile-first design that works perfectly on all devices
- **SEO Optimized**: Built-in SEO service with Open Graph support
- **Type-Safe**: Full TypeScript implementation with strict type checking

### Content Management
- **Multiple Content Types**: Logos, Motion Graphics, Social Media, UI/UX, Product Design
- **Advanced Filtering**: Filter by category, tools, and tags
- **Project Details**: Rich project pages with image galleries, tools, links, and downloads
- **Easy Updates**: Simply edit JSON files to add/update projects

### Design System
- **Earthy Color Palette**: Sand (#F7F3EE), Clay (#C6A57A), Charcoal (#2B2B2B), Sage (#8B9A7F)
- **Premium Typography**: Playfair Display for headings, Inter for body
- **Smooth Animations**: Fade-ins, hover effects, and smooth transitions
- **Tailwind CSS**: Utility-first CSS framework for rapid development

## 📸 Screenshots

| Light Mode | Dark Mode |
|------------|-----------|
| ![Light Mode](https://github.com/user-attachments/assets/d3ffbdc0-fdae-4933-acce-477efae283ff) | ![Dark Mode](https://github.com/user-attachments/assets/7aee28ab-fc3c-4bb4-9451-7375d616fd76) |

| About Page | Contact Page |
|------------|--------------|
| ![About](https://github.com/user-attachments/assets/d70ba6e4-a078-4938-beaf-9c47bf008fce) | ![Contact](https://github.com/user-attachments/assets/06da47bf-0c73-468e-892d-d51668cb8898) |

| Project Detail |
|----------------|
| ![Project Detail](https://github.com/user-attachments/assets/1be82a29-8090-452e-903d-5a190bf6eea3) |

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/shilpaprajapati/DesignPortfolioManagement.git
cd DesignPortfolioManagement

# Install dependencies
npm install

# Start development server
npm start
```

The application will be available at `http://localhost:4200`

### Build for Production

```bash
# Build the application
npm run build

# Output will be in dist/portfolio-app
```

## 📝 Content Management

### JSON Schema

All portfolio content is managed through `/src/assets/content/portfolio.json`

#### Site Configuration

```json
{
  "site": {
    "designerName": "Your Name",
    "tagline": "Your Tagline",
    "bio": "Your bio text...",
    "email": "your@email.com",
    "phone": "+1 (555) 123-4567",
    "location": "Your City, State",
    "resumeUrl": "/assets/resume.pdf",
    "social": {
      "behance": "https://behance.net/username",
      "dribbble": "https://dribbble.com/username",
      "instagram": "https://instagram.com/username",
      "linkedin": "https://linkedin.com/in/username",
      "twitter": "https://twitter.com/username"
    },
    "theme": {
      "primary": "#C6A57A",
      "background": "#F7F3EE",
      "backgroundDark": "#1A1A1A",
      "text": "#2B2B2B",
      "textDark": "#F7F3EE",
      "accent": "#8B9A7F"
    },
    "darkMode": false
  }
}
```

#### Adding a New Project

Add a new item to the appropriate category in the `categories` array:

```json
{
  "id": "unique-project-id",
  "title": "Project Title",
  "description": "Detailed project description...",
  "thumbnail": "/assets/images/category/thumbnail.webp",
  "images": [
    "/assets/images/category/image1.webp",
    "/assets/images/category/image2.webp"
  ],
  "videoUrl": "https://vimeo.com/123456789",
  "tools": ["Figma", "Photoshop"],
  "figmaLink": "https://figma.com/file/...",
  "adobeLinks": {
    "ai": "/assets/files/project.ai",
    "psd": "/assets/files/project.psd",
    "ae": "/assets/files/project.aep",
    "xd": "/assets/files/project.xd"
  },
  "tags": ["tag1", "tag2", "tag3"],
  "featured": true,
  "year": 2024
}
```

#### Creating a New Category

Add a new category to the `categories` array:

```json
{
  "id": "new-category",
  "title": "New Category Name",
  "icon": "icon-name",
  "description": "Category description",
  "items": []
}
```

### Adding Images

1. Place your images in `/src/assets/images/[category]/`
2. Use WebP format for best performance
3. Reference them in JSON: `"/assets/images/category/filename.webp"`

### Adding Downloadable Files

1. Place files in `/src/assets/files/`
2. Reference them in the `adobeLinks` object
3. Supported formats: .ai, .psd, .aep, .xd

## 🎯 Project Structure

```
src/
├── app/
│   ├── core/
│   │   ├── models/          # TypeScript interfaces
│   │   └── services/        # Core services (Content, Theme, SEO)
│   ├── features/
│   │   ├── home/           # Home page with portfolio grid
│   │   ├── about/          # About page
│   │   ├── contact/        # Contact page
│   │   └── portfolio/      # Project detail pages
│   ├── shared/
│   │   └── components/     # Shared components (Header)
│   ├── app.component.*     # Root component
│   ├── app.config.ts       # App configuration
│   └── app.routes.ts       # Route definitions
├── assets/
│   ├── content/            # JSON content files
│   ├── images/             # Project images
│   └── files/              # Downloadable files
└── styles.scss             # Global styles
```

## 🛠️ Technology Stack

- **Framework**: Angular 17+
- **Language**: TypeScript 5+
- **Styling**: Tailwind CSS + SCSS
- **State Management**: Angular Signals
- **Architecture**: Standalone Components
- **Routing**: Angular Router with lazy loading
- **HTTP**: Angular HttpClient
- **Fonts**: Inter, Playfair Display

## 🎨 Customization

### Changing Colors

Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#C6A57A',    // Your primary color
      sand: '#F7F3EE',       // Light background
      clay: '#C6A57A',       // Accent color
      charcoal: '#2B2B2B',   // Dark text
      sage: '#8B9A7F',       // Secondary accent
    }
  }
}
```

### Changing Typography

Update `src/styles.scss` to import different Google Fonts, then update the font families in `tailwind.config.js`.

### Customizing Animations

Animations are defined in component SCSS files and can be adjusted by modifying the keyframes and duration values.

## 🚀 Deployment

### Deploy to Netlify

1. Build the project: `npm run build`
2. Deploy the `dist/portfolio-app` folder to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist/portfolio-app`

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to GitHub Pages

1. Install angular-cli-ghpages: `npm i -D angular-cli-ghpages`
2. Build: `npm run build -- --base-href /repository-name/`
3. Deploy: `npx angular-cli-ghpages --dir=dist/portfolio-app`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Development

### Running Tests

```bash
npm test
```

### Linting

```bash
npm run lint
```

### Code Formatting

The project uses Angular's built-in formatting. Follow the existing code style.

## 📄 License

This project is available for personal and commercial use.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📞 Support

For questions or issues, please open an issue on GitHub.

## ✨ Credits

Built with Angular 17+ and Tailwind CSS. Designed with love for designers.

---

**Made with ❤️ for the design community**
