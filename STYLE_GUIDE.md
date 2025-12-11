# ProtoVibing.ai Brand Style Guide

A comprehensive design system for creating consistent branded artifacts across all mediums.

---

## Brand Overview

ProtoVibing.ai is a product validation accelerator that helps founders go from stuck idea to tested prototype. The visual identity evokes energy, innovation, and dynamic interaction through sound wave imagery and vibrant gradients.

**Brand Personality:**
- Energetic but not overwhelming
- Modern and tech-forward
- Approachable and supportive
- Confident but humble
- Action-oriented

---

## Logo & Icon

### Primary Mark
The brand mark features a symmetrical arrangement of vertical bars forming a sound wave or equalizer pattern, representing:
- Dynamic energy and movement
- Data visualization and validation
- Iterative progress and rhythm
- Balance and harmony

### Usage Guidelines
- Maintain clear space around the icon equal to the height of one bar
- Minimum size: 24px for digital, 0.5 inches for print
- Do not rotate, skew, or distort the icon
- Do not alter the gradient or color relationships
- Ensure adequate contrast with backgrounds

### Logo Files
| Format | Use Case |
|--------|----------|
| SVG | Web (scalable, small file size) |
| PNG | Digital with transparency |
| JPG | Social media, email |

**Standard sizes:** 512px, 256px, 128px, 64px, 32px

---

## Color Palette

### Brand Colors

| Color | Hex | RGB | Usage |
|-------|-----|-----|-------|
| **Deep Purple** | `#6B3FA0` | rgb(107, 63, 160) | Primary brand, CTAs, headers |
| **Bright Blue** | `#3BA3D4` | rgb(59, 163, 212) | Links, icons, secondary accents |
| **Coral** | `#E94B5A` | rgb(233, 75, 90) | Alerts, highlights, energy accents |
| **Magenta** | `#D64D8E` | rgb(214, 77, 142) | Gradient transitions |
| **Royal Blue** | `#4A7BB7` | rgb(74, 123, 183) | Gradient transitions |

### Primary Gradient
\`\`\`css
background: linear-gradient(90deg, 
  #6B3FA0 0%, 
  #4A7BB7 25%, 
  #3BA3D4 50%, 
  #D64D8E 75%, 
  #E94B5A 100%
);
\`\`\`

**Application:**
- Logo and icon fills
- Accent lines and dividers
- Hover states and highlights
- Decorative elements

### Dark Theme Colors

| Token | Hex | Usage |
|-------|-----|-------|
| **Background** | `#1A1F35` | Page background |
| **Card Background** | `rgba(29, 36, 57, 0.72)` | Glassmorphic cards |
| **Foreground** | `#E8EAEF` | Primary text |
| **Muted** | `#252B45` | Secondary backgrounds |
| **Muted Foreground** | `#A0A3B8` | Secondary text, captions |
| **Border** | `rgba(255, 255, 255, 0.12)` | Subtle borders |

### Light Theme Colors (For Print/Light Contexts)

| Token | Hex | Usage |
|-------|-----|-------|
| **Background** | `#FFFFFF` | Page background |
| **Foreground** | `#1A1D2E` | Primary text |
| **Muted** | `#F5F7FA` | Secondary backgrounds |
| **Muted Foreground** | `#6E7191` | Secondary text |
| **Border** | `#E5E7EB` | Borders, dividers |

---

## Typography

### Font Family

**Primary:** Inter (Google Fonts)
- Clean, modern sans-serif
- Excellent readability at all sizes
- Variable font with full weight range

