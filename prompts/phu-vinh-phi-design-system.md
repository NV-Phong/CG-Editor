# Phu Vinh Phi - Design System Documentation

## 📋 Tổng Quan

Dự án **Phu Vinh Phi** là một website hiện đại được xây dựng với Next.js, sử dụng Tailwind CSS v4 và hệ thống design tokens dựa trên OKLCH color space. Thiết kế mang phong cách **futuristic/cyberpunk** với các hiệu ứng holographic, neon pulse, và glitch animations.

---

## 🎨 Hệ Thống Màu Sắc (Color System)

### Color Space

-  Sử dụng **OKLCH color space** cho độ chính xác và consistency tốt hơn
-  Hỗ trợ Dark Mode đầy đủ
-  CSS Variables được định nghĩa trong `:root` và `.dark`

### Primary Colors

#### Light Mode

```css
--background: oklch(1 0 0); /* Pure white */
--foreground: oklch(23.075% 0.00003 271.152); /* Near black */
--primary: oklch(0.6723 0.1606 244.9955); /* Blue primary */
--primary-foreground: oklch(1 0 0); /* White text on primary */
```

#### Dark Mode

```css
--background: oklch(0 0 0); /* Pure black */
--foreground: oklch(0.9328 0.0025 228.7857); /* Off-white */
--primary: oklch(0.6692 0.1607 245.011); /* Blue primary (adjusted) */
--primary-foreground: oklch(1 0 0); /* White */
```

### Semantic Colors

#### Cards & Surfaces

```css
/* Light */
--card: oklch(0.9784 0.0011 197.1387);
--card-foreground: oklch(22.213% 0.00003 271.152);
--popover: oklch(1 0 0);
--popover-foreground: oklch(23.075% 0.00003 271.152);

/* Dark */
--card: oklch(12.212% 0.00001 271.152);
--card-foreground: oklch(0.8853 0 0);
--popover: oklch(0 0 0);
--popover-foreground: oklch(0.9328 0.0025 228.7857);
```

#### Secondary & Muted

```css
/* Light */
--secondary: oklch(23.929% 0.00003 271.152);
--secondary-foreground: oklch(1 0 0);
--muted: oklch(0.9222 0.0013 286.3737);
--muted-foreground: oklch(21.779% 0.00002 271.152);

/* Dark */
--secondary: oklch(0.9622 0.0035 219.5331);
--secondary-foreground: oklch(24.354% 0.00003 271.152);
--muted: oklch(0.209 0 0);
--muted-foreground: oklch(57.951% 0.00007 271.152);
```

#### Accent Colors

```css
/* Light */
--accent: oklch(0.9392 0.0166 250.8453);
--accent-foreground: oklch(0.6723 0.1606 244.9955);

/* Dark */
--accent: oklch(25.197% 0.00003 271.152);
--accent-foreground: oklch(0.6692 0.1607 245.011);
```

#### Destructive & Alerts

```css
--destructive: oklch(
   0.6188 0.2376 25.7658
); /* Red - consistent in both modes */
```

#### Borders & Inputs

```css
/* Light */
--border: oklch(0.9317 0.0118 231.6594);
--input: oklch(0.9809 0.0025 228.7836);
--ring: oklch(0.6818 0.1584 243.354);

/* Dark */
--border: oklch(29.313% 0.00003 271.152);
--input: oklch(36.768% 0.00004 271.152);
--ring: oklch(0.6818 0.1584 243.354);
```

### Chart Colors

Bộ màu cho data visualization (consistent across modes):

```css
--chart-1: oklch(0.6723 0.1606 244.9955); /* Blue */
--chart-2: oklch(0.6907 0.1554 160.3454); /* Green */
--chart-3: oklch(0.8214 0.16 82.5337); /* Yellow */
--chart-4: oklch(0.7064 0.1822 151.7125); /* Teal */
--chart-5: oklch(0.5919 0.2186 10.5826); /* Orange */
```

### Selection Color

```css
--selection: oklch(0.6723 0.1606 244.9955); /* Light */
--selection: oklch(0.6692 0.1607 245.011); /* Dark */
```

---

## 🔤 Typography System

### Font Families

#### Heading Font - Chakra Petch

```tsx
const chakraPetch = Chakra_Petch({
   variable: "--font-chakra",
   subsets: ["latin"],
   weight: ["400", "500", "600"],
});
```

-  **Mục đích**: Headings, titles, eyebrows
-  **Đặc điểm**: Font hiện đại, góc cạnh, phù hợp với tech/cyberpunk theme
-  **Usage**: `.font-heading`

#### Body Font - Mulish

```tsx
const mulish = Mulish({
   variable: "--font-mulish",
   subsets: ["latin"],
   weight: ["300", "400", "500", "600"],
});
```

-  **Mục đích**: Body text, descriptions, paragraphs
-  **Đặc điểm**: Sans-serif dễ đọc, professional
-  **Usage**: `.font-body`

#### System Fonts

```tsx
const geistSans = Geist({
   variable: "--font-geist-sans",
   subsets: ["latin"],
});

const geistMono = Geist_Mono({
   variable: "--font-geist-mono",
   subsets: ["latin"],
});
```

### Typography Scale

