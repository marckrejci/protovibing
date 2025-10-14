# Brand Identity Style Guide

## Brand Overview

This brand identity centers around energy, innovation, and dynamic interaction. The visual language evokes sound, data visualization, and rhythmic movement, suggesting a modern tech product with focus on user engagement and vibrant experiences.

---

## Logo & Icon

### Primary Icon
The core brand mark features a symmetrical arrangement of vertical bars forming a sound wave or equalizer pattern. The design represents:
- **Dynamic energy** and movement
- **Data visualization** and analytics
- **Audio/sound** waves or frequency
- **Balance** and harmony through symmetry

### Usage Guidelines
- Maintain clear space around the icon equal to the height of one bar
- Minimum size: 24px for digital, 0.5 inches for print
- Do not rotate, skew, or distort the icon
- Do not alter the gradient or color relationships
- Ensure adequate contrast with backgrounds

---

## Color Palette

### Primary Gradient
The brand utilizes a vibrant multi-point gradient flowing through the spectrum:

**Gradient Stops:**
- **Deep Purple** `#6B3FA0` - Start (left bars)
- **Royal Blue** `#4A7BB7` - Early mid
- **Bright Blue** `#3BA3D4` - Mid-point (center)
- **Magenta/Pink** `#D64D8E` - Late mid
- **Coral** `#E94B5A` - End (right bars)

**Application:**
- Use the full gradient for the primary icon
- Gradient direction: Left to right, or top to bottom
- Can be applied to accent elements, dividers, and highlights

### Supporting Colors

**Deep Purple** `#6B3FA0`
- Primary brand color
- Use for headers, primary buttons, key UI elements
- Represents stability and innovation

**Bright Blue** `#3BA3D4`
- Secondary accent
- Use for links, interactive elements, secondary CTAs
- Represents clarity and trust

**Coral** `#E94B5A`
- Tertiary accent
- Use for alerts, highlights, success states
- Represents energy and warmth

### Neutral Colors

**Dark Slate** `#1A1D2E`
- Primary text color
- Dark backgrounds for contrast

**Medium Gray** `#6E7191`
- Secondary text, captions
- Inactive states

**Light Gray** `#E5E7EB`
- Borders, dividers
- Subtle backgrounds

**White** `#FFFFFF`
- Primary background
- Text on dark backgrounds

---

## Typography

### Font Families

**Primary Font: Inter** (or similar modern sans-serif)
- Headlines (H1-H3): Bold, 600-700 weight
- Body text: Regular, 400 weight
- UI elements: Medium, 500 weight

**Secondary Font: IBM Plex Mono** (for code/data)
- Use for technical content, code snippets, data displays
- Regular, 400 weight

### Type Scale

```
H1: 48px / 3rem - Bold
H2: 36px / 2.25rem - Bold
H3: 28px / 1.75rem - Semibold
H4: 24px / 1.5rem - Semibold
H5: 20px / 1.25rem - Medium
Body Large: 18px / 1.125rem - Regular
Body: 16px / 1rem - Regular
Body Small: 14px / 0.875rem - Regular
Caption: 12px / 0.75rem - Regular
```

### Line Height
- Headlines: 1.2
- Body text: 1.6
- Captions: 1.4

---

## Visual Design Elements

### Shapes & Patterns

**Vertical Bars Pattern**
- Signature element derived from the icon
- Use for backgrounds, decorative elements, data visualization
- Vary heights for dynamic effect
- Can be subtle (low opacity) or prominent

**Rounded Corners**
- Border radius: 8px for cards, 4px for buttons, 16px for modals
- Consistent rounding creates approachable, modern feel

**Gradients**
- Primary gradient for key elements and accents
- Subtle gradient overlays (10-20% opacity) for depth
- Avoid overuse - reserve for emphasis

### Elevation & Shadows

**Level 1 (Subtle):**
```css
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
```

**Level 2 (Cards):**
```css
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
```

**Level 3 (Modals):**
```css
box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
```

---

## UI Components

### Buttons

**Primary Button**
- Background: Deep Purple `#6B3FA0` or gradient
- Text: White
- Padding: 12px 24px
- Border radius: 6px
- Hover: Slight darkening or gradient shift

**Secondary Button**
- Background: Transparent
- Border: 2px solid Deep Purple
- Text: Deep Purple
- Padding: 10px 22px
- Hover: Fill with purple, white text

**Tertiary/Ghost Button**
- Background: Transparent
- Text: Bright Blue `#3BA3D4`
- Hover: Subtle background `#3BA3D410`

### Form Elements

**Input Fields**
- Border: 1px solid Light Gray `#E5E7EB`
- Border radius: 6px
- Focus: Border changes to Bright Blue with subtle glow
- Padding: 12px 16px

**Toggles & Checkboxes**
- Active state: Gradient or Deep Purple
- Inactive state: Light Gray

### Cards

