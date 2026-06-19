import puppeteer from 'puppeteer';
import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Because type="module", we need to define __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define paths
const DIST_DIR = path.resolve(__dirname, '../dist');
let PORT = 0;
let BASE_URL = '';

// Static routes
const routes = [
  '/',
  '/about-us',
  '/contact',
  '/blog',
  '/case-study',
  '/privacy-policy',
  '/services/web-design-development',
  '/services/digital-marketing',
  '/services/custom-software-development'
];

// Helper to extract dynamic routes from data files
async function getDynamicRoutes() {
  try {
    // We import the raw data modules directly
    const blogsModule = await import('../src/data/blogs.js');
    const caseStudiesModule = await import('../src/data/caseStudies.js');

    const blogs = blogsModule.default || [];
    const caseStudies = caseStudiesModule.default || [];

    const blogRoutes = blogs.map(blog => `/blogs/${blog.slug}`);
    const caseStudyRoutes = caseStudies.map(cs => `/case-study/${cs.slug || cs.id}`); // Check what caseStudies use

    return [...blogRoutes, ...caseStudyRoutes];
  } catch (error) {
    console.error('Error loading dynamic routes:', error);
    return [];
  }
}

async function startServer() {
  const app = express();
  // Serve static files from dist
  app.use(express.static(DIST_DIR));
  // Fallback to index.html for SPA routing
  app.use((req, res) => {
    res.sendFile(path.join(DIST_DIR, 'index.html'));
  });

  return new Promise((resolve) => {
    const server = app.listen(0, () => {
      PORT = server.address().port;
      BASE_URL = `http://localhost:${PORT}`;
      resolve(server);
    });
  });
}

async function prerender() {
  console.log('Starting custom prerenderer...');
  const server = await startServer();
  const dynamicRoutes = await getDynamicRoutes();
  const allRoutes = [...routes, ...dynamicRoutes];

  console.log(`Found ${allRoutes.length} total routes to prerender.`);

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  for (const route of allRoutes) {
    const page = await browser.newPage();
    const url = `${BASE_URL}${route}`;
    console.log(`Prerendering ${route}...`);

    try {
      // Go to page and wait for React to mount
      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 15000 });
      
      // Wait for React and react-helmet to render the DOM
      // We wait for the root element to have children
      await page.waitForSelector('#root > *', { timeout: 10000 });
      
      // Wait a tiny bit extra for safety (Helmet tags injection)
      await new Promise(r => setTimeout(r, 1000));

      const html = await page.content();

      // Create directories if they don't exist
      const filePath = route === '/' 
        ? path.join(DIST_DIR, 'index.html') 
        : path.join(DIST_DIR, route, 'index.html');

      fs.mkdirSync(path.dirname(filePath), { recursive: true });
      fs.writeFileSync(filePath, html);

    } catch (e) {
      console.error(`Failed to prerender ${route}:`, e.message);
    } finally {
      await page.close();
    }
  }

  await browser.close();
  server.close();
  console.log('Prerendering complete! ✅');
}

prerender().catch(err => {
  console.error(err);
  process.exit(1);
});