#### Eyebrow Text

```css
font-family: var(--font-chakra);
font-size: 0.875rem; /* 14px */
font-weight: 300;
text-transform: uppercase;
letter-spacing: 0.3em;
```

#### Headings

```css
/* H2 - Main Section Headings */
font-family: var(--font-chakra);
font-size: 1.5rem; /* 24px mobile */
font-size: 1.875rem; /* 30px desktop */
font-weight: 600;
text-transform: uppercase;
line-height: 1.2;
```

#### Body Text

```css
font-family: var(--font-mulish);
font-size: 1rem; /* 16px */
font-weight: 300;
line-height: 26px;
```

---

## 📐 Spacing & Layout

### Border Radius

```css
--radius: 0.75rem; /* 12px - base */
--radius-sm: calc(var(--radius) - 4px); /* 8px */
--radius-md: calc(var(--radius) - 2px); /* 10px */
--radius-lg: var(--radius); /* 12px */
--radius-xl: calc(var(--radius) + 4px); /* 16px */
```

### Section Spacing

```tsx
/* Homepage sections */
className =
   "[&>section]:-my-12 [&>section:first-child]:mt-0 [&>section:last-child]:mb-0";
```

### Container Constraints

```tsx
/* Standard container */
max-w-6xl w-full px-4 md:px-10 lg:px-16

/* Section padding */
py-24
```

---

## ✨ Animation System

### Core Animation Principles

-  Sử dụng **GSAP** cho complex animations
-  **Framer Motion** cho component transitions
-  Hỗ trợ `prefers-reduced-motion` đầy đủ

### Custom Animations

#### 1. Neon Pulse

```typescript
export const createNeonPulse = (
  target: gsap.TweenTarget,
  options: {
    duration?: number;      // 1.8s default
    scaleFrom?: number;     // 0.98
    scaleTo?: number;       // 1.02
    glow?: string           // '0 0 15px rgba(30, 157, 241, 0.45)'
  }
): TweenInstance | null
```

**Mục đích**: Tạo hiệu ứng phát sáng neon pulsing cho elements

#### 2. Hologram Sweep

```typescript
export const createHologramSweep = (
  target: gsap.TweenTarget,
  options: {
    duration?: number;      // 1.2s
    delay?: number;         // 0
  }
): TweenInstance | null
```

**Mục đích**: Hiệu ứng quét holographic từ trái sang phải

#### 3. Scan Loop

```typescript
export const createScanLoop = (
  target: gsap.TweenTarget,
  options: {
    duration?: number;      // 2.8s
  }
): TweenInstance | null
```

**Mục đích**: Scanline effect lặp liên tục

#### 4. Glitch Flicker

```typescript
export const createGlitchFlicker = (
  target: gsap.TweenTarget,
  options: {
    intensity?: number;     // 4
    interval?: number;      // 3.5s
  }
): TweenInstance | null
```

**Mục đích**: Glitch effect với color shift và distortion

### Glitch Transition Effects

#### RGB Channel Overlays

```css
.glitch-red-channel {
   background: linear-gradient(
      180deg,
      rgba(255, 0, 0, 0.15) 0%,
      rgba(255, 0, 0, 0.1) 50%,
      rgba(255, 0, 0, 0.15) 100%
   );
   backdrop-filter: contrast(2) saturate(3);
   filter: url(#red-channel);
}

.glitch-blue-channel {
   background: linear-gradient(
      180deg,
      rgba(0, 0, 255, 0.15) 0%,
      rgba(0, 0, 255, 0.1) 50%,
      rgba(0, 0, 255, 0.15) 100%
   );
   backdrop-filter: contrast(2) saturate(3);
   filter: url(#blue-channel);
}
```

#### Scanline Effect

```css
.scanline {
   background: linear-gradient(
      to bottom,
      transparent 50%,
      rgba(0, 255, 255, 0.03) 50%
   );
   background-size: 100% 4px;
   animation: scanline 8s linear infinite;
}

@keyframes scanline {
   0% {
      background-position: 0 0;
   }
   100% {
      background-position: 0 100%;
   }
}
```

#### Glitch Animation

```css
@keyframes glitch {
   0% {
      transform: translate(0);
      filter: hue-rotate(0deg);
   }
   10% {
      transform: translate(-2px, 2px);
      filter: hue-rotate(90deg);
   }
   /* ... các keyframe khác */
   100% {
      transform: translate(0);
      filter: hue-rotate(0deg);
   }
}

.animate-glitch {
   animation: glitch 0.3s steps(10, end) infinite;
}
```

### GSAP Setup

```typescript
// lib/gsap.ts
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let isRegistered = false;

export const ensureGsapPlugins = () => {
   if (typeof window === "undefined" || isRegistered) return;
   gsap.registerPlugin(ScrollTrigger);
   isRegistered = true;
};

export { gsap, ScrollTrigger };
```

### Scroll Animations

```typescript
// GSAP ScrollTrigger setup
scrollTrigger: {
  trigger: section,
  start: "top 80%",
  toggleActions: "play none none none",
}
```

### Common Animation Timeline Pattern

