/**
 * Convert SVG logo files to PNG at various sizes
 * 
 * Requirements:
 * - Node.js installed
 * - sharp library: npm install sharp
 * 
 * Usage:
 * node convert-svg-to-png.js [size] [dpi]
 * 
 * Examples:
 * node convert-svg-to-png.js 512        # 512px width, 72 DPI
 * node convert-svg-to-png.js 1200       # 1200px width, 72 DPI
 * node convert-svg-to-png.js 3000 300  # 3000px width, 300 DPI (print)
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const logoDir = __dirname.replace('/scripts', '');
const outputDir = path.join(logoDir, 'png-exports');

// Sizes to generate
const sizes = {
    web: [
        { width: 512, dpi: 72, suffix: '512px' },
        { width: 1200, dpi: 72, suffix: '1200px' },
        { width: 256, dpi: 72, suffix: '256px' }
    ],
    print: [
        { width: 3000, dpi: 300, suffix: '300dpi' }
    ]
};

// Logo files to convert
const logoFiles = [
    'primary/level-play-digital-logo-gradient-full.svg',
    'solid-versions/level-play-digital-logo-single-cyan.svg',
    'solid-versions/level-play-digital-logo-single-orange.svg',
    'solid-versions/level-play-digital-logo-white.svg',
    'solid-versions/level-play-digital-logo-black.svg',
    'variations/level-play-digital-logo-horizontal.svg',
    'variations/level-play-digital-logo-icon-only.svg',
    'variations/level-play-digital-logo-wordmark-only.svg'
];

async function convertSVGToPNG(svgPath, outputPath, width, dpi) {
    try {
        await sharp(svgPath)
            .resize(width, null, {
                fit: 'inside',
                withoutEnlargement: false
            })
            .png({
                quality: 100,
                compressionLevel: 9,
                dpi: dpi
            })
            .toFile(outputPath);
        
        return true;
    } catch (error) {
        console.error(`Error converting ${svgPath}:`, error.message);
        return false;
    }
}

async function generateAllPNGs() {
    // Create output directory
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    console.log('Generating PNG files from SVG logos...\n');

    let successCount = 0;
    let errorCount = 0;

    for (const logoFile of logoFiles) {
        const svgPath = path.join(logoDir, logoFile);
        
        if (!fs.existsSync(svgPath)) {
            console.warn(`⚠ SVG file not found: ${svgFile}`);
            continue;
        }

        const baseName = path.basename(logoFile, '.svg');
        const category = path.dirname(logoFile).split('/').pop();

        // Generate web sizes
        for (const size of sizes.web) {
            const outputFileName = `${baseName}-${size.suffix}.png`;
            const outputPath = path.join(outputDir, category, outputFileName);
            
            // Create category directory if needed
            const categoryDir = path.dirname(outputPath);
            if (!fs.existsSync(categoryDir)) {
                fs.mkdirSync(categoryDir, { recursive: true });
            }

            const success = await convertSVGToPNG(svgPath, outputPath, size.width, size.dpi);
            if (success) {
                console.log(`✓ ${outputFileName}`);
                successCount++;
            } else {
                errorCount++;
            }
        }

        // Generate print sizes
        for (const size of sizes.print) {
            const outputFileName = `${baseName}-${size.suffix}.png`;
            const outputPath = path.join(outputDir, 'print', category, outputFileName);
            
            // Create category directory if needed
            const categoryDir = path.dirname(outputPath);
            if (!fs.existsSync(categoryDir)) {
                fs.mkdirSync(categoryDir, { recursive: true });
            }

            const success = await convertSVGToPNG(svgPath, outputPath, size.width, size.dpi);
            if (success) {
                console.log(`✓ ${outputFileName} (print)`);
                successCount++;
            } else {
                errorCount++;
            }
        }
    }

    console.log(`\n✓ Generated ${successCount} PNG files`);
    if (errorCount > 0) {
        console.log(`✗ ${errorCount} errors occurred`);
    }
}

// Run if called directly
if (require.main === module) {
    generateAllPNGs().catch(console.error);
}

module.exports = { convertSVGToPNG, generateAllPNGs };

