const SitemapGenerator = require('advanced-sitemap-generator');
const path = require('path');
// create generator
const generator = SitemapGenerator('http://localhost:3000', {
  ignoreHreflang: true,
  maxDepth: 0,
  filepath: path.join(process.cwd(), 'sitemap.xml'),
  maxEntriesPerFile: 50000,
  stripQuerystring: true
});

// register event listeners
generator.on('done', () => {
  // sitemaps created
});

// start the crawler
generator.start();
