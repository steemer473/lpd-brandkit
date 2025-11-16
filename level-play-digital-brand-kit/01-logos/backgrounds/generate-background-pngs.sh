#!/bin/bash
# Generate PNG files for logo backgrounds using ImageMagick
# 
# Requirements: ImageMagick must be installed
# Install: brew install imagemagick (Mac) or apt-get install imagemagick (Linux)

SVG_FILE="../primary/level-play-digital-logo-gradient-full.svg"
OUTPUT_DIR="."

# Check if ImageMagick is installed
if ! command -v convert &> /dev/null; then
    echo "Error: ImageMagick is not installed."
    echo "Install with: brew install imagemagick (Mac) or apt-get install imagemagick (Linux)"
    exit 1
fi

# Check if SVG file exists
if [ ! -f "$SVG_FILE" ]; then
    echo "Error: SVG file not found at $SVG_FILE"
    exit 1
fi

echo "Generating logo background PNG files..."
echo ""

# Dark background
echo "Generating dark background version..."
convert -background "#1a1a2e" -resize 1200x "$SVG_FILE" "$OUTPUT_DIR/level-play-digital-logo-on-dark-bg.png"
if [ $? -eq 0 ]; then
    echo "✓ Generated: level-play-digital-logo-on-dark-bg.png"
else
    echo "✗ Error generating dark background version"
fi

# Light background
echo "Generating light background version..."
convert -background "#ffffff" -resize 1200x "$SVG_FILE" "$OUTPUT_DIR/level-play-digital-logo-on-light-bg.png"
if [ $? -eq 0 ]; then
    echo "✓ Generated: level-play-digital-logo-on-light-bg.png"
else
    echo "✗ Error generating light background version"
fi

# Transparent background
echo "Generating transparent background version..."
convert -background none -resize 1200x "$SVG_FILE" "$OUTPUT_DIR/level-play-digital-logo-transparent-bg.png"
if [ $? -eq 0 ]; then
    echo "✓ Generated: level-play-digital-logo-transparent-bg.png"
else
    echo "✗ Error generating transparent background version"
fi

echo ""
echo "✓ All PNG files generated successfully!"