- Background: White
- Border: 1px solid Light Gray or none
- Border radius: 12px
- Shadow: Level 2
- Padding: 24px

---

## Iconography

### Style
- Line icons with 2px stroke weight
- Rounded line caps and corners
- Consistent sizing: 20px or 24px grid
- Can be colored with brand colors for emphasis

### Usage
- Monochrome (Dark Slate) for general use
- Brand colors for interactive or highlighted states
- Maintain consistent visual weight with text

---

## Data Visualization

### Chart Colors
Use the gradient spectrum for multi-category data:
1. Deep Purple `#6B3FA0`
2. Bright Blue `#3BA3D4`
3. Magenta/Pink `#D64D8E`
4. Coral `#E94B5A`
5. Royal Blue `#4A7BB7`

### Bar Charts
- Echo the vertical bars of the icon
- Use gradient fills or solid brand colors
- Consistent spacing and rounded tops

### Graphs & Lines
- Primary data: Deep Purple
- Secondary data: Bright Blue
- Tertiary data: Coral
- Background grid: Light Gray at 30% opacity

---

## Motion & Animation

### Principles
- **Smooth and purposeful**: Animations should feel natural, not jarring
- **Fast but visible**: 200-300ms for most transitions
- **Easing**: Use ease-in-out for most animations

### Common Animations

**Fade In**
- Duration: 200ms
- Easing: ease-in

**Slide Up**
- Duration: 300ms
- Easing: ease-out
- Use for modals, tooltips

**Pulse/Scale**
- Duration: 150ms
- Scale: 1.05
- Use for button hover states

**Bar Animation**
- Animate bars growing from bottom to top
- Stagger timing for multiple bars
- Duration: 400-600ms

---

## Voice & Tone

### Brand Personality
- **Energetic** but not overwhelming
- **Modern** and tech-savvy
- **Approachable** and user-friendly
- **Confident** but humble

### Writing Style
- Clear and concise
- Active voice preferred
- Avoid jargon unless necessary
- Use friendly, conversational tone
- Exclamation points sparingly

### Example Phrases
- "Let's get started" (not "Commence")
- "Your dashboard" (not "User portal")
- "Oops, something went wrong" (not "Error 404")

---

## Spacing & Layout

### Grid System
- Use 8px base unit for spacing
- Common increments: 8px, 16px, 24px, 32px, 48px, 64px
- Maintain consistent rhythm throughout

### Container Widths
- Max width: 1200px for content
- Comfortable reading width: 680px for text-heavy content
- Mobile breakpoint: 768px

### Whitespace
- Generous padding around content blocks
- Minimum 24px between sections
- Use whitespace to create hierarchy and focus

---

## Accessibility

### Color Contrast
- Ensure minimum 4.5:1 contrast ratio for normal text
- 3:1 for large text and UI components
- Never rely solely on color to convey information

### Interactive Elements
- Minimum touch target: 44x44px
- Clear focus states for keyboard navigation
- Descriptive alt text for all images

### Motion
- Respect prefers-reduced-motion settings
- Provide alternatives to motion-heavy content

---

## Do's and Don'ts

### Do's ✓
- Use the gradient consistently and prominently
- Maintain symmetry and balance in layouts
- Keep animations smooth and purposeful
- Use whitespace generously
- Ensure high contrast for readability

### Don'ts ✗
- Don't distort or skew the logo
- Don't use colors outside the brand palette
- Don't overcrowd layouts with too many elements
- Don't use gradients on body text
- Don't animate excessively

---

## File Formats & Delivery

### Logo Files
- SVG for web (scalable, small file size)
- PNG with transparency (for compatibility)
- Minimum sizes: 512x512px, 256x256px, 128x128px, 64x64px

### Color Formats
- HEX for web development
- RGB for digital design
- CMYK for print (consult printer for specific values)

---

## Implementation Notes

### CSS Variables Example

```css
:root {
  /* Colors */
  --color-primary: #6B3FA0;
  --color-secondary: #3BA3D4;
  --color-accent: #E94B5A;
  --color-text-primary: #1A1D2E;
  --color-text-secondary: #6E7191;
  --color-border: #E5E7EB;
  --color-background: #FFFFFF;
  
  /* Gradient */
  --gradient-primary: linear-gradient(90deg, 
    #6B3FA0 0%, 
    #4A7BB7 25%, 
    #3BA3D4 50%, 
    #D64D8E 75%, 
    #E94B5A 100%);
  
  /* Spacing */
  --space-xs: 8px;
  --space-sm: 16px;
  --space-md: 24px;
  --space-lg: 32px;
  --space-xl: 48px;
  
  /* Border Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  
  /* Shadows */
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 25px rgba(0, 0, 0, 0.15);
}
```

---

## Version History

**Version 1.0** - Initial brand identity style guide
- Established color palette, typography, and core visual elements
- Defined UI components and usage guidelines

---

*This style guide is a living document and should be updated as the brand evolves.*