# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 (App Router) website for T&S Traffic Solutions, a traffic management and control services company. The site uses React 19, TypeScript, and Tailwind CSS 4, with shadcn/ui components (New York variant).

## Development Commands

```bash
# Start development server with Turbopack
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm lint
```

Development server runs on http://localhost:3000

## Architecture & Structure

### Frontend Architecture

- **App Router Structure**: Uses Next.js 15 App Router with file-based routing
  - `app/page.tsx` - Homepage composed of section components
  - `app/layout.tsx` - Root layout with global navigation and fonts
  - Service pages in `app/services/*`
  - API routes in `app/api/*`

- **Component Organization**:
  - `components/` - Feature/section components (e.g., HeroSection, ServicesSection, Navbar, Footer)
  - `components/ui/` - Reusable shadcn/ui components (buttons, inputs, dialogs, etc.)
  - `lib/utils.ts` - Utility functions (mainly `cn()` for className merging)

- **Styling**: Tailwind CSS 4 with custom fonts (Anton for headings, Open Sans for body text)

### Navigation Structure

The Navbar component (`components/Navbar.tsx`) implements a complex navigation system:
- Desktop: Mega menu for Services with 3 columns (Traffic Engineering, Permit Application, Traffic Controllers)
- Desktop: Dropdown for About Us
- Mobile: Slide-out drawer navigation with expandable sections
- State management for submenu visibility on both desktop and mobile

### API Routes & Email System

Email functionality uses nodemailer with Gmail SMTP:

- **Contact Form**: `app/api/contact/route.ts`
  - Sends to: plans@tstc.com.au
  - Fields: name, phone, email, service, message
  - Sends confirmation email to user

- **Career Applications**: `app/api/career/route.ts`
  - Sends to: hr@tstc.com.au
  - Handles file uploads (resumes, certifications)
  - Fields: firstName, familyName, phoneNumber, email, streetAddress, suburb, message, canDriveManual, hasOwnVehicle, qualifications[]
  - Sends confirmation email to applicant

**Environment Variables Required**:
- `GMAIL_USER` - Gmail account for sending emails
- `GOOGLE_APP_PASSWORD` - Gmail app password (not regular password)

### Image Handling

Next.js Image component configuration in `next.config.ts`:
- Allowed domains: `aaatrafficcontrol.com.au`, `placehold.co`
- Logo: `/logo.JPG` (note capitalization)
- Favicon: `/removed-logo.png`

### Path Aliases

Configured in both `tsconfig.json` and `components.json`:
- `@/*` maps to root directory
- `@/components` → components
- `@/lib` → lib
- `@/components/ui` → components/ui

## TypeScript Configuration

- **strict mode**: disabled (`strict: false`)
- **noImplicitAny**: disabled
- Target: ES2017
- Module resolution: bundler (Next.js optimized)

## Styling & UI

- **shadcn/ui**: New York style variant with RSC support
- **Base color**: neutral
- **Icon library**: lucide-react
- **CSS Variables**: enabled for theming
- **Utility function**: Use `cn()` from `@/lib/utils` for conditional classNames

## Common Patterns

### Adding New Service Pages

1. Create page in `app/services/[service-name]/page.tsx`
2. Update navigation in `components/Navbar.tsx` (both desktop mega menu and mobile menu)
3. Follow existing page structure with sections

### Working with Forms

- Use shadcn/ui form components from `components/ui/`
- API routes expect either JSON (contact) or FormData (career with files)
- Both forms send dual emails (admin notification + user confirmation)

### Component Styling

- Use Tailwind classes with `cn()` utility for conditional styling
- Follow existing spacing and color patterns (blue-700 for primary actions, gray tones for text)
- Maintain responsive design patterns (mobile-first approach)

## Project-Specific Notes

- The site serves Australian traffic control market (NSW-focused with TfNSW references)
- Service categories: Traffic Engineering/Planning, Permit Applications, Traffic Controllers
- Multiple contact endpoints for different purposes (general: plans@, careers: hr@)
- All forms include user confirmation emails for better UX
