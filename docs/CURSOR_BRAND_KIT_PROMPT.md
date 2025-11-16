# CURSOR AI PROMPT: Level Play Digital Brand Asset Generation

## 🎯 OBJECTIVE
Build complete file structure and generate all brand assets for Level Play Digital, ensuring exact consistency with established brand standards. Assets must match the quality and specifications of logos created in Claude Sonnet 4.5.

---

## 📋 PHASE 1: FILE STRUCTURE CREATION

Create the following directory structure in the project root:

```
level-play-digital-brand-kit/
│
├── README.md
├── BRAND_GUIDELINES.md
├── PROJECT_INSTRUCTIONS.md
│
├── 01-logos/
│   ├── primary/
│   │   ├── level-play-digital-logo-gradient-full.svg
│   │   ├── level-play-digital-logo-gradient-full-1200px.png
│   │   ├── level-play-digital-logo-gradient-full-512px.png
│   │   └── level-play-digital-logo-gradient-full-300dpi.png
│   │
│   ├── solid-versions/
│   │   ├── level-play-digital-logo-two-color-cyan-orange.svg
│   │   ├── level-play-digital-logo-single-cyan.svg
│   │   ├── level-play-digital-logo-single-orange.svg
│   │   ├── level-play-digital-logo-white.svg
│   │   ├── level-play-digital-logo-black.svg
│   │   └── level-play-digital-logo-rich-black.svg
│   │
│   ├── animated/
│   │   ├── level-play-digital-logo-animated-brand-colors.svg
│   │   ├── level-play-digital-logo-animated-gradient-shift.svg
│   │   ├── level-play-digital-logo-animated-fade-in.svg
│   │   └── level-play-digital-logo-animated-glow-pulse.svg
│   │
│   ├── variations/
│   │   ├── level-play-digital-logo-horizontal.svg
│   │   ├── level-play-digital-logo-stacked.svg
│   │   ├── level-play-digital-logo-icon-only.svg
│   │   └── level-play-digital-logo-wordmark-only.svg
│   │
│   └── backgrounds/
│       ├── level-play-digital-logo-on-dark-bg.png
│       ├── level-play-digital-logo-on-light-bg.png
│       └── level-play-digital-logo-transparent-bg.png
│
├── 02-favicons/
│   ├── favicon.ico
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   ├── favicon-96x96.png
│   ├── apple-touch-icon.png (180x180)
│   ├── android-chrome-192x192.png
│   ├── android-chrome-512x512.png
│   ├── site.webmanifest
│   └── browserconfig.xml
│
├── 03-colors/
│   ├── color-palette.md
│   ├── color-swatches.png
│   ├── color-palette.ase
│   ├── color-palette.sketchpalette
│   └── brand-colors.css
│
├── 04-typography/
│   ├── typography-guide.md
│   ├── font-pairings.md
│   └── type-scale.css
│
├── 05-web-assets/
│   ├── og-image-default.png (1200x630)
│   ├── og-image-homepage.png (1200x630)
│   ├── twitter-card.png (1200x675)
│   └── brand-css-variables.css
│
├── 06-print-assets/
│   ├── business-card-front.pdf
│   ├── business-card-back.pdf
│   ├── letterhead-template.pdf
│   └── print-specifications.md
│
├── 07-templates/
│   ├── email-signature.html
│   ├── social-media-templates/
│   └── presentation-template/
│
└── 08-documentation/
    ├── logo-usage-guide.pdf
    ├── brand-voice-guide.md
    ├── quick-reference.pdf
    └── changelog.md
```

---

## 🎨 PHASE 2: CRITICAL BRAND SPECIFICATIONS

**YOU MUST USE THESE EXACT VALUES - NO EXCEPTIONS:**

