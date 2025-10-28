#!/bin/bash
# Export Claude Code Projects for Easy Transfer

PROJECT_DIR="$1"
OUTPUT_DIR="/home/user/exports"

if [ -z "$PROJECT_DIR" ]; then
    echo "Usage: ./export-project.sh <project-directory>"
    exit 1
fi

# Create exports directory
mkdir -p "$OUTPUT_DIR"

# Get project name
PROJECT_NAME=$(basename "$PROJECT_DIR")
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
ZIP_NAME="${PROJECT_NAME}_${TIMESTAMP}.zip"

# Create zip file (excluding node_modules and .git)
cd "$(dirname "$PROJECT_DIR")"
zip -r "$OUTPUT_DIR/$ZIP_NAME" "$(basename "$PROJECT_DIR")" \
    -x "*/node_modules/*" \
    -x "*/.git/*" \
    -x "*.log"

echo ""
echo "✅ Project exported successfully!"
echo "📦 File: $OUTPUT_DIR/$ZIP_NAME"
echo "📊 Size: $(du -h "$OUTPUT_DIR/$ZIP_NAME" | cut -f1)"
echo ""
echo "Location: $OUTPUT_DIR/$ZIP_NAME"
ls -lh "$OUTPUT_DIR/$ZIP_NAME"
