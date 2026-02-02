# Content Management Guide

This guide explains how to manage your portfolio content using JSON files.

## Table of Contents
- [Overview](#overview)
- [Editing Site Information](#editing-site-information)
- [Managing Projects](#managing-projects)
- [Managing Categories](#managing-categories)
- [Working with Images](#working-with-images)
- [Tips & Best Practices](#tips--best-practices)

## Overview

All portfolio content is stored in a single JSON file:
```
/src/assets/content/portfolio.json
```

This file contains:
- Site configuration (name, bio, contact info, social links)
- Theme colors
- Skills list
- Project categories and items

## Editing Site Information

### Personal Information

Edit the `site` section to update your personal details:

```json
{
  "site": {
    "designerName": "Your Full Name",
    "tagline": "Your Professional Tagline",
    "bio": "A detailed bio about yourself and your design philosophy...",
    "email": "your.email@example.com",
    "phone": "+1 (555) 123-4567",
    "location": "City, State/Country",
    "resumeUrl": "/assets/resume.pdf"
  }
}
```

### Social Media Links

Update your social media profiles:

```json
{
  "social": {
    "behance": "https://behance.net/yourusername",
    "dribbble": "https://dribbble.com/yourusername",
    "instagram": "https://instagram.com/yourusername",
    "linkedin": "https://linkedin.com/in/yourusername",
    "twitter": "https://twitter.com/yourusername"
  }
}
```

**Note**: You can add or remove social platforms. Just make sure to handle them in the templates.

### Theme Colors

Customize the color palette:

```json
{
  "theme": {
    "primary": "#C6A57A",        // Primary brand color
    "background": "#F7F3EE",     // Light mode background
    "backgroundDark": "#1A1A1A", // Dark mode background
    "text": "#2B2B2B",           // Light mode text
    "textDark": "#F7F3EE",       // Dark mode text
    "accent": "#8B9A7F"          // Accent color
  }
}
```

### Skills

Update your skills list:

```json
{
  "skills": [
    "Brand Identity",
    "Logo Design",
    "UI/UX Design",
    "Motion Graphics",
    "Your New Skill"
  ]
}
```

## Managing Projects

### Adding a New Project

1. Choose the appropriate category (logos, reels, social, uiux, products)
2. Add a new object to the category's `items` array:

```json
{
  "id": "unique-project-id",           // Unique identifier (use lowercase, hyphens)
  "title": "Project Name",             // Display title
  "description": "Full description...", // Detailed description (2-3 sentences)
  "thumbnail": "/assets/images/logos/thumb.webp", // Path to thumbnail
  "images": [                           // Array of project images
    "/assets/images/logos/img1.webp",
    "/assets/images/logos/img2.webp"
  ],
  "videoUrl": "https://vimeo.com/123", // Optional: Vimeo or YouTube URL
  "tools": ["Illustrator", "Photoshop"], // Tools used
  "figmaLink": "https://figma.com/...", // Optional: Figma project link
  "adobeLinks": {                       // Optional: Adobe file downloads
    "ai": "/assets/files/project.ai",
    "psd": "/assets/files/project.psd",
    "ae": "/assets/files/project.aep",
    "xd": "/assets/files/project.xd"
  },
  "tags": ["branding", "minimal"],     // Search tags
  "featured": true,                     // Show in featured section
  "year": 2024                         // Project year
}
```

### Editing an Existing Project

1. Find the project by its `id` in the JSON file
2. Update the fields you want to change
3. Save the file

### Removing a Project

Simply delete the entire project object from the `items` array.

### Project Field Descriptions

| Field | Required | Description |
|-------|----------|-------------|
| `id` | Yes | Unique identifier (URL-safe) |
| `title` | Yes | Project title |
| `description` | Yes | Project description |
| `thumbnail` | Yes | Path to thumbnail image |
| `images` | Yes | Array of project images |
| `videoUrl` | No | Embedded video URL |
| `tools` | Yes | Array of tools used |
| `figmaLink` | No | Link to Figma file |
| `adobeLinks` | No | Object with Adobe file paths |
| `tags` | Yes | Array of search tags |
| `featured` | Yes | Boolean - show in featured |
| `year` | Yes | Project year |

## Managing Categories

### Available Categories

The portfolio comes with these default categories:
- `logos` - Logo Design
- `reels` - Motion Graphics
- `social` - Social Media Design
- `uiux` - UI/UX Design
- `products` - Product Design

### Adding a New Category

Add a new category to the `categories` array:

```json
{
  "id": "illustrations",              // Unique category ID
  "title": "Illustrations",          // Display title
  "icon": "brush",                   // Icon identifier
  "description": "Hand-crafted illustrations", // Category description
  "items": []                        // Array of projects
}
```

**Important**: After adding a new category, create the corresponding image folder:
```bash
mkdir src/assets/images/illustrations
```

### Removing a Category

Delete the entire category object from the `categories` array. Note that this will remove all projects in that category from the site.

## Working with Images

### Image Guidelines

1. **Format**: Use WebP for best performance (or JPG/PNG as fallback)
2. **Size**: 
   - Thumbnails: 800x600px recommended
   - Detail images: 1920x1080px or larger
3. **Optimization**: Compress images before uploading
4. **Naming**: Use descriptive, URL-safe names (e.g., `organic-cafe-logo.webp`)

### Adding Images

1. **Place images in the correct folder**:
   ```
   /src/assets/images/[category-id]/your-image.webp
   ```

2. **Reference in JSON**:
   ```json
   "thumbnail": "/assets/images/logos/your-image.webp",
   "images": [
     "/assets/images/logos/image1.webp",
     "/assets/images/logos/image2.webp"
   ]
   ```

### Converting Images to WebP

Use online tools like:
- https://squoosh.app/
- https://cloudconvert.com/

Or use command line:
```bash
# Install cwebp (part of libwebp)
brew install webp  # macOS
apt-get install webp  # Ubuntu/Debian

# Convert image
cwebp -q 80 input.jpg -o output.webp
```

## Working with Downloadable Files

### Adding Adobe Files

1. **Place files in the files folder**:
   ```
   /src/assets/files/your-project.ai
   /src/assets/files/your-project.psd
   ```

2. **Reference in JSON**:
   ```json
   "adobeLinks": {
     "ai": "/assets/files/your-project.ai",
     "psd": "/assets/files/your-project.psd"
   }
   ```

### Supported File Types

- `.ai` - Adobe Illustrator
- `.psd` - Adobe Photoshop
- `.aep` - Adobe After Effects
- `.xd` - Adobe XD

## Tips & Best Practices

### Content Writing

1. **Descriptions**: Keep project descriptions concise (2-3 sentences)
2. **Tags**: Use 3-5 relevant tags per project
3. **Tools**: List tools in order of importance
4. **Title**: Keep titles short and descriptive

### Organization

1. **IDs**: Use lowercase with hyphens (e.g., `my-project-id`)
2. **Order**: Projects appear in the order listed in JSON
3. **Featured**: Mark your best 3-5 projects as featured
4. **Years**: Keep year information current

### Performance

1. **Images**: Always optimize images before uploading
2. **File Size**: Keep downloadable files under 50MB when possible
3. **Videos**: Use Vimeo or YouTube for hosting (don't upload large video files)

### Validation

After making changes:
1. Save the JSON file
2. Reload the website
3. Check for any errors in the browser console
4. Test all links and downloads

### JSON Formatting

- Use 2-space indentation
- Keep arrays and objects properly nested
- Validate JSON syntax using online tools if needed
- Make sure all quotes are double quotes (`"`)

## Common Issues

### Images Not Showing

- Check that the path is correct and starts with `/assets/`
- Verify the file exists in the specified location
- Check the file extension matches

### Project Not Appearing

- Verify the JSON syntax is valid
- Check that the project is in a valid category
- Make sure the `id` is unique

### Filters Not Working

- Ensure `tools` array contains exact tool names
- Check that `tags` array has proper string values
- Verify category `id` matches existing categories

## Need Help?

If you encounter issues:
1. Check the browser console for errors
2. Validate your JSON at https://jsonlint.com/
3. Review the example projects in the default portfolio.json
4. Open an issue on GitHub

---

Happy content managing! 🎨