### Primary Brand Colors
```css
/* Cyan Blue (Primary) */
--color-primary-blue: #00BFFF;
/* RGB: rgb(0, 191, 255) */
/* HSL: hsl(193, 100%, 50%) */
/* CMYK: C:100 M:25 Y:0 K:0 */

/* Coral Orange (Secondary) */
--color-primary-orange: #FF6633;
/* RGB: rgb(255, 102, 51) */
/* HSL: hsl(14, 100%, 60%) */
/* CMYK: C:0 M:60 Y:80 K:0 */

/* Brand Gradient (NEVER change direction!) */
--gradient-primary: linear-gradient(135deg, #00BFFF 0%, #FF6633 100%);
```

### Logo Structure
The logo consists of THREE components:
1. **"LEVEL PLAY"** text (left side)
2. **Circular symbol** with concentric patterns (center)
3. **"DIGITAL"** text (right side)

**Source SVG Path Data:**
```
(Use the exact path data from the uploaded Black_logo_-_no_background.svg file)
```

### Neutral Colors
```css
--color-dark: #1a1a2e;          /* Charcoal black */
--color-dark-gray: #2d2d44;      /* Dark gray */
--color-medium-gray: #6c757d;    /* Medium gray */
--color-light-gray: #e9ecef;     /* Light gray */
--color-off-white: #f8f9fa;      /* Off white */
```

---

## 🔧 PHASE 3: LOGO GENERATION INSTRUCTIONS

### Step 1: Create Base Gradient Logo
Using the source SVG, create:

**File:** `01-logos/primary/level-play-digital-logo-gradient-full.svg`

```svg
<!-- Use exact structure with gradient definition -->
<svg xmlns="http://www.w3.org/2000/svg" ...>
  <defs>
    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:hsl(193, 100%, 50%);stop-opacity:1" />
      <stop offset="100%" style="stop-color:hsl(14, 100%, 60%);stop-opacity:1" />
    </linearGradient>
  </defs>
  <g>
    <!-- Apply fill="url(#logoGradient)" to all text and symbol paths -->
  </g>
</svg>
```

**CRITICAL:**
- Gradient angle MUST be 135deg (diagonal top-left to bottom-right)
- Use HSL values exactly as specified
- Apply gradient to ALL logo elements (both text groups and symbol)

### Step 2: Create Solid Color Versions

