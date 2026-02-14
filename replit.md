# AKH Developer - Premium Real Estate Website

## Overview
A premium real estate landing page for AKH Developer, featuring property listings, about section, contact form, and property detail views. Originally built in Bolt and migrated to Replit.

## Project Architecture
- **Frontend**: React 18 + TypeScript + Vite + Tailwind CSS
- **Type**: Static frontend-only site (no backend)
- **Styling**: Tailwind CSS with custom black/yellow/gold theme
- **Icons**: lucide-react

## File Structure
```
src/
  App.tsx              - Main app component
  main.tsx             - Entry point
  index.css            - Tailwind imports
  components/
    Navbar.tsx         - Fixed navigation bar
    Hero.tsx           - Hero section with stats
    Properties.tsx     - Property listings grid
    PropertyDetails.tsx - Property detail modal
    About.tsx          - About section
    Contact.tsx        - Contact form section
    Footer.tsx         - Footer with links
```

## Running
- Development: `npm run dev` (Vite dev server on port 5000)
- Build: `npm run build` (outputs to `dist/`)
- Deployment: Static deployment serving `dist/` folder

## Recent Changes
- Migrated from Bolt to Replit environment
- Configured Vite to bind to 0.0.0.0:5000 with allowed hosts
- Removed Bolt-specific OG image references
- Set up static deployment configuration
