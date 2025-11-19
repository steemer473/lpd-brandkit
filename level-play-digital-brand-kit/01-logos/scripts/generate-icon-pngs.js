/**
 * Generate icon-only PNG versions for SMS
 * 
 * Requirements:
 * - Node.js installed
 * - sharp library: npm install sharp
 * 
 * Usage:
 * node generate-icon-pngs.js
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const logoDir = __dirname.replace('/scripts', '');
const outputDir = path.join(logoDir, '..', '..', '..', 'lpd-logos-recommended', 'sms', 'icon-only');

// Icon-only SVG files to convert
const iconLogos = [
    {
        name: 'level-play-digital-logo-icon-only',
        path: path.join(logoDir, 'variations', 'level-play-digital-logo-icon-only.svg')
    },
    {
        name: 'level-play-digital-logo-icon-only-white',
        path: path.join(logoDir, 'variations', 'level-play-digital-logo-icon-only-white.svg')
    },
    {
        name: 'level-play-digital-logo-icon-only-navy',
        path: path.join(logoDir, 'variations', 'level-play-digital-logo-icon-only-navy.svg')
    },
    {
        name: 'level-play-digital-logo-icon-only-orange',
        path: path.join(logoDir, 'variations', 'level-play-digital-logo-icon-only-orange.svg')
    }
];

async function generateIconPNGs() {
    // Create output directory
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    console.log('Generating icon-only PNG files for SMS...\n');
    console.log(`Output directory: ${outputDir}\n`);

    let successCount = 0;
    let errorCount = 0;
    const size = 256; // 256px for SMS

    for (const icon of iconLogos) {
        if (!fs.existsSync(icon.path)) {
            console.warn(`⚠ SVG file not found: ${icon.path}`);
            errorCount++;
            continue;
        }

        const outputFileName = `${icon.name}-${size}px.png`;
        const outputPath = path.join(outputDir, outputFileName);

        try {
            await sharp(icon.path)
                .resize(size, size, {
                    fit: 'contain',
                    background: { r: 0, g: 0, b: 0, alpha: 0 } // Transparent background
                })
                .png({
                    quality: 100,
                    compressionLevel: 9
                })
                .toFile(outputPath);

            console.log(`  ✓ ${outputFileName}`);
            successCount++;
        } catch (error) {
            console.error(`  ✗ Error converting ${icon.name}:`, error.message);
            errorCount++;
        }
    }

    console.log(`\n✓ Generated ${successCount} icon PNG files`);
    if (errorCount > 0) {
        console.log(`✗ ${errorCount} errors occurred`);
    }
    console.log(`\nOutput location: ${outputDir}`);
}

// Run if called directly
if (require.main === module) {
    generateIconPNGs().catch(error => {
        console.error('Error:', error);
        process.exit(1);
    });
}

module.exports = { generateIconPNGs };

