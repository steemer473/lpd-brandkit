# Level Play Digital Typography Guide

## Overview

This guide defines the typography system for Level Play Digital, ensuring consistent and professional typography across all brand communications. This guide matches the implementation in `type-scale.css` and follows web typography best practices for readability, accessibility, and performance.

## File Structure

- **`typography-guide.md`** - This documentation file (human-readable guide)
- **`type-scale.css`** - CSS implementation with variables and utility classes
- **`brand-colors.css`** - Color variables (import before type-scale.css for color variables)

**Note**: Import `brand-colors.css` before `type-scale.css` to use shared color variables, or use the fallback color variables defined in `type-scale.css`.

## Font Families

### Primary Font (Headings & UI)
- **Font Stack**: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`
- **Usage**: Headings (H1-H6), navigation, buttons, UI elements
- **Characteristics**: Modern, clean, system fonts for optimal performance and consistency

### Secondary Font (Body Text)
- **Font Stack**: `Georgia, "Times New Roman", serif`
- **Usage**: Body text, long-form content, articles
- **Characteristics**: Readable serif font for extended reading

### Monospace Font (Code & Technical)
- **Font Stack**: `"Courier New", Courier, monospace`
- **Usage**: Code snippets, technical documentation, data display
- **Characteristics**: Fixed-width for code alignment

## Type Scale

### Heading Hierarchy

#### H1 - Hero/Display
- **Font Size**: 3rem (48px)
- **Line Height**: 1.2
- **Font Weight**: 700 (Bold)
- **Letter Spacing**: -0.02em
- **Usage**: Main page titles, hero sections

#### H2 - Section Headings
- **Font Size**: 2.25rem (36px)
- **Line Height**: 1.3
- **Font Weight**: 700 (Bold)
- **Letter Spacing**: -0.01em
- **Usage**: Major section headings

#### H3 - Subsection Headings
- **Font Size**: 1.75rem (28px)
- **Line Height**: 1.4
- **Font Weight**: 600 (Semi-bold)
- **Letter Spacing**: 0
- **Usage**: Subsection headings
- **CSS Variable**: `var(--font-size-3xl)`

#### H4 - Card Titles
- **Font Size**: 1.5rem (24px)
- **Line Height**: 1.4
- **Font Weight**: 600 (Semi-bold)
- **Letter Spacing**: 0
- **Usage**: Card titles, feature headings
- **CSS Variable**: `var(--font-size-2xl)`

#### H5 - Small Headings
- **Font Size**: 1.25rem (20px)
- **Line Height**: 1.5
- **Font Weight**: 600 (Semi-bold)
- **Letter Spacing**: 0
- **Usage**: Small section headings

#### H6 - Micro Headings
- **Font Size**: 1rem (16px)
- **Line Height**: 1.5
- **Font Weight**: 600 (Semi-bold)
- **Letter Spacing**: 0.01em
- **Usage**: Labels, captions

### Body Text

#### Large Body
- **Font Size**: 1.125rem (18px)
- **Line Height**: 1.7
- **Font Weight**: 400 (Regular)
- **Usage**: Lead paragraphs, important content

#### Regular Body
- **Font Size**: 1rem (16px)
- **Line Height**: 1.6
- **Font Weight**: 400 (Regular)
- **Usage**: Standard body text

#### Small Body
- **Font Size**: 0.875rem (14px)
- **Line Height**: 1.5
- **Font Weight**: 400 (Regular)
- **Usage**: Secondary text, captions

#### Extra Small
- **Font Size**: 0.75rem (12px)
- **Line Height**: 1.4
- **Font Weight**: 400 (Regular)
- **Usage**: Fine print, disclaimers

## Font Weights

- **100**: Thin (rarely used)
- **300**: Light (rarely used)
- **400**: Regular (body text)
- **500**: Medium (emphasis)
- **600**: Semi-bold (headings)
- **700**: Bold (strong emphasis, hero text)

## Color Usage

### Text Colors

- **Primary Text**: `#1a1a2e` (Dark) - Main body text
- **Secondary Text**: `#6c757d` (Medium Gray) - Supporting text
- **Light Text**: `#ffffff` - Text on dark/gradient backgrounds
- **Brand Accent**: `#00BFFF` (Cyan) - Links, highlights
- **Brand Secondary**: `#FF6633` (Orange) - Secondary accents

### Text on Backgrounds

- **Dark Background**: Use white (`#ffffff`) text
- **Light Background**: Use dark (`#1a1a2e`) text
- **Gradient Background**: Use white (`#ffffff`) text
- **Brand Color Background**: Use white (`#ffffff`) text

## Spacing & Layout

### Paragraph Spacing
- **Margin Bottom**: 1rem (16px) for body text
- **Margin Bottom**: 1.5rem (24px) for headings

### Line Length
- **Optimal**: 45-75 characters per line
- **Maximum**: 80 characters for readability

### Vertical Rhythm
- **Base Unit**: 8px
- **Spacing Scale**: 8px, 16px, 24px, 32px, 48px, 64px

## Usage Guidelines

