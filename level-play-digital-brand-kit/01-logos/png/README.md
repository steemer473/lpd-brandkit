# PNG Logo Files

This directory contains PNG versions of all primary and solid-version logos.

## Contents

### Primary Logo
- `level-play-digital-logo-gradient-full-*.png` - Main brand logo with gradient

### Solid Version Logos
- `level-play-digital-logo-black-*.png` - Black version
- `level-play-digital-logo-rich-black-*.png` - Rich black version (for print)
- `level-play-digital-logo-single-navy-blue-*.png` - Navy blue version
- `level-play-digital-logo-single-orange-*.png` - Orange version
- `level-play-digital-logo-two-color-cyan-orange-*.png` - Two-color cyan-orange version
- `level-play-digital-logo-two-color-navy-orange-*.png` - Two-color navy-orange version
- `level-play-digital-logo-white-*.png` - White version

## Available Sizes

Each logo is available in four standard sizes:

- **256px** - Small web use, thumbnails
- **512px** - Standard web use, social media
- **1200px** - Large web use, high-resolution displays
- **2400px** - Ultra-high resolution, retina displays, print

## Usage

### Web Applications
```html
<!-- Standard size -->
<img src="level-play-digital-brand-kit/01-logos/png/level-play-digital-logo-gradient-full-512px.png" 
     alt="Level Play Digital" 
     width="512">

<!-- Retina/high-DPI displays -->
<img src="level-play-digital-brand-kit/01-logos/png/level-play-digital-logo-gradient-full-1200px.png" 
     alt="Level Play Digital" 
     width="600"
     srcset="level-play-digital-brand-kit/01-logos/png/level-play-digital-logo-gradient-full-1200px.png 2x">
```

### When to Use PNG vs SVG

**Use PNG when:**
- You need a raster format for compatibility
- Working with design software that doesn't support SVG
- Creating composite images or mockups
- Email signatures (some email clients don't support SVG)
- Social media uploads that require PNG

**Use SVG when:**
- Building websites (better scalability and smaller file sizes)
- Need to change colors programmatically
- Want crisp rendering at any size
- Working with modern web applications

## Regenerating PNGs

To regenerate all PNG files, run:

```bash
node level-play-digital-brand-kit/01-logos/scripts/generate-png-logos.js
```

**Requirements:**
- Node.js installed
- sharp library: `npm install sharp`

## File Count

- **Total PNG files:** 32
- **Primary logos:** 4 files (1 logo × 4 sizes)
- **Solid-version logos:** 28 files (7 logos × 4 sizes)

---

**Generated:** 2025-01-15  
**Source:** SVG files from `primary/` and `solid-versions/` directories

