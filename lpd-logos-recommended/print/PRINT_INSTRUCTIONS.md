# Print Logo Usage Instructions

## Overview

This folder contains print-ready logo files in three formats: **PDF** (preferred), **SVG** (preferred), and **PNG** (fallback). For professional printing, always use PDF or SVG formats when possible.

## File Formats

### PDF Files (Recommended)
- **Best for:** Professional printing, business cards, letterhead
- **Advantages:** Vector-based, scalable, print-ready, embedded fonts
- **Files:** Located in `PDF/` folder
- **Usage:** Import directly into design software (Adobe InDesign, Illustrator, etc.)

### SVG Files (Recommended)
- **Best for:** Design software that supports SVG, scalable applications
- **Advantages:** Vector-based, scalable, small file size
- **Files:** Located in `SVG/` folder
- **Usage:** Import into design software or convert to PDF/EPS

### PNG Files (Fallback Only)
- **Best for:** When PDF/SVG not available, web-to-print workflows
- **Advantages:** Universal compatibility
- **Disadvantages:** Raster format, fixed resolution
- **Files:** Located in `PNG/` folder (2400px width)
- **Usage:** Use only when vector formats unavailable

## Logo Versions for Print

### Rich Black Logo
- **File:** `level-play-digital-logo-rich-black.*`
- **Use for:** Professional print, business cards, letterhead
- **Color:** CMYK optimized (C:60 M:40 Y:40 K:100)
- **Background:** White or light backgrounds

### Gradient Logo
- **File:** `level-play-digital-logo-gradient-full.*`
- **Use for:** Color printing, marketing materials
- **Colors:** Cyan (#00BFFF) to Orange (#FF6633) gradient
- **Background:** White or light backgrounds

### White Logo
- **File:** `level-play-digital-logo-white.*`
- **Use for:** Dark backgrounds, reverse applications
- **Background:** Dark backgrounds only

### Black Logo
- **File:** `level-play-digital-logo-black.*`
- **Use for:** Single-color printing, monochrome applications
- **Background:** White or light backgrounds

## Print Specifications

### Resolution Requirements
- **Minimum:** 300 DPI
- **Business Cards:** 300 DPI minimum
- **Letterhead:** 300 DPI minimum
- **Large Format:** 150-200 DPI (depending on viewing distance)

### Color Conversion (CRITICAL)

**Before printing, convert RGB to CMYK:**

#### Brand Colors in CMYK:
- **Cyan Blue:** C:100 M:25 Y:0 K:0
- **Coral Orange:** C:0 M:60 Y:80 K:0
- **Rich Black:** C:60 M:40 Y:40 K:100
- **White:** C:0 M:0 Y:0 K:0

#### Conversion Process:
1. Open file in design software (Adobe InDesign, Illustrator, Photoshop)
2. Convert color mode from RGB to CMYK
3. Use color profile: ISO Coated v2 (ECI) or GRACoL
4. Verify colors match brand standards
5. Save as PDF/X-1a or PDF/X-4

### Business Card Specifications

**Card Size:** 3.5" × 2" (89mm × 51mm)

**Logo Placement:**
- **Front:** Top left or center top
- **Size:** 1-1.5" width minimum
- **Clear Space:** Equal to height of "LEVEL PLAY" text

**Bleed:** 0.125" (3mm) on all sides  
**Safe Area:** 0.25" (6mm) from trim edge

### Letterhead Specifications

**Paper Size:** 8.5" × 11" (US Letter) or A4 (210mm × 297mm)

**Logo Placement:**
- **Header:** Top left corner
- **Size:** 1-2" width
- **Clear Space:** Equal to height of "LEVEL PLAY" text

**Margins:** 1" (25mm) minimum on all sides

## File Preparation Checklist

Before sending files to print:

- [ ] Colors converted to CMYK
- [ ] Resolution is 300 DPI minimum (for PNG files)
- [ ] Bleed added (0.125" / 3mm) if needed
- [ ] Safe area respected (0.25" / 6mm)
- [ ] Crop marks included (if required)
- [ ] Fonts embedded (for PDF files)
- [ ] File saved as PDF/X-1a or PDF/X-4
- [ ] Proofread all text
- [ ] Logo placement verified
- [ ] Brand colors verified

## Using PDF Files

### In Adobe InDesign:
1. File → Place → Select PDF file
2. Logo will import as vector
3. Resize as needed (maintains quality)
4. Colors already in CMYK

### In Adobe Illustrator:
1. File → Open → Select PDF file
2. Edit as vector artwork
3. Export as needed

### In Other Design Software:
- Most design software supports PDF import
- PDF files maintain vector quality at any size
- Colors are print-ready

## Using SVG Files

### Converting SVG to PDF:
1. Open SVG in Adobe Illustrator
2. File → Save As → PDF
3. Choose PDF/X-1a or PDF/X-4 preset
4. Ensure "Preserve Illustrator Editing Capabilities" is unchecked for print

### Alternative Method (Command Line):
```bash
# Using Inkscape
inkscape --export-filename=logo.pdf logo.svg

# Using ImageMagick
convert logo.svg logo.pdf
```

## Using PNG Files (Fallback)

### When to Use:
- PDF/SVG not available in your workflow
- Web-to-print applications
- Quick mockups

### Limitations:
- Fixed resolution (2400px width)
- Cannot scale beyond original size without quality loss
- Must convert RGB to CMYK before printing

### Conversion Process:
1. Open PNG in Photoshop
2. Image → Mode → CMYK Color
3. Adjust colors to match CMYK values above
4. Save as TIFF or PDF

## Common Print Issues

### Color Mismatch
**Problem:** Colors don't match screen  
**Solution:** 
- Use CMYK color values provided above
- Request color proof from printer
- Use color-managed workflow

### Font Issues
**Problem:** Fonts not displaying correctly  
**Solution:**
- Use PDF files (fonts embedded)
- Or convert fonts to outlines in design software

### Resolution Problems
**Problem:** Images appear pixelated  
**Solution:**
- Use PDF or SVG files (vector = scalable)
- Or ensure PNG files are at least 300 DPI at final print size

### Bleed Problems
**Problem:** White edges after trimming  
**Solution:**
- Extend graphics to bleed area (0.125" / 3mm)
- Include crop marks for trimming

## Quality Control

### Pre-Press Checklist:
1. ✓ Verify all colors are CMYK
2. ✓ Check resolution is adequate (300 DPI minimum)
3. ✓ Confirm bleed and safe areas
4. ✓ Proofread all text
5. ✓ Verify logo placement and size
6. ✓ Check file format and compatibility

### Proof Review:
1. Request digital proof first
2. Review color accuracy
3. Check text for errors
4. Verify layout and spacing
5. Approve before final print

## File Delivery

### Preferred Formats:
- **PDF/X-1a** - Best compatibility
- **PDF/X-4** - Better color management
- **High-res TIFF** - For raster images (300 DPI)

### File Naming:
- Use descriptive names: `business-card-front.pdf`
- Include version numbers if needed
- Include date if multiple versions

### Delivery Method:
- Email for small files (< 10MB)
- Cloud storage for large files
- FTP for very large files

## Contact

For print-related questions or custom specifications:
- Review brand guidelines documentation
- Contact the brand team
- Consult with your print vendor

---

**Version:** 1.0  
**Last Updated:** 2025-01-15

