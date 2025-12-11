# Plan-it Landing Page

## Overview

Plan-it is a smart scheduling productivity tool landing page built as a school project. The application showcases an AI-powered task management system with workspaces and gamification features. Currently, it consists of a marketing landing page with sections for hero, features, problem/solution explanation, team contact and footer.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite with custom plugins for Replit integration
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with CSS variables for theming
- **Component Library**: shadcn/ui (Radix UI primitives with custom styling)

The frontend follows a component-based architecture with:
- Page components in `client/src/pages/`
- Reusable UI components in `client/src/components/ui/`
- Feature components in `client/src/components/`
- Custom hooks in `client/src/hooks/`

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Server**: Node.js with HTTP server
- **Development**: tsx for TypeScript execution, Vite dev server for HMR

The backend uses a simple layered architecture:
- `server/index.ts`: Express app setup and middleware
- `server/routes.ts`: API route registration
- `server/storage.ts`: Data access layer with interface abstraction
- `server/vite.ts`: Development server integration
- `server/static.ts`: Production static file serving

### Data Storage
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema**: Defined in `shared/schema.ts` using Drizzle's table definitions
- **Validation**: Zod schemas generated from Drizzle schemas via drizzle-zod
- **Current Storage**: In-memory storage implementation (MemStorage class)
- **Database Ready**: PostgreSQL configuration prepared in `drizzle.config.ts`

The storage layer uses an interface pattern (`IStorage`) allowing easy switching between in-memory storage for development and PostgreSQL for production.

### Design System
- Custom color palette using HSL CSS variables
- Light mode theme with earthy green/neutral tones
- Typography: DM Sans, Geist Mono, and decorative fonts via Google Fonts
- Component styling follows shadcn/ui "new-york" style variant
- Custom elevation and hover effects defined in CSS

## External Dependencies

### UI Component Libraries
- Radix UI primitives (dialog, dropdown, popover, tabs, etc.)
- Lucide React for icons
- React Icons for additional icon sets
- Embla Carousel for carousel functionality
- CMDK for command palette
- Vaul for drawer component

### Data & Forms
- TanStack React Query for data fetching
- React Hook Form with Zod resolver for form validation
- date-fns for date manipulation

### Database & Backend
- Drizzle ORM for database operations
- PostgreSQL (pg) driver
- connect-pg-simple for session storage
- Express session management

### Build & Development
- Vite with React plugin
- esbuild for server bundling
- Replit-specific plugins (cartographer, dev-banner, error-overlay)
