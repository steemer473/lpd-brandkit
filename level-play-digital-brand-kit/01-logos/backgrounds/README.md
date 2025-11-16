# Logo Background Files

This folder contains logo previews and generation tools for creating PNG files showing the logo on different backgrounds.

## Required Files

- `level-play-digital-logo-on-dark-bg.png` (1200px width)
- `level-play-digital-logo-on-light-bg.png` (1200px width)
- `level-play-digital-logo-transparent-bg.png` (1200px width, transparent background)

## Preview Files

- `logo-background-previews.html` - Visual preview of all background variations
- `generate-background-pngs.js` - Node.js script to generate PNG files automatically

## Generation Methods

### Method 1: Node.js Script (Recommended)

1. Install dependencies:
   ```bash
   npm install sharp
   ```

2. Run the generator:
   ```bash
   node generate-background-pngs.js
   ```

### Method 2: ImageMagick

```bash
# Dark background
convert -background "#1a1a2e" -resize 1200x ../primary/level-play-digital-logo-gradient-full.svg level-play-digital-logo-on-dark-bg.png

# Light background
convert -background "#ffffff" -resize 1200x ../primary/level-play-digital-logo-gradient-full.svg level-play-digital-logo-on-light-bg.png

# Transparent background
convert -background none -resize 1200x ../primary/level-play-digital-logo-gradient-full.svg level-play-digital-logo-transparent-bg.png
```

### Method 3: Browser Screenshot

1. Open `logo-background-previews.html` in a browser
2. Use browser DevTools to take screenshots of each preview
3. Save as PNG files with the specified names

### Method 4: Inkscape (GUI)

1. Open the SVG file in Inkscape
2. Set document background color in Document Properties
3. Export as PNG at 1200px width
4. Repeat for each background variation

## Background Colors

- **Dark Background**: #1a1a2e (RGB: 26, 26, 46)
- **Light Background**: #ffffff (RGB: 255, 255, 255)
- **Transparent**: No background (alpha channel preserved)

## File Specifications

- **Width**: 1200px
- **Format**: PNG-24
- **Transparency**: Preserved for transparent version
- **Aspect Ratio**: Maintained from source SVG

