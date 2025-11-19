/**
 * Generate PDF versions of logos for print
 * 
 * Requirements:
 * - Node.js installed
 * - puppeteer library: npm install puppeteer
 * 
 * Usage:
 * node generate-pdf-logos.js
 */

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const logoDir = __dirname.replace('/scripts', '');
const outputDir = path.join(logoDir, '..', '..', '..', 'lpd-logos-recommended', 'print', 'PDF');

// Logos to convert to PDF
const logosToConvert = [
    {
        name: 'level-play-digital-logo-gradient-full',
        path: path.join(logoDir, 'primary', 'level-play-digital-logo-gradient-full.svg')
    },
    {
        name: 'level-play-digital-logo-rich-black',
        path: path.join(logoDir, 'solid-versions', 'level-play-digital-logo-rich-black.svg')
    },
    {
        name: 'level-play-digital-logo-white',
        path: path.join(logoDir, 'solid-versions', 'level-play-digital-logo-white.svg')
    },
    {
        name: 'level-play-digital-logo-black',
        path: path.join(logoDir, 'solid-versions', 'level-play-digital-logo-black.svg')
    }
];

async function generatePDFs() {
    // Create output directory
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    console.log('Generating PDF files from SVG logos...\n');
    console.log(`Output directory: ${outputDir}\n`);

    let browser;
    try {
        browser = await puppeteer.launch({
            headless: true,
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });

        const page = await browser.newPage();
        page.setDefaultTimeout(60000); // Increase timeout to 60 seconds
        let successCount = 0;
        let errorCount = 0;

        for (const logo of logosToConvert) {
            if (!fs.existsSync(logo.path)) {
                console.warn(`⚠ SVG file not found: ${logo.path}`);
                errorCount++;
                continue;
            }

            const svgContent = fs.readFileSync(logo.path, 'utf8');
            const outputPath = path.join(outputDir, `${logo.name}.pdf`);

            try {
                // Convert file path to file:// URL
                const fileUrl = `file://${logo.path}`;
                
                // Set page size to accommodate logo
                await page.setViewport({ width: 2400, height: 1200 });
                
                // Create HTML with SVG embedded using data URI or file reference
                const html = `
                    <!DOCTYPE html>
                    <html>
                    <head>
                        <meta charset="UTF-8">
                        <style>
                            body {
                                margin: 0;
                                padding: 40px;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                min-height: 100vh;
                                background: white;
                            }
                            svg {
                                max-width: 100%;
                                height: auto;
                                display: block;
                            }
                        </style>
                    </head>
                    <body>
                        ${svgContent}
                    </body>
                    </html>
                `;

                await page.setContent(html, { waitUntil: 'load', timeout: 60000 });
                
                // Generate PDF
                await page.pdf({
                    path: outputPath,
                    format: 'A4',
                    printBackground: true,
                    margin: {
                        top: '20mm',
                        right: '20mm',
                        bottom: '20mm',
                        left: '20mm'
                    }
                });

                console.log(`  ✓ ${logo.name}.pdf`);
                successCount++;
            } catch (error) {
                console.error(`  ✗ Error converting ${logo.name}:`, error.message);
                errorCount++;
            }
        }

        console.log(`\n✓ Generated ${successCount} PDF files`);
        if (errorCount > 0) {
            console.log(`✗ ${errorCount} errors occurred`);
        }
    } catch (error) {
        console.error('Fatal error:', error);
        throw error;
    } finally {
        if (browser) {
            await browser.close();
        }
    }
}

// Run if called directly
if (require.main === module) {
    generatePDFs().catch(error => {
        console.error('Error:', error);
        process.exit(1);
    });
}

module.exports = { generatePDFs };

