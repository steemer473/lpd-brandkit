/**
 * Generate PNG files for logo backgrounds
 * 
 * Requirements:
 * - Node.js installed
 * - sharp library: npm install sharp
 * 
 * Usage:
 * node generate-background-pngs.js
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const svgPath = path.join(__dirname, '../primary/level-play-digital-logo-gradient-full.svg');
const outputDir = __dirname;

// Check if SVG file exists
if (!fs.existsSync(svgPath)) {
    console.error(`Error: SVG file not found at ${svgPath}`);
    process.exit(1);
}

// Background configurations
const backgrounds = [
    {
        name: 'level-play-digital-logo-on-dark-bg.png',
        background: { r: 26, g: 26, b: 46 }, // #1a1a2e
        width: 1200
    },
    {
        name: 'level-play-digital-logo-on-light-bg.png',
        background: { r: 255, g: 255, b: 255 }, // #ffffff
        width: 1200
    },
    {
        name: 'level-play-digital-logo-transparent-bg.png',
        background: null, // Transparent
        width: 1200
    }
];

async function generatePNG(config) {
    try {
        const outputPath = path.join(outputDir, config.name);
        
        let image = sharp(svgPath)
            .resize(config.width, null, {
                fit: 'inside',
                withoutEnlargement: true
            });
        
        if (config.background) {
            // Add background color
            image = image.composite([{
                input: {
                    create: {
                        width: config.width,
                        height: Math.round(config.width * 0.4), // Approximate aspect ratio
                        channels: 3,
                        background: config.background
                    }
                },
                gravity: 'center'
            }]);
        }
        
        await image.png().toFile(outputPath);
        console.log(`✓ Generated: ${config.name}`);
    } catch (error) {
        console.error(`✗ Error generating ${config.name}:`, error.message);
    }
}

async function generateAll() {
    console.log('Generating logo background PNG files...\n');
    
    for (const config of backgrounds) {
        await generatePNG(config);
    }
    
    console.log('\n✓ All PNG files generated successfully!');
}

// Run the generator
generateAll().catch(console.error);

