# Cycle Science - Next.js Website

A stunning, modern website for Cycle Science - Professional Bike Fitting & Custom Insoles in Burlingame, CA.

Built with Next.js 14+, TypeScript, and ShadCN UI components.

## Features

- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Modern UI**: Built with ShadCN UI components and Tailwind CSS
- **Fast Performance**: Leveraging Next.js App Router and React Server Components
- **Accessible**: WCAG compliant with semantic HTML and ARIA labels
- **Type-Safe**: Full TypeScript support throughout the codebase

## Pages

1. **Home (`/`)**: Landing page with hero carousel, services teaser, newsletter signup, and location info
2. **Services (`/services`)**: Detailed service listings with mission statement
3. **Book (`/book`)**: Booking page with Square Appointments integration placeholder

## Tech Stack

- **Framework**: [Next.js 14+](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [ShadCN UI](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Carousel**: [Embla Carousel](https://www.embla-carousel.com/)

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

Create a production build:

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Project Structure

```
cycle-science/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles and CSS variables
│   ├── services/          # Services page
│   └── book/              # Booking page
├── components/
│   ├── ui/                # ShadCN UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── carousel.tsx
│   │   └── sheet.tsx
│   ├── layout/            # Layout components
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── sections/          # Page sections
│       ├── HeroCarousel.tsx
│       ├── FeetMatterCTA.tsx
│       ├── ServicesTeaserStrip.tsx
│       ├── NewsletterSignup.tsx
│       ├── LocationPanel.tsx
│       ├── MissionStatement.tsx
│       ├── ServicesGrid.tsx
│       └── SquareBookingEmbed.tsx
├── lib/
│   └── utils.ts           # Utility functions
└── public/                # Static assets
    ├── images/
    └── logos/
```

## Customization

### Colors

The color scheme can be customized in `app/globals.css` using CSS variables:

- `--primary`: Deep blue (#1E3A8A)
- `--secondary`: Bright cyan (#06B6D4)
- `--accent`: Orange (#F97316)

### Images

Replace placeholder images with actual photos:

1. Add images to `/public/images/`
2. Update image URLs in components:
   - `HeroCarousel.tsx`: Hero carousel images
   - `FeetMatterCTA.tsx`: SIDAS partnership imagery
   - Other sections as needed

### Square Integration

To integrate Square Appointments:

1. Create a [Square account](https://squareup.com/)
2. Set up Square Appointments
3. Get your booking widget embed code
4. Update `SquareBookingEmbed.tsx` with the actual embed script

## Mobile Responsiveness

All components are built mobile-first with responsive breakpoints:

- **Mobile**: 320px - 640px
- **Tablet**: 641px - 1024px
- **Desktop**: 1025px+

## Accessibility

- Semantic HTML elements
- ARIA labels for screen readers
- Keyboard navigation support
- Color contrast compliance (WCAG AA)
- Focus indicators

## Performance Optimizations

- Image optimization with Next.js Image component
- Code splitting with dynamic imports
- Lazy loading for below-fold content
- Optimized fonts with `next/font`

## Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Mobile Safari (iOS 14+)
- Chrome Mobile (Android 10+)

## Future Enhancements

- [ ] Real Square Appointments integration
- [ ] Newsletter API integration (Mailchimp, ConvertKit, etc.)
- [ ] Customer testimonials section
- [ ] Blog/resources section
- [ ] Online payment processing
- [ ] Analytics tracking (Google Analytics, Plausible, etc.)
- [ ] SEO optimization (meta tags, structured data)

## Contributing

This is a prototype/design implementation. For production use, additional testing and backend integration would be required.

## License

All rights reserved - Cycle Science

## Contact

For questions or support, contact Cycle Science at:
- Email: info@cyclescience.com
- Phone: (650) 555-BIKE
- Location: Burlingame, CA

---

Built with ❤️ for Cycle Science