**Fallback Stack:**
\`\`\`css
font-family: "Inter", system-ui, -apple-system, sans-serif;
\`\`\`

**Monospace (for code/data):**
\`\`\`css
font-family: "Geist Mono", "IBM Plex Mono", monospace;
\`\`\`

### Type Scale

| Level | Size | Weight | Line Height | Usage |
|-------|------|--------|-------------|-------|
| H1 | 48px / 3rem | Bold (700) | 1.2 | Hero headlines |
| H2 | 36px / 2.25rem | Bold (700) | 1.2 | Section titles |
| H3 | 28px / 1.75rem | Semibold (600) | 1.3 | Subsection titles |
| H4 | 24px / 1.5rem | Semibold (600) | 1.3 | Card titles |
| H5 | 20px / 1.25rem | Medium (500) | 1.4 | Small headers |
| Body Large | 18px / 1.125rem | Regular (400) | 1.6 | Lead paragraphs |
| Body | 16px / 1rem | Regular (400) | 1.6 | Default body text |
| Body Small | 14px / 0.875rem | Regular (400) | 1.5 | Secondary text |
| Caption | 12px / 0.75rem | Regular (400) | 1.4 | Fine print, labels |

### Typography Rules
- Maximum line length: 65-75 characters for readability
- Use `text-balance` or `text-pretty` for headlines
- Never use decorative fonts for body text
- Minimum font size: 14px for body, 12px for captions

---

## Spacing System

Based on an 8px grid for consistent rhythm.

| Token | Value | Usage |
|-------|-------|-------|
| `xs` | 4px | Tight spacing, inline elements |
| `sm` | 8px | Small gaps, icon spacing |
| `md` | 16px | Default component padding |
| `lg` | 24px | Section padding, card gaps |
| `xl` | 32px | Major section breaks |
| `2xl` | 48px | Page section margins |
| `3xl` | 64px | Hero spacing |

### Container Widths
- **Max content:** 1200px
- **Reading width:** 680px (text-heavy content)
- **Narrow:** 480px (forms, modals)

---

## Visual Effects

### Glassmorphism (Dark Theme)
\`\`\`css
.glass-card {
  background: linear-gradient(140deg, 
    rgba(29, 36, 57, 0.72), 
    rgba(14, 18, 30, 0.42)
  );
  border-radius: 22px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(24px) saturate(130%);
  box-shadow: 
    0 4px 6px rgba(0, 0, 0, 0.3),
    0 22px 55px rgba(6, 10, 22, 0.55);
}
\`\`\`

### Gradient Border Accent
\`\`\`css
.gradient-border::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60%;
  height: 2px;
  background: var(--gradient-primary);
  border-radius: 2px;
  opacity: 0.6;
}
\`\`\`

### Elevation & Shadows

| Level | Shadow | Usage |
|-------|--------|-------|
| Level 1 | `0 1px 3px rgba(0,0,0,0.1)` | Subtle lift |
| Level 2 | `0 4px 6px rgba(0,0,0,0.3)` | Cards, buttons |
| Level 3 | `0 10px 25px rgba(0,0,0,0.15)` | Modals, dropdowns |

### Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `sm` | 4px | Buttons, inputs |
| `md` | 8px | Small cards |
| `lg` | 12px | Standard cards |
| `xl` | 16px | Large cards |
| `2xl` | 22px | Hero cards, modals |
| `full` | 9999px | Pills, avatars |

---

## UI Components

### Buttons

**Primary CTA**
\`\`\`css
background: #6B3FA0;
color: #FFFFFF;
padding: 16px 32px;
border-radius: 12px;
font-weight: 600;
font-size: 18px;
box-shadow: 0 0 20px rgba(107, 63, 160, 0.4);
transition: all 0.3s ease;

/* Hover */
background: #5a3589;
transform: translateY(-2px);
box-shadow: 0 0 30px rgba(107, 63, 160, 0.6);
\`\`\`

**Secondary Button**
\`\`\`css
background: transparent;
border: 2px solid #6B3FA0;
color: #6B3FA0;
padding: 14px 30px;
border-radius: 12px;

/* Hover */
background: #6B3FA0;
color: #FFFFFF;
\`\`\`

**Text/Link Button**
\`\`\`css
color: #3BA3D4;
text-decoration: underline;

/* Hover */
color: #2d8ab8;
\`\`\`

### Form Elements

**Input Fields**
\`\`\`css
background: rgba(255, 255, 255, 0.16);
border: 1px solid rgba(255, 255, 255, 0.12);
border-radius: 8px;
padding: 12px 16px;
color: #E8EAEF;

/* Focus */
border-color: #3BA3D4;
box-shadow: 0 0 0 3px rgba(59, 163, 212, 0.2);
\`\`\`

### Cards
\`\`\`css
background: linear-gradient(140deg, 
  rgba(29, 36, 57, 0.72), 
  rgba(14, 18, 30, 0.42)
);
border: 1px solid rgba(255, 255, 255, 0.12);
border-radius: 22px;
padding: 24px;
backdrop-filter: blur(24px);
\`\`\`

---

## Iconography

### Style Guidelines
- Line icons with 2px stroke weight
- Rounded line caps and corners
- Standard sizes: 16px, 20px, 24px, 32px
- Color: `#3BA3D4` (Bright Blue) for emphasis, `#A0A3B8` for muted

