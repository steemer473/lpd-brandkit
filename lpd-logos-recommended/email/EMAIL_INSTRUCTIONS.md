# Email Newsletter Logo Usage Instructions

## Overview

This folder contains optimized PNG logo files specifically sized for email newsletters. All files are 512px width, providing good quality while keeping file sizes manageable for email delivery.

## Available Files

### White Logo
- **File:** `level-play-digital-logo-white-512px.png`
- **File Size:** ~8-12KB
- **Use for:** Dark email backgrounds, dark email themes
- **Background:** Dark backgrounds (#1a1a2e, #2d2d44, or similar)

### Black Logo
- **File:** `level-play-digital-logo-black-512px.png`
- **File Size:** ~8-12KB
- **Use for:** Light email backgrounds, light email themes
- **Background:** White or light backgrounds (#ffffff, #f8f9fa, or similar)

### Gradient Logo
- **File:** `level-play-digital-logo-gradient-full-512px.png`
- **File Size:** ~10-15KB
- **Use for:** Light email backgrounds (shows full brand colors)
- **Background:** White or light backgrounds (#ffffff, #f8f9fa, or similar)

## File Specifications

- **Width:** 512px
- **Format:** PNG-24 (with transparency support)
- **File Size:** 8-15KB each
- **Aspect Ratio:** Maintained from source SVG
- **Transparency:** Supported (for logos with transparent backgrounds)

## Usage Guidelines

### HTML Email Implementation

```html
<!-- Basic usage -->
<img src="https://yourdomain.com/images/level-play-digital-logo-white-512px.png" 
     alt="Level Play Digital" 
     width="200"
     style="display: block; margin: 0 auto; border: 0;">

<!-- With link -->
<a href="https://levelplaydigital.com" style="display: block; text-align: center;">
    <img src="https://yourdomain.com/images/level-play-digital-logo-white-512px.png" 
         alt="Level Play Digital" 
         width="200"
         style="display: block; margin: 0 auto; border: 0;">
</a>
```

### Recommended Sizes in Email

- **Header Logo:** 200-300px width
- **Footer Logo:** 150-200px width
- **Inline Logo:** 100-150px width

**Note:** Always set width attribute in HTML. Height will scale proportionally.

## Best Practices

### 1. Host Images on Your Server
- ✅ Upload logo files to your web server
- ✅ Use absolute URLs (https://yourdomain.com/images/logo.png)
- ❌ Never use relative paths or local file paths
- ❌ Never embed images as base64 (increases email size)

### 2. Include Alt Text
- Always include descriptive alt text
- Helps with accessibility and email clients that block images
- Example: `alt="Level Play Digital Logo"`

### 3. File Size Management
- Keep individual logo files under 50KB
- Total email size should be under 100KB when possible
- Compress images if needed (but maintain quality)

### 4. Background Color Matching
- Match logo version to email background color
- White logo on dark backgrounds
- Black/gradient logo on light backgrounds
- Ensure sufficient contrast (minimum 4.5:1 ratio)

### 5. Responsive Design
- Use percentage widths for responsive emails
- Test on mobile devices
- Consider smaller logo size for mobile (150-200px)

## Email Client Compatibility

### Supported Clients
- ✅ Gmail (web, iOS, Android)
- ✅ Outlook (2016, 2019, 365)
- ✅ Apple Mail (macOS, iOS)
- ✅ Yahoo Mail
- ✅ Thunderbird
- ✅ Most modern email clients

### Known Limitations
- Some email clients block images by default
- Always include alt text
- Test across multiple email clients
- Some clients may resize images automatically

## Code Examples

### Header Logo (Centered)
```html
<table width="100%" cellpadding="0" cellspacing="0" border="0">
    <tr>
        <td align="center" style="padding: 20px 0;">
            <img src="https://yourdomain.com/images/level-play-digital-logo-gradient-full-512px.png" 
                 alt="Level Play Digital" 
                 width="250"
                 style="display: block; border: 0;">
        </td>
    </tr>
</table>
```

### Footer Logo (Small)
```html
<table width="100%" cellpadding="0" cellspacing="0" border="0">
    <tr>
        <td align="center" style="padding: 20px 0; background-color: #1a1a2e;">
            <img src="https://yourdomain.com/images/level-play-digital-logo-white-512px.png" 
                 alt="Level Play Digital" 
                 width="150"
                 style="display: block; border: 0;">
        </td>
    </tr>
</table>
```

### Logo with Link
```html
<a href="https://levelplaydigital.com" 
   style="display: inline-block; text-decoration: none;">
    <img src="https://yourdomain.com/images/level-play-digital-logo-gradient-full-512px.png" 
         alt="Level Play Digital - Visit our website" 
         width="200"
         style="display: block; border: 0;">
</a>
```

## Testing Checklist

Before sending email newsletters:

- [ ] Logo displays correctly in email client
- [ ] Alt text is included
- [ ] Logo links to correct URL (if applicable)
- [ ] Logo size is appropriate for email layout
- [ ] Logo contrasts well with background
- [ ] Logo displays on mobile devices
- [ ] File size is reasonable (< 50KB)
- [ ] Images load from server (not blocked)

## Troubleshooting

### Logo Not Displaying
**Problem:** Logo doesn't appear in email  
**Solutions:**
- Check image URL is absolute (https://)
- Verify file is uploaded to server
- Check file permissions
- Ensure alt text is present

### Logo Too Large/Small
**Problem:** Logo size doesn't match design  
**Solutions:**
- Adjust width attribute in HTML
- Use percentage width for responsive design
- Test across different email clients

### Poor Image Quality
**Problem:** Logo appears pixelated  
**Solutions:**
- Ensure using 512px source file
- Don't scale up beyond 512px width
- Check email client isn't compressing image

### Background Color Issues
**Problem:** Logo doesn't contrast with background  
**Solutions:**
- Use white logo on dark backgrounds
- Use black/gradient logo on light backgrounds
- Adjust email background color if needed

## File Size Optimization

### Current File Sizes
- White logo: ~8-12KB
- Black logo: ~8-12KB
- Gradient logo: ~10-15KB

### If Further Compression Needed
- Use image optimization tools (TinyPNG, ImageOptim)
- Maintain PNG format (transparency support)
- Don't compress below 8KB (quality loss)

## Accessibility

### Alt Text Guidelines
- Always include descriptive alt text
- Example: "Level Play Digital Logo"
- If logo is decorative only, use empty alt: `alt=""`
- If logo links, describe destination: "Level Play Digital - Visit website"

### Color Contrast
- Ensure logo contrasts with background
- Minimum contrast ratio: 4.5:1
- Test with color blindness simulators
- Provide text alternative if needed

## Support

For questions about email logo usage:
- Review brand guidelines documentation
- Test in email testing tools (Litmus, Email on Acid)
- Contact the brand team

---

**Version:** 1.0  
**Last Updated:** 2025-01-15