```typescript
const timeline = gsap.timeline({
   defaults: { duration: 0.8, ease: "power3.out" },
   scrollTrigger: {
      trigger: sectionRef.current,
      start: "top 75%",
      toggleActions: "play none none none",
   },
});

timeline
   .fromTo(
      "[data-section=eyebrow]",
      { y: 24, autoAlpha: 0 },
      { y: 0, autoAlpha: 1 },
   )
   .fromTo(
      "[data-section=heading]",
      { y: 32, autoAlpha: 0 },
      { y: 0, autoAlpha: 1 },
      "-=0.45", // Overlap timing
   );
```

### Text Animations

Sử dụng custom component `TextAnimate` với các variants:

-  `fadeIn` - Fade in đơn giản
-  `blurIn` - Blur to focus
-  `blurInUp` / `blurInDown` - Blur với movement
-  `slideUp` / `slideDown` - Slide animations
-  `slideLeft` / `slideRight` - Horizontal slides
-  `scaleUp` / `scaleDown` - Scale animations

**Stagger Timings**:

```typescript
const staggerTimings: Record<AnimationType, number> = {
   text: 0.06,
   word: 0.05,
   character: 0.03,
   line: 0.06,
};
```

---

## 🎭 Component Patterns

### Button Component

#### Variants

```typescript
variant: {
  default: "bg-primary text-primary-foreground hover:bg-primary/90",
  destructive: "bg-destructive text-white hover:bg-destructive/90",
  outline: "border bg-background shadow-xs hover:bg-accent",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  ghost: "hover:bg-accent hover:text-accent-foreground",
  link: "text-primary underline-offset-4 hover:underline",
}
```

#### Sizes

```typescript
size: {
  default: "h-9 px-4 py-2",
  sm: "h-8 rounded-md gap-1.5 px-3",
  lg: "h-10 rounded-md px-6",
  icon: "size-9",
  "icon-sm": "size-8",
  "icon-lg": "size-10",
}
```

#### Focus & Accessibility

```css
outline-none
focus-visible:border-ring
focus-visible:ring-ring/50
focus-visible:ring-[3px]
aria-invalid:ring-destructive/20
```

### Card Components

#### BoxReveal

```tsx
<BoxReveal boxColor="#1e9df1" duration={0.6}>
   {children}
</BoxReveal>
```

**Mục đích**: Animated reveal với colored box overlay

#### BlurReveal

```tsx
<BlurReveal delay={0.05} duration={0.6}>
   {children}
</BlurReveal>
```

**Mục đích**: Blur to focus reveal animation

#### ExpandableCard

**Tính năng**:

-  Hover to expand với overlay backdrop
-  Click outside to close
-  Dispatches custom events: `expandable-card-toggle`
-  Full-page overlay khi active

### Light Rays Component

**Props Interface**:

```typescript
interface LightRaysProps {
   raysOrigin?: RaysOrigin; // Vị trí nguồn ánh sáng
   raysColor?: string; // Màu tia sáng (hex)
   raysSpeed?: number; // Tốc độ animation
   lightSpread?: number; // Độ lan tỏa
   rayLength?: number; // Độ dài tia
   pulsating?: boolean; // Pulsing effect
   fadeDistance?: number; // Khoảng cách fade
   saturation?: number; // Độ bão hòa màu
   followMouse?: boolean; // Follow mouse movement
   mouseInfluence?: number; // Mức độ ảnh hưởng mouse
   noiseAmount?: number; // Độ nhiễu
   distortion?: number; // Độ méo
   className?: string;
}
```

**Ray Origins**:

```typescript
type RaysOrigin =
   | "top-center"
   | "top-left"
   | "top-right"
   | "right"
   | "left"
   | "bottom-center"
   | "bottom-right"
   | "bottom-left";
```

### AnimatedCard Component

Card với hover effects và visual overlays:

```typescript
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

// Usage
<AnimatedCard>
  <CardVisual>{/* Visual content */}</CardVisual>
  <CardBody>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardBody>
</AnimatedCard>
```

**Styles**:

```css
/* AnimatedCard */
group/animated-card relative w-[356px] overflow-hidden rounded-xl
border border-zinc-200 bg-white shadow-sm
dark:border-zinc-900 dark:bg-black

/* CardBody */
border-t border-zinc-200 p-4 dark:border-zinc-900

/* CardTitle */
font-heading text-lg font-semibold uppercase tracking-tight
```

### ExpandableCard Component

Interactive card mở rộng full-screen với animation:

```typescript
interface ExpandableCardProps {
   title: string;
   src: string;
   description: string;
   children?: React.ReactNode;
   className?: string;
   classNameExpanded?: string;
   renderPreview?: (args: RenderArgs) => React.ReactNode;
}
```

**Features**:

-  Shared layout animation với Framer Motion
-  Click outside to close
-  Escape key to close
-  Backdrop blur overlay
-  Custom event dispatch: `expandable-card-toggle`
-  Gradient overlays for smooth content fading

**Overlay Styles**:

```css
/* Backdrop */
bg-white/50 backdrop-blur-md dark:bg-black/50

/* Expanded Card */
bg-white dark:bg-[#0c0c0c]
max-w-[850px]
```

### QuickAction Component

Floating action button với expandable menu:

