

# Lingua Bridge Academy — Comprehensive Template Analysis

## 13. Suggested Template Name and Slug

- **Template Name**: "Lingua Bridge - Language School Enrollment Platform"
- **URL Slug**: `lingua-bridge`

---

## 1. UI/UX Features & Components

### Interactive Elements (Actually Used)
- **FAQ Accordion** (Contact page): Custom toggle-based accordion using `useState`. Click-to-expand with `aria-expanded` attribute. Plus/minus indicator. Not using Radix Accordion — hand-rolled.
- **Multi-step Enrollment Form** (Enroll page): 5-step wizard (Personal Info → Program → Schedule → Payment → Review) with numbered progress circles, conditional step rendering, forward/back navigation, and a success confirmation state.
- **Interactive Placement Quiz** (PlacementTest page): 5 multiple-choice questions rendered one-at-a-time. Progress bar, answer selection with visual highlight, Previous/Next navigation, score calculation, and level recommendation on completion. Retake capability.
- **Filter Dropdown** (Schedule page): `<select>` element filtering class list by language in real-time via `useState`.
- **Capacity Progress Bars** (Schedule page): Dynamic-width inline bars with color coding (green <50%, amber 50–80%, red >80%) using `capacityColor()` helper.
- **Reserve / Full Buttons** (Schedule page): Conditionally disabled buttons based on spot availability.
- **Mobile Hamburger Menu** (Header): Toggle with `useState`, `Menu`/`X` icons from Lucide, `aria-expanded` attribute.

### Layout Systems
- **CSS Grid**: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` for program cards, instructor cards. `grid-cols-2 md:grid-cols-4` for stats. `grid-cols-1 md:grid-cols-2 lg:grid-cols-4` for footer.
- **Flexbox**: Used for header nav, card content, form layouts, sidebar+content on Schedule page (`flex-col lg:flex-row`).
- **Sidebar + Content**: Schedule page uses `lg:w-64 shrink-0` sidebar with `flex-1` content area.

### Navigation Patterns
- **Sticky Header**: `sticky top-0 z-50` with `shadow-sm`. Desktop: horizontal `<ul>` nav. Mobile: collapsible drawer below header.
- **Active Route Highlighting**: `useLocation()` compared against link `href` — active link gets `text-primary font-semibold`.
- **Footer Navigation**: 4-column grid with brand, programs list, quick links, contact info.
- **CTA Buttons in Header**: "Placement Test" (outline) and "Enroll Now" (accent) visible on desktop and mobile menu.

### Content Organization
- **Language Filter** on Schedule page (dropdown select).
- **Program Cards** organized in responsive grid with level badges, format tags, and price breakdowns.
- **Instructor Cards** with certifications, ratings, and teaching philosophy.
- **Testimonials** with before/after proficiency level progression badges.

### Visual Effects
- **Hero Gradient Overlay**: `background: linear-gradient(135deg, hsl(239 84% 67% / 0.85), hsl(240 64% 42% / 0.9))` over a background image.
- **Hover States**: `card-interactive` class: `hover:border-primary/40 hover:shadow-lg transition-all duration-200`. `card-elevated`: `hover:shadow-xl transition-shadow duration-200`.
- **Fade-in Animation** (defined but not actively triggered via scroll): `fade-in` keyframe in tailwind config (`translateY(10px)` to `0`, `opacity 0→1`).
- **Transition on All Interactive Elements**: `transition-colors`, `transition-all` on buttons, cards, nav links.
- **Progress Bar Transitions**: `transition-all duration-300` on quiz progress bar fill.

### Form Elements
- **Text Inputs**: `border-2 border-input rounded-lg px-4 py-3 focus:border-primary` pattern.
- **Select Dropdowns**: Same border/focus pattern with `bg-background`.
- **Checkboxes**: `w-5 h-5 rounded border-2` with primary color ring.
- **Radio Buttons**: Same sizing pattern for payment plan selection.
- **Textarea**: `resize-y` enabled, min rows=4.
- **Required Field Indicators**: Red asterisk `<span className="text-destructive">*</span>`.
- **Quiz Answer Buttons**: Full-width selection buttons with selected state styling (`border-primary bg-primary/5`).
- **Contact Form**: Name, email, language dropdown, message textarea with submit button.

---

## 2. Typography & Design System

### Fonts
- **Heading Font**: `Inter` (weights 300–900), loaded via Google Fonts CDN. Fallback: `system-ui, sans-serif`.
- **Body Font**: `Roboto` (weights 300, 400, 500, 700), loaded via Google Fonts CDN. Fallback: `system-ui, sans-serif`.
- **Import URL**: `https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Roboto:wght@300;400;500;700&display=swap`

### Typography Hierarchy
- **Hero H1**: `text-4xl md:text-5xl lg:text-6xl font-extrabold` (Inter) with `leading-tight`
- **Page Header H1**: `text-4xl md:text-5xl font-extrabold` (used on all subpage hero banners)
- **Section H2**: `text-3xl md:text-4xl font-bold`
- **Card H2/H3**: `text-xl font-bold` or `text-2xl font-bold`
- **Body Text**: `text-sm` to `text-base`, `font-body` (Roboto) applied via `body` base style
- **Captions/Labels**: `text-xs` or `text-sm font-medium`
- **Price Display**: `text-2xl font-extrabold text-primary font-heading`

### Type Scale
- Fixed Tailwind rem values: `text-xs` (12px), `text-sm` (14px), `text-base` (16px), `text-lg` (18px), `text-xl` (20px), `text-2xl` (24px), `text-3xl` (30px), `text-4xl` (36px), `text-5xl` (48px), `text-6xl` (60px).
- Responsive scaling via breakpoint prefixes (`md:text-5xl lg:text-6xl`).

### Line Heights & Letter Spacing
- `leading-tight` on hero headings, `leading-relaxed` on body/quote text.
- No custom letter-spacing configured; uses Tailwind defaults.

---

## 3. Color System

### Primary Brand Colors (HSL tokens in CSS variables)
- **Primary**: `hsl(239 84% 67%)` ≈ `#635BFF` (Indigo-purple). Used for buttons, links, active states, badges, progress bars.
- **Primary Deep**: `hsl(240 64% 42%)` ≈ `#3730A3`. Used for button hover state.
- **Primary Foreground**: `hsl(0 0% 100%)` — white text on primary backgrounds.

