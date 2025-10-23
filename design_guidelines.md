# Design Guidelines: Lebi Raja Portfolio Website

## Design Approach
**Reference-Based Approach**: Drawing inspiration from modern developer portfolios (GitHub Profile, Linear's aesthetic) combined with tech company landing pages (Vercel, Stripe). The design emphasizes clean minimalism with strategic use of gradients and glass effects to create a futuristic, tech-forward aesthetic while maintaining professional credibility.

## Core Design Principles
1. **Tech-Forward Minimalism**: Clean layouts with purposeful use of glassmorphism and gradients
2. **Smooth Interactivity**: Subtle animations that enhance rather than distract
3. **Professional Polish**: Balance between creative expression and professional presentation
4. **Adaptive Experience**: Seamless dark/light mode with cohesive theming

## Color Palette

### Light Mode
- **Background**: 0 0% 100% (Pure white base)
- **Surface**: 240 20% 98% (Subtle cool gray)
- **Primary**: 250 80% 60% (Vibrant purple-blue)
- **Secondary**: 200 85% 55% (Bright cyan-blue)
- **Text Primary**: 240 10% 15% (Deep charcoal)
- **Text Secondary**: 240 5% 45% (Medium gray)
- **Gradient Accent**: Linear gradient from 250 80% 60% to 200 85% 55%

### Dark Mode
- **Background**: 240 10% 8% (Deep blue-black)
- **Surface**: 240 10% 12% (Elevated dark surface)
- **Primary**: 250 75% 65% (Softer purple-blue)
- **Secondary**: 200 80% 60% (Muted cyan)
- **Text Primary**: 0 0% 98% (Off-white)
- **Text Secondary**: 240 5% 70% (Light gray)
- **Gradient Accent**: Same gradient, adjusted opacity for dark mode

### Glass Effect Base
- **Background**: Primary color at 5% opacity with 20px blur
- **Border**: White at 10% opacity (light mode) / 20% opacity (dark mode)

## Typography

### Font Families
- **Primary (Body & UI)**: 'Inter', system-ui, sans-serif (via Google Fonts)
- **Display (Headings)**: 'Space Grotesk', 'Inter', sans-serif (via Google Fonts)
- **Code/Tech Elements**: 'JetBrains Mono', monospace

### Type Scale
- **Hero Name**: text-6xl md:text-7xl lg:text-8xl, font-bold
- **Hero Role**: text-2xl md:text-3xl lg:text-4xl, font-medium
- **Section Headings**: text-4xl md:text-5xl, font-bold
- **Subsection Headings**: text-2xl md:text-3xl, font-semibold
- **Body Text**: text-base md:text-lg, leading-relaxed
- **Small Text/Captions**: text-sm, font-medium

## Layout System

### Spacing Primitives
Primary spacing units: **2, 4, 6, 8, 12, 16, 20, 24** (Tailwind units)
- Component padding: p-6 to p-8
- Section spacing: py-16 md:py-24 lg:py-32
- Card gaps: gap-6 md:gap-8
- Inline spacing: space-x-4, space-y-4

### Container Strategy
- **Max-width**: max-w-7xl for main content sections
- **Padding**: px-6 md:px-8 lg:px-12
- **Section Margins**: my-20 md:my-32

## Component Library

### Hero Section
- Full viewport height (min-h-screen) with centered content
- Animated gradient text for name using background-clip
- Floating particles/grid background (subtle animated SVG pattern)
- Large hero image or illustrated avatar (512x512px minimum, positioned right side on desktop, top on mobile)
- CTA buttons with glass effect styling
- Scroll indicator animation at bottom

### Glassmorphism Cards (Projects & Skills)
- **Background**: backdrop-blur-xl with bg-white/10 (dark) or bg-white/60 (light)
- **Border**: 1px solid with border-white/20
- **Shadow**: shadow-2xl with colored glow (0 25px 50px -12px primary/20)
- **Padding**: p-8
- **Hover State**: Transform scale-105, enhanced glow shadow
- **Corners**: rounded-2xl

### Tech Stack Display
- Grid layout: grid-cols-2 md:grid-cols-3 lg:grid-cols-4
- Animated icon pills with hover lift effect
- Icon + label combination (icons from Simple Icons or DevIcons CDN)
- Grouped by category with subtle dividers
- Staggered fade-in animation on scroll

### Project Cards
- Glassmorphism card with 2-column layout (image left, content right on desktop)
- Project thumbnail placeholder (400x250px, gradient background if no image)
- Tech stack badges (rounded-full px-4 py-1.5 text-xs)
- GitHub link button with glass effect
- Hover: Slight elevation + gradient border animation

### Experience Timeline
- Vertical timeline with gradient line connector
- Timeline dots with pulse animation
- Content cards attached to timeline points
- Stagger animation on scroll reveal

### Contact Section
- Centered layout with social icon grid
- Large interactive icon buttons (w-16 h-16) with glass background
- Hover: Icon rotation + color shift to gradient
- Email displayed prominently with copy-to-clipboard functionality

### Floating "Let's Connect" Button
- Fixed position: bottom-8 right-8
- Rounded-full with gradient background
- Drop shadow with glow effect
- Expands to reveal contact options on click (overlay menu)
- Smooth scale animation

### Dark/Light Mode Toggle
- Fixed position: top-8 right-8 (or in navigation)
- Icon toggle (sun/moon) with rotation animation
- Glass background pill shape
- Smooth color transition across entire site (transition-colors duration-300)

## Animations & Interactions

### Scroll Animations
- Fade-in + slide-up for sections (IntersectionObserver)
- Parallax effect on hero background (subtle, 0.5 speed)
- Progress bar at top showing scroll depth (gradient colored)

### Micro-interactions
- Button hover: scale-105 + enhanced glow
- Card hover: scale-102 + lift shadow
- Skill icons: bounce on hover
- Link underline: gradient expand animation
- Smooth scroll behavior for navigation

### Timing
- Transitions: duration-300 for standard, duration-500 for emphasis
- Stagger delays: 50-100ms between animated elements
- Easing: ease-in-out for most, ease-out for entrances

## Navigation
- Sticky header with backdrop-blur background (appears on scroll)
- Logo/name on left, nav links center, theme toggle right
- Underline indicator for active section
- Mobile: Hamburger menu with full-screen overlay

## Responsive Breakpoints
- Mobile: base (< 768px) - Single column, stacked cards
- Tablet: md (768px+) - 2-column grids, larger typography
- Desktop: lg (1024px+) - Multi-column layouts, full effects
- Wide: xl (1280px+) - Maximum width constraints, enhanced spacing

## Images
**Hero Section**: Professional headshot or illustrated avatar (512x512px minimum, circular crop), positioned prominently. Alternative: Abstract tech-themed illustration or 3D geometric composition representing AI/ML.

**Project Cards**: Each project includes a thumbnail (400x250px) - can be screenshots, abstract gradient compositions, or tech stack visualization if no project images available.

**Background Elements**: Subtle grid patterns, floating geometric shapes, or particle effects (SVG/CSS, not heavy images).