### Do's
- ✅ Use system fonts for optimal performance and consistency
- ✅ Maintain consistent line heights (1.5-1.7 for body, 1.2-1.4 for headings)
- ✅ Use appropriate font weights for hierarchy (400 for body, 600-700 for headings)
- ✅ Ensure sufficient contrast (minimum 4.5:1 for normal text, 3:1 for large text)
- ✅ Use brand colors for links and accents (`--color-primary-blue`, `--color-primary-orange`)
- ✅ Use CSS variables from `type-scale.css` for consistency
- ✅ Follow responsive breakpoints (mobile-first approach)
- ✅ Test typography on multiple devices and screen sizes

### Don'ts
- ❌ Don't use more than 2-3 font families per page
- ❌ Don't use font sizes smaller than 12px (accessibility requirement)
- ❌ Don't use gradient text on small text (use solid colors for readability)
- ❌ Don't use decorative fonts that conflict with brand
- ❌ Don't use excessive font weights (stick to 400, 600, 700)
- ❌ Don't override line heights without considering readability
- ❌ Don't use fixed pixel values - use rem/em or CSS variables

## Responsive Typography

### Mobile (< 768px)
- **H1**: 2rem (32px) - Reduced from desktop for better mobile readability
- **H2**: 1.75rem (28px) - `var(--font-size-3xl)`
- **H3**: 1.5rem (24px) - `var(--font-size-2xl)`
- **Body**: 1rem (16px) - `var(--font-size-base)`

### Tablet (768px - 1024px)
- **H1**: 2.5rem (40px)
- **H2**: 2rem (32px)
- **H3**: 1.625rem (26px)
- **Body**: 1rem (16px)

### Desktop (> 1024px)
- **H1**: 3rem (48px)
- **H2**: 2.25rem (36px)
- **H3**: 1.75rem (28px)
- **Body**: 1rem (16px)

## Accessibility

### Contrast Requirements
- **Normal Text**: Minimum 4.5:1 contrast ratio (WCAG AA)
- **Large Text** (18px+ or 14px+ bold): Minimum 3:1 contrast ratio (WCAG AA)
- **UI Components**: Minimum 3:1 contrast ratio
- **Enhanced Contrast** (WCAG AAA): 7:1 for normal text, 4.5:1 for large text

### Readability Best Practices
- **Minimum font size**: 12px (never go below this)
- **Recommended font size**: 16px (1rem) for body text - optimal for reading
- **Line height**: 1.5-1.7 for body text, 1.2-1.4 for headings
- **Line length**: 45-75 characters per line (optimal), max 80 characters
- **Paragraph spacing**: 1rem (16px) minimum between paragraphs
- **Word spacing**: Avoid excessive letter-spacing on body text

### Mobile Considerations
- Larger touch targets (minimum 44x44px)
- Increased spacing between interactive elements
- Reduced font sizes for mobile (see Responsive Typography section)
- Test on actual devices, not just browser dev tools

## CSS Variables Reference

All typography values are available as CSS custom properties in `type-scale.css`:

### Font Sizes
- `--font-size-xs`: 0.75rem (12px)
- `--font-size-sm`: 0.875rem (14px)
- `--font-size-base`: 1rem (16px)
- `--font-size-lg`: 1.125rem (18px)
- `--font-size-xl`: 1.25rem (20px)
- `--font-size-2xl`: 1.5rem (24px)
- `--font-size-3xl`: 1.75rem (28px)
- `--font-size-4xl`: 2.25rem (36px)
- `--font-size-5xl`: 3rem (48px)

### Line Heights
- `--line-height-tight`: 1.2
- `--line-height-snug`: 1.3
- `--line-height-normal`: 1.5
- `--line-height-relaxed`: 1.6
- `--line-height-loose`: 1.7

### Font Weights
- `--font-weight-light`: 300
- `--font-weight-normal`: 400
- `--font-weight-medium`: 500
- `--font-weight-semibold`: 600
- `--font-weight-bold`: 700

### Letter Spacing
- `--letter-spacing-tighter`: -0.02em
- `--letter-spacing-tight`: -0.01em
- `--letter-spacing-normal`: 0
- `--letter-spacing-wide`: 0.01em
- `--letter-spacing-wider`: 0.05em

## Examples

### Hero Section (Using CSS Variables)
```css
.hero-title {
  font-family: var(--font-family-primary);
  font-size: var(--font-size-5xl);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
  color: #ffffff;
  letter-spacing: var(--letter-spacing-tighter);
}
```

### Body Text (Using CSS Variables)
```css
.body-text {
  font-family: var(--font-family-secondary);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-normal);
  line-height: var(--line-height-relaxed);
  color: var(--color-dark);
}
```

### Link Style (Using CSS Variables)
```css
a {
  color: var(--color-primary-blue);
  text-decoration: none;
  transition: color var(--transition-base);
}

a:hover {
  color: var(--color-primary-orange);
  text-decoration: underline;
}
```

### Utility Classes Available
The `type-scale.css` file includes utility classes:
- `.text-lg`, `.text-sm`, `.text-xs` - Text size utilities
- `.text-primary-blue`, `.text-primary-orange` - Brand color utilities
- `.text-dark`, `.text-gray`, `.text-light`, `.text-white` - Color utilities
- `.text-left`, `.text-center`, `.text-right` - Alignment utilities
- `.font-light`, `.font-normal`, `.font-medium`, `.font-semibold`, `.font-bold` - Weight utilities