### Icon Containers (Feature Cards)
\`\`\`css
width: 48px;
height: 48px;
border-radius: 12px;
background: rgba(59, 163, 212, 0.1);
color: #3BA3D4;
display: flex;
align-items: center;
justify-content: center;
\`\`\`

### Numbered Steps
\`\`\`css
width: 48px;
height: 48px;
border-radius: 50%;
background: #6B3FA0;
color: #FFFFFF;
font-weight: 700;
font-size: 18px;
\`\`\`

---

## Animation & Motion

### Principles
- Smooth and purposeful
- Duration: 200-400ms for most transitions
- Easing: `ease-out` for enters, `ease-in` for exits

### Common Animations

**Fade In Up**
\`\`\`css
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
/* Duration: 600ms, ease-out */
\`\`\`

**Floating Blobs**
\`\`\`css
@keyframes float {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(50px, 60px); }
}
/* Duration: 20-30s, infinite */
\`\`\`

**Button Hover**
\`\`\`css
transition: all 0.3s ease;
transform: translateY(-2px);
\`\`\`

### Accessibility
Always respect `prefers-reduced-motion`:
\`\`\`css
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}
\`\`\`

---

## Data Visualization

### Chart Color Sequence
1. Deep Purple `#6B3FA0`
2. Bright Blue `#3BA3D4`
3. Coral `#E94B5A`
4. Magenta `#D64D8E`
5. Royal Blue `#4A7BB7`

### Bar Charts
- Echo the vertical bars of the brand icon
- Use gradient fills or solid brand colors
- Rounded tops (border-radius: 4px)
- Consistent 8px gaps

---

## Voice & Tone

### Writing Principles
- Clear and concise
- Active voice preferred
- Friendly, conversational tone
- Action-oriented language
- Avoid jargon

### Do's
- "Go from idea to prototype"
- "Take the quick assessment"
- "Ship your prototype"
- "Real validation with real users"

### Don'ts
- Avoid em dashes in headlines/body (okay in attributions)
- Avoid passive voice
- Avoid corporate jargon
- Avoid excessive exclamation points

---

## Accessibility

### Color Contrast
- Minimum 4.5:1 for normal text
- Minimum 3:1 for large text (18px+) and UI components
- Never rely solely on color to convey information

### Interactive Elements
- Minimum touch target: 44x44px
- Clear focus states with visible outlines
- Keyboard navigable

### Content
- Alt text for all meaningful images
- Descriptive link text (not "click here")
- Logical heading hierarchy

---

## CSS Variables Reference

\`\`\`css
:root {
  /* Brand Colors */
  --brand-purple: #6B3FA0;
  --brand-blue: #3BA3D4;
  --brand-coral: #E94B5A;
  --brand-magenta: #D64D8E;
  
  /* Semantic Tokens */
  --primary: #6B3FA0;
  --secondary: #3BA3D4;
  --accent: #E94B5A;
  --background: #1A1F35;
  --foreground: #E8EAEF;
  --muted: #252B45;
  --muted-foreground: #A0A3B8;
  --border: rgba(255, 255, 255, 0.12);
  
  /* Functional Tokens */
  --link: #3BA3D4;
  --link-hover: #2d8ab8;
  --icon: #3BA3D4;
  --cta-glow: rgba(107, 63, 160, 0.5);
  
  /* Gradient */
  --gradient-primary: linear-gradient(90deg, 
    #6B3FA0 0%, #4A7BB7 25%, #3BA3D4 50%, 
    #D64D8E 75%, #E94B5A 100%);
  
  /* Spacing */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 48px;
  
  /* Border Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-2xl: 22px;
  
  /* Shadows */
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.3);
  --shadow-lg: 0 10px 25px rgba(0, 0, 0, 0.15);
}
\`\`\`

---

## Print Considerations

### CMYK Conversions (Approximate)
| Color | CMYK |
|-------|------|
| Deep Purple | C:60 M:80 Y:0 K:20 |
| Bright Blue | C:70 M:15 Y:0 K:10 |
| Coral | C:0 M:75 Y:60 K:5 |

*Note: Always consult with your printer for exact CMYK values.*

### Print-Safe Alternatives
- Use solid brand colors instead of gradients when possible
- Ensure sufficient contrast on uncoated paper
- Minimum text size: 8pt for print

---

## File Organization

\`\`\`
/brand-assets
├── /logos
│   ├── logo-primary.svg
│   ├── logo-primary.png (512px, 256px, 128px)
│   ├── logo-white.svg
│   └── logo-dark.svg
├── /icons
│   ├── favicon.ico
│   ├── icon.svg
│   ├── apple-touch-icon.png
│   └── og-image.jpg
├── /fonts
│   └── Inter (variable)
└── STYLE_GUIDE.md
\`\`\`

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2025 | Initial brand identity and style guide |

---

*This style guide is a living document and should be updated as the ProtoVibing.ai brand evolves.*
