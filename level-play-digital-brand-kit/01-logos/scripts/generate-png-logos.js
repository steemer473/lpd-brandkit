/**
 * Generate PNG versions of primary and solid-version logos
 * 
 * Requirements:
 * - Node.js installed
 * - sharp library: npm install sharp
 * 
 * Usage:
 * node generate-png-logos.js
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const logoDir = __dirname.replace('/scripts', '');
const outputDir = path.join(logoDir, 'png');

// Standard sizes to generate (web-optimized)
const sizes = [
    { width: 256, suffix: '256px' },
    { width: 512, suffix: '512px' },
    { width: 1200, suffix: '1200px' },
    { width: 2400, suffix: '2400px' } // High-res for retina displays
];

// Directories to process
const sourceDirs = [
    'primary',
    'solid-versions'
];

async function convertSVGToPNG(svgPath, outputPath, width) {
    try {
        await sharp(svgPath)
            .resize(width, null, {
                fit: 'inside',
                withoutEnlargement: false
            })
            .png({
                quality: 100,
                compressionLevel: 9
            })
            .toFile(outputPath);
        
        return true;
    } catch (error) {
        console.error(`Error converting ${svgPath}:`, error.message);
        return false;
    }
}

async function generatePNGs() {
    // Create output directory
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    console.log('Generating PNG files from SVG logos...\n');
    console.log(`Output directory: ${outputDir}\n`);

    let successCount = 0;
    let errorCount = 0;
    const processedFiles = [];

    // Process each source directory
    for (const sourceDir of sourceDirs) {
        const sourcePath = path.join(logoDir, sourceDir);
        
        if (!fs.existsSync(sourcePath)) {
            console.warn(`⚠ Directory not found: ${sourcePath}`);
            continue;
        }

        // Find all SVG files in the directory
        const files = fs.readdirSync(sourcePath).filter(file => file.endsWith('.svg'));
        
        if (files.length === 0) {
            console.warn(`⚠ No SVG files found in: ${sourcePath}`);
            continue;
        }

        console.log(`Processing ${sourceDir} (${files.length} files)...`);

        for (const file of files) {
            const svgPath = path.join(sourcePath, file);
            const baseName = path.basename(file, '.svg');

            // Generate each size
            for (const size of sizes) {
                const outputFileName = `${baseName}-${size.suffix}.png`;
                const outputPath = path.join(outputDir, outputFileName);

                const success = await convertSVGToPNG(svgPath, outputPath, size.width);
                if (success) {
                    console.log(`  ✓ ${outputFileName}`);
                    successCount++;
                    processedFiles.push(outputFileName);
                } else {
                    errorCount++;
                }
            }
        }
        console.log('');
    }

    console.log(`\n✓ Generated ${successCount} PNG files`);
    if (errorCount > 0) {
        console.log(`✗ ${errorCount} errors occurred`);
    }
    console.log(`\nOutput location: ${outputDir}`);
}

// Run if called directly
if (require.main === module) {
    generatePNGs().catch(error => {
        console.error('Fatal error:', error);
        process.exit(1);
    });
}

module.exports = { convertSVGToPNG, generatePNGs };