### Accent Color
- **Accent**: `hsl(38 92% 50%)` ≈ `#F59E0B` (Amber). Used for CTA buttons ("Enroll Now", "Take Placement Test"), star ratings, hero buttons.
- **Accent Foreground**: White.

### Success Color
- **Success**: `hsl(160 84% 39%)` ≈ `#10B981` (Emerald Green). Used for checkmarks, achievement badges, level progression indicators, capacity bars.

### Neutral/Gray Scale (Light Mode)
- **Background**: `hsl(210 20% 98%)` ≈ `#F7F8FA`
- **Foreground**: `hsl(220 26% 14%)` ≈ `#1A1F2E`
- **Card**: `hsl(0 0% 100%)` — pure white
- **Muted**: `hsl(220 14% 96%)` ≈ `#F3F4F6`
- **Muted Foreground**: `hsl(220 9% 46%)` ≈ `#6B7280`
- **Border**: `hsl(220 13% 91%)` ≈ `#E5E7EB`
- **Input**: `hsl(220 13% 87%)` ≈ `#D8DBE2`

### Semantic Colors
- **Destructive (Error)**: `hsl(0 84% 60%)` ≈ `#EF4444`
- **Success**: `hsl(160 84% 39%)` ≈ `#10B981`
- **Warning**: Uses accent amber color contextually.
- **Info**: No dedicated info semantic token defined.

### Dark Mode
- Full dark mode color scheme defined in CSS variables under `.dark` class.
- **Dark Background**: `hsl(220 26% 14%)`, **Dark Card**: `hsl(220 20% 18%)`, **Dark Muted**: `hsl(220 20% 22%)`.
- Dark mode toggling infrastructure: `darkMode: ["class"]` in tailwind config; `next-themes` package installed but no theme toggle component is rendered in the UI.

### Focus Ring
- Custom `--focus-ring: 227 100% 82%` (light blue). Applied globally via `*:focus-visible { ring-4 ring-[hsl(var(--focus-ring))] }`.

---

## 4. Spacing & Layout System

### Spacing Scale
- Standard Tailwind spacing scale (0.25rem increments). No custom spacing tokens.
- **Section Padding**: Custom `.section-padding` utility: `py-16 md:py-20 lg:py-24` (64px → 80px → 96px).
- **Container Padding**: `px-4 md:px-6` (16px → 24px).
- **Card Padding**: `p-6` (24px) standard, `p-8 md:p-12` for elevated forms.
- **Grid Gaps**: `gap-6`, `gap-8` between cards. `gap-4` within card content.

### Border Radius
- `--radius: 0.75rem` (12px) base. `lg` = 12px, `md` = 10px, `sm` = 8px.
- Extended: `xl: 1rem` (16px), `2xl: 1.5rem` (24px).
- Cards use `rounded-xl` (16px). Buttons use `rounded-lg` (12px) or `rounded-md`. Badges use `rounded-full`.

