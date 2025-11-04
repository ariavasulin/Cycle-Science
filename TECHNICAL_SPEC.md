# Cycle Science Website - Technical Specification

## Project Overview
Recreate the Cycle Science website using Next.js 14+ (App Router) and ShadCN UI, optimized for mobile and desktop with stunning visuals. Focus on UI/prototype without backend logic implementation.

## Technology Stack
- **Framework**: Next.js 14+ (App Router)
- **UI Library**: ShadCN UI (based on Radix UI primitives)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod validation
- **Booking Integration**: Square Appointments (embed ready)

## Design System

### Color Palette
- **Primary**: Deep blue (#1E3A8A) - professional, trustworthy
- **Secondary**: Bright cyan/blue (#06B6D4) - energetic, modern
- **Accent**: Orange (#F97316) - calls-to-action
- **Neutral**: Gray scale for text and backgrounds
- **Background**: White with gradient overlays (black-to-blue)

### Typography
- **Headings**: Bold, modern sans-serif (Inter/Geist)
- **Body**: Clean, readable (Inter)
- **Sizes**: Responsive scale (mobile-first)

### Spacing & Layout
- **Max content width**: 1400px
- **Grid**: 12-column responsive grid
- **Breakpoints**: sm(640px), md(768px), lg(1024px), xl(1280px), 2xl(1536px)

## Page Structure

### 1. Landing / Hero Page (`/`)

#### Components Required:
1. **Hero Carousel**
   - Full-width image carousel
   - Auto-rotate with manual controls
   - Overlay with "Cycle Science" branding
   - Smooth transitions
   - Mobile: single image, swipe gestures
   - Desktop: full viewport height

2. **Feet Matter CTA Section**
   - Prominent visual emphasis
   - SIDAS partnership branding
   - High-contrast design
   - Call-to-action button
   - Image of custom insoles/fitting process

3. **Services Teaser Strip**
   - Two-column layout (mobile: stacked)
   - "Bike Fitting Services" card
   - "Custom Insoles" card
   - Icon + heading + brief description
   - Hover effects
   - Link to Services page

4. **Newsletter Signup**
   - "Stay in the Loop" heading
   - Email input field
   - Sign-up button
   - Consent checkbox/copy
   - Form validation
   - Success/error states

5. **Location & Hours Panel**
   - Embedded Google Maps
   - Business address: Burlingame, CA
   - Contact information
   - Operating hours
   - Mobile: stacked layout

6. **Footer**
   - Circular Cycle Science logo
   - Social media icons (Instagram, Facebook, etc.)
   - Copyright notice
   - Privacy links (optional)

### 2. Services Page (`/services`)

#### Components Required:
1. **Navigation Header**
   - Logo (Cycle Science)
   - Nav links: Home, Services, Book
   - "Book Now" CTA button
   - Mobile: hamburger menu
   - Sticky on scroll

2. **Mission Statement Block**
   - Black-to-blue gradient background
   - Large, impactful typography
   - Expertise and philosophy messaging
   - Background image overlay (optional)

3. **Services Grid**
   - Two-column responsive grid
   - Service cards with:
     - Service name (heading)
     - Description
     - Duration indicator
     - Price range (optional for prototype)
     - Hover effects

   Services to include:
   - The Comprehensive
   - 3 Bike Comprehensive
   - Performance Package
   - Road/MTB Conversion
   - Consultation
   - Pre-purchase Fitting Solutions
   - Strict Fit
   - Follow Up Service
   - Saddle Fitting
   - SIDAS Insole Fitting

4. **Newsletter Section** (reused component)

5. **Footer** (reused component)

### 3. Booking Page (`/book`)

#### Components Required:
1. **Booking Header**
   - Location info
   - "Book" active state in nav
   - "My Bookings" link

2. **Square Appointments Embed**
   - Iframe/embed container
   - Responsive sizing
   - Service menu display
   - Pricing tiers: $60-$350
   - Duration ranges: 30 min - 3 hours
   - Category tags
   - Appointment summary pane
   - "Next" CTA button

3. **Location Map** (reused component)

4. **Footer** (reused component)

## Component Architecture

### Shared Components (`/components`)
```
/components
  /ui (ShadCN components)
    - button.tsx
    - card.tsx
    - input.tsx
    - carousel.tsx
    - navigation-menu.tsx
    - sheet.tsx (mobile menu)
    - form.tsx
    - etc.

  /layout
    - Header.tsx
    - Footer.tsx
    - Navigation.tsx
    - MobileMenu.tsx

  /sections
    - HeroCarousel.tsx
    - FeetMatterCTA.tsx
    - ServicesTeaserStrip.tsx
    - NewsletterSignup.tsx
    - LocationPanel.tsx
    - MissionStatement.tsx
    - ServicesGrid.tsx
    - ServiceCard.tsx
    - SquareBookingEmbed.tsx
```

### Pages Structure (`/app`)
```
/app
  - layout.tsx (root layout)
  - page.tsx (landing page)
  - globals.css

  /services
    - page.tsx

  /book
    - page.tsx
```

## Responsive Design Strategy

### Mobile First Approach
1. Design for 375px (iPhone SE) minimum
2. Stack layouts vertically
3. Touch-friendly targets (min 44x44px)
4. Simplified navigation (hamburger menu)
5. Optimized images (WebP, lazy loading)

### Desktop Enhancements
1. Multi-column layouts
2. Hover states and transitions
3. Larger hero images
4. Side-by-side content
5. Expanded navigation

### Key Breakpoints
- **Mobile**: 320px - 640px
- **Tablet**: 641px - 1024px
- **Desktop**: 1025px+

## Animation & Interaction

### Micro-interactions
- Button hover effects (scale, color shift)
- Card lift on hover
- Smooth page transitions
- Carousel slide animations
- Menu open/close animations
- Form field focus states

### Scroll Animations
- Fade in on scroll (Intersection Observer)
- Parallax effects (subtle)
- Sticky navigation

### Performance
- Optimize animations for 60fps
- Use CSS transforms (translate, scale)
- Avoid layout thrashing
- Lazy load below-fold content

## Assets Needed (Placeholders for Prototype)

### Images
- Hero carousel images (3-5)
- Fitting studio photos
- Cyclists in action
- SIDAS partnership imagery
- Custom insoles close-ups
- Bike fitting process shots

### Logos & Icons
- Cycle Science circular logo
- SIDAS logo
- Social media icons
- Service category icons
- Location pin icon

## Integration Points

### Square Appointments
- Embed script: https://square.site/appointments/...
- Webhook endpoints (future)
- Booking confirmation (future)

### Google Maps
- Maps Embed API
- Location: Cycle Science, Burlingame, CA

### Newsletter
- Form submission endpoint (placeholder)
- Email validation
- GDPR compliance messaging

## Development Phases

### Phase 1: Foundation
- Initialize Next.js project
- Install ShadCN UI
- Configure Tailwind
- Set up project structure
- Create base layout components

### Phase 2: Landing Page
- Hero carousel
- Feet Matter CTA
- Services teaser
- Newsletter form
- Location panel
- Footer

### Phase 3: Services Page
- Navigation
- Mission statement
- Services grid
- Reuse shared components

### Phase 4: Booking Page
- Square embed integration
- Booking interface
- Reuse shared components

### Phase 5: Polish
- Mobile responsiveness review
- Animation implementation
- Performance optimization
- Cross-browser testing
- Accessibility audit

## Accessibility Requirements
- Semantic HTML
- ARIA labels where needed
- Keyboard navigation
- Focus indicators
- Alt text for images
- Color contrast compliance (WCAG AA)
- Screen reader friendly

## Performance Targets
- Lighthouse score: 90+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Cumulative Layout Shift: < 0.1

## Browser Support
- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Mobile Safari (iOS 14+)
- Chrome Mobile (Android 10+)

## Future Enhancements (Not in Prototype)
- Square booking backend integration
- Newsletter API integration
- Customer testimonials section
- Blog/resources section
- Online payment processing
- Booking management dashboard
- Analytics tracking
- SEO optimization
- Multi-language support

## File Structure
```
cycle-science/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── services/
│   │   └── page.tsx
│   └── book/
│       └── page.tsx
├── components/
│   ├── ui/ (ShadCN components)
│   ├── layout/
│   └── sections/
├── lib/
│   └── utils.ts
├── public/
│   ├── images/
│   └── logos/
├── styles/
├── types/
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── next.config.js
└── components.json (ShadCN config)
```

## Git Workflow
- Branch: `claude/nextjs-shadcn-website-redesign-011CUoe9Ui2yaVGRvL4omqqz`
- Commit messages: Clear, descriptive
- Push when complete