```typescript
// Position
fixed bottom-6 right-6 z-[80]
sm:bottom-8 sm:right-8

// Action Button Style
rounded-full border border-border/60 bg-card/90
shadow-[0_20px_45px_-30px_rgba(30,157,241,0.65)]
backdrop-blur-md
hover:border-primary/60
hover:shadow-[0_24px_60px_-32px_rgba(30,157,241,0.75)]
```

**Action Types**:

-  `phone` - PhoneCall icon
-  `chat` - MessageCircle icon
-  `email` - Mail icon

---

## 🖼️ Visual Components

### Visual-1 Component

**Tech visualization với animated elements**:

-  Animated grid background
-  Rotating radar effect
-  Ellipse gradients
-  Labeled data points
-  Interactive tooltips

**Props**:

```typescript
interface Visual1Props {
   mainColor?: string; // '#8b5cf6' default
   secondaryColor?: string; // '#fbbf24' default
   gridColor?: string; // '#80808015' default
   translations?: {
      label1: string;
      label2: string;
      tooltipTitle: string;
      tooltipDescription: string;
   };
}
```

### Visual-2 Component

Similar structure với data visualization khác

---

## 📱 Responsive Design

### Breakpoints

Sử dụng Tailwind CSS default breakpoints:

```css
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

### Mobile-First Approach

```tsx
/* Mobile layout check */
const isMobileLayout = !window.matchMedia("(min-width: 768px)").matches;
```

### Responsive Patterns

```css
/* Stacking on mobile, grid on desktop */
className="flex flex-col md:flex-row"
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"

/* Padding adjustments */
className="px-4 md:px-10 lg:px-16"

/* Font size scaling */
className="text-2xl md:text-3xl"
```

---

## 🌐 Internationalization (i18n)

### Supported Languages

-  English (en)
-  Vietnamese (vi)
-  Chinese (zh)

### Context API

```tsx
const { t } = useLanguage();

// Usage
{
   t.hero.heading;
}
{
   t.statistics.description;
}
{
   t.header.nav.home;
}
```

### Translation Structure

```typescript
interface Translation {
   hero: {
      eyebrow: string;
      heading: string;
      description: string;
      cta: string;
   };
   statistics: {
      eyebrow: string;
      heading: string;
      description: string;
   };
   // ... more sections
}
```

---

## 🎬 Page Transitions

### PageTransition Component

```tsx
<PageTransition>{children}</PageTransition>
```

**Glitch Transition Variants**:

```typescript
const glitchVariants: Variants = {
   initial: {
      opacity: 0,
      scale: 1.1,
      filter: "blur(10px) brightness(0.5)",
   },
   enter: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px) brightness(1)",
      transition: {
         duration: 0.6,
         ease: [0.22, 1, 0.36, 1],
      },
   },
   exit: {
      opacity: 0,
      scale: 0.9,
      filter: "blur(10px) brightness(0.5)",
      transition: {
         duration: 0.4,
         ease: [0.22, 1, 0.36, 1],
      },
   },
};
```

**RGB Channel Split Effects**:

-  Red channel: shifts left/right with clip-path distortion
-  Blue channel: shifts opposite direction
-  Creates chromatic aberration effect during transitions

**Scanline Overlay**:

```typescript
// Animated scanline during transition
const scanlineVariants: Variants = {
   initial: { y: "-100%" },
   enter: {
      y: ["100%", "-100%"],
      transition: { duration: 0.8, repeat: 2 },
   },
   exit: {
      y: ["100%", "-100%"],
      transition: { duration: 0.6, repeat: 1 },
   },
};
```

**Glitch Block Effects**:

-  Random digital blocks appear during transition
-  Multiple layers với different timing
-  Creates authentic digital glitch aesthetic

---

## 🔍 Accessibility Features

### Reduced Motion Support

```typescript
export const prefersReducedMotion = () => {
   if (typeof window === "undefined") return false;
   return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};
```

**All animations respect this setting**:

```css
@media (prefers-reduced-motion: reduce) {
   .scanline,
   .glitch-blocks::before,
   .glitch-blocks::after,
   .animate-glitch {
      animation: none;
      opacity: 1;
      transform: translate(0);
      filter: none;
   }
}
```

### Scrollbar Hiding

```css
::-webkit-scrollbar {
   display: none;
}

