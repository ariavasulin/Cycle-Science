# The You Lab Landing Page

A premium, responsive landing page for The You Lab - an AI-native college essay program that helps students discover their authentic voice through science-backed personality insights and guided self-exploration.

## Overview

This landing page targets affluent parents (household income $200k+) of high school juniors/seniors who value authenticity, personal growth, and competitive college positioning.

## Tech Stack

- **Vite** - Fast build tool and development server
- **TypeScript** - Type-safe JavaScript for better code quality
- **Tailwind CSS** - Utility-first CSS framework for rapid development
- **Modern CSS** - Custom animations and responsive design

## Features

- **Fully Responsive Design**: Professionally optimized for all devices (mobile, tablet, desktop)
- **Modern, Clean Aesthetic**: Professional design that appeals to parents while remaining engaging
- **Lightning Fast**: Built with Vite for optimal performance and HMR (Hot Module Replacement)
- **Type-Safe**: Full TypeScript support for better development experience
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Interactive Elements**:
  - Smooth scrolling navigation
  - Mobile-friendly hamburger menu
  - Team card flip animations
  - FAQ accordion
  - Image slideshow
  - Scroll-to-top button
  - Fade-in animations on scroll

## Page Sections

1. **Hero Section**: Primary headline and value proposition
2. **Problem Section**: Addresses common pain points in traditional essay coaching
3. **Solution Section**: Three pillars of The You Lab approach
4. **How It Works**: 8-week program breakdown with timeline
5. **What You Get**: Deliverables and intangible outcomes
6. **Pricing**: Core program ($2,495) and add-on options
7. **Trust Section**: Founder credentials, testimonials, before/after examples
8. **FAQ Section**: Common questions with accordion functionality
9. **Final CTA**: Strong call-to-action with lead magnet option

## Project Structure

```
.
├── src/
│   ├── main.ts          # Main TypeScript file (5KB)
│   └── main.css         # Tailwind CSS and custom styles
├── images/              # Image assets
├── old_files/           # Backup of original files
├── index.html           # Main HTML file (52KB)
├── vite.config.ts       # Vite configuration
├── tailwind.config.js   # Tailwind customization
├── tsconfig.json        # TypeScript configuration
├── postcss.config.js    # PostCSS plugins
└── package.json         # Dependencies and scripts
```

## Design Principles

- **Color Palette**: Professional gradient blues and purples with accent colors
- **Typography**: Inter for body text, Playfair Display for headings
- **Tone**: Confident but not arrogant, warm but professional, innovative but trustworthy
- **Mobile-First**: Responsive breakpoints at 768px and 480px

## Key Messaging

**Primary Headline**: "Your Story. Your Voice. Your Future."

**Core Value Prop**: "An 8-week program that combines AI-powered self-discovery with expert coaching to help students write authentic, compelling college essays that admissions officers actually remember."

**Unique Positioning**: Unlike traditional consultants who write essays for students, The You Lab puts students in the driver's seat - using AI to facilitate genuine self-authorship while expert coaches provide structure and accountability.

## Technical Details

- **Modern Build System**: Vite for fast builds and development
- **Type Safety**: Full TypeScript support with strict mode
- **Utility-First CSS**: Tailwind CSS for maintainable styling
- **Web Fonts**: Google Fonts (Inter & Playfair Display)
- **Browser Support**: Modern browsers (Chrome, Firefox, Safari, Edge)
- **Performance**: Optimized images, tree-shaking, code splitting

## Setup

### Installation

```bash
npm install
```

### Development

Start the development server with hot module replacement:

```bash
npm run dev
```

The site will be available at `http://localhost:3000`

### Build

Build for production:

```bash
npm run build
```

The optimized files will be in the `dist` directory.

### Preview

Preview the production build:

```bash
npm run preview
```

## Production Deployment

1. Run `npm run build` to create optimized production files
2. Deploy the `dist` directory to any static hosting service
3. Configure contact form endpoints
4. Add analytics tracking (Google Analytics, Mixpanel, etc.)
5. Set up lead magnet download functionality

## Customization

### Updating Content
- Edit text directly in `index.html`
- Adjust colors in `tailwind.config.js` under the `extend.colors` section
- Modify cohort start date in pricing section

### Styling
Update Tailwind configuration in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        DEFAULT: '#6366F1',
        dark: '#4F46E5',
        light: '#818CF8',
      },
      // Add your custom colors
    },
  },
}
```

### Adding Images
- Place images in the `images` directory
- Update image paths in `index.html`
- Vite will automatically optimize images during build

### Form Integration
- Update contact form handlers in `src/main.ts`
- Integrate with email service (Mailchimp, ConvertKit, etc.)
- Set up lead magnet delivery system

## SEO Keywords

- college essay coaching
- authentic college essays
- AI essay writing program
- personalized college application help
- college essay bootcamp
- premium essay coaching

## Contact

For questions or modifications, contact: hello@youlab.io

---

**Built with**: Vite + TypeScript + Tailwind CSS

**License**: All rights reserved © 2025 The You Lab

## Migration Notes

This project was refactored from vanilla HTML/CSS/JS to a modern stack:
- Vanilla JavaScript → TypeScript (with full type safety)
- Custom CSS → Tailwind CSS (with custom components)
- No build system → Vite (with HMR and optimizations)

Original files are preserved in the `old_files` directory.
