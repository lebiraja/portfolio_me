# Lebi Raja Portfolio Website

## Overview

This is a personal portfolio website for Lebi Raja, an AI & Data Science engineering student at Karunya University. The portfolio showcases his projects, technical skills, experience, and contact information through a modern, animated single-page application. Built with React, TypeScript, and Express, it features a tech-forward design with smooth animations, glassmorphism effects, and comprehensive dark/light mode support.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript in SPA (Single Page Application) mode
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state; React Context for theme management
- **UI Framework**: Shadcn/ui component library with Radix UI primitives
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion for page transitions and scroll-based animations
- **Build Tool**: Vite for fast development and optimized production builds

**Design System Rationale**: The portfolio uses a carefully crafted design system inspired by modern developer portfolios (GitHub, Linear) and tech company aesthetics (Vercel, Stripe). This approach balances professional polish with creative expression while maintaining accessibility through semantic color tokens and consistent spacing scales.

**Component Architecture**: The application follows a modular component structure:
- Page components (`Portfolio.tsx`) orchestrate layout
- Section components (`HeroSection`, `ProjectsSection`, etc.) handle content areas
- UI components from Shadcn provide consistent, accessible primitives
- Shared components (`Header`, `FloatingContact`, `ScrollProgress`) provide site-wide functionality

**Animation Strategy**: Framer Motion is used strategically for:
- Scroll-triggered animations using `useInView` hook (appears once when scrolled into view)
- Smooth page transitions
- Interactive hover states
- Background gradient animations
- Progress indicators

**Pros**: Excellent developer experience, great performance, highly customizable
**Cons**: Client-side only (no SSR), requires JavaScript for functionality

### Backend Architecture

**Framework**: Express.js server with TypeScript
- **Purpose**: Currently serves static frontend files; includes placeholder routes for future API expansion
- **Session Management**: Infrastructure in place using `connect-pg-simple` (currently unused)
- **Development Setup**: Vite middleware integration for HMR during development
- **Storage Layer**: In-memory storage implementation (`MemStorage`) with interface for future database migration

**Architecture Decision**: The backend is intentionally minimal as this is primarily a static portfolio. The Express server provides:
1. Static file serving for production builds
2. Development middleware integration
3. Extensibility for future features (contact forms, admin panel, analytics)

**Pros**: Simple deployment, easy to extend, type-safe
**Cons**: Limited functionality currently, in-memory storage not persistent

### Data Storage

**Current Implementation**: In-memory TypeScript objects
- Portfolio data (projects, experiences, tech stack) stored in `client/src/data/portfolio.ts`
- User schema defined but not actively used (`shared/schema.ts`)

**Future Database Ready**: 
- Drizzle ORM configured for PostgreSQL via `@neondatabase/serverless`
- Schema definitions using Zod for validation
- Migration infrastructure in place

**Rationale**: Static data approach chosen because:
1. Portfolio content changes infrequently
2. No user-generated content or authentication needed currently
3. Simplifies deployment and maintenance
4. Easy to migrate to database when dynamic features are needed

**Migration Path**: When database functionality is needed, the existing schema and ORM configuration can be activated by:
1. Provisioning a PostgreSQL database (Neon serverless recommended)
2. Running migrations via `npm run db:push`
3. Updating storage layer to use database instead of in-memory objects

### Type System

**Validation**: Zod schemas for runtime type validation
- Defined in `shared/schema.ts`
- Used with `drizzle-zod` for database schema inference
- React Hook Form integration via `@hookform/resolvers`

**Type Sharing**: TypeScript types shared between client and server via `shared/` directory
- Common schemas and interfaces
- Ensures type safety across full stack

### Theme System

**Implementation**: Custom theme provider with CSS variables
- Light/dark mode toggle with persistent localStorage
- CSS custom properties for dynamic theming
- Tailwind configured to use HSL color space for smooth transitions
- Glass morphism effects via backdrop-blur utilities

**Color Strategy**: Design uses a sophisticated color palette with:
- Primary (purple-blue): Main brand color
- Secondary (cyan-blue): Accent and highlights
- Gradient accents: Dynamic visual interest
- Semantic tokens: Automatic light/dark adaptation

## External Dependencies

### UI & Styling
- **Tailwind CSS**: Utility-first CSS framework for responsive design
- **Shadcn/ui**: Pre-built accessible components using Radix UI primitives
- **Radix UI**: Unstyled, accessible component primitives (30+ components imported)
- **Framer Motion**: Animation library for smooth transitions and scroll effects
- **Class Variance Authority (CVA)**: Type-safe component variants
- **Lucide React**: Icon library for consistent iconography

### Frontend Libraries
- **Wouter**: Lightweight routing (~1.5KB)
- **TanStack React Query**: Server state management and caching
- **React Hook Form**: Form validation and management
- **date-fns**: Date manipulation and formatting

### Backend & Database
- **Express**: Web server framework
- **Drizzle ORM**: TypeScript ORM for PostgreSQL
- **@neondatabase/serverless**: Serverless PostgreSQL driver (Neon database)
- **connect-pg-simple**: PostgreSQL session store for Express
- **Zod**: Schema validation for TypeScript

### Development Tools
- **TypeScript**: Type safety across entire stack
- **Vite**: Build tool and dev server
- **tsx**: TypeScript execution for Node.js
- **esbuild**: Fast JavaScript bundler for server code
- **Replit Plugins**: Development tooling for Replit environment

### Font Services
- **Google Fonts**: Typography via CDN
  - Inter: Primary UI and body text
  - Space Grotesk: Display and headings
  - JetBrains Mono: Code elements

### Design Rationale

The portfolio uses a static-first approach with database-ready infrastructure. This provides:
1. **Immediate Performance**: No database queries for page loads
2. **Simple Deployment**: Static files can be deployed anywhere
3. **Future Flexibility**: Schema and ORM ready for dynamic features
4. **Type Safety**: Shared types ensure consistency between data definitions and usage

The extensive use of Shadcn/ui components provides a professional, accessible foundation while allowing complete customization through Tailwind classes and CSS variables.