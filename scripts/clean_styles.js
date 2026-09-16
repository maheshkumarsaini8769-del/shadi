const fs = require('fs');
const path = require('path');

const responsiveCss = `
/* Responsive & Grid Layout Styles */
@media (max-width: 1200px) {
  .lehenga-product-grid {
    grid-template-columns: repeat(3, 1fr) !important;
  }
}

@media (max-width: 1024px) {
  .collections-grid,
  .collections-page-grid {
    grid-template-columns: repeat(3, 1fr) !important;
  }
  .featured-products-grid {
    grid-template-columns: repeat(2, 1fr) !important;
  }
  .bride-story-grid {
    grid-template-columns: 1fr !important;
    gap: 2.5rem !important;
  }
  .editorial-banner-grid {
    grid-template-columns: 1fr !important;
  }
  .showroom-section-grid {
    grid-template-columns: 1fr !important;
  }
  .about-grid {
    grid-template-columns: 1fr !important;
  }
  .pillars-grid {
    grid-template-columns: repeat(2, 1fr) !important;
  }
  .contact-layout-grid {
    grid-template-columns: 1fr !important;
  }
}

@media (max-width: 992px) {
  .desktop-nav,
  .appointment-btn,
  .filter-sidebar-desktop {
    display: none !important;
  }
  .mobile-menu-btn,
  .mobile-filter-trigger {
    display: inline-flex !important;
  }
  .listing-layout-grid {
    grid-template-columns: 1fr !important;
  }
  .filter-sidebar-mobile-open {
    display: block;
    margin-bottom: 2rem;
  }
  .lehenga-product-grid,
  .sarees-grid,
  .indo-western-grid,
  .accessories-grid,
  .related-products-grid {
    grid-template-columns: repeat(2, 1fr) !important;
    gap: 1rem !important;
  }
  .product-detail-layout {
    grid-template-columns: 1fr !important;
    gap: 2.5rem !important;
  }
  .footer-grid {
    grid-template-columns: 1fr 1fr !important;
    gap: 2.5rem !important;
  }
}

@media (max-width: 768px) {
  .hero-quote-box {
    display: none !important;
  }
  .collections-grid,
  .collections-page-grid {
    grid-template-columns: repeat(2, 1fr) !important;
    gap: 0.85rem !important;
  }
  .hero-indicator-pos {
    bottom: 6rem !important;
  }
  .collection-detail-row {
    grid-template-columns: 1fr !important;
    padding: 1.5rem !important;
  }
}

@media (max-width: 640px) {
  .footer-grid {
    grid-template-columns: 1fr !important;
  }
  .footer-bottom {
    flex-direction: column;
    gap: 0.75rem;
    text-align: center;
  }
  .feature-badges-grid {
    grid-template-columns: 1fr 1fr !important;
    gap: 0.8rem !important;
  }
  .product-gallery-grid {
    grid-template-columns: 1fr !important;
  }
  .gallery-thumbnails {
    flex-direction: row !important;
    order: 2;
    overflow-x: auto;
    padding-bottom: 0.5rem;
  }
  .gallery-thumbnails button {
    flex: 0 0 70px;
    padding-top: 90px !important;
  }
  .pillars-grid {
    grid-template-columns: 1fr !important;
  }
  .form-row-2 {
    grid-template-columns: 1fr !important;
  }
}
`;

// Append to globals.css
const globalsPath = path.join(__dirname, '../src/app/globals.css');
let globals = fs.readFileSync(globalsPath, 'utf8');
if (globals.charCodeAt(0) === 0xFEFF) globals = globals.slice(1);
if (!globals.includes('/* Responsive & Grid Layout Styles */')) {
  fs.writeFileSync(globalsPath, globals + '\n' + responsiveCss, 'utf8');
  console.log('Updated globals.css with responsive layout styles');
}

// Remove style jsx from all files in src/
function walk(dir) {
  fs.readdirSync(dir).forEach(file => {
    const full = path.join(dir, file);
    if (fs.statSync(full).isDirectory()) {
      walk(full);
    } else if (full.endsWith('.jsx') || full.endsWith('.js')) {
      let content = fs.readFileSync(full, 'utf8');
      if (content.charCodeAt(0) === 0xFEFF) content = content.slice(1);
      const cleaned = content.replace(/<style jsx[\s\S]*?<\/style>/g, '');
      if (cleaned !== content) {
        fs.writeFileSync(full, cleaned, 'utf8');
        console.log('Cleaned style jsx from', path.basename(full));
      }
    }
  });
}
walk(path.join(__dirname, '../src'));
console.log('All files checked and cleaned!');