### Shadows
- **Card Elevated**: `shadow-lg hover:shadow-xl`
- **Form Containers**: `shadow-2xl` (placement test, enrollment form)
- **Header**: `shadow-sm`
- **Hero Button**: `shadow-lg hover:shadow-xl`

### Container
- Max-width: `1400px` (`2xl` screen in container config). Centered with `container mx-auto`.
- Narrow container: `.container-narrow` = `max-w-3xl mx-auto px-4 md:px-6`.
- Stories content: `max-w-4xl`. Forms: `max-w-2xl` or `max-w-3xl`.

---

## 5. Responsive Design & Mobile

### Breakpoints
- Standard Tailwind: `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px), `2xl` (1536px).
- Container max-width override: `2xl: 1400px`.

### Mobile Implementation
- **Mobile-first CSS**: All base styles target mobile; breakpoint prefixes add tablet/desktop enhancements.
- **Hamburger Menu**: Visible `lg:hidden`, toggles mobile drawer with nav links + CTA buttons.
- **Desktop Nav**: `hidden lg:flex`.
- **Grid Responsiveness**: Cards go from 1-column (mobile) → 2-column (md) → 3-column (lg). Stats: 2-col → 4-col.
- **Form Layouts**: Single column on mobile, `sm:grid-cols-2` for name fields on enrollment.
- **Hero Text**: `text-4xl` → `text-5xl` → `text-6xl` across breakpoints.
- **Section Padding Scaling**: `py-16` → `py-20` → `py-24`.
- **Step Labels**: `hidden sm:block` — step text hidden on mobile, only numbers shown.
- **Footer**: Stacks to single column on mobile.
- **Schedule Sidebar**: Stacks above content on mobile (`flex-col lg:flex-row`).

---

## 6. Performance & Optimization

### Images
- **Hero Image**: Static import via Vite (`import heroImage from "@/assets/hero-classroom.jpg"`). Vite handles hashing and bundling.
- No lazy loading, no `srcset`, no WebP optimization implemented.
- Instructor and student avatars use emoji/initial placeholders (no image files).

### Code Splitting
- No route-level code splitting (all pages imported eagerly in `App.tsx`).
- Vite's default chunking applies during build.

### Caching
- No explicit caching strategy. Vite provides hashed filenames for cache-busting.

### Loading States
- No skeleton loaders, spinners, or suspense boundaries implemented.
- No data fetching (all data is hardcoded mock data).

### Other
- `@tanstack/react-query` installed but unused (no queries defined).
- `react-hook-form` and `zod` installed but not used in forms (forms use native HTML validation).

---

## 7. Accessibility Features

### ARIA
- `aria-label="Main navigation"` on `<nav>` element.
- `aria-expanded` on mobile menu toggle button and FAQ accordion buttons.
- `aria-label="Toggle menu"` on hamburger button.

### Keyboard Navigation
- Global `*:focus-visible` rule: `ring-4 ring-[hsl(var(--focus-ring))] ring-offset-0` — provides visible focus indicator on all focusable elements.
- All interactive elements (buttons, links, form inputs) are natively focusable.
- Quiz options are `<button>` elements (keyboard accessible).

### Semantic HTML
- `<header>`, `<main>`, `<footer>`, `<nav>`, `<section>`, `<blockquote>`, `<form>`, `<label>` used appropriately.
- Form labels use `htmlFor` binding to input `id` attributes on Contact form.
- Enrollment form labels lack `htmlFor`/`id` binding (accessibility gap).

### Color Contrast
- Primary text on background: Dark navy `#1A1F2E` on near-white `#F7F8FA` — well above 4.5:1.
- White text on primary indigo buttons — meets WCAG AA.
- Muted foreground `#6B7280` on white — approximately 4.6:1 (passes AA for normal text).

### Missing
- No skip-to-content link.
- No `aria-live` regions for dynamic content (quiz results, form submission).
- Enrollment form inputs lack `id`/`htmlFor` pairing.

---

## 8. SEO & Discoverability

### Meta Tags (index.html)
- `<title>`: "Lovable App" (placeholder — not customized to Lingua Bridge).
- `<meta name="description">`: "Lovable Generated Project" (placeholder).
- `<meta name="author">`: "Lovable".

### Open Graph
- `og:type`: "website"
- `og:title`: "Lovable App" (placeholder)
- `og:description`: "Lovable Generated Project"
- `og:image`: Points to Lovable R2 CDN preview screenshot.

### Twitter Cards
- `twitter:card`: "summary_large_image"
- `twitter:site`: "@Lovable"
- `twitter:image`, `twitter:title`, `twitter:description`: Same as OG values.

