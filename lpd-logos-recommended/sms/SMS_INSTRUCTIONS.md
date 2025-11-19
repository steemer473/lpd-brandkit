# SMS Logo Usage Instructions

## Overview

This folder contains optimized PNG logo files specifically sized for SMS (text messaging) applications. Files are 256px width with small file sizes (3-8KB) to ensure fast delivery and compatibility with SMS platforms.

## Folder Structure

### icon-only/
Contains icon-only versions of the logo (circular symbol only):
- Smallest file size (~3-5KB)
- Best for: Profile pictures, avatars, small spaces
- Available in: gradient, white, navy, orange

### full-logo/
Contains full logo versions (text + symbol):
- Slightly larger file size (~3-8KB)
- Best for: When space allows, brand recognition important
- Available in: white, black, gradient

## Available Files

### Icon-Only Versions (icon-only/)

| File | Size | Use Case |
|------|------|----------|
| `level-play-digital-logo-icon-only-256px.png` | ~4KB | Default icon, gradient version |
| `level-play-digital-logo-icon-only-white-256px.png` | ~3KB | Dark backgrounds |
| `level-play-digital-logo-icon-only-navy-256px.png` | ~3KB | Professional contexts |
| `level-play-digital-logo-icon-only-orange-256px.png` | ~3KB | Brand color emphasis |

### Full Logo Versions (full-logo/)

| File | Size | Use Case |
|------|------|----------|
| `level-play-digital-logo-white-256px.png` | ~5KB | Dark backgrounds |
| `level-play-digital-logo-black-256px.png` | ~5KB | Light backgrounds |
| `level-play-digital-logo-gradient-full-256px.png` | ~8KB | Light backgrounds, full brand |

## File Specifications

- **Width:** 256px
- **Format:** PNG-24 (with transparency support)
- **File Size:** 3-8KB each
- **Aspect Ratio:** Maintained from source SVG
- **Transparency:** Supported

## When to Use Which Version

### Use Icon-Only When:
- ✅ File size is critical (< 5KB needed)
- ✅ Space is very limited
- ✅ Profile picture/avatar context
- ✅ Quick brand recognition sufficient
- ✅ SMS platform has strict size limits

### Use Full Logo When:
- ✅ Space allows for full logo
- ✅ Brand name recognition is important
- ✅ Professional/business context
- ✅ File size limits allow (up to 10KB)

## SMS Platform Considerations

### File Size Limits by Platform
- **iMessage:** Up to 25MB (no issue)
- **WhatsApp:** Up to 16MB (no issue)
- **SMS/MMS:** Typically 1-3MB limit
- **Most platforms:** 1-5MB common limit

**Our files (3-8KB) are well under all limits.**

### Delivery Best Practices
1. **Host on CDN or fast server** - Faster loading
2. **Use absolute URLs** - Required for most platforms
3. **Test delivery** - Verify images load correctly
4. **Provide fallback** - Text alternative if image fails

## Usage Examples

### HTML/SMS Templates
```html
<!-- Icon-only version -->
<img src="https://yourdomain.com/images/level-play-digital-logo-icon-only-256px.png" 
     alt="LPD" 
     width="64"
     style="display: block;">

<!-- Full logo version -->
<img src="https://yourdomain.com/images/level-play-digital-logo-white-256px.png" 
     alt="Level Play Digital" 
     width="150"
     style="display: block;">
```

### Recommended Display Sizes
- **Icon-only:** 48-128px width (small spaces)
- **Full logo:** 150-200px width (when space allows)
- **Profile picture:** 64-128px square

## Background Color Guidelines

### Dark Backgrounds
- Use: `level-play-digital-logo-icon-only-white-256px.png`
- Use: `level-play-digital-logo-white-256px.png`
- Background colors: #1a1a2e, #2d2d44, dark themes

### Light Backgrounds
- Use: `level-play-digital-logo-icon-only-256px.png` (gradient)
- Use: `level-play-digital-logo-black-256px.png`
- Use: `level-play-digital-logo-gradient-full-256px.png`
- Background colors: #ffffff, #f8f9fa, light themes

### Brand Color Backgrounds
- Use: `level-play-digital-logo-icon-only-white-256px.png`
- Use: `level-play-digital-logo-white-256px.png`
- Ensures contrast on colored backgrounds

## File Size Comparison

| Version | File Size | Use When |
|---------|-----------|----------|
| Icon-only (white) | ~3KB | Smallest possible, dark backgrounds |
| Icon-only (gradient) | ~4KB | Smallest with brand colors |
| Full logo (white/black) | ~5KB | Standard full logo |
| Full logo (gradient) | ~8KB | Full brand colors |

## Best Practices

### 1. Choose Appropriate Version
- **Icon-only:** When file size is critical
- **Full logo:** When brand name recognition matters

### 2. Optimize Delivery
- Host images on fast CDN
- Use absolute URLs (https://)
- Test across different carriers/platforms

### 3. Provide Alternatives
- Include alt text for accessibility
- Provide text fallback if image fails
- Consider platform-specific optimizations

### 4. Maintain Quality
- Don't compress further (already optimized)
- Maintain PNG format (transparency)
- Don't scale up beyond 256px

## Platform-Specific Notes

### iMessage
- Supports PNG with transparency
- No special requirements
- File size not an issue

### WhatsApp
- Supports PNG images
- Can be used in profile pictures
- Works in message attachments

### SMS/MMS
- May convert PNG to JPG automatically
- Test with different carriers
- Keep file size under 1MB if possible

### Other Platforms
- Test on target platform
- Verify image displays correctly
- Check file size limits

## Troubleshooting

### Image Not Displaying
**Problem:** Logo doesn't appear in SMS  
**Solutions:**
- Verify absolute URL (https://)
- Check file is uploaded to server
- Test URL in browser
- Check platform-specific requirements

### Poor Image Quality
**Problem:** Logo appears pixelated  
**Solutions:**
- Don't scale beyond 256px width
- Use original 256px file
- Check platform compression settings

### File Size Issues
**Problem:** File too large for platform  
**Solutions:**
- Use icon-only version (smaller)
- Use white/black version (smaller than gradient)
- Check platform-specific limits

### Background Color Issues
**Problem:** Logo doesn't contrast with background  
**Solutions:**
- Use white logo on dark backgrounds
- Use black/gradient logo on light backgrounds
- Adjust background color if possible

## Testing Checklist

Before deploying SMS with logos:

- [ ] Logo displays correctly on target platform
- [ ] File size is acceptable (< 10KB)
- [ ] Logo contrasts with background
- [ ] Alt text is included (if applicable)
- [ ] Image loads quickly
- [ ] Tested on multiple devices/platforms
- [ ] Fallback text provided (if needed)

## Accessibility

### Alt Text
- Include descriptive alt text when possible
- Example: "Level Play Digital Logo"
- For icon-only: "LPD Logo" or "Level Play Digital Icon"

### Color Contrast
- Ensure logo contrasts with background
- Minimum contrast ratio: 4.5:1
- Test with different background colors

## Support

For questions about SMS logo usage:
- Review brand guidelines documentation
- Test on target SMS platform
- Contact the brand team

---

**Version:** 1.0  
**Last Updated:** 2025-01-15

