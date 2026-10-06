## Overview

This project is designed to model a small appointment-based business workflow:

- Customers browse services and barbers on the homepage
- Users submit reservation details from the booking page
- Appointment information is stored in Supabase
- Reservation records can be listed and managed in the app
- Successful submissions redirect to a confirmation screen

## Features

- Responsive premium barbershop landing page
- Barber selection driven by Supabase data
- Reservation form with validation for required fields
- Server actions for creating, updating, and deleting reservations
- Supabase integration for persistent data storage
- Modern Next.js App Router implementation

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Supabase
- ESLint

## Project Structure

```text
next-app/
├── app/                 # App Router pages and route groups
│   ├── make-res/        # Reservation form page
│   ├── reservation/    # Reservation list and details pages
│   ├── success/         # Confirmation page
│   ├── globals.css     # Global styling
│   └── layout.tsx      # Root layout
├── actions/             # Server actions for reservations
├── components/          # Reusable UI components
├── public/              # Static assets
├── utils/               # Utility functions and Supabase client setup
├── .env.local           # Local Supabase environment variables
├── package.json         # Scripts and dependencies
├── next.config.ts       # Next.js config
├── tsconfig.json        # TypeScript config
├── eslint.config.mjs    # ESLint config
└── README.md            # Project documentation
```

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open the app in your browser:

```text
http://localhost:3000
```

## Environment Setup

This app expects a Supabase project to be configured using the following environment variables in `.env.local`:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

The project already includes a sample `.env.local` file with the configured values in this workspace.

## Supabase Database

The app expects at least these tables:

### `barbers`

```sql
create table public.barbers (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  role text,
  profile_path text,
  created_at timestamp with time zone default now()
);
```

### `reservations`

```sql
create table public.reservations (
  id uuid primary key default gen_random_uuid(),
  first_name text not null,
  last_name text not null,
  email text not null,
  phone text,
  comment text,
  barber_id uuid references public.barbers(id),
  created_at timestamp with time zone default now()
);
```

## Available Routes

- `/` — Landing page for the barber shop
- `/make-res` — Reservation form
- `/reservation` — View all reservations
- `/reservation/[id]` — Detailed reservation view
- `/success` — Confirmation page after booking

## Scripts

```bash
npm run dev      # Start local development server
npm run build    # Create production build
npm run start    # Run production server
npm run lint     # Run ESLint
```

## Notes

This is a frontend-focused demo app intended to showcase a practical use of Next.js App Router with server actions and Supabase data persistence. For production use, you should add stronger validation, authentication, access control, and a server-side secret-based configuration for database operations.