### Other
- `robots.txt` present (not inspected).
- No `sitemap.xml`.
- No structured data / JSON-LD.
- No canonical URL tags.
- No per-page title/meta management (SPA with single `index.html`).
- `favicon.ico` referenced.

---

## 9. Content Features

### Content Types (All Hardcoded Mock Data)
- **8 Language Programs** with name, flag emoji, levels, formats, pricing, and descriptions.
- **6 Instructor Profiles** with name, language, experience, education, certifications, specialties, teaching philosophy, rating, and review count.
- **12 Class Listings** with name, schedule, instructor, capacity (spots/max).
- **5 Upcoming Sessions** with dates.
- **5 Student Success Stories** with before/after levels, time-to-progress, quotes, and achievements.
- **3 Homepage Testimonials** (subset of stories).
- **4 Stats** on homepage and stories page.
- **6 FAQ Entries** on contact page.
- **2 Location Profiles** with address, phone, email, hours, parking, transit info.

### Filtering/Sorting
- Schedule page: Language filter dropdown (All/Spanish/French/German/Mandarin/Japanese/ESL).
- No other filtering, sorting, or search capabilities.

### Content Discovery
- Homepage features program previews, testimonials, and "Why Choose Us" section as discovery paths.
- CTA sections on every page linking to Placement Test or Enrollment.

---

## 10. Theming & Customization

### Theme Implementation
- CSS custom properties (HSL) in `:root` and `.dark` class.
- `darkMode: ["class"]` in Tailwind config.
- `next-themes` package installed but **no theme toggle component is rendered** — dark mode exists in CSS but is not user-accessible.
- All components use semantic token classes (`bg-background`, `text-foreground`, etc.), so dark mode would work if activated.

---

## 11. Integration & Extension Points

### Current Integrations
- **None active**. No backend, no API calls, no authentication, no payment processing, no analytics.
- All data is hardcoded in component files.

### Lovable Cloud
- Not connected. No Supabase integration. No edge functions. No database.

### Prepared Libraries (Installed but Unused)
- `@tanstack/react-query` — ready for data fetching
- `react-hook-form` + `zod` — ready for form validation
- `recharts` — ready for charts/data visualization
- `sonner` + Radix toast — ready for notifications
- `date-fns` — ready for date formatting
- `embla-carousel-react` — ready for carousels
- `react-resizable-panels` — ready for resizable layouts
- `cmdk` — ready for command palette

---

## 12. Developer Experience

### TypeScript
- Strict TypeScript with `tsconfig.app.json`. Path alias `@/*` maps to `./src/*`.

### Build & Dev
- **Vite** (v5) with `@vitejs/plugin-react-swc` (SWC compiler for fast builds).
- **PostCSS** + **Autoprefixer** + **Tailwind CSS** v3.

### Linting
- ESLint v9 with `eslint-plugin-react-hooks` and `eslint-plugin-react-refresh`.

### Testing
- **Vitest** configured with `jsdom` environment.
- **Playwright** configured for E2E tests.
- `@testing-library/react` + `@testing-library/jest-dom` installed.
- Example test file exists at `src/test/example.test.ts`.

### Component Library
- **shadcn/ui** component system with `components.json` config. ~40 UI component files present in `src/components/ui/`. Most are scaffolded but unused (only `button.tsx` is actively used across pages).

### Code Quality
- `lovable-tagger` plugin for build-time component tagging.
- Consistent file organization: pages in `src/pages/`, components in `src/components/`.

---

## Summary of Actually-Used Components

| Component | Where Used |
|---|---|
| `Header` | All 9 pages |
| `Footer` | All 9 pages |
| `Button` (with 8 variants) | All pages — CTAs, nav, forms |
| `Lucide Icons` (15+ icons) | Throughout — nav, stats, cards, forms, ratings |
| Custom FAQ Accordion | Contact page |
| Custom Multi-step Form | Enroll page |
| Custom Quiz Engine | PlacementTest page |
| Custom Capacity Bars | Schedule page |
| Custom Filter Select | Schedule page |

**Unused shadcn/ui components** (installed but not rendered): accordion, alert-dialog, alert, aspect-ratio, avatar, badge, breadcrumb, calendar, card, carousel, chart, checkbox, collapsible, command, context-menu, dialog, drawer, dropdown-menu, form, hover-card, input-otp, input, label, menubar, navigation-menu, pagination, popover, progress, radio-group, resizable, scroll-area, select, separator, sheet, sidebar, skeleton, slider, sonner, switch, table, tabs, textarea, toast, toaster, toggle-group, toggle, tooltip. These are scaffolded by shadcn/ui but none are imported or rendered by any page.