* {
   -ms-overflow-style: none;
   scrollbar-width: none;
}
```

### Selection Styling

```css
::selection {
   background-color: var(--selection);
   color: white;
}
```

### Focus States

Tất cả interactive elements có focus visible states:

```css
focus-visible:border-ring
focus-visible:ring-ring/50
focus-visible:ring-[3px]
```

---

## 🛠️ Tech Stack

### Core Framework

-  **Next.js 15** (with App Router)
-  **React 19**
-  **TypeScript**

### Styling

-  **Tailwind CSS v4** (với `@tailwindcss/postcss`)
-  **CSS Variables** (OKLCH color space)
-  **PostCSS**
-  **tw-animate-css** (animation utilities)

### Animation Libraries

-  **GSAP** (GreenSock Animation Platform)
   -  ScrollTrigger plugin
-  **Framer Motion** / **motion/react**
-  **OGL** (WebGL for LightRays)

### UI Components

-  **shadcn/ui** (New York style)
-  **Radix UI** (primitives)
-  **class-variance-authority** (CVA)
-  **lucide-react** (icons)
-  **clsx** + **tailwind-merge** (className merging)

### Third-party Registries

```json
"registries": {
  "@magicui": "https://magicui.design/r/{name}.json",
  "@aceternity": "https://ui.aceternity.com/registry/{name}.json",
  "@react-bits": "https://reactbits.dev/r/{name}.json"
}
```

---

## 📦 Component Library Structure

### Directory Organization

```
components/
├── ui/                      # shadcn/ui components + custom UI
│   ├── button.tsx
│   ├── input.tsx
│   ├── select.tsx
│   ├── dialog.tsx
│   ├── dropdown-menu.tsx
│   ├── hover-card.tsx
│   ├── popover.tsx
│   ├── command.tsx
│   ├── accordion.tsx
│   ├── alert.tsx
│   ├── text-animate.tsx
│   ├── box-reveal.tsx
│   ├── blur-reveal.tsx
│   ├── stagger-blur-effect.tsx
│   ├── number-ticker.tsx
│   ├── animated-card.tsx
│   ├── expandable-card.tsx
│   ├── lens.tsx
│   ├── visual-1.tsx
│   ├── visual-2.tsx
│   ├── visual-3.tsx
│   ├── mode-toggle.tsx
│   └── language-toggle.tsx
├── ui-engineer/             # Custom engineered components
│   ├── hidden-component.tsx
│   ├── statistics.tsx
│   ├── separator.tsx
│   └── Icon.tsx
├── section/                 # Page sections
│   ├── hero-banner-section.tsx
│   ├── statistics-section.tsx
│   ├── products-section.tsx
│   ├── service-overview-section.tsx
│   ├── service-section.tsx
│   ├── animated-cards-section.tsx
│   ├── why-choose-us-section.tsx
│   ├── fields-of-activity-section.tsx
│   ├── news-section.tsx
│   ├── cta-section.tsx
│   ├── package-section.tsx
│   └── product-inquiry-form.tsx
├── layout/                  # Layout components
│   ├── header.tsx
│   ├── footer.tsx
│   ├── page-transition.tsx
│   ├── quick-action.tsx
│   └── adaptive-light-rays.tsx
├── LightRays.tsx           # WebGL light rays
├── LightRays.css           # Light rays styles
└── theme-provider.tsx      # Theme context
```

### Library Files

```
lib/
├── utils.ts                 # cn() utility function
├── gsap.ts                  # GSAP setup & exports
├── animations.ts            # Custom animation functions
├── products.ts              # Product data helpers
└── service-details.ts       # Service data helpers
```

### Context Files

```
context/
├── language-context.tsx     # i18n context
└── settings-context.tsx     # App settings context
```

### Neon Shadow Pattern

Màu xanh primary được sử dụng cho shadows:

```css
/* Footer Card Shadow */
shadow-[0_20px_45px_-32px_rgba(30,157,241,0.35)]

/* QuickAction Shadow */
shadow-[0_20px_45px_-30px_rgba(30,157,241,0.65)]
hover:shadow-[0_24px_60px_-32px_rgba(30,157,241,0.75)]
```

### Accent Color (#1e9df1)

Màu xanh neon `#1e9df1` được sử dụng xuyên suốt:

```css
/* Indicator dots */
bg-[#1e9df1]

/* Neon Pulse glow */
boxShadow: "0 0 15px rgba(30, 157, 241, 0.45)"

/* BoxReveal highlight */
boxColor="#1e9df1"

/* Text accents */
text-[#1e9df1]
```

---

## 🎯 Design Principles

### 1. Futuristic/Cyberpunk Aesthetic

