const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const images = [
  // Hero section
  {
    name: 'hero-bride-palace.jpg',
    dir: 'public/images',
    url: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1600&auto=format&fit=crop'
  },
  {
    name: 'hero-bride-pastel.jpg',
    dir: 'public/images',
    url: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1600&auto=format&fit=crop'
  },
  {
    name: 'hero-bride-ivory.jpg',
    dir: 'public/images',
    url: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=1600&auto=format&fit=crop'
  },
  // Collections Cards
  {
    name: 'cat-bridal.jpg',
    dir: 'public/images',
    url: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'cat-saree.jpg',
    dir: 'public/images',
    url: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'cat-indo-western.jpg',
    dir: 'public/images',
    url: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'cat-reception.jpg',
    dir: 'public/images',
    url: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'cat-accessories.jpg',
    dir: 'public/images',
    url: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800&auto=format&fit=crop'
  },
  // Featured Bride Story & Editorial
  {
    name: 'bride-story-back.jpg',
    dir: 'public/images',
    url: 'https://images.unsplash.com/photo-1546804784-896d0dca3805?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'editorial-bride.jpg',
    dir: 'public/images',
    url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop'
  },
  {
    name: 'showroom-interior.jpg',
    dir: 'public/images',
    url: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop'
  },
  // 8 Specific Lehengas from Reference Mockup
  {
    name: 'lehenga-royal-red.jpg',
    dir: 'public/images/products',
    url: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'lehenga-pastel-pink.jpg',
    dir: 'public/images/products',
    url: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'lehenga-emerald-green.jpg',
    dir: 'public/images/products',
    url: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'lehenga-champagne-beige.jpg',
    dir: 'public/images/products',
    url: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'lehenga-wine-velvet.jpg',
    dir: 'public/images/products',
    url: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'lehenga-peach-sequin.jpg',
    dir: 'public/images/products',
    url: 'https://images.unsplash.com/photo-1546804784-896d0dca3805?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'lehenga-ivory-bridal.jpg',
    dir: 'public/images/products',
    url: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'lehenga-teal-designer.jpg',
    dir: 'public/images/products',
    url: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800&auto=format&fit=crop'
  },
  // Multi-angle thumbnails for Product Detail Page
  {
    name: 'royal-red-thumb-1.jpg',
    dir: 'public/images/products',
    url: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=500&auto=format&fit=crop'
  },
  {
    name: 'royal-red-thumb-2.jpg',
    dir: 'public/images/products',
    url: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=500&auto=format&fit=crop'
  },
  {
    name: 'royal-red-thumb-3.jpg',
    dir: 'public/images/products',
    url: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=500&auto=format&fit=crop'
  },
  {
    name: 'royal-red-thumb-4.jpg',
    dir: 'public/images/products',
    url: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=500&auto=format&fit=crop'
  },
  {
    name: 'royal-red-thumb-5.jpg',
    dir: 'public/images/products',
    url: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=500&auto=format&fit=crop'
  }
];

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    function get(currentUrl) {
      const client = currentUrl.startsWith('https') ? https : http;
      client.get(currentUrl, (response) => {
        if (response.statusCode === 301 || response.statusCode === 302) {
          get(response.headers.location);
          return;
        }
        if (response.statusCode !== 200) {
          file.close();
          fs.unlink(dest, () => {});
          reject(new Error(`Failed with status ${response.statusCode}`));
          return;
        }
        response.pipe(file);
        file.on('finish', () => {
          file.close(() => resolve());
        });
      }).on('error', (err) => {
        file.close();
        fs.unlink(dest, () => {});
        reject(err);
      });
    }
    get(url);
  });
}

async function run() {
  console.log('Starting download of luxury bridal images...');
  for (const item of images) {
    const targetDir = path.join(__dirname, '..', item.dir);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }
    const dest = path.join(targetDir, item.name);
    try {
      await downloadFile(item.url, dest);
      console.log(`✓ Downloaded ${item.name}`);
    } catch (err) {
      console.error(`✗ Error downloading ${item.name}:`, err.message);
    }
  }
  console.log('All image downloads completed!');
}

run();
