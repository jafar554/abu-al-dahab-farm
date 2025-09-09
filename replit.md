# Overview

This is a full-stack TypeScript web application for "مزرعة أبو الذهب" (Abu Al-Dahab Farm), an Arabic farm business website. The application features a React frontend with a modern UI built using shadcn/ui components and a Node.js/Express backend. The project is configured for a monorepo structure with shared types and schemas between frontend and backend.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens and Arabic RTL support
- **State Management**: TanStack React Query for server state management
- **Build Tool**: Vite with custom configuration for development and production
- **Forms**: React Hook Form with Zod validation integration

## Backend Architecture
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js for REST API
- **Development**: tsx for TypeScript execution in development
- **Build**: esbuild for production bundling
- **Storage**: In-memory storage implementation with interface for future database integration
- **Session Management**: express-session with PostgreSQL session store capability

## Data Storage Solutions
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Schema Management**: Shared schema definitions between frontend and backend
- **Migrations**: Drizzle Kit for database migrations
- **Current Implementation**: In-memory storage for development with database interface ready

## Authentication and Authorization
- **Session-based**: Express sessions with PostgreSQL session store
- **User Schema**: Basic user model with username/password authentication
- **Storage Interface**: Abstracted user management methods (getUser, getUserByUsername, createUser)

## External Dependencies
- **Database**: Neon Database (PostgreSQL) via @neondatabase/serverless
- **UI Components**: Comprehensive Radix UI component library
- **Form Validation**: Zod schema validation with Drizzle integration
- **Date Handling**: date-fns for date manipulation
- **Styling**: Tailwind CSS with PostCSS processing
- **Development Tools**: Replit-specific plugins for development environment
- **Icons**: Lucide React for consistent iconography
- **Carousel**: Embla Carousel for image galleries
- **Charts**: Recharts for data visualization capabilities

## Key Design Decisions
- **Monorepo Structure**: Shared types and schemas in `/shared` directory
- **Type Safety**: End-to-end TypeScript with strict configuration
- **Component Architecture**: Modular UI components with consistent design system
- **Arabic Language Support**: RTL layout support with appropriate font loading
- **Mobile-First**: Responsive design with mobile breakpoint detection
- **Development Experience**: Hot module replacement and error overlay for development
- **Build Optimization**: Separate client and server build processes with tree shaking