-  Neon colors với blue primary (#1e9df1 range)
-  Glitch effects và holographic transitions
-  Tech-inspired visual components
-  Light rays và particle effects

### 2. Performance-First

-  Code splitting với dynamic imports
-  Optimized animations với GSAP
-  Reduced motion support
-  Lazy loading images

### 3. Accessibility

-  Semantic HTML
-  Keyboard navigation
-  ARIA labels
-  Focus management
-  Screen reader support

### 4. Responsive Design

-  Mobile-first approach
-  Fluid typography
-  Flexible layouts
-  Touch-friendly interactions

### 5. Consistency

-  Centralized design tokens
-  Reusable components
-  Standardized spacing
-  Unified animation system

---

## � Code Examples

### 1. News Card Component

Card hiển thị bài viết với image orientation flexible:

```tsx
<ExpandableCard
   title={post.title}
   src={post.image}
   description={post.description}
   className="group relative h-full overflow-hidden border border-neutral-200 
             bg-white text-neutral-900 
             shadow-[0_22px_46px_-34px_rgba(30,157,241,0.4)] 
             transition-colors hover:border-[#1e9df1]/40 
             dark:border-white/10 dark:bg-[#0c0c0c] dark:text-white 
             md:min-h-[280px] lg:min-h-[340px] xl:h-[340px]"
   classNameExpanded="border border-neutral-200 bg-white 
                     shadow-[0_32px_80px_-28px_rgba(30,157,241,0.45)] 
                     dark:border-white/10 dark:bg-[#0c0c0c]"
>
   {/* Card content */}
</ExpandableCard>
```

**Card Header Pattern**:

```tsx
<div className="flex items-center gap-3 shrink-0">
   <span className="font-body text-sm font-light text-neutral-600 dark:text-white/90">
      {post.date}
   </span>
   <span className="size-[6px] bg-[#1e9df1]" aria-hidden />
   <span className="font-body text-sm font-light text-neutral-600 dark:text-white/90">
      By {post.author}
   </span>
</div>
```

**Read More Link Pattern**:

```tsx
<div
   className="inline-flex items-center gap-2 
                font-heading text-xs uppercase tracking-[0.3em] 
                text-[#1e9df1] transition-colors group-hover:text-[#79c7ff]"
>
   {readMoreLabel}
   <span aria-hidden>→</span>
</div>
```

### 2. Footer Section Card

Card với corner dots decorative:

```tsx
<article
   id={section.id}
   className="group relative flex flex-col gap-5 
             border border-border bg-card px-8 py-10 text-foreground 
             shadow-[0_20px_45px_-32px_rgba(30,157,241,0.35)] 
             transition-transform duration-300"
>
   {/* Corner dots - 4 góc */}
   <span className="absolute -top-3 -left-3 size-3 bg-[#1e9df1]" aria-hidden />
   <span className="absolute -top-3 -right-3 size-3 bg-[#1e9df1]" aria-hidden />
   <span
      className="absolute -bottom-3 -left-3 size-3 bg-[#1e9df1]"
      aria-hidden
   />
   <span
      className="absolute -bottom-3 -right-3 size-3 bg-[#1e9df1]"
      aria-hidden
   />

   {/* Header */}
   <header className="flex flex-col gap-3">
      <span className="font-heading text-xs uppercase tracking-[0.4em] text-muted-foreground">
         {String(index + 1).padStart(2, "0")}
      </span>
      <h2 className="font-heading text-2xl font-semibold uppercase leading-[1.2] text-foreground">
         {section.title}
      </h2>
   </header>

   {/* Content */}
   {section.description.map((paragraph) => (
      <p key={paragraph} className="font-body text-base text-muted-foreground">
         {paragraph}
      </p>
   ))}
</article>
```

### 3. Privacy Policy Card

Card với hover lift effect:

```tsx
<article
   id={section.id}
   className="group relative flex flex-col gap-5 
             border border-white/10 bg-[#0b0b0b] px-8 py-10 
             transition-transform duration-300 hover:-translate-y-1"
>
   {/* Single corner accent */}
   <span className="absolute -top-3 -left-3 size-3 bg-[#1e9df1]" aria-hidden />

   <header className="flex flex-col gap-3">
      {/* Numbered badge */}
      <span className="font-heading text-xs uppercase tracking-[0.4em] text-white/40">
         {String(index + 1).padStart(2, "0")}
      </span>
      <h2 className="font-heading text-2xl font-semibold uppercase leading-[1.2] text-white">
         {section.title}
      </h2>
   </header>

   {/* Bullet list */}
   {section.bullets && (
      <ul className="mt-4 flex flex-col gap-3">
         {section.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-3">
               <span
                  className="mt-[6px] h-[6px] w-[6px] bg-[#1e9df1]"
                  aria-hidden
               />
               <span className="font-body text-sm text-white/75">{bullet}</span>
            </li>
         ))}
      </ul>
   )}
</article>
```

### 4. Highlight Card (Info Box)

```tsx
<div
   className="border border-white/10 bg-[#0b0b0b] px-6 py-5 
                transition-colors duration-300 hover:border-[#1e9df1]"
>
   <span className="font-heading text-xs uppercase tracking-[0.3em] text-white/60">
      {item.label}
   </span>
   <p className="mt-2 font-body text-sm text-white/70">{item.description}</p>
</div>
```

### 5. Contact Channel Card

```tsx
<div
   className="flex h-full flex-col gap-2 
                border border-white/15 bg-black/60 px-6 py-6"
>
   <span className="font-heading text-xs uppercase tracking-[0.3em] text-white/60">
      {channel.label}
   </span>
   <span className="font-heading text-sm uppercase tracking-[0.2em] text-white">
      {channel.value}
   </span>
</div>
```

### 6. Statistics Component

Big number với animated ticker:

```tsx
<div className="relative flex flex-col items-center min-w-0 w-full">
   {/* Divider between items */}
   {index !== 0 && (
      <span
         className="hidden md:block absolute left-0 top-0 bottom-0 w-px 
                 bg-border/30 -translate-x-[calc(50%+1rem)]"
         aria-hidden
      />
   )}

   {/* Big Number - Fluid typography với clamp() */}
   <div
      className="font-heading font-bold dark:text-foreground/20 text-foreground/20 
                  text-[clamp(10rem,8.5rem+0.5vw,16rem)] 
                  leading-[clamp(15rem,13.5rem+0.5vw,17rem)]"
   >
      <NumberTicker value={value} startValue={0} />
      {suffix}
   </div>

   {/* Label with blue divider */}
   <BoxReveal boxColor="hsl(var(--primary))" duration={0.6} width="100%">
      <div className="flex gap-2.5 items-start">
         <div
            className="dark:bg-primary/75 bg-primary self-stretch shrink-0 w-0.5"
            aria-hidden
         />
         <span className="font-heading text-sm text-foreground tracking-wide uppercase">
            {stat.label}
         </span>
      </div>
   </BoxReveal>
</div>
```

### 7. Section Header Pattern

Eyebrow + Heading + Description:

```tsx
<header className="flex max-w-3xl flex-col items-center gap-6 text-center">
   {/* Eyebrow với gradient bar */}
   <BoxReveal boxColor="#1e9df1" duration={0.6}>
      <div
         className="inline-flex items-end gap-4 
                    font-heading text-sm font-light uppercase tracking-[0.3em] 
                    text-neutral-700 dark:text-white"
      >
         <span
            className="h-6 w-[3px] bg-gradient-to-b from-[var(--chart-1)] to-[#8b5cf6]"
            aria-hidden
         />
         <span>{t.statistics.eyebrow}</span>
      </div>
   </BoxReveal>

   {/* Heading */}
   <BlurReveal delay={0.05} duration={0.6}>
      <h2
         className="font-heading text-2xl font-semibold uppercase leading-[1.2] 
                   text-neutral-900 md:text-3xl dark:text-white"
      >
         {t.statistics.heading}
      </h2>
   </BlurReveal>

   {/* Description */}
   <BlurReveal delay={0.1} duration={0.5}>
      <p
         className="font-body text-base font-light leading-[26px] 
                  text-neutral-600 dark:text-[#a5a5a5]"
      >
         {t.statistics.description}
      </p>
   </BlurReveal>
</header>
```

### 8. Hero Section Pattern

```tsx
<section className="relative isolate flex w-full justify-center overflow-hidden bg-black">
   {/* Background image */}
   <div className="absolute inset-0">
      <Image
         src={HERO_IMAGE}
         alt="..."
         fill
         className="object-cover opacity-90"
         priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-[#0f1c29]" />
      {/* Decorative lines */}
      <div className="absolute inset-x-0 top-24 h-px bg-white/10" aria-hidden />
      <div
         className="absolute inset-x-0 bottom-24 h-px bg-white/10"
         aria-hidden
      />
   </div>

   <div className="relative z-10 flex w-full flex-col gap-16 px-4 py-24 md:px-10 lg:px-16">
      <div className="max-w-[1080px] space-y-12">
         {/* Eyebrow */}
         <BoxReveal boxColor="#1e9df1" duration={0.6}>
            <span
               className="inline-flex items-center gap-3 
                        font-heading text-xs uppercase tracking-[0.3em] text-white/80"
            >
               <span className="h-5 w-[3px] bg-[#1e9df1]" aria-hidden />
               {data.eyebrow}
            </span>
         </BoxReveal>

         {/* Heading */}
         <BlurReveal delay={0.05} duration={0.6}>
            <h1
               className="font-heading text-[44px] font-bold uppercase leading-[1.05] 
                       tracking-tight md:text-[76px]"
            >
               {data.heading.line1}
               <br />
               {data.heading.line2}
            </h1>
         </BlurReveal>

         {/* Meta info box */}
         <div
            className="flex flex-wrap items-center gap-6 
                      rounded-none border border-white/15 bg-black/60 px-6 py-5 backdrop-blur"
         >
            <div className="flex flex-col gap-1">
               <span className="font-heading text-xs uppercase tracking-[0.3em] text-white/60">
                  {meta.lastUpdatedLabel}
               </span>
               <span className="font-heading text-sm uppercase tracking-[0.25em] text-white">
                  {meta.lastUpdated}
               </span>
            </div>
            <div className="h-10 w-px bg-white/10" aria-hidden />
            <p className="max-w-[520px] font-body text-sm text-white/65">
               {meta.summary}
            </p>
         </div>
      </div>
   </div>
</section>
```

### 9. Social Button với Hover Effect

```tsx
<Button
   className="hover:border-blue-500/50 border rounded-none h-11 px-4 py-2.5 
             font-body text-sm text-foreground transition-all duration-300 
             border-border focus:border-primary focus:ring-1 focus:ring-primary"
   variant="ghost"
   onMouseEnter={() => setHoveredIcon("facebook")}
   onMouseLeave={() => setHoveredIcon(null)}
>
   <Icon
      styles="solid"
      size={20}
      name={hoveredIcon === "facebook" ? "facebook-color" : "facebook"}
      image={hoveredIcon === "facebook"}
      className={hoveredIcon === "facebook" ? "" : "!bg-foreground/50"}
   />
</Button>
```

### 10. Newsletter Form

```tsx
<form className="flex w-full flex-col gap-3">
   <Input
      type="email"
      placeholder={newsletter.placeholder}
      className="rounded-none h-11 w-full border px-4 py-2.5 
               font-body text-sm text-foreground 
               placeholder:text-muted-foreground 
               focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
      required
   />
   <Button
      type="submit"
      className="bg-primary rounded-none h-11 px-4 py-2.5 
               font-heading text-sm font-semibold uppercase tracking-wider 
               text-primary-foreground transition-all hover:bg-primary/90"
   >
      {newsletter.buttonLabel}
   </Button>
</form>
```

### 11. Diamond Anchor Decorative

```tsx
function DiamondAnchor({ position }: { position: "left" | "right" }) {
   const isLeft = position === "left";

   return (
      <span
         className={`pointer-events-none absolute top-1/2 size-5 -translate-y-1/2 rotate-45 
                  bg-white dark:bg-[#111111] 
                  ${isLeft ? "-left-[14px]" : "-right-[14px]"}`}
         aria-hidden
      >
         <span
            className={`absolute inset-0 border border-neutral-200 dark:border-white/10 
                    ${isLeft ? "border-r-0 border-t-0" : "border-b-0 border-l-0"}`}
         />
      </span>
   );
}
```

### 12. HoverCard Footer Pattern

```tsx
<HoverCard>
   <HoverCardTrigger asChild>
      <Link href="https://..." className="text-foreground hover:text-primary">
         {footer.legal.designer}
      </Link>
   </HoverCardTrigger>
   <HoverCardContent className="w-72 rounded-none border-border bg-card/90 backdrop-blur">
      <div className="flex flex-col gap-3">
         <div className="flex flex-col gap-1">
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-[#1e9df1]">
               {title}
            </h3>
            <p className="font-body text-xs leading-relaxed text-muted-foreground">
               {tagline}
            </p>
         </div>
         <ul className="flex flex-col gap-2">
            {highlights.map((highlight) => (
               <li
                  key={highlight}
                  className="flex items-center gap-2 
                                         font-body text-xs text-muted-foreground"
               >
                  <span
                     className="h-1.5 w-1.5 flex-shrink-0 bg-[#1e9df1]"
                     aria-hidden
                  />
                  <span>{highlight}</span>
               </li>
            ))}
         </ul>
         <Link
            href="..."
            className="inline-flex items-center gap-2 
                                  font-heading text-[10px] uppercase tracking-[0.35em] 
                                  text-[#1e9df1] hover:text-primary"
         >
            {cta}
            <span aria-hidden className="text-sm leading-none">
               ↗
            </span>
         </Link>
      </div>
   </HoverCardContent>
</HoverCard>
```

### 13. Commitment Points Grid

```tsx
<ul className="grid gap-6 lg:grid-cols-3">
   {data.points.map((point) => (
      <li
         key={point}
         className="flex h-full flex-col gap-3 
                 border border-white/10 bg-[#0b0b0b] px-6 py-6"
      >
         <span className="size-[6px] bg-[#1e9df1]" aria-hidden />
         <p className="font-body text-sm text-white/75">{point}</p>
      </li>
   ))}
</ul>
```

---

## �💡 Best Practices

### Animation Usage

```typescript
// ✅ Good - Check for reduced motion
if (!prefersReducedMotion()) {
   createNeonPulse(target);
}

// ✅ Good - Cleanup animations
useEffect(() => {
   const animation = createScanLoop(target);
   return () => animation?.kill();
}, []);
```

### Color Usage

```tsx
// ✅ Good - Use CSS variables
className = "bg-primary text-primary-foreground";

// ✅ Good - Use semantic colors
className = "text-muted-foreground";
className = "border-border";
```

### Typography

```tsx
// ✅ Good - Use semantic classes
className = "font-heading";
className = "font-body";

// ✅ Good - Responsive sizing
className = "text-2xl md:text-3xl";
```

### Component Composition

```tsx
// ✅ Good - Compose with data attributes
<div data-hero="heading">
  <h1>Title</h1>
</div>

// ✅ Good - Use animation wrappers
<BoxReveal boxColor="#1e9df1">
  <BlurReveal>
    <h2>Content</h2>
  </BlurReveal>
</BoxReveal>
```

---

## 📝 Notes

### Custom Scrollbar

Scrollbar bị ẩn hoàn toàn để tạo immersive experience:

```css
::-webkit-scrollbar {
   display: none;
}
* {
   scrollbar-width: none;
}
```

### Theme Provider

Default theme là **dark mode**:

```tsx
<ThemeProvider
   attribute="class"
   defaultTheme="dark"
   enableSystem
   disableTransitionOnChange
/>
```

### Sidebar Support

Design system bao gồm sidebar color tokens (cho tương lai):

```css
--sidebar: ... --sidebar-foreground: ... --sidebar-primary: ... --sidebar-accent:
   ...;
```

---

## 🔮 Future Enhancements

Các tính năng có thể được thêm vào:

1. **Additional themes** - Light mode optimization
2. **More visual components** - Visual-3, Visual-4
3. **Animation presets** - Exportable animation configurations
4. **Component playground** - Interactive documentation
5. **Performance monitoring** - Animation performance metrics

---

## 📚 References

### Documentation Links

-  [Tailwind CSS](https://tailwindcss.com/)
-  [GSAP](https://greensock.com/gsap/)
-  [Framer Motion](https://www.framer.com/motion/)
-  [shadcn/ui](https://ui.shadcn.com/)
-  [OKLCH Color Space](https://oklch.com/)

### Design Inspiration

-  Cyberpunk aesthetics
-  Tech/automotive dashboards
-  Holographic UI patterns
-  Neon-lit interfaces

---

**Last Updated**: December 2025  
**Version**: 1.0  
**Maintainer**: NV-Phong
