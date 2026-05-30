# Design System

## Typography Scale

### Font Families
- **Sans**: Inter (body text, UI elements)
- **Display**: Inter (headlines, editorial text)
- **Mono**: JetBrains Mono (code, technical text)

### Font Sizes
- `xs`: 0.75rem (12px) - Labels, captions
- `sm`: 0.875rem (14px) - Small text, metadata
- `base`: 1rem (16px) - Body text
- `lg`: 1.125rem (18px) - Lead text
- `xl`: 1.25rem (20px) - Subheadings
- `2xl`: 1.5rem (24px) - Section headings
- `3xl`: 1.875rem (30px) - Large headings
- `4xl`: 2.25rem (36px) - Hero subheadlines
- `5xl`: 3rem (48px) - Hero headlines
- `6xl`: 3.75rem (60px) - Display headings
- `7xl`: 4.5rem (72px) - Cinematic headlines
- `8xl`: 6rem (96px) - Massive headlines
- `9xl`: 8rem (128px) - Extreme headlines

### Letter Spacing
- `tightest`: -0.04em - Tight display text
- `display-tight`: -0.03em - Display headings
- `display-normal`: -0.02em - Normal display text

## Spacing System

### Base Spacing
- Standard Tailwind spacing (0.25rem to 16rem)
- Extended: 18 (4.5rem), 22 (5.5rem), 26 (6.5rem), 28 (7rem)
- Large: 128 (32rem), 144 (36rem), 160 (40rem), 176 (44rem), 192 (48rem)

### Section Padding
- Small: py-16 to py-20
- Medium: py-20 to py-24
- Large: py-24 to py-28
- Extra large: py-28 to py-32

## Color System

### Backgrounds
- `surface`: #11121B - Primary dark background
- `surfaceMuted`: #18192A - Secondary dark background

### Accents
- `clay`: #6E83D4 - Primary accent (blue-purple)
- `ink`: #C8D0F0 - Primary text (off-white)
- `inkSoft`: #A2A9C4 - Secondary text (muted)

### Text Colors
- White: #FFFFFF
- White/50: 50% opacity
- White/70: 70% opacity
- White/60: 60% opacity

### Color Scheme Hierarchy
Dark background palette with subtle gradations for flat, opaque layering:
- `surface-1`: #16161E - Deepest background
- `surface-2`: #171820 - Deep background
- `surface-3`: #191A23 - Dark background
- `surface-4`: #1A1B26 - Primary background
- `surface-5`: #1E1E2A - Elevated background
- `surface-6`: #1E202E - Secondary elevated background
- `surface-7`: #202330 - Lightest elevated background

## Border Radius System

- `xl`: 1.5rem (24px) - Medium cards
- `2xl`: 2rem (32px) - Large cards
- `3xl`: 3rem (48px) - Extra large cards
- `4xl`: 4rem (64px) - Hero elements
- `5xl`: 5rem (80px) - Cinematic elements

## Shadow System

- `soft`: 0 2px 8px rgba(0, 0, 0, 0.08) - Subtle elevation
- `medium`: 0 4px 16px rgba(0, 0, 0, 0.12) - Standard elevation
- `strong`: 0 8px 32px rgba(0, 0, 0, 0.16) - High elevation
- `glow`: 0 0 24px rgba(110, 131, 212, 0.15) - Accent glow
- `glow-strong`: 0 0 48px rgba(110, 131, 212, 0.25) - Strong accent glow

## Animation System

### Keyframes
- `float`: Gentle vertical floating
- `fade`: Fade in with slide up
- `fade-in`: Simple fade in
- `slide-up`: Slide up from below
- `slide-down`: Slide down from above
- `scale-in`: Scale up from smaller
- `pulse-slow`: Slow pulse effect

### Animations
- `float`: 8s ease-in-out infinite
- `fade`: 0.9s ease-out both
- `fade-in`: 0.6s ease-out both
- `slide-up`: 0.8s ease-out both
- `slide-down`: 0.8s ease-out both
- `scale-in`: 0.5s ease-out both
- `pulse-slow`: 3s ease-in-out infinite

## Transition Timing Functions

- `soft-out`: cubic-bezier(0.25, 0.1, 0.25, 1) - Smooth exit
- `smooth-in`: cubic-bezier(0.4, 0, 0.2, 1) - Smooth entry
- `smooth-out`: cubic-bezier(0, 0, 0.2, 1) - Smooth exit
- `elastic`: cubic-bezier(0.68, -0.55, 0.265, 1.55) - Bouncy effect

## Button Component

### Variants
- `primary`: Clay background, white text, glow on hover
- `secondary`: Surface muted background, white text
- `outline`: Transparent background, white border
- `ghost`: Transparent background, no border
- `text`: Transparent background, clay text

### Sizes
- `sm`: Small (px-5 py-2.5 text-xs)
- `md`: Medium (px-7 py-3 text-sm)
- `lg`: Large (px-9 py-4 text-base)

### Usage
```tsx
<Button variant="primary" size="md">Click me</Button>
<Button variant="outline" size="lg">Learn more</Button>
```

## Card Component

### Variants
- `soft`: Surface muted background, subtle border
- `elevated`: Surface muted background, shadow, hover effect
- `minimal`: Transparent background, no border
- `bordered`: Transparent background, visible border

### Padding
- `sm`: Small (p-6 sm:p-8)
- `md`: Medium (p-8 sm:p-10)
- `lg`: Large (p-10 sm:p-12)

### Usage
```tsx
<Card variant="soft" padding="md">Content</Card>
<Card variant="elevated" padding="lg">Content</Card>
```

## Section Layout Patterns

### Standard Section
```tsx
<section className="relative py-20 sm:py-24 lg:py-28">
  <div className="mx-auto max-w-6xl px-6 sm:px-8">
    <div className="mb-10 max-w-2xl">
      <p className="mb-4 text-xs uppercase tracking-[0.35em] text-white/50">Eyebrow</p>
      <h2 className="text-3xl font-display font-semibold leading-tight text-white sm:text-5xl">Heading</h2>
    </div>
    {children}
  </div>
</section>
```

### Full-Width Section
```tsx
<section className="relative py-20 sm:py-24 lg:py-28">
  <div className="mx-auto px-6 sm:px-8">
    {content}
  </div>
</section>
```

### Grid Layouts
- 2 columns: `grid gap-6 lg:grid-cols-2`
- 3 columns: `grid gap-6 lg:grid-cols-3`
- 4 columns: `grid gap-6 lg:grid-cols-4`

## Design Principles

1. **Dark First**: Use dark backgrounds as default
2. **Minimal Accent**: Use clay accent sparingly (5% of design)
3. **Large Spacing**: Use generous whitespace
4. **Editorial Typography**: Large, cinematic headlines
5. **Smooth Motion**: Subtle, elegant animations
6. **Premium Feel**: Soft shadows, refined borders
7. **Consistent Patterns**: Reusable components and layouts

## Responsive Breakpoints

- `sm`: 640px - Small tablets
- `md`: 768px - Tablets
- `lg`: 1024px - Laptops
- `xl`: 1280px - Desktops
- `2xl`: 1536px - Large screens
