# Plan-it Landing Page Design Guidelines

## Design Approach
**Selected Approach:** Reference-Based (Notion + Linear fusion)
- Draw from Notion's approachable, educational interface design
- Incorporate Linear's clean typography and modern spacing
- Add playful orbital/space elements that align with brand identity without overwhelming professionalism

**Core Principles:**
- Educational clarity: Information must be digestible for academic presentation
- Professional playfulness: Balance tech credibility with orbital theme
- Scannable hierarchy: Support quick understanding for evaluators/visitors

## Typography System

**Font Selection:** Google Fonts via CDN
- Primary: 'Inter' (modern, readable for academic content)
- Accent: 'Space Grotesk' (subtle nod to space theme for headlines)

**Hierarchy:**
- Hero headline: 4xl to 6xl, bold weight, Space Grotesk
- Section headers: 3xl to 4xl, semibold, Space Grotesk
- Feature titles: xl to 2xl, semibold, Inter
- Body text: base to lg, regular weight, Inter, max-w-prose for readability
- Technical content (Problem/Solution): base, leading-relaxed for comprehension

## Layout System

**Spacing Primitives:** Tailwind units of 4, 6, 8, 12, 16, 20, 24
- Section padding: py-16 to py-24 (desktop), py-12 to py-16 (mobile)
- Component spacing: gap-8 to gap-12 for feature cards
- Text margins: mb-4 to mb-6 for paragraph separation
- Container: max-w-7xl for most sections, max-w-4xl for text-heavy Problem/Solution

**Vertical Rhythm:** Generous breathing room between sections (py-20 standard)

## Component Library

### Hero Section
- Full-width container with centered content
- Logo placement: Centered above headline, h-16 to h-20
- Tagline: Large display text with subtle letter-spacing
- Description paragraph: max-w-2xl centered, leading-relaxed
- Hero image: Abstract orbital visualization or productivity dashboard mockup, subtle parallax scroll effect
- CTA button: "Join the Waitlist" - large sizing (px-8 py-4), prominent positioning

### Feature Highlights Section
- 3-column grid layout (grid-cols-1 md:grid-cols-3)
- Feature cards with:
  - Icon placeholder at top (h-12 w-12, rounded containers)
  - Feature title (text-xl semibold)
  - Description text (text-base leading-relaxed)
  - Card styling: Subtle elevation with gentle shadows, p-8 padding
  - Hover state: Slight lift transform

**Features to showcase:**
1. AI-Powered Input (voice, file, image icons)
2. Smart Workspaces (collaboration/sync visualization)
3. Gamification System (badge/streak iconography)

### Problem/Solution Section
- Two-part layout:
  - Problem statement: Impactful headline + brief description
  - Solution breakdown: Numbered list format for three key points
- Layout: Single column for focus, max-w-4xl
- Visual treatment: Each solution point as enhanced list item with:
  - Large number indicator (text-4xl, subtle opacity)
  - Bold heading for each point
  - Detailed explanation in smaller text
  - Slight left border accent for visual structure

### Team Contact Section
- 2-column grid for team members (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
- Team cards including:
  - Placeholder avatar circle (h-20 w-20)
  - Name and role
  - Email and GitHub icon links
  - Project Manager card: Distinct visual treatment (border accent, "PM" badge)
- Footer branding: Small logo repeat, copyright placeholder

## Images

**Hero Image:** 
- Abstract orbital path visualization or clean productivity dashboard mockup
- Placement: Below hero text, occupying 60% viewport width, centered
- Style: Modern, clean, slightly ethereal to match space theme
- Treatment: Subtle gradient overlay if needed for text readability

**Feature Section Graphics:**
- Icon placeholders using Heroicons (solid variant)
- Consider subtle orbital path decorative elements as section dividers

**Overall Image Strategy:** Minimal but impactful - hero image carries visual weight, rest focuses on clean UI

## Animations

Use sparingly for polish:
- Hero elements: Subtle fade-in on page load
- Feature cards: Gentle hover lift (translate-y-1)
- Section reveals: Fade up as user scrolls (intersection observer)
- NO distracting orbital animations or excessive motion

## Accessibility & Polish

- Maintain WCAG AA contrast ratios with provided color palette
- Focus states: Visible outline for all interactive elements
- Semantic HTML structure for screen readers
- Responsive breakpoints: Mobile-first, tablet (md:), desktop (lg:)
- Smooth scrolling between sections
- Button states: Clear hover, active, and focus treatments (no custom hover on blurred buttons over images)

## Page Structure Flow
1. Hero (80vh) → 2. Features (natural height) → 3. Problem/Solution (extended reading section) → 4. Team Contact (natural height)

Total sections: 4 comprehensive, well-designed sections with purposeful content density