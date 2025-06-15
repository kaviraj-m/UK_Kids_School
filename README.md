# UK Kids International Play School Website

A modern, responsive website for UK Kids International Play School built with React, TypeScript, and Material-UI. The website features a beautiful, engaging design that showcases the school's programs, facilities, and values while providing an excellent user experience across all devices.

## 🌟 Features

### 🎨 Design & UI
- **Professional Branding**: Integrated UK Kids school logo throughout the website
- **Responsive Design**: Optimized layouts for mobile, tablet, and desktop devices
- **Modern Material-UI Components**: Consistent design system with beautiful animations
- **Floating Decorations**: Interactive animated elements for visual appeal
- **Smooth Transitions**: Enhanced hover effects and micro-interactions

### 📱 Responsive Layout
- **Mobile-First Approach**: Touch-friendly interfaces and optimal mobile experience
- **Desktop Grid System**: Professional two-column layouts and card-based sections
- **Adaptive Typography**: Scaling text sizes from 2.2rem to 4.5rem based on screen size
- **Consistent Card Heights**: Stable layouts with equal height cards across all breakpoints

### 🏫 School Sections
- **Hero Section**: Eye-catching landing area with school highlights and key features
- **About Section**: Comprehensive information about the school's mission and values
- **Features Section**: Showcase of educational programs and facilities
- **Contact Section**: Easy-to-use contact forms and location information
- **Footer**: Complete contact details and additional navigation

### 🔧 Technical Features
- **TypeScript Integration**: Type-safe development with enhanced code quality
- **Vite Build System**: Fast development and optimized production builds
- **ESLint Configuration**: Code quality and consistency enforcement
- **Modern React**: Built with React 19+ and latest best practices

## 🛠 Technologies Used

### Frontend Framework
- **React 19.1.0** - Modern React with latest features
- **TypeScript 5.8.3** - Type-safe JavaScript development
- **Vite 6.3.5** - Fast build tool and development server

### UI & Styling
- **Material-UI (MUI) 7.1.2** - React component library
- **@mui/icons-material** - Material Design icons
- **@emotion/react & @emotion/styled** - CSS-in-JS styling solution

### Development Tools
- **ESLint 9.25.0** - Code linting and quality assurance
- **@vitejs/plugin-react-swc** - Fast React refresh with SWC
- **Vercel** - Deployment and hosting platform

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd uk-kids-school
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the website

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the project for production
- `npm run build-with-types` - Build with TypeScript type checking
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview the production build locally

## 📁 Project Structure

```
uk-kids-school/
├── public/
│   ├── UK Logo-01.jpg          # School logo
│   └── ...                     # Other static assets
├── src/
│   ├── components/
│   │   ├── Header.tsx          # Navigation and branding
│   │   ├── HeroSection.tsx     # Landing section with highlights
│   │   ├── AboutSection.tsx    # School information
│   │   ├── FeaturesSection.tsx # Programs and facilities
│   │   ├── ContactSection.tsx  # Contact forms and info
│   │   ├── Footer.tsx          # Footer with contact details
│   │   └── index.ts           # Component exports
│   ├── App.tsx                # Main application component
│   ├── main.tsx              # Application entry point
│   └── index.css             # Global styles and responsive fixes
├── package.json              # Dependencies and scripts
├── vite.config.ts           # Vite configuration
├── tsconfig.json            # TypeScript configuration
└── README.md               # Project documentation
```

## 🎯 Key Components

### Header Component
- Responsive navigation with mobile drawer
- Integrated UK Kids logo with professional styling
- School name and tagline display
- Mobile-optimized menu system

### Hero Section
- **Desktop**: Two-column layout with hero text and feature cards
- **Mobile**: Optimized vertical stack with touch-friendly elements
- Animated floating decorations
- Call-to-action buttons with enhanced styling

### Features Section
- Grid-based layout with consistent card heights
- Responsive breakpoints: xs=12, sm=6, md=6, lg=3, xl=3
- Progressive typography scaling
- Professional icons and descriptions

### About & Contact Sections
- Comprehensive school information
- Interactive contact forms
- Location and contact details
- Social media integration

## 🌐 Deployment

The website is configured for deployment on Vercel with optimized build settings.

### Deploy to Vercel

1. **Install Vercel CLI** (if not already installed)
   ```bash
   npm i -g vercel
   ```

2. **Deploy the project**
   ```bash
   vercel
   ```

3. **Follow the prompts** to configure your deployment

### Build Configuration
- Production builds use `vite build` with TypeScript compilation
- Optimized for performance with code splitting and asset optimization
- Responsive images and compressed assets

## 📱 Responsive Breakpoints

- **xs (0px+)**: Mobile phones - Single column layout
- **sm (600px+)**: Large phones/small tablets - Two column cards
- **md (900px+)**: Tablets - Optimized grid layouts
- **lg (1200px+)**: Desktop - Full grid system with sidebars
- **xl (1536px+)**: Large desktop - Maximum content width constraints

## 🎨 Design Highlights

- **Professional Color Scheme**: UK Kids brand colors throughout
- **Consistent Typography**: Scaling from mobile to desktop
- **Card-Based Layout**: Equal height cards with proper spacing
- **Interactive Elements**: Hover effects and smooth transitions
- **Visual Hierarchy**: Clear content organization and flow

## 🔧 Customization

### Logo Replacement
Replace `/public/UK Logo-01.jpg` with your own logo file and update the image reference in `src/components/Header.tsx`.

### Color Scheme
Modify the Material-UI theme in `src/App.tsx` to match your brand colors.

### Content Updates
Update text content in individual component files within `src/components/`.

## 📄 License

This project is proprietary and intended for UK Kids International Play School.

## 🤝 Contributing

For internal development and updates, please follow the established code style and component structure.

---

**Built with ❤️ for UK Kids International Play School**