**Two-Color Version (Cyan + Orange):**
- Left text "LEVEL PLAY": Cyan (#00BFFF)
- Center symbol: Alternating cyan/orange or gradient
- Right text "DIGITAL": Orange (#FF6633)

**Single Color Versions:**
Create identical SVGs with these solid fills:
- `logo-single-cyan.svg`: All elements #00BFFF
- `logo-single-orange.svg`: All elements #FF6633
- `logo-white.svg`: All elements #FFFFFF
- `logo-black.svg`: All elements #000000 (C:0 M:0 Y:0 K:100)
- `logo-rich-black.svg`: All elements (C:60 M:40 Y:40 K:100 for print)

### Step 3: Create Animated Versions

**Animation 1: Brand Colors Shift (RECOMMENDED)**
```svg
<linearGradient id="animatedGradient">
  <stop offset="0%">
    <animate attributeName="stop-color" 
      values="hsl(193, 100%, 50%); hsl(14, 100%, 60%); hsl(193, 100%, 50%)" 
      dur="3s" 
      repeatCount="indefinite"/>
  </stop>
  <stop offset="100%">
    <animate attributeName="stop-color" 
      values="hsl(14, 100%, 60%); hsl(193, 100%, 50%); hsl(14, 100%, 60%)" 
      dur="3s" 
      repeatCount="indefinite"/>
  </stop>
</linearGradient>
```

**Animation 2: Gradient Shift (3 colors)**
- Colors: Cyan → Orange → Purple (#C000FF) → Cyan
- Duration: 4 seconds

**Animation 3: Fade-In Sequence**
- Left text: Fade 0→1 over 1s
- Symbol: Fade + scale (0→1) starting at 0.5s
- Right text: Fade 0→1 starting at 1s
- Use `fill="freeze"` to hold final state

**Animation 4: Glow Pulse**
- CSS-based animation (include in wrapper HTML)
- 3s pulse cycle, 1s on hover

### Step 4: Create Logo Variations

**Horizontal Layout:**
- All three components in single row
- Maintain original proportions

**Stacked Layout:**
- "LEVEL PLAY" (top)
- Symbol (middle)
- "DIGITAL" (bottom)

**Icon Only:**
- Just the circular symbol
- Ensure minimum size 48×48px

**Wordmark Only:**
- "LEVEL PLAY DIGITAL" text without symbol
- Maintain spacing/kerning

---

## 🖼️ PHASE 4: FAVICON GENERATION

Using the **icon-only** logo (circular symbol), create all favicon sizes:

### Required Sizes & Files

**Standard Favicons:**
```bash
# Generate from icon-only SVG at these exact sizes:
favicon-16x16.png    # 16×16px
favicon-32x32.png    # 32×32px
favicon-96x96.png    # 96×96px (for Google TV)
favicon.ico          # Multi-resolution ICO (16, 32, 48)
```

**Apple Touch Icons:**
```bash
apple-touch-icon.png # 180×180px
# Optional larger sizes:
# apple-touch-icon-152x152.png
# apple-touch-icon-167x167.png
```

**Android Chrome:**
```bash
android-chrome-192x192.png  # 192×192px
android-chrome-512x512.png  # 512×512px
```

### Color Recommendations for Favicons
- **Light backgrounds:** Use gradient or cyan blue
- **Dark mode:** Use gradient (it will show well)
- **Simple version:** Solid cyan (#00BFFF) for maximum compatibility

### site.webmanifest
```json
{
  "name": "Level Play Digital",
  "short_name": "Level Play",
  "icons": [
    {
      "src": "/android-chrome-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/android-chrome-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "theme_color": "#00BFFF",
  "background_color": "#1a1a2e",
  "display": "standalone"
}
```

### browserconfig.xml
```xml
<?xml version="1.0" encoding="utf-8"?>
<browserconfig>
  <msapplication>
    <tile>
      <square150x150logo src="/mstile-150x150.png"/>
      <TileColor>#00BFFF</TileColor>
    </tile>
  </msapplication>
</browserconfig>
```

---

## 📐 PHASE 5: EXPORT SPECIFICATIONS

### SVG Export Settings
- Remove unnecessary metadata
- Optimize paths
- Decimal precision: 2
- Minify: Yes
- Include xmlns attribute
- ViewBox: Required for scalability

### PNG Export Settings
**For Web (72 DPI):**
- 1200px width: Homepage/hero images
- 512px width: Social media, general use
- 256px width: Thumbnails
- Background: Transparent

**For Print (300 DPI):**
- Minimum 3000px width
- CMYK color mode (if supporting print)
- Include bleed (0.125" / 3mm extra on all sides)

### PDF Export Settings (Print)
- Color mode: CMYK
- Bleed: 0.125" (3mm)
- Crop marks: Yes
- High-quality print preset
- Embed fonts (if applicable)

---

## 🌐 PHASE 6: WEB SCRAPING & BRAND EXTRACTION

**After completing the logo/favicon generation, execute:**

### Scrape levelplaydigital.com for:

**1. Typography Information:**
```javascript
// Extract from website
- Primary font family (headings)
- Secondary font family (body)
- Font weights used
- Font sizes (H1-H6, body, small)
- Line heights
- Letter spacing
```

**2. Brand Voice & Tone:**
```javascript
// Analyze page content for:
- Writing style (formal/casual)
- Common phrases and terminology
- Tone indicators (professional, friendly, technical)
- Messaging patterns
- Call-to-action language
- Value propositions
```

**3. Current Design Patterns:**
```javascript
// Extract CSS variables or styles:
- Button styles
- Card designs
- Spacing patterns
- Border radius values
- Shadow definitions
- Transition/animation speeds
```

**4. Content Structure:**
```javascript
// Document:
- Navigation structure
- Page sections
- Content hierarchy
- Image usage patterns
```

### Generate Documentation Files

**File: 04-typography/typography-guide.md**
```markdown
# Level Play Digital Typography System

## Font Families
Primary: [Extracted from site]
Secondary: [Extracted from site]

## Type Scale
H1: [size]/[line-height] - [weight]
H2: [size]/[line-height] - [weight]
...

## Font Pairing Rules
[Document when to use which font]
```

**File: 08-documentation/brand-voice-guide.md**
```markdown
# Level Play Digital Brand Voice

## Personality Traits
- [Extracted from content analysis]
- [Key characteristics]

## Tone Guidelines
[Document tone patterns]

## Writing Examples
Do: [Examples from site]
Don't: [Counter-examples]
```

---

## 🎨 PHASE 7: REMAINING ASSET GENERATION

### Color Assets

**File: 03-colors/color-swatches.png**
Generate a visual swatch card showing:
- Primary colors (Cyan, Orange)
- Gradient sample
- Neutral colors
- Each with HEX, RGB, CMYK values labeled

**File: 03-colors/brand-colors.css**
```css
:root {
  /* Primary Colors */
  --color-primary-blue: #00BFFF;
  --color-primary-orange: #FF6633;
  --gradient-primary: linear-gradient(135deg, #00BFFF 0%, #FF6633 100%);
  
  /* Neutrals */
  --color-dark: #1a1a2e;
  --color-dark-gray: #2d2d44;
  --color-medium-gray: #6c757d;
  --color-light-gray: #e9ecef;
  --color-off-white: #f8f9fa;
  
  /* Semantic */
  --color-success: #28a745;
  --color-warning: #ffc107;
  --color-error: #dc3545;
  --color-info: #17a2b8;
  
  /* Spacing (extracted from site) */
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;
  
  /* Extracted from website */
  [Add additional variables found during scraping]
}
```

### Open Graph Images

**File: 05-web-assets/og-image-default.png (1200×630px)**
Create with:
- Gradient background (brand gradient)
- Logo centered (white or contrasting version)
- Company name "Level Play Digital"
- Optional tagline if discovered from site

**File: 05-web-assets/twitter-card.png (1200×675px)**
Similar design, optimized for Twitter aspect ratio

### Email Signature Template

**File: 07-templates/email-signature.html**
```html
<!DOCTYPE html>
<html>
<head>
  <style>
    /* Inline styles for email compatibility */
  </style>
</head>
<body>
  <table cellpadding="0" cellspacing="0" border="0">
    <tr>
      <td style="padding-right: 20px;">
        <img src="[logo-url]" alt="Level Play Digital" width="120" />
      </td>
      <td>
        <p style="margin: 0; font-weight: bold; color: #1a1a2e;">
          [Name]
        </p>
        <p style="margin: 0; color: #6c757d;">
          [Title] | Level Play Digital
        </p>
        <p style="margin: 5px 0 0 0;">
          <a href="tel:[phone]" style="color: #00BFFF;">[phone]</a> |
          <a href="mailto:[email]" style="color: #00BFFF;">[email]</a>
        </p>
        <p style="margin: 5px 0 0 0;">
          <a href="https://levelplaydigital.com" style="color: #00BFFF;">levelplaydigital.com</a>
        </p>
      </td>
    </tr>
  </table>
</body>
</html>
```

---

## 📋 PHASE 8: DOCUMENTATION GENERATION

### Create Comprehensive README.md

```markdown
# Level Play Digital Brand Kit

Complete brand identity system for Level Play Digital.

## 📁 Contents
[Table of contents with links to all sections]

## 🎨 Brand Colors
[Quick reference to color values]

## 📐 Logo Usage
[When to use which version]

## 🚀 Quick Start
[How to use the brand kit]

## 📞 Support
[Contact information]
```

### Create Logo Usage Guide (PDF)

Content sections:
1. Logo variations overview
2. Correct usage examples (✓)
3. Incorrect usage examples (✗)
4. Minimum size requirements
5. Clear space specifications
6. Color version selection guide
7. File format guide
8. Print vs digital usage

### Create Quick Reference Guide (1-page PDF)

Include:
- Color swatches with values
- Logo files overview
- Typography quick reference
- Common use cases table
- Contact information

---

## ✅ PHASE 9: QUALITY ASSURANCE CHECKLIST

Before considering the project complete, verify:

**Logo Files:**
- [ ] All SVGs are properly optimized
- [ ] Gradient uses exact colors (#00BFFF, #FF6633)
- [ ] Gradient direction is 135deg in all files
- [ ] All PNGs have transparent backgrounds
- [ ] File naming follows convention exactly
- [ ] All required sizes generated (16, 32, 96, 192, 512, 1200px)

**Favicons:**
- [ ] All required sizes created
- [ ] ICO file includes multiple resolutions
- [ ] Apple touch icon is 180×180px
- [ ] Android chrome icons are correct sizes
- [ ] site.webmanifest is valid JSON
- [ ] browserconfig.xml is valid XML
- [ ] Theme colors match brand (#00BFFF)

**Color Accuracy:**
- [ ] All brand colors use exact HEX values
- [ ] CSS variables defined correctly
- [ ] CMYK values included for print files
- [ ] Gradient never uses modified direction

**Animated Logos:**
- [ ] All 4 animation variations created
- [ ] Animation durations match spec (3s, 4s, 20s)
- [ ] SMIL animations use correct syntax
- [ ] Animations loop infinitely (or freeze as specified)

**Documentation:**
- [ ] All markdown files are complete
- [ ] Typography extracted from website
- [ ] Brand voice documented from website
- [ ] PDF guides are professional quality
- [ ] Quick reference fits on one page
- [ ] All links work correctly

**File Organization:**
- [ ] Directory structure matches specification
- [ ] Files are in correct folders
- [ ] No duplicate or misnamed files
- [ ] README.md is comprehensive

---

## 🤖 CURSOR AI MODEL RECOMMENDATION

**RECOMMENDED MODEL: Claude Sonnet 4 or Claude Sonnet 4.5**

### Why Claude Sonnet 4/4.5 for Brand Consistency:

**✅ BEST for this task because:**
1. **Design precision** - Maintains exact color values across all files
2. **SVG manipulation** - Expert at working with vector graphics
3. **Brand consistency** - Follows complex multi-file specifications
4. **Attention to detail** - Won't deviate from exact HEX values
5. **Documentation quality** - Creates professional, comprehensive docs
6. **File organization** - Excellent at maintaining structure

**Alternative Models:**

❌ **GPT-4** - May alter colors slightly, less precise with brand specs
❌ **GPT-3.5** - Not recommended - too many inconsistencies
⚠️ **Claude Haiku** - Faster but may miss subtle brand details
⚠️ **Claude Opus** - Overkill for this task, slower, same quality as Sonnet

### Cursor AI Settings for Best Results:

```json
{
  "model": "claude-sonnet-4-20250514",
  "temperature": 0.1,
  "instructions": "Follow brand specifications EXACTLY. Never modify HEX color values. Always use 135deg for gradient direction. Maintain file naming convention strictly."
}
```

**Use Low Temperature (0.1-0.2):**
- Ensures maximum consistency
- Reduces creative deviations from specs
- More deterministic output = exact brand compliance

---

## 🚀 EXECUTION COMMANDS FOR CURSOR

### Step 1: Initial Setup
```bash
# In Cursor terminal, create project structure
mkdir -p level-play-digital-brand-kit/{01-logos/{primary,solid-versions,animated,variations,backgrounds},02-favicons,03-colors,04-typography,05-web-assets,06-print-assets,07-templates,08-documentation}
```

### Step 2: Load Source Files
```bash
# Place Black_logo_-_no_background.svg in project root
# Place PROJECT_INSTRUCTIONS.md in project root
# Place COLOR_PALETTE_SPEC.md in project root
```

### Step 3: Prompt Cursor
```
@Workspace Create the complete Level Play Digital brand kit following the specifications in PROJECT_INSTRUCTIONS.md. 

Phase 1: Generate all logo variations from Black_logo_-_no_background.svg
Phase 2: Create all favicon sizes
Phase 3: Generate color assets and CSS variables
Phase 4: Create web assets (OG images, email signature)
Phase 5: Generate all documentation

Use EXACT color values:
- Cyan Blue: #00BFFF
- Coral Orange: #FF6633
- Gradient: linear-gradient(135deg, #00BFFF 0%, #FF6633 100%)

CRITICAL: Never modify gradient direction or color values. Follow file naming convention exactly.
```

### Step 4: Web Scraping Command
```
@Web Scrape https://levelplaydigital.com and extract:
1. Typography (fonts, sizes, weights, line heights)
2. Brand voice and tone from page content
3. Current design system (spacing, shadows, borders)
4. Navigation and content structure

Generate:
- 04-typography/typography-guide.md
- 08-documentation/brand-voice-guide.md
- 05-web-assets/extracted-design-system.css

Add all extracted information to the existing brand kit.
```

---

## 📊 EXPECTED DELIVERABLES

Upon completion, you should have:

**Logo Files:**
- ✅ 1 gradient SVG (primary)
- ✅ 6 solid color variations
- ✅ 4 animated SVG versions
- ✅ 4 layout variations (horizontal, stacked, icon, wordmark)
- ✅ 3 background context versions
- ✅ Multiple PNG exports (512px, 1200px, 300dpi)

**Favicon Files:**
- ✅ 7 PNG sizes (16, 32, 96, 180, 192, 512)
- ✅ 1 ICO file (multi-resolution)
- ✅ 1 webmanifest file
- ✅ 1 browserconfig.xml

**Color Assets:**
- ✅ Color palette documentation
- ✅ Visual swatches (PNG)
- ✅ CSS variables file
- ✅ ASE/Sketch palette files

**Documentation:**
- ✅ Complete README
- ✅ Brand guidelines
- ✅ Typography guide
- ✅ Brand voice guide
- ✅ Logo usage guide (PDF)
- ✅ Quick reference (PDF)

**Templates:**
- ✅ Email signature (HTML)
- ✅ Business cards (print-ready PDF)
- ✅ Letterhead template

**Web Assets:**
- ✅ OG images (2 variations)
- ✅ Twitter card
- ✅ Complete CSS variables

---

## 🎯 SUCCESS CRITERIA

The brand kit is complete when:

1. **All files exist** in correct directory structure
2. **All colors match exactly** - #00BFFF and #FF6633 (verify with color picker)
3. **All gradients use 135deg** (no exceptions)
4. **All file names follow convention** (level-play-digital-[type]-[variation])
5. **All documentation is comprehensive** and professionally formatted
6. **Typography and brand voice extracted** from website
7. **All favicons display correctly** when tested
8. **All animations work** as specified
9. **Quality checklist passes** 100%

---

## 💡 TIPS FOR CURSOR EXECUTION

**DO:**
- ✅ Reference PROJECT_INSTRUCTIONS.md constantly
- ✅ Use exact HEX values from COLOR_PALETTE_SPEC.md
- ✅ Copy gradient definition exactly (135deg, HSL values)
- ✅ Test generated favicons in a browser
- ✅ Verify all files before marking complete

**DON'T:**
- ❌ Modify color values "to look better"
- ❌ Change gradient direction
- ❌ Skip any file in the structure
- ❌ Use approximate colors
- ❌ Deviate from file naming convention

---

## 🔍 VALIDATION COMMANDS

After Cursor completes, run these checks:

```bash
# Verify file structure
tree level-play-digital-brand-kit/

# Count logo files (should be 20+)
find 01-logos -type f | wc -l

# Count favicon files (should be 10+)
find 02-favicons -type f | wc -l

# Check for required color files
ls 03-colors/

# Verify documentation exists
ls 08-documentation/

# Search for color consistency
grep -r "#00BFFF" level-play-digital-brand-kit/
grep -r "#FF6633" level-play-digital-brand-kit/
grep -r "135deg" level-play-digital-brand-kit/
```

---

**END OF CURSOR PROMPT**

Save this file as: `CURSOR_BRAND_KIT_PROMPT.md`

Execute in Cursor by:
1. Creating new project/workspace
2. Loading this prompt
3. Adding source files (SVG, PROJECT_INSTRUCTIONS.md)
4. Running @Workspace with Phase 1-5 instructions
5. Running @Web scraping command
6. Validating with checklist
