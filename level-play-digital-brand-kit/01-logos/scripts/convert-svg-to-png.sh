#!/bin/bash
# Convert SVG logo files to PNG at various sizes using ImageMagick
# 
# Requirements: ImageMagick must be installed
# Install: brew install imagemagick (Mac) or apt-get install imagemagick (Linux)

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
LOGO_DIR="$(dirname "$SCRIPT_DIR")"
OUTPUT_DIR="$LOGO_DIR/png-exports"

# Check if ImageMagick is installed
if ! command -v convert &> /dev/null; then
    echo "Error: ImageMagick is not installed."
    echo "Install with: brew install imagemagick (Mac) or apt-get install imagemagick (Linux)"
    exit 1
fi

# Create output directory
mkdir -p "$OUTPUT_DIR"

echo "Generating PNG files from SVG logos..."
echo ""

# Web sizes (72 DPI)
WEB_SIZES=(256 512 1200)

# Print size (300 DPI)
PRINT_SIZE=3000
PRINT_DPI=300

# Function to convert SVG to PNG
convert_logo() {
    local svg_file="$1"
    local output_file="$2"
    local width="$3"
    local dpi="${4:-72}"
    
    if [ ! -f "$svg_file" ]; then
        echo "⚠ SVG file not found: $svg_file"
        return 1
    fi
    
    # Create output directory if needed
    mkdir -p "$(dirname "$output_file")"
    
    # Convert with ImageMagick
    convert -background none -resize "${width}x" -density "$dpi" "$svg_file" "$output_file"
    
    if [ $? -eq 0 ]; then
        echo "✓ $(basename "$output_file")"
        return 0
    else
        echo "✗ Error converting $(basename "$svg_file")"
        return 1
    fi
}

# Process each logo category
process_category() {
    local category="$1"
    local category_dir="$LOGO_DIR/$category"
    
    if [ ! -d "$category_dir" ]; then
        return
    fi
    
    # Find all SVG files in category
    find "$category_dir" -name "*.svg" -type f | while read svg_file; do
        base_name=$(basename "$svg_file" .svg)
        
        # Generate web sizes
        for size in "${WEB_SIZES[@]}"; do
            output_file="$OUTPUT_DIR/$category/${base_name}-${size}px.png"
            convert_logo "$svg_file" "$output_file" "$size" 72
        done
        
        # Generate print size
        output_file="$OUTPUT_DIR/print/$category/${base_name}-300dpi.png"
        convert_logo "$svg_file" "$output_file" "$PRINT_SIZE" "$PRINT_DPI"
    done
}

# Process main logo categories
process_category "primary"
process_category "solid-versions"
process_category "variations"

echo ""
echo "✓ PNG conversion complete!"
echo "Output directory: $OUTPUT_DIR"

