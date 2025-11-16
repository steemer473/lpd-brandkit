# Level Play Digital Brand Kit - Project Instructions

## Project Overview

This brand kit contains all assets, guidelines, and documentation for maintaining consistent brand identity across all Level Play Digital communications and materials.

## Directory Structure

```
level-play-digital-brand-kit/
├── 01-logos/              # Logo files and variations
│   ├── primary/          # Main logo files
│   ├── solid-versions/   # Single color versions
│   ├── animated/         # Animated logo variations
│   ├── variations/       # Layout variations
│   ├── backgrounds/      # Background previews
│   └── scripts/          # PNG conversion scripts
├── 02-favicons/          # Favicon files and web manifests
├── 03-colors/            # Color palette and CSS variables
├── 04-typography/        # Typography guides and CSS
├── 05-web-assets/        # Web-specific assets
├── 06-print-assets/      # Print templates and specifications
├── 07-templates/         # Email and other templates
└── 08-documentation/     # Brand guidelines and documentation
```

## Getting Started

### 1. Review Brand Guidelines
Start by reading:
- `BRAND_GUIDELINES.md` - Comprehensive brand guide
- `08-documentation/logo-usage-guide.md` - Logo usage instructions
- `08-documentation/quick-reference.md` - Quick reference guide

### 2. Understand Brand Colors
Review color specifications in:
- `03-colors/color-palette.md` - Complete color documentation
- `03-colors/brand-colors.css` - CSS variables

### 3. Explore Logo Variations
Browse logo files in `01-logos/`:
- Primary gradient logo
- Solid color versions
- Animated versions
- Layout variations

## Using Brand Assets

### Logos

#### For Web
```html
<!-- Use SVG for best quality -->
<img src="01-logos/primary/level-play-digital-logo-gradient-full.svg" 
     alt="Level Play Digital Logo">
```

#### For Print
- Use SVG or PDF format
- Convert to CMYK color space
- Ensure 300 DPI resolution
- See `06-print-assets/print-specifications.md`

### Colors

#### In CSS
```css
/* Import brand colors */
@import url('03-colors/brand-colors.css');

/* Use CSS variables */
color: var(--color-primary-blue);
background: var(--gradient-primary);
```

#### In Design Software
- Use exact HEX values: `#00BFFF`, `#FF6633`
- For print: Convert to CMYK values
- See `03-colors/color-palette.md` for all values

### Typography

#### In CSS
```css
/* Import typography system */
@import url('04-typography/type-scale.css');

/* Use utility classes */
<h1 class="h1">Heading</h1>
<p class="text-lg">Large body text</p>
```

## File Formats

### Recommended Formats

**Logos:**
- SVG (web, scalable)
- PNG (web, 512px or 1200px)
- PDF (print)

**Colors:**
- CSS variables (web)
- HEX values (design)
- CMYK values (print)

**Typography:**
- CSS files (web)
- Font files (if custom fonts)

## Brand Rules

### Critical Rules (Never Break)
1. **Gradient Direction**: Always 135deg (diagonal top-left to bottom-right)
2. **Color Values**: Use exact HEX values (#00BFFF, #FF6633)
3. **Logo Integrity**: Never distort, rotate, or modify logo
4. **Clear Space**: Always maintain minimum clear space
5. **File Quality**: Use appropriate resolution for application

### Best Practices
- Use SVG format when possible
- Maintain brand consistency across materials
- Follow logo usage guidelines
- Ensure accessibility (contrast, alt text)
- Test on intended background/medium

## Common Tasks

### Adding Logo to Website
1. Choose appropriate logo version
2. Use SVG format
3. Set appropriate size (minimum 200px)
4. Include alt text
5. Ensure clear space

### Creating Print Materials
1. Use print-ready files (PDF, SVG)
2. Convert colors to CMYK
3. Add bleed (0.125")
4. Include crop marks
5. Verify 300 DPI resolution

### Generating Social Media Images
1. Use OG image generator (`05-web-assets/og-image-generator.html`)
2. Follow platform-specific dimensions
3. Use brand colors and logo
4. Export as PNG

### Converting SVG to PNG
1. Use conversion scripts (`01-logos/scripts/`)
2. Choose appropriate size (512px, 1200px, or 300dpi)
3. Maintain aspect ratio
4. Preserve transparency if needed

## Quality Assurance

### Before Using Assets
- [ ] Verify correct logo version
- [ ] Check color accuracy
- [ ] Confirm file format appropriateness
- [ ] Ensure sufficient resolution
- [ ] Test on intended background
- [ ] Verify clear space maintained

### Before Printing
- [ ] Convert to CMYK
- [ ] Verify 300 DPI resolution
- [ ] Add bleed and crop marks
- [ ] Embed fonts
- [ ] Proofread all text
- [ ] Request color proof

## Updates and Maintenance

### Version Control
- Track changes in `08-documentation/changelog.md`
- Maintain version numbers
- Document updates and reasons

### Adding New Assets
1. Follow naming conventions
2. Place in appropriate directory
3. Update documentation
4. Add to changelog

### Updating Guidelines
1. Review current guidelines
2. Make necessary updates
3. Update all related documentation
4. Notify team of changes

## Support and Resources

### Documentation Files
- `BRAND_GUIDELINES.md` - Complete brand guide
- `08-documentation/logo-usage-guide.md` - Logo usage
- `08-documentation/quick-reference.md` - Quick reference
- `06-print-assets/print-specifications.md` - Print specs
- `04-typography/typography-guide.md` - Typography guide
- `04-typography/brand-voice-guide.md` - Brand voice

### Tools and Scripts
- PNG conversion: `01-logos/scripts/convert-svg-to-png.js`
- Background previews: `01-logos/backgrounds/logo-background-previews.html`
- OG image generator: `05-web-assets/og-image-generator.html`

## Contact

For questions, issues, or custom requests:
- **Brand Manager**: [Contact Information]
- **Design Team**: [Contact Information]

## License and Usage

All brand assets are proprietary to Level Play Digital.
- Internal use: Approved
- External use: Requires brand team approval
- Modifications: Not permitted without approval

## Version History

- **v1.0**: Initial brand kit release
- See `08-documentation/changelog.md` for detailed history

