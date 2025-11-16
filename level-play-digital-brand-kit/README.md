# Level Play Digital Brand Kit

Complete brand identity system for Level Play Digital. This brand kit contains all assets, guidelines, and resources needed to maintain consistent brand representation across all media.

## 📁 Contents

### 01-logos/
Complete logo system including:
- **Primary**: Gradient logo (main brand logo)
- **Solid Versions**: Black, white, cyan, orange, rich-black, two-color
- **Animated**: Gradient shift, fade-in, glow pulse animations
- **Variations**: Horizontal, stacked, icon-only, wordmark-only
- **Backgrounds**: Context examples on different backgrounds

### 02-favicons/
Complete favicon package:
- All standard sizes (16, 32, 48, 64, 96, 128, 180, 192, 512)
- ICO file (multi-resolution)
- SVG master file
- site.webmanifest and browserconfig.xml

### 03-colors/
Brand color system:
- `brand-colors.css` - CSS variables for all brand colors
- `color-palette.md` - Complete color documentation
- Color swatches and palette files

### 04-typography/
Typography guidelines:
- Font families and pairings
- Type scale and sizing
- Usage guidelines

### 05-web-assets/
Web-specific assets:
- Open Graph images
- Twitter card images
- Email signature template
- CSS variables file

### 06-print-assets/
Print-ready templates:
- Business card templates
- Letterhead template
- Print specifications

### 07-templates/
Ready-to-use templates:
- Email signature (HTML)
- Social media templates
- Presentation templates

### 08-documentation/
Complete documentation:
- Brand guidelines
- Logo usage guide
- Quick reference
- Changelog

## 🎨 Brand Colors

### Primary Colors
- **Cyan Blue**: `#00BFFF` (HSL: `193, 100%, 50%`)
- **Coral Orange**: `#FF6633` (HSL: `14, 100%, 60%`)

### Brand Gradient
- **CSS**: `linear-gradient(135deg, #00BFFF 0%, #FF6633 100%)`
- **Direction**: 135deg (diagonal top-left to bottom-right)
- **CRITICAL**: Never modify gradient direction or color values

### Neutral Colors
- Dark: `#1a1a2e`
- Dark Gray: `#2d2d44`
- Medium Gray: `#6c757d`
- Light Gray: `#e9ecef`
- Off White: `#f8f9fa`

## 📐 Logo Usage

### When to Use Which Version

**Gradient Logo (Primary)**
- Digital applications
- Website headers
- Marketing materials
- Social media profiles

**Solid Color Versions**
- Single-color applications
- Print materials (use rich-black for professional print)
- Monochrome designs
- Reverse applications (white on dark)

**Icon Only**
- Favicons
- App icons
- Small spaces (minimum 48×48px)
- Social media profile pictures

**Wordmark Only**
- Text-only applications
- Simplified branding
- When symbol doesn't fit

### Minimum Sizes
- Primary Logo: 120px width minimum
- Icon Only: 48×48px minimum
- Wordmark: 200px width minimum

### Clear Space
Maintain clear space equal to the height of the "L" in "LEVEL" on all sides of the logo.

## 🚀 Quick Start

### Using Logo Files

```html
<!-- SVG Logo (Recommended) -->
<img src="01-logos/primary/level-play-digital-logo-gradient-full.svg" 
     alt="Level Play Digital" 
     width="300">
```

### Using Color Variables

```html
<!-- Include CSS file -->
<link rel="stylesheet" href="03-colors/brand-colors.css">

<!-- Use in your CSS -->
.my-element {
  color: var(--color-primary-blue);
  background: var(--gradient-primary);
}
```

### Implementing Favicons

```html
<!-- Standard Favicons -->
<link rel="icon" type="image/x-icon" href="02-favicons/favicon.ico">
<link rel="icon" type="image/png" sizes="32x32" href="02-favicons/level-play-digital-favicon-32x32.png">

<!-- Apple Touch Icon -->
<link rel="apple-touch-icon" sizes="180x180" href="02-favicons/level-play-digital-favicon-180x180-apple-touch-icon.png">

<!-- Android Chrome -->
<link rel="icon" type="image/png" sizes="192x192" href="02-favicons/level-play-digital-favicon-192x192-android-chrome.png">
<link rel="icon" type="image/png" sizes="512x512" href="02-favicons/level-play-digital-favicon-512x512-android-chrome.png">

<!-- Web Manifest -->
<link rel="manifest" href="02-favicons/site.webmanifest">
```

## 📋 Brand Guidelines

### Do's
- ✅ Use exact HEX color values (#00BFFF, #FF6633)
- ✅ Maintain 135deg gradient direction
- ✅ Use appropriate logo version for context
- ✅ Maintain minimum sizes and clear space
- ✅ Use SVG format when possible for scalability

### Don'ts
- ❌ Never modify gradient direction
- ❌ Never use approximate colors
- ❌ Never stretch or distort logos
- ❌ Never use gradient on small text
- ❌ Never modify logo proportions

## 🎯 Showcase Pages

Interactive showcase pages are available to preview all brand assets:

- **logo-showcase.html** - View all logo variations
- **color-palette-showcase.html** - Explore color system
- **favicon-showcase.html** - See all favicon sizes
- **typography-showcase.html** - Typography examples
- **web-assets-showcase.html** - Web asset previews

## 📞 Support

For questions about brand usage or to request additional assets, please refer to the documentation in the `08-documentation/` folder or contact the brand team.

## 📄 License

All brand assets are proprietary to Level Play Digital. Usage is restricted to authorized applications only.

---

**Version**: 1.0  
**Last Updated**: 2025-01-15  
**Brand**: Level Play Digital

