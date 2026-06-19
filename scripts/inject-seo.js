import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST_DIR = path.resolve(__dirname, '../dist');

async function injectSEO() {
  console.log('Starting Lightweight SEO Injector (Vercel Compatible)...');

  // Load the compiled index.html
  const indexPath = path.join(DIST_DIR, 'index.html');
  if (!fs.existsSync(indexPath)) {
    console.error('dist/index.html not found! Run vite build first.');
    process.exit(1);
  }
  
  const baseHtml = fs.readFileSync(indexPath, 'utf-8');

  // Helper to inject tags
  const generateHTML = (title, description, image, urlPath) => {
    const canonicalUrl = `https://thenexasoftsolutions.com${urlPath}`;
    const tags = `
    <title>${title}</title>
    <meta name="description" content="${description}">
    <link rel="canonical" href="${canonicalUrl}">
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${description}">
    <meta property="og:image" content="${image}">
    <meta property="og:url" content="${canonicalUrl}">
    <meta property="og:type" content="website">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${title}">
    <meta name="twitter:description" content="${description}">
    <meta name="twitter:image" content="${image}">
    `;
    
    return baseHtml.replace('</head>', `${tags}</head>`);
  };

  // Helper to save file
  const saveHtml = (urlPath, htmlContent) => {
    // urlPath like '/blogs/my-slug'
    const filePath = path.join(DIST_DIR, urlPath, 'index.html');
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, htmlContent);
    console.log(`Generated: ${urlPath}/index.html`);
  };

  try {
    const blogsModule = await import('../src/data/blogs.js');
    const caseStudiesModule = await import('../src/data/caseStudies.js');
    
    const blogs = blogsModule.default || [];
    const caseStudies = caseStudiesModule.default || [];

    // Inject for blogs
    for (const blog of blogs) {
      const urlPath = `/blogs/${blog.slug}`;
      const title = `${blog.title} | Nexasoft Solutions`;
      const description = blog.overview || blog.excerpt || blog.title;
      const image = blog.image || 'https://thenexasoftsolutions.com/default-og.jpg';
      
      const html = generateHTML(title, description, image, urlPath);
      saveHtml(urlPath, html);
    }

    // Inject for case studies
    for (const cs of caseStudies) {
      const urlPath = `/case-study/${cs.slug || cs.id}`;
      const title = `${cs.title} | Nexasoft Solutions`;
      const description = cs.overview || cs.problem || cs.title;
      const image = cs.image || 'https://thenexasoftsolutions.com/default-og.jpg';
      
      const html = generateHTML(title, description, image, urlPath);
      saveHtml(urlPath, html);
    }

    console.log('✅ SEO Injection Complete! All static HTML files generated successfully.');

  } catch (err) {
    console.error('Error during SEO injection:', err);
    process.exit(1);
  }
}

injectSEO();
