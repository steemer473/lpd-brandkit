# Level Play Digital Brand Kit - Quick Reference

## Brand Colors

### Primary Colors
- **Cyan Blue**: `#00BFFF` (RGB: 0, 191, 255)
- **Coral Orange**: `#FF6633` (RGB: 255, 102, 51)
- **Gradient**: `linear-gradient(135deg, #00BFFF 0%, #FF6633 100%)`

### Neutral Colors
- **Dark**: `#1a1a2e`
- **Dark Gray**: `#2d2d44`
- **Medium Gray**: `#6c757d`
- **Light Gray**: `#e9ecef`
- **Off White**: `#f8f9fa`

## Logo Files

### Primary
- `level-play-digital-logo-gradient-full.svg`

### Solid Colors
- `level-play-digital-logo-single-cyan.svg`
- `level-play-digital-logo-single-orange.svg`
- `level-play-digital-logo-white.svg`
- `level-play-digital-logo-black.svg`

### Variations
- `level-play-digital-logo-horizontal.svg`
- `level-play-digital-logo-icon-only.svg`
- `level-play-digital-logo-wordmark-only.svg`

## Typography

### Fonts
- **Primary**: System fonts (San Francisco, Segoe UI, Roboto)
- **Secondary**: Georgia, Times New Roman
- **Monospace**: Courier New

### Sizes
- **H1**: 3rem (48px)
- **H2**: 2.25rem (36px)
- **H3**: 1.75rem (28px)
- **Body**: 1rem (16px)

## File Locations

### Logos
`01-logos/`
- `primary/` - Main logo files
- `solid-versions/` - Single color versions
- `animated/` - Animated versions
- `variations/` - Layout variations
- `backgrounds/` - Background previews

### Favicons
`02-favicons/`
- All favicon sizes (16px to 512px)
- `site.webmanifest`
- `browserconfig.xml`

### Colors
`03-colors/`
- `brand-colors.css`
- `color-palette.md`

### Typography
`04-typography/`
- `typography-guide.md`
- `type-scale.css`
- `brand-voice-guide.md`

### Web Assets
`05-web-assets/`
- `brand-css-variables.css`
- `og-image-generator.html`

### Print Assets
`06-print-assets/`
- `business-card-front.html`
- `business-card-back.html`
- `letterhead-template.html`
- `print-specifications.md`

### Templates
`07-templates/`
- `email-signature.html`

### Documentation
`08-documentation/`
- `logo-usage-guide.md`
- `quick-reference.md` (this file)
- `changelog.md`

## Quick Rules

### Logo Usage
- ✅ Minimum 1" width
- ✅ Maintain clear space
- ✅ Use appropriate version for background
- ❌ Never distort or rotate
- ❌ Never change colors

### Colors
- ✅ Use exact HEX values
- ✅ Gradient direction: 135deg
- ❌ Never modify gradient direction
- ❌ Never use approximate colors

### Typography
- ✅ Use system fonts for performance
- ✅ Maintain line height 1.5-1.7
- ✅ Ensure 4.5:1 contrast minimum
- ❌ Don't use decorative fonts

## Common Tasks

### Add Logo to Website
```html
<img src="path/to/level-play-digital-logo-gradient-full.svg" 
     alt="Level Play Digital Logo" 
     width="200">
```

### Use Brand Colors in CSS
```css
color: #00BFFF; /* Cyan */
color: #FF6633; /* Orange */
background: linear-gradient(135deg, #00BFFF 0%, #FF6633 100%);
```

### Import Brand Variables
```css
@import url('path/to/brand-colors.css');
@import url('path/to/type-scale.css');
```

## File Formats

### Web
- **Logos**: SVG (preferred) or PNG (512px, 1200px)
- **Images**: PNG or JPG
- **Icons**: SVG

### Print
- **Logos**: SVG, PDF, EPS
- **Images**: TIFF, PNG (300 DPI)
- **Documents**: PDF/X-1a

## Dimensions

### Social Media
- **OG Image**: 1200x630px
- **Twitter Card**: 1200x675px
- **Profile Picture**: 400x400px (use icon)

### Print
- **Business Card**: 3.5" x 2"
- **Letterhead**: 8.5" x 11"
- **Bleed**: 0.125" (3mm)

## Support

For questions or issues:
1. Check relevant guide in `08-documentation/`
2. Review `BRAND_GUIDELINES.md`
3. Contact brand team

## Version
- **Brand Kit Version**: 1.0
- **Last Updated**: [Date]

