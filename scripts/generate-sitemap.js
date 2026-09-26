const fs = require('fs');
const path = require('path');

// Read seedData.ts to extract products
const seedDataPath = path.join(__dirname, '../src/lib/seedData.ts');
const seedDataContent = fs.readFileSync(seedDataPath, 'utf8');

const productsBlockMatch = seedDataContent.match(/export const SEED_PRODUCTS: SeedProduct\[\] = (\[[\s\S]*?\]);/);

let seedProducts = [];
if (productsBlockMatch) {
  try {
    seedProducts = eval(productsBlockMatch[1]);
  } catch (e) {
    console.error('Failed to eval products block:', e);
  }
}

const baseUrl = 'https://www.jmkengineering.in';
const now = new Date().toISOString();

const staticRoutes = [
  { loc: `${baseUrl}/`, changefreq: 'daily', priority: '1.0' },
  { loc: `${baseUrl}/products`, changefreq: 'daily', priority: '0.9' },
  { loc: `${baseUrl}/about`, changefreq: 'weekly', priority: '0.8' },
  { loc: `${baseUrl}/contact`, changefreq: 'weekly', priority: '0.8' },
  { loc: `${baseUrl}/photos`, changefreq: 'weekly', priority: '0.7' },
  { loc: `${baseUrl}/videos`, changefreq: 'weekly', priority: '0.7' },
  { loc: `${baseUrl}/design-spec-pdf`, changefreq: 'monthly', priority: '0.6' },
];

const categoryRoutes = [
  'shuttering',
  'scaffolding',
  'joints',
  'bearings',
  'drainage',
  'centering',
  'h-frame',
  'planks',
  'channels',
  'barriers',
].map((cat) => ({
  loc: `${baseUrl}/products?category=${cat}`,
  changefreq: 'weekly',
  priority: '0.8',
}));

const productRoutes = seedProducts.map((prod) => ({
  loc: `${baseUrl}/products/${prod.slug}`,
  changefreq: 'weekly',
  priority: '0.85',
}));

const allRoutes = [...staticRoutes, ...categoryRoutes, ...productRoutes];

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

for (const route of allRoutes) {
  xml += `  <url>
    <loc>${route.loc}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>
`;
}

xml += `</urlset>\n`;

const outputPath = path.join(__dirname, '../public/sitemap.xml');
fs.writeFileSync(outputPath, xml, 'utf8');

console.log(`Generated public/sitemap.xml with ${allRoutes.length} URLs successfully!`);
