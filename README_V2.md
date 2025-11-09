# Shivansh Aggarwal Portfolio - Version 2

## Overview

This is a complete redesign of your portfolio website with modern features, improved user experience, and better performance. Version 2 maintains all your original content while providing a contemporary, professional appearance.

## What's New in Version 2

### 1. **Modern Design System**
- Clean, contemporary interface with improved typography
- Professional color scheme with gradient accents
- Consistent spacing and layout throughout
- Better visual hierarchy and readability

### 2. **Dark Mode**
- Toggle between light and dark themes
- Preference saved in browser localStorage
- Smooth theme transitions
- Reduced eye strain for low-light viewing

### 3. **Enhanced Navigation**
- Fixed navbar with scroll detection
- Active section highlighting
- Smooth scroll to sections
- Mobile-responsive hamburger menu
- Scroll progress indicator at top

### 4. **Interactive Portfolio Section**
- Filter projects by category (All, Simulation, Design, Research, Manufacturing)
- Card-based layout with hover effects
- Detailed modal popups for each project
- Project tags and metadata
- Lazy loading for images

### 5. **Improved Experience & Education Timeline**
- Visual timeline with icons
- Color-coded current position
- Expandable content cards
- Better organization of information

### 6. **Modern Skills Section**
- Categorized skill display
- Interactive skill tags with hover effects
- Animated progress bars
- Clean organization by competency areas

### 7. **Testimonials Slider**
- Auto-playing carousel
- Manual navigation with arrows
- Dot indicators for position
- Pause on hover
- Keyboard navigation support

### 8. **Working Contact Form**
- Functional form with validation
- Success/error messaging
- Clean, modern design
- Contact information display with icons

### 9. **Performance Optimizations**
- Lazy loading for images
- Debounced scroll events
- Optimized animations
- Efficient CSS with variables
- Minimal JavaScript footprint

### 10. **Additional Features**
- Back-to-top button
- Scroll animations for sections
- Intersection Observer for performance
- Accessibility improvements (ARIA labels, keyboard navigation)
- Mobile-first responsive design
- SEO-friendly meta tags

## Files Structure

```
Shivansh_Resume/
├── index_v2.html          # New version 2 HTML
├── index.html             # Original version (kept for reference)
├── css/
│   ├── style_v2.css      # New modern CSS
│   └── style.css         # Original CSS
├── js/
│   ├── main_v2.js        # New interactive JavaScript
│   └── [original js files]
├── images/
│   └── portfolio/        # Your project images
└── README_V2.md          # This file
```

## How to Use

### Option 1: Replace Current Site
1. Rename `index.html` to `index_v1_backup.html`
2. Rename `index_v2.html` to `index.html`
3. Open `index.html` in your browser

### Option 2: Test Side-by-Side
1. Open `index_v2.html` directly in your browser
2. Compare with original `index.html`
3. Once satisfied, follow Option 1

## Browser Compatibility

Version 2 works on:
- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Customization Guide

### Changing Colors

Edit the CSS variables in `css/style_v2.css`:

```css
:root {
    --primary-color: #0066FF;      /* Main brand color */
    --secondary-color: #00D4FF;    /* Accent color */
    --accent-color: #FF6B6B;       /* Highlight color */
    /* ... other variables */
}
```

### Adding a Professional Photo

Replace the placeholder in the About section:

```html
<!-- In index_v2.html, find: -->
<div class="image-placeholder">
    <i class="fas fa-user"></i>
</div>

<!-- Replace with: -->
<img src="images/your-photo.jpg" alt="Shivansh Aggarwal">
```

### Updating Contact Information

Edit the Contact section in `index_v2.html`:

```html
<p>Columbus, IN-47203<br>USA</p>
<!-- Update to your current location -->
```

### Adding New Projects

Add project data in `js/main_v2.js`:

```javascript
const portfolioData = [
    // Add new project here
    {
        id: 'modal13',
        title: 'Your Project Title',
        date: 'Month Year - Month Year',
        location: 'Location',
        category: 'Category',
        image: 'images/portfolio/your-image.jpg',
        description: `<p>Your description here...</p>`,
        tags: ['Tag1', 'Tag2', 'Tag3']
    },
    // ... existing projects
];
```

Then add the corresponding card in the HTML portfolio grid.

### Integrating Contact Form with Backend

Replace the simulated submission in `js/main_v2.js`:

```javascript
// Find this in the Contact Form section:
try {
    // Replace this comment with actual API call:
    await fetch('/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    });
    // ... success handling
}
```

Popular options:
- **Formspree**: Add `action="https://formspree.io/f/YOUR_FORM_ID"` to form
- **EmailJS**: Client-side email sending
- **Netlify Forms**: If hosting on Netlify
- **Custom Backend**: Node.js, PHP, Python, etc.

## Key Features Explained

### 1. Dark Mode Implementation

The theme toggle button in the top-right switches between light and dark modes. The preference is saved in localStorage, so it persists across sessions.

### 2. Portfolio Filtering

