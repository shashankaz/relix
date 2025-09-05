# Relix - Interior Design & Home Styling

A single-page interior design website built with React 18, Vite, TypeScript, Tailwind CSS, and react-router. It ships with an Nginx Docker image, Docker Compose, a Vercel rewrite config for SPA routing, and an AWS ECS task definition for container deployment.

## Features

- React 18 + Vite 6 + TypeScript 5
- Tailwind CSS with shadcn-style UI primitives (Radix) and custom components
- Client-side routing (react-router) with code splitting via React.lazy
- Toasts, forms, and validation (react-hook-form + zod)
- Production-ready Nginx config for SPA fallback
- Containerized build and deploy (Dockerfile, docker-compose.yml, ECS task definition)

## Tech stack

- App: React, React Router, TypeScript, Vite
- Styling: Tailwind CSS, tailwind-merge, tailwindcss-animate, Radix UI primitives
- Utils: axios, zod, react-hook-form, lucide-react, gsap
- Tooling: ESLint
- Hosting options: Docker/Nginx, Vercel, AWS ECS (Fargate)

## Getting started

### Prerequisites

- Node.js 20+ (Dockerfile uses Node 22). On Windows, install Node from nodejs.org.
- npm 10+ (bundled with Node)

## Routing

The app uses `BrowserRouter` with these routes:

- `/` — Home
- `/about` — About
- `/catalogue` — Catalogue
- `/services` — Services
- `/blog` — Blog list
- `/blog/:slug` — Blog detail
- `/faq` — FAQ
- `/contact` — Contact
- `/*` — Not Found

SPA fallback is handled in production by Nginx and in Vercel via `vercel.json` rewrites.
