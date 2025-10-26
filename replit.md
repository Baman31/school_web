# Excellence Academy School Website

## Overview

Excellence Academy is a comprehensive school website built to increase admissions, establish online presence, and provide seamless user experience for parents, students, and faculty. The platform features a modern, responsive design with 15+ pages including home, academics, admissions, facilities, faculty, student life, gallery, and contact sections. The application aims to boost admission inquiries by 200%+ through features like admission forms, inquiry submissions, and an interactive chatbot.

## Recent Changes

**October 26, 2025 - Mobile Responsiveness Enhancements**
- Implemented comprehensive mobile responsiveness across all pages
- Standardized hero section heights with progressive viewport scaling: `h-[70vh] sm:h-[75vh] md:h-[80vh] lg:h-[85vh]`
- Applied consistent container padding pattern: `px-4 sm:px-6 lg:px-8` throughout all pages
- Ensured all grid layouts properly stack on mobile with responsive breakpoints (grid-cols-1 sm:grid-cols-2 lg:grid-cols-3/4)
- Optimized typography with responsive text sizing (text-3xl sm:text-4xl md:text-5xl patterns)
- Verified mobile-first design compatibility for both laptop and Android devices
- Pages updated: Home, About, Academics, Admissions, Facilities, Faculty, Student Life, Gallery, Contact

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build Tools**
- React 18+ with TypeScript for type-safe component development
- Vite as the build tool and development server for fast HMR (Hot Module Replacement)
- Wouter for lightweight client-side routing instead of React Router
- Single-page application (SPA) architecture with code splitting

**UI Component System**
- shadcn/ui components built on Radix UI primitives for accessible, unstyled components
- Tailwind CSS for utility-first styling with custom design tokens
- Design system following "New York" style variant with custom spacing, typography, and color schemes
- Component library includes 30+ pre-built UI components (buttons, cards, forms, dialogs, etc.)

**State Management & Data Fetching**
- TanStack Query (React Query) for server state management, caching, and data synchronization
- Custom query client configuration with credential-based requests and error handling
- Form state managed by React Hook Form with Zod schema validation
- Local component state using React hooks

**Design Principles**
- Educational focus inspired by Khan Academy, Coursera, and Duolingo
- Mobile-first responsive design with breakpoints at 768px (md) and 1024px (lg)
- Typography system using Inter for headings and Open Sans for body text
- Consistent spacing using Tailwind's scale (2, 4, 6, 8, 12, 16, 20, 24)
- Color system based on HSL values with CSS custom properties for theming
- Hover and active state animations with elevation effects

### Backend Architecture

**Server Framework**
- Express.js with TypeScript for RESTful API endpoints
- ES Modules (type: "module") throughout the codebase
- HTTP server created with Node's built-in `http` module
- Middleware for JSON parsing, URL encoding, and request logging

**API Design**
- RESTful endpoints following resource-based URL patterns
- Routes organized by entity: `/api/faculty`, `/api/events`, `/api/applications`, `/api/inquiries`
- CRUD operations with GET (list/detail), POST for creation
- Response format: JSON with appropriate HTTP status codes
- Error handling with try-catch blocks and structured error responses

**Authentication & Session Management**
- Replit Auth integration using OpenID Connect (OIDC) protocol
- Passport.js strategy for authentication flow
- Session-based authentication with encrypted cookies
- PostgreSQL session store using connect-pg-simple
- User roles: admin, parent, student, faculty
- Session TTL: 7 days with httpOnly and secure cookies

**Database Layer**
- Drizzle ORM for type-safe database queries and schema management
- Repository pattern implemented in `storage.ts` with interface-based design
- Database schema includes 13+ tables: users, students, applications, inquiries, payments, faculty, blog posts, events, gallery items, attendance, grades, announcements, sessions
- UUID primary keys generated using PostgreSQL's `gen_random_uuid()`
- Timestamp tracking with `created_at` and `updated_at` columns
- Foreign key relationships for data integrity

**Schema Validation**
- Zod schemas auto-generated from Drizzle schema using drizzle-zod
- Runtime validation on API endpoints before database operations
- Type inference ensuring frontend and backend type consistency
- Validation error handling with user-friendly messages via zod-validation-error

### External Dependencies

**Database**
- Neon Serverless PostgreSQL as the primary database
- WebSocket support for serverless database connections
- Connection pooling via `@neondatabase/serverless` Pool
- Environment variable: `DATABASE_URL` for connection string
- Migration system using Drizzle Kit with migrations stored in `/migrations`

**UI Component Libraries**
- Radix UI primitives: 20+ headless components (accordion, dialog, dropdown, navigation, popover, scroll area, select, slider, tabs, toast, tooltip, etc.)
- Lucide React for consistent icon system (100+ icons used)
- date-fns for date formatting and manipulation
- class-variance-authority (CVA) for variant-based component styling
- tailwind-merge and clsx for conditional className composition

**Payment Processing**
- Stripe integration via `@stripe/stripe-js` and `@stripe/react-stripe-js`
- Payment schema in database for tracking transactions
- Client-side Stripe Elements for secure payment form rendering

**Development Tools**
- TypeScript with strict mode enabled for type safety
- ESBuild for production bundling of server code
- TSX for development server with TypeScript execution
- Replit-specific plugins: vite-plugin-runtime-error-modal, vite-plugin-cartographer, vite-plugin-dev-banner
- Path aliases: `@/` for client source, `@shared/` for shared types, `@assets/` for static assets

**Asset Management**
- Generated placeholder images stored in `/attached_assets/generated_images/`
- Static assets served via Vite in development and Express in production
- Image optimization and lazy loading for performance

**Design & Documentation**
- Design guidelines document with typography system, spacing primitives, and responsive breakpoints
- Comprehensive implementation guide with project roadmap and feature list
- Component examples directory for UI component documentation

**Monitoring & Error Handling**
- Request/response logging middleware with timing information
- Vite custom logger that exits on errors in development
- Toast notifications for user-facing error feedback
- Query client error boundaries for graceful degradation