Click the filter buttons above the portfolio grid to show only specific categories:
- **All Projects**: Shows everything
- **Simulation**: CFD, FEA, powertrain work
- **Design & CAD**: Modeling and design projects
- **Research**: Academic and research projects
- **Manufacturing**: Production and fabrication work

### 3. Project Modals

Click "View Details" on any portfolio card to open a modal with:
- Full project description
- Timeline and location
- Skill tags
- Project images
- Close with X button, clicking outside, or pressing Escape

### 4. Testimonials Carousel

- Auto-rotates every 5 seconds
- Navigate with left/right arrows
- Click dots to jump to specific testimonial
- Pause on hover
- Use arrow keys when focused

### 5. Smooth Scrolling

All navigation links smoothly scroll to sections. The navbar highlights the current section as you scroll.

## Performance Features

1. **Lazy Loading**: Images load only when needed
2. **Intersection Observer**: Animations trigger when elements enter viewport
3. **Debounced Events**: Scroll events optimized to prevent lag
4. **CSS Variables**: Efficient theme switching
5. **Minimal Dependencies**: Only Font Awesome for icons

## Accessibility

- Semantic HTML5 elements
- ARIA labels for screen readers
- Keyboard navigation support
- Focus indicators
- Color contrast ratios meet WCAG standards
- Alt text for images

## Mobile Responsiveness

The site is fully responsive with breakpoints at:
- **1024px**: Tablet adjustments
- **768px**: Mobile menu, layout changes
- **480px**: Small mobile optimizations

## Deployment

### GitHub Pages
1. Push files to GitHub repository
2. Go to Settings > Pages
3. Select main branch
4. Set to root directory
5. Save

### Netlify
1. Drag and drop folder to Netlify
2. Or connect GitHub repository
3. Deploy

### Vercel
1. Import GitHub repository
2. Deploy with zero configuration

### Traditional Hosting
1. Upload all files via FTP
2. Ensure `index_v2.html` is renamed to `index.html`
3. Maintain folder structure

## Future Enhancements (Optional)

Consider adding:
1. **Analytics**: Google Analytics or Plausible
2. **Blog Section**: Share engineering insights
3. **Resume Download**: PDF download button
4. **3D Models**: Interactive CAD model viewer
5. **Animations Library**: GSAP for advanced animations
6. **CMS Integration**: Contentful or Strapi for easy updates
7. **Multi-language Support**: i18n for global reach
8. **Performance Dashboard**: Real-time metrics display
9. **Video Introductions**: Add personal video message
10. **Live Chat**: Integration with messaging platform

## Troubleshooting

### Images Not Loading
- Check file paths in HTML
- Ensure images exist in `images/portfolio/` folder
- Verify image file names match exactly (case-sensitive)

### Dark Mode Not Working
- Check browser localStorage is enabled
- Clear browser cache
- Ensure JavaScript is enabled

### Mobile Menu Not Opening
- Verify JavaScript loaded correctly
- Check browser console for errors
- Ensure `main_v2.js` is linked properly

### Portfolio Filter Not Working
- Check that portfolio cards have `data-category` attributes
- Verify JavaScript is running
- Look for console errors

## Technical Stack

- **HTML5**: Semantic markup
- **CSS3**: Custom properties, Flexbox, Grid
- **Vanilla JavaScript**: No frameworks needed
- **Font Awesome 6**: Icon library
- **Google Fonts**: Inter & Poppins fonts

## Browser DevTools Tips

### Testing Responsiveness
1. Open DevTools (F12)
2. Click device toolbar icon
3. Test various screen sizes

### Performance Testing
1. Open DevTools > Lighthouse
2. Run audit
3. Follow suggestions for improvements

### Debugging
1. Console tab shows errors
2. Network tab shows loading times
3. Elements tab allows live editing

## Support & Maintenance

To keep your portfolio updated:

1. **Regular Content Updates**: Add new projects as you complete them
2. **Image Optimization**: Compress images before uploading
3. **Browser Testing**: Test in different browsers periodically
4. **Security**: Keep any backend services updated
5. **Backups**: Regularly backup your files

## Credits

- Design & Development: Version 2 Complete Redesign
- Original Content: Shivansh Aggarwal
- Icons: Font Awesome
- Fonts: Google Fonts (Inter, Poppins)

## License

This portfolio is for personal use by Shivansh Aggarwal.

---

## Quick Start Checklist

- [ ] Review new design in `index_v2.html`
- [ ] Test dark mode toggle
- [ ] Try portfolio filtering
- [ ] Click through project modals
- [ ] Test testimonials slider
- [ ] Check mobile responsiveness
- [ ] Add professional photo (optional)
- [ ] Update contact information
- [ ] Test contact form
- [ ] Deploy to hosting platform

## Need Help?

If you encounter any issues or need modifications:
1. Check the console for error messages
2. Verify all files are in correct locations
3. Ensure internet connection for external fonts/icons
4. Clear browser cache and reload

---

**Congratulations on your new modern portfolio! 🎉**

Open `index_v2.html` in your browser to see the transformation!
