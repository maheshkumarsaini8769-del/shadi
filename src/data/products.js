export const collections = [
  {
    id: "bridal-lehengas",
    name: "Bridal Lehengas",
    tagline: "For Your Big Day",
    description: "Royal silhouettes adorned with intricate zardozi, kundan, and gota patti embroidery for the quintessential Indian bride.",
    image: "/images/cat-bridal.jpg",
    link: "/lehengas"
  },
  {
    id: "sarees",
    name: "Sarees",
    tagline: "Grace in Every Drape",
    description: "Timeless Banarasi silks, Kanjeevarams, and feather-light organza drapes woven by master artisans.",
    image: "/images/cat-saree.jpg",
    link: "/sarees"
  },
  {
    id: "indo-western",
    name: "Indo-Western",
    tagline: "Modern Traditions",
    description: "Architectural capes, pre-draped conceptual sarees, and couture gowns for the contemporary celebration.",
    image: "/images/cat-indo-western.jpg",
    link: "/indo-western"
  },
  {
    id: "reception-wear",
    name: "Reception Wear",
    tagline: "Shine Your Way",
    description: "Lustrous metallic velvets, crystal-embellished gowns, and glamorous statement ensembles for unforgettable evenings.",
    image: "/images/cat-reception.jpg",
    link: "/lehengas?category=Reception+Wear"
  },
  {
    id: "accessories",
    name: "Accessories",
    tagline: "Complete Your Look",
    description: "Handcrafted polki & kundan jewelry, hand-embroidered bridal potlis, and royal embellished juttis.",
    image: "/images/cat-accessories.jpg",
    link: "/accessories"
  }
];

export const products = [
  {
    id: "royal-red-bridal-lehenga",
    name: "Royal Red Bridal Lehenga",
    subtitle: "A timeless bridal lehenga crafted with exquisite zari, sequins and hand embroidery.",
    category: "Bridal Lehengas",
    section: "lehenga",
    price: 124999,
    originalPrice: 149999,
    discount: "17% OFF",
    rating: 4.8,
    reviews: 120,
    isFeatured: true,
    isBestSeller: true,
    colors: [
      { name: "Royal Red", hex: "#8A1C2C" },
      { name: "Blush Pink", hex: "#E8A598" },
      { name: "Champagne", hex: "#D8C7A3" },
      { name: "Deep Emerald", hex: "#1D4732" },
      { name: "Soft Peach", hex: "#E7A88D" }
    ],
    selectedColor: "Royal Red",
    fabric: "Silk",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    images: [
      "/images/products/lehenga-royal-red.jpg",
      "/images/products/royal-red-thumb-1.jpg",
      "/images/products/royal-red-thumb-2.jpg",
      "/images/products/royal-red-thumb-3.jpg",
      "/images/products/royal-red-thumb-4.jpg"
    ],
    description: "Make a royal statement on your big day with this exquisitely designed bridal lehenga. Blending traditional craftsmanship with modern elegance, this outfit is a celebration of heritage and the modern bride.",
    details: [
      "Crafted in rich pure raw silk with gold zardozi and cutdana work",
      "Features a 16-kali voluminous kalidar flare with canvas underlay",
      "Sweetheart neckline blouse with intricate hand-embroidered sleeves",
      "Dual dupatta set: one sheer net dupatta with scalloped border and one rich Banarasi tissue veil",
      "Includes latkan detailing and custom hand-stitched bustier"
    ],
    fabricCare: [
      "Fabric: 100% Pure Raw Silk with Tissue Velvet borders",
      "Embroidery: Hand-worked Zari, Dabka, Sequins, and Threadwork",
      "Lining: Pure Santoon & double layer cancan structure",
      "Dry clean only. Do not bleach or machine wash",
      "Preserve in pure breathable cotton/muslin bags in a dark, dry space"
    ],
    delivery: [
      "Standard insured dispatch: 5 to 7 business days",
      "Custom bespoke made-to-measure stitching: 12 to 16 business days",
      "Complimentary express bridal delivery across Pan India",
      "International insured courier to US, UK, UAE, Canada, and Australia"
    ],
    features: [
      { title: "Hand Embroidered", desc: "Crafted by master zardozi artisans with over 180 hours of handwork" },
      { title: "Premium Fabric", desc: "Woven with highest grade 100% mulberry raw silk and soft gossamer net" },
      { title: "Custom Stitching", desc: "Tailored to your exact bespoke measurements with complimentary alterations" },
      { title: "Lightweight Comfort", desc: "Ergonomically balanced cancan flare engineered for effortless movement" }
    ]
  },
  {
    id: "pastel-pink-zari-lehenga",
    name: "Pastel Pink Zari Lehenga",
    subtitle: "Delicate floral motifs rendered in blush organza and rose gold threadwork.",
    category: "Engagement",
    section: "lehenga",
    price: 96999,
    originalPrice: 112000,
    discount: "13% OFF",
    rating: 4.9,
    reviews: 84,
    isFeatured: true,
    colors: [
      { name: "Pastel Pink", hex: "#E5B0AD" },
      { name: "Powder Blue", hex: "#9EB6C9" },
      { name: "Ivory", hex: "#F3EFEA" }
    ],
    selectedColor: "Pastel Pink",
    fabric: "Organza",
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      "/images/products/lehenga-pastel-pink.jpg",
      "/images/products/royal-red-thumb-4.jpg",
      "/images/products/royal-red-thumb-1.jpg"
    ],
    description: "An ethereal pastel ensemble created for morning wedding ceremonies and luxury engagement soirees. The gentle pink hue is enhanced with delicate rose gold zari and micro-sequins.",
    details: ["Pure organza lehenga with satin lining", "Hand-pleated waist with matching embroidered belt", "Feather-light organza dupatta with pearl edging"],
    fabricCare: ["Dry clean only", "Iron on low temperature with pressing cloth"],
    delivery: ["Dispatched within 7 business days", "Free Pan-India shipping"],
    features: [
      { title: "Hand Embroidered", desc: "Fine floral motifs" },
      { title: "Premium Fabric", desc: "Airy pure organza" },
      { title: "Custom Stitching", desc: "Made to measure" },
      { title: "Lightweight Comfort", desc: "Effortless day-long wear" }
    ]
  },
  {
    id: "emerald-green-lehenga",
    name: "Emerald Green Lehenga",
    subtitle: "Regal velvet ensemble accented with antique gold dabka and emerald crystals.",
    category: "Reception Wear",
    section: "lehenga",
    price: 110999,
    originalPrice: null,
    rating: 4.7,
    reviews: 63,
    isFeatured: true,
    colors: [
      { name: "Emerald Green", hex: "#163E2D" },
      { name: "Midnight Navy", hex: "#18243E" }
    ],
    selectedColor: "Emerald Green",
    fabric: "Velvet",
    sizes: ["S", "M", "L", "XL"],
    images: [
      "/images/products/lehenga-emerald-green.jpg",
      "/images/products/royal-red-thumb-3.jpg",
      "/images/products/royal-red-thumb-2.jpg"
    ],
    description: "Steeped in royal grandeur, this emerald green velvet lehenga commands the room. Designed for high-glamour receptions and sangeet nights.",
    details: ["Plush micro-velvet fabric with rich drape", "Deep jewel-toned threadwork with gold bullion wire", "Complementary georgette dupatta with velvet border"],
    fabricCare: ["Professional dry clean only", "Do not steam directly on velvet pile"],
    delivery: ["Dispatched within 5 business days"],
    features: [
      { title: "Hand Embroidered", desc: "Zardozi & Dabka" },
      { title: "Premium Fabric", desc: "Royal Micro-Velvet" },
      { title: "Custom Stitching", desc: "Bespoke fitting" },
      { title: "Lightweight Comfort", desc: "Engineered weight balance" }
    ]
  },
  {
    id: "champagne-beige-lehenga",
    name: "Champagne Beige Lehenga",
    subtitle: "Subtle opulence with metallic champagne sequins and delicate net layers.",
    category: "Sangeet",
    section: "lehenga",
    price: 89999,
    originalPrice: 99999,
    discount: "10% OFF",
    rating: 4.8,
    reviews: 47,
    isFeatured: true,
    colors: [
      { name: "Champagne Beige", hex: "#DFD2BF" },
      { name: "Rose Gold", hex: "#D7AB9F" }
    ],
    selectedColor: "Champagne Beige",
    fabric: "Net",
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      "/images/products/lehenga-champagne-beige.jpg",
      "/images/products/royal-red-thumb-1.jpg",
      "/images/products/royal-red-thumb-5.jpg"
    ],
    description: "Glistening champagne tone designed to shimmer beautifully under chandelier lights. Lightweight net construction allows joyful dancing at sangeet celebrations.",
    details: ["Multi-tiered soft French net flare", "Self-toned sequins with hints of rose gold zari", "Illusion back blouse design"],
    fabricCare: ["Dry clean only"],
    delivery: ["Dispatched within 6 business days"],
    features: [
      { title: "Hand Embroidered", desc: "Sequin shimmer work" },
      { title: "Premium Fabric", desc: "Imported soft net" },
      { title: "Custom Stitching", desc: "Padded blouse included" },
      { title: "Lightweight Comfort", desc: "Dance-friendly drape" }
    ]
  },
  {
    id: "wine-velvet-lehenga",
    name: "Wine Velvet Lehenga",
    subtitle: "Sumptuous burgundy velvet masterpiece embroidered with royal silver tilla.",
    category: "Bridal Lehengas",
    section: "lehenga",
    price: 134999,
    originalPrice: null,
    rating: 4.9,
    reviews: 98,
    isFeatured: true,
    colors: [
      { name: "Wine / Maroon", hex: "#5C1322" },
      { name: "Royal Red", hex: "#8A1C2C" }
    ],
    selectedColor: "Wine / Maroon",
    fabric: "Velvet",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    images: [
      "/images/products/lehenga-wine-velvet.jpg",
      "/images/products/royal-red-thumb-2.jpg",
      "/images/products/royal-red-thumb-3.jpg"
    ],
    description: "Deep, passionate burgundy wine tones bring an air of aristocratic Mughal royalty to winter weddings. Each floral archway motif on the skirt is hand-stitched by heirloom embroiderers.",
    details: ["Heavy Mughal jaal pattern embroidery", "Signature Shadi handmade tassels", "Double veil with ornate zardozi borders"],
    fabricCare: ["Dry clean only. Keep wrapped in unbleached calico"],
    delivery: ["Dispatched within 7 business days"],
    features: [
      { title: "Hand Embroidered", desc: "Heirloom craftsmanship" },
      { title: "Premium Fabric", desc: "Opulent Italian velvet" },
      { title: "Custom Stitching", desc: "Bridal concierge fit" },
      { title: "Lightweight Comfort", desc: "Reinforced waist structure" }
    ]
  },
  {
    id: "peach-sequin-lehenga",
    name: "Peach Sequin Lehenga",
    subtitle: "A modern fairytale silhouette with tonal peach crystals and georgette drape.",
    category: "Party Wear",
    section: "lehenga",
    price: 92599,
    originalPrice: 104999,
    discount: "12% OFF",
    rating: 4.6,
    reviews: 51,
    isFeatured: true,
    colors: [
      { name: "Warm Peach", hex: "#E9B6A1" },
      { name: "Dusty Mauve", hex: "#AC8A93" }
    ],
    selectedColor: "Warm Peach",
    fabric: "Georgette",
    sizes: ["S", "M", "L", "XL"],
    images: [
      "/images/products/lehenga-peach-sequin.jpg",
      "/images/products/royal-red-thumb-4.jpg",
      "/images/products/royal-red-thumb-1.jpg"
    ],
    description: "Radiate warmth and youthful joy in this soft peach georgette lehenga. The cascading flares create poetic movement with every step.",
    details: ["Flowing pure viscose georgette", "Micro-cutdana work with pearl highlights", "Plunging neckline with delicate sheer back"],
    fabricCare: ["Dry clean only"],
    delivery: ["Dispatched within 5 business days"],
    features: [
      { title: "Hand Embroidered", desc: "Delicate pearl & sequins" },
      { title: "Premium Fabric", desc: "Pure georgette" },
      { title: "Custom Stitching", desc: "Perfect body-contouring" },
      { title: "Lightweight Comfort", desc: "Ultra-breathable flow" }
    ]
  },
  {
    id: "ivory-bridal-lehenga",
    name: "Ivory Bridal Lehenga",
    subtitle: "The epitome of modern Indian aristocracy in pristine ivory and antique gold.",
    category: "Bridal Lehengas",
    section: "lehenga",
    price: 149999,
    originalPrice: null,
    rating: 5.0,
    reviews: 76,
    isFeatured: true,
    colors: [
      { name: "Royal Ivory", hex: "#F3ECE1" },
      { name: "Cream Gold", hex: "#E5D9C4" }
    ],
    selectedColor: "Royal Ivory",
    fabric: "Silk",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    images: [
      "/images/products/lehenga-ivory-bridal.jpg",
      "/images/products/royal-red-thumb-5.jpg",
      "/images/products/royal-red-thumb-3.jpg"
    ],
    description: "A visionary bridal creation in royal ivory silk. Hand-embroidered with micro-pearls, champagne tilla, and 24K electroplated gold thread, designed for the bride who redefines royalty.",
    details: ["Pure Katan silk with tissue border", "Heavy pearl encrusted waistband", "Heritage Pichwai-inspired border motifs"],
    fabricCare: ["Exclusive specialist dry clean only"],
    delivery: ["Dispatched within 8 business days"],
    features: [
      { title: "Hand Embroidered", desc: "Pearl & 24K gold tilla" },
      { title: "Premium Fabric", desc: "Hand-spun Katan silk" },
      { title: "Custom Stitching", desc: "Bespoke trial included" },
      { title: "Lightweight Comfort", desc: "Feathered structural lining" }
    ]
  },
  {
    id: "teal-designer-lehenga",
    name: "Teal Designer Lehenga",
    subtitle: "Oceanic teal georgette with contemporary metallic embroidery and cape dupatta.",
    category: "Reception Wear",
    section: "lehenga",
    price: 119999,
    originalPrice: 135000,
    discount: "11% OFF",
    rating: 4.8,
    reviews: 42,
    isFeatured: true,
    colors: [
      { name: "Teal Blue", hex: "#1C5B63" },
      { name: "Midnight Navy", hex: "#15263C" }
    ],
    selectedColor: "Teal Blue",
    fabric: "Silk",
    sizes: ["XS", "S", "M", "L"],
    images: [
      "/images/products/lehenga-teal-designer.jpg",
      "/images/products/royal-red-thumb-2.jpg",
      "/images/products/royal-red-thumb-4.jpg"
    ],
    description: "An unforgettable fusion of traditional heritage and modern red-carpet panache. The jewel teal shade creates a breathtaking silhouette against any festive backdrop.",
    details: ["Structured corset bodice with bone detailing", "Flared lehenga skirt with 8-meter circumference", "Detachable floor-length tulle cape"],
    fabricCare: ["Dry clean only"],
    delivery: ["Dispatched within 5 business days"],
    features: [
      { title: "Hand Embroidered", desc: "Cutdana & metallic thread" },
      { title: "Premium Fabric", desc: "Silk georgette blend" },
      { title: "Custom Stitching", desc: "Built-in boned corset" },
      { title: "Lightweight Comfort", desc: "Fluid red-carpet movement" }
    ]
  },
  // Sarees
  {
    id: "royal-banarasi-silk-saree",
    name: "Royal Banarasi Silk Saree",
    subtitle: "Heirloom red and gold zari Banarasi saree handwoven in Varanasi.",
    category: "Bridal Sarees",
    section: "saree",
    price: 48999,
    originalPrice: 58000,
    discount: "15% OFF",
    rating: 4.9,
    reviews: 67,
    isFeatured: true,
    colors: [
      { name: "Vermilion Red", hex: "#991D26" },
      { name: "Rani Pink", hex: "#B82467" }
    ],
    selectedColor: "Vermilion Red",
    fabric: "Silk",
    sizes: ["Free Size (Includes Unstitched Blouse Piece)"],
    images: [
      "/images/cat-saree.jpg",
      "/images/products/royal-red-thumb-1.jpg"
    ],
    description: "Woven over four months by heritage artisans in Varanasi, this pure Katan silk Banarasi saree features classical shikargah and floral jaal motifs in real gold zari.",
    details: ["Length: 5.5 meters saree + 0.8 meter matching blouse piece", "100% Pure Certified Silk Mark", "Hand-knotted pallu tassels"],
    fabricCare: ["Dry clean only. Roll in muslin cloth"],
    delivery: ["Dispatched in 3 business days"],
    features: [
      { title: "Hand Loomed", desc: "100% authentic Varanasi handloom" },
      { title: "Pure Gold Zari", desc: "Certified silk & zari" },
      { title: "Custom Blouse", desc: "Tailoring service available" },
      { title: "Heirloom Grade", desc: "Passes down through generations" }
    ]
  },
  {
    id: "rose-organza-tissue-saree",
    name: "Rose Organza Tissue Saree",
    subtitle: "Gilded pastel pink tissue saree with scalloped pearl and sequin borders.",
    category: "Cocktail Sarees",
    section: "saree",
    price: 36999,
    originalPrice: null,
    rating: 4.8,
    reviews: 39,
    colors: [
      { name: "Rose Gold", hex: "#D6A398" },
      { name: "Champagne", hex: "#DDD1BC" }
    ],
    selectedColor: "Rose Gold",
    fabric: "Organza",
    sizes: ["Free Size"],
    images: [
      "/images/cat-indo-western.jpg",
      "/images/products/royal-red-thumb-4.jpg"
    ],
    description: "An ethereal sheer drape in shimmering metallic tissue organza. Lightweight, contemporary, and effortlessly glamorous for weddings and cocktails.",
    details: ["5.5 meters saree with pre-stitched falls and pico", "Designer blouse piece with sweetheart cut"],
    fabricCare: ["Dry clean only"],
    delivery: ["Dispatched in 4 business days"],
    features: [
      { title: "Hand Embellished", desc: "Pearl scalloped border" },
      { title: "Premium Fabric", desc: "Tissue organza silk" },
      { title: "Custom Blouse", desc: "Bespoke tailoring" },
      { title: "Lightweight Comfort", desc: "Drapes like second skin" }
    ]
  },
  // Indo-Western
  {
    id: "designer-draped-cape-set",
    name: "Designer Draped Cape Set",
    subtitle: "Sculptural pre-draped concept saree with sheer embroidered floor cape.",
    category: "Indo-Western",
    section: "indo-western",
    price: 64999,
    originalPrice: 75000,
    discount: "13% OFF",
    rating: 4.9,
    reviews: 44,
    colors: [
      { name: "Blush Champagne", hex: "#DEC4B3" },
      { name: "Dusty Lavender", hex: "#9E8E9F" }
    ],
    selectedColor: "Blush Champagne",
    fabric: "Georgette",
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      "/images/cat-indo-western.jpg",
      "/images/products/royal-red-thumb-3.jpg"
    ],
    description: "Designed for the modern woman who values ease without compromising haute couture splendor. Features a zip-and-go pre-pleated skirt paired with a dramatic sheer floor cape.",
    details: ["Pre-stitched pleats for 60-second wear", "Detachable floor-touching cape with mirror-work shoulders", "Flattering structured waistband"],
    fabricCare: ["Dry clean only"],
    delivery: ["Dispatched in 5 business days"],
    features: [
      { title: "Modern Silhouette", desc: "Pre-draped convenience" },
      { title: "Mirror Work", desc: "Hand-set reflective accents" },
      { title: "Custom Fit", desc: "Made to your torso length" },
      { title: "Lightweight", desc: "Effortless all-night celebration" }
    ]
  },
  // Accessories
  {
    id: "kundan-polki-bridal-set",
    name: "Kundan & Polki Royal Bridal Set",
    subtitle: "22K gold-plated choker, rani haar, jhumkas, and matha patti studded with emerald drops.",
    category: "Bridal Jewelry",
    section: "accessories",
    price: 34999,
    originalPrice: 42000,
    discount: "16% OFF",
    rating: 5.0,
    reviews: 58,
    colors: [
      { name: "Gold with Emerald", hex: "#2A5B3E" },
      { name: "Gold with Ruby", hex: "#8A1C2C" }
    ],
    selectedColor: "Gold with Emerald",
    fabric: "Brass / Kundan",
    sizes: ["Adjustable dori choker & rani haar"],
    images: [
      "/images/cat-accessories.jpg",
      "/images/products/royal-red-thumb-5.jpg"
    ],
    description: "An authentic regal set inspired by the royal treasuries of Rajasthan. Handcrafted uncut polki stones set in meenakari gold brass, finished with natural jade emerald clusters.",
    details: ["Includes: Choker, Long Rani Haar, Jhumkas, Maang Tikka, and Ring Bracelet (Haathphool)", "High-durability anti-tarnish protective coating"],
    fabricCare: ["Store in velvet box away from perfumes and water"],
    delivery: ["Dispatched in 2 business days in luxury velvet gift case"],
    features: [
      { title: "Hand Crafted", desc: "Master Jaipur goldsmith work" },
      { title: "22K Gold Finish", desc: "Authentic royal gleam" },
      { title: "Hypoallergenic", desc: "Gentle on sensitive skin" },
      { title: "Heirloom Keepsake", desc: "Luxury velvet presentation box" }
    ]
  },
  {
    id: "hand-embroidered-bridal-jutti",
    name: "Hand-Embroidered Zardozi Jutti",
    subtitle: "Pure leather juttis encrusted with dabka, seed pearls, and padded memory foam.",
    category: "Bridal Footwear",
    section: "accessories",
    price: 7499,
    originalPrice: 8999,
    discount: "16% OFF",
    rating: 4.8,
    reviews: 82,
    colors: [
      { name: "Crimson Red", hex: "#8A1C2C" },
      { name: "Champagne Gold", hex: "#D6C3A0" }
    ],
    selectedColor: "Crimson Red",
    fabric: "Velvet & Genuine Leather",
    sizes: ["36", "37", "38", "39", "40", "41"],
    images: [
      "/images/cat-accessories.jpg",
      "/images/products/royal-red-thumb-2.jpg"
    ],
    description: "Designed so you can dance all night without a moment's fatigue. Cushioned with dual-layer memory foam, lined with buttery genuine leather, and encrusted with heirloom zardozi embroidery.",
    details: ["100% Genuine leather sole and insole", "Double cushioned arch support", "Bespoke zardozi embroidery matching our royal red lehenga"],
    fabricCare: ["Keep dry. Clean with soft cloth"],
    delivery: ["Dispatched in 2 business days"],
    features: [
      { title: "Memory Foam", desc: "Double-cushioned for 12+ hours wear" },
      { title: "Pure Leather", desc: "Soft bite-free genuine leather" },
      { title: "Hand Embroidered", desc: "Matching lehenga threadwork" },
      { title: "Artisan Made", desc: "Hand-stitched in Rajasthan" }
    ]
  },
  {
    id: "maharani-maroon-velvet-lehenga",
    name: "Maharani Maroon Velvet Bridal Lehenga",
    subtitle: "Royal deep crimson-maroon velvet lehenga encrusted with heritage Mughal zardozi and antique gold bullion work.",
    category: "Bridal Lehengas",
    section: "lehenga",
    price: 154999,
    originalPrice: 175000,
    discount: "11% OFF",
    rating: 5.0,
    reviews: 94,
    isFeatured: true,
    isBestSeller: true,
    colors: [
      { name: "Maharani Maroon", hex: "#4A0E17" },
      { name: "Royal Crimson", hex: "#8A1C2C" }
    ],
    selectedColor: "Maharani Maroon",
    fabric: "Micro Velvet & Pure Silk",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    images: [
      "/images/products/lehenga-maharani-maroon.jpg",
      "/images/products/lehenga-wine-velvet.jpg",
      "/images/hero-bride.jpg"
    ],
    description: "An ode to royal Rajasthani heritage, this lehenga is handcrafted in micro-velvet with antique gold bullion zardozi, semi-precious kundan accents, and fine pita work. Paired with a heavily worked choli and dual dupattas.",
    details: [
      "Heavy micro-velvet kalidar lehenga with 5.5-meter royal flare",
      "Hand-embroidered zardozi, dabka, and pearl jaal work",
      "Padded choli with sweetheart neckline and latkan tie-backs",
      "Dual dupattas: Rich velvet trailing veil + lightweight gossamer organza drape",
      "Complimentary personalized bridal monogram hand-embroidery"
    ],
    fabricCare: [
      "Fabric: 100% Rich Micro-Velvet & Tissue Organza",
      "Dry clean only by luxury bridal care specialists",
      "Preserve in premium muslin storage bags"
    ],
    delivery: [
      "Insured Pan-India Express Delivery in 5-7 business days",
      "Custom made-to-measure tailoring available in 14 days",
      "Worldwide insured express shipping"
    ],
    features: [
      { title: "200+ Craft Hours", desc: "Hand-worked by Jaipur master artisans" },
      { title: "Heritage Velvet", desc: "Plush micro-velvet with royal drape" },
      { title: "Dual Dupatta", desc: "Includes sheer veil & royal border drape" },
      { title: "Bespoke Fit", desc: "Custom stitched to your exact measurements" }
    ]
  },
  {
    id: "crimson-kanjeevaram-silk-saree",
    name: "Crimson Kanjeevaram Pure Silk Saree",
    subtitle: "Authentic Kanchipuram bridal weave with rich 2.5G pure gold zari korvai borders and temple motifs.",
    category: "Bridal Sarees",
    section: "saree",
    price: 56999,
    originalPrice: 68000,
    discount: "16% OFF",
    rating: 4.9,
    reviews: 68,
    isFeatured: true,
    colors: [
      { name: "Bridal Crimson", hex: "#8B1824" },
      { name: "Kumkum Red", hex: "#9E1E2C" }
    ],
    selectedColor: "Bridal Crimson",
    fabric: "100% Pure Mulberry Silk",
    sizes: ["Free Size (6.3m with blouse piece)"],
    images: [
      "/images/products/saree-crimson-kanjeevaram.jpg",
      "/images/cat-saree.jpg"
    ],
    description: "Handwoven in the temple city of Kanchipuram, this authentic bridal silk saree showcases intricate Mayil (peacock) and Rudraksha zari motifs woven with real certified gold zari threads. An eternal bridal heirloom.",
    details: [
      "Silk Mark Certified 100% pure mulberry silk",
      "Heavy korvai contrast zari border with intricate temple architecture motifs",
      "Grand pallu with dense pure gold zari brocade work",
      "Includes unstitched matching heavy brocade silk blouse fabric (85 cm)"
    ],
    fabricCare: [
      "Pure Mulberry Silk with Tested Real Gold Zari",
      "Dry clean only. Roll in muslin cloth with cedar balls",
      "Change fold every 6 months to maintain zari luster"
    ],
    delivery: [
      "Ready to ship: Dispatched within 48 hours",
      "Complimentary fall, pico, and tassel detailing included",
      "Delivered in bespoke Shadi wooden keepsake box"
    ],
    features: [
      { title: "Silk Mark Certified", desc: "100% authentic pure mulberry silk" },
      { title: "Real Zari", desc: "Tested gold & silver thread korvai weave" },
      { title: "Complimentary Pico", desc: "Finished fall and handcrafted tassels" },
      { title: "Heirloom Weave", desc: "Crafted to last through generations" }
    ]
  },
  {
    id: "mustard-haldi-organza-saree",
    name: "Mustard Haldi Organza Silk Saree",
    subtitle: "Luminous turmeric yellow organza saree adorned with handcrafted gota patti and delicate mirror accents.",
    category: "Festive Sarees",
    section: "saree",
    price: 32999,
    originalPrice: 38000,
    discount: "13% OFF",
    rating: 4.9,
    reviews: 47,
    isFeatured: true,
    colors: [
      { name: "Turmeric Mustard", hex: "#E5A93C" },
      { name: "Marigold Gold", hex: "#F2B84B" }
    ],
    selectedColor: "Turmeric Mustard",
    fabric: "Pure Organza Silk",
    sizes: ["Free Size (6.3m with blouse piece)"],
    images: [
      "/images/products/saree-mustard-haldi.jpg",
      "/images/cat-saree.jpg"
    ],
    description: "A glowing turmeric and mustard yellow festive saree, ideal for vibrant Haldi, Mehendi, and joyous morning wedding rituals. Decorated with delicate Rajasthani gota patti borders, mirror work, and subtle resham accents.",
    details: [
      "Ultra-lightweight pure organza silk with natural sheen",
      "Delicate floral gota patti and foil mirror hand embroidery",
      "Scalloped hand-finished border detailing",
      "Includes unstitched raw silk blouse piece with matching embroidery"
    ],
    fabricCare: [
      "Fabric: 100% Pure Organza Silk",
      "Dry clean only",
      "Iron on low silk heat with protective cloth"
    ],
    delivery: [
      "Dispatched within 2-3 business days",
      "Free express bridal shipping all across India"
    ],
    features: [
      { title: "Featherlight", desc: "Effortless graceful drape for day events" },
      { title: "Gota Patti Work", desc: "Authentic Rajasthani hand embroidery" },
      { title: "Vibrant Haldi Glow", desc: "Photogenic turmeric hue for pre-wedding celebrations" },
      { title: "Matching Blouse", desc: "Pure raw silk embroidered blouse fabric" }
    ]
  },
  {
    id: "ivory-pearl-cape-sharara",
    name: "Ivory Pearl Cape Sharara Set",
    subtitle: "Contemporary ivory champagne tiered sharara set paired with a crystal and pearl hand-embroidered sheer cape.",
    category: "Indo-Western",
    section: "indo-western",
    price: 72999,
    originalPrice: 85000,
    discount: "14% OFF",
    rating: 5.0,
    reviews: 53,
    isFeatured: true,
    colors: [
      { name: "Ivory Champagne", hex: "#E8E0D5" },
      { name: "Blush Gold", hex: "#E8D5C8" }
    ],
    selectedColor: "Ivory Champagne",
    fabric: "Georgette & Sheer Organza",
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      "/images/products/indowestern-ivory-sharara.jpg",
      "/images/cat-indo-western.jpg"
    ],
    description: "Designed for Sangeet, Cocktail, and modern wedding receptions. This 3-piece ensemble features a hand-embellished bustier, flowing tiered georgette sharara pants, and a floor-sweeping sheer cape encrusted with pearls and crystals.",
    details: [
      "3-Piece Set: Embroidered bustier, tiered flared sharara, and floor-length sheer cape",
      "Adorned with Swarovski crystals, freshwater seed pearls, and silver cutdana",
      "Concealed side zip on bustier with supportive boning structure",
      "Sharara features 4 tiers of voluminous gathers with comfortable elasticated waistband"
    ],
    fabricCare: [
      "Fabric: Viscose Georgette & Tulle Organza",
      "Dry clean only",
      "Handle delicate crystal and pearl embellishments with care"
    ],
    delivery: [
      "Standard dispatch: 5 to 7 business days",
      "Custom sizing alterations available on request"
    ],
    features: [
      { title: "Architectural Cape", desc: "Floor-length sheer drape with pearl borders" },
      { title: "Swarovski Crystals", desc: "Lustrous sparkle for evening celebrations" },
      { title: "Bespoke Boning", desc: "Structured bustier offering flawless fit" },
      { title: "Modern Silhouette", desc: "Fusion elegance blending comfort with couture" }
    ]
  },
  {
    id: "royal-velvet-bridal-potli",
    name: "Royal Velvet Zardozi Bridal Potli",
    subtitle: "Handcrafted crimson-maroon velvet potli bag with heirloom gold dabka embroidery and freshwater pearl tassels.",
    category: "Bridal Potlis",
    section: "accessories",
    price: 6499,
    originalPrice: 7999,
    discount: "19% OFF",
    rating: 4.9,
    reviews: 71,
    colors: [
      { name: "Crimson Velvet", hex: "#8A1C2C" },
      { name: "Deep Maroon", hex: "#4A0E17" }
    ],
    selectedColor: "Crimson Velvet",
    fabric: "Silk Micro Velvet & Satin",
    sizes: ["One Size (9 x 8 inches)"],
    images: [
      "/images/products/accessories-velvet-potli.jpg",
      "/images/cat-accessories.jpg"
    ],
    description: "The essential bridal accessory to complement your wedding lehenga. Handcrafted by master karigars on plush micro-velvet, embellished with intricate floral zardozi jaal, crystal latkans, and a pure pearl wrist handle.",
    details: [
      "Plush royal velvet base with soft champagne satin inner lining",
      "Handcrafted pearl beaded wrist handle with sturdy reinforced grip",
      "Handmade metallic dori drawstring closure with heavy matching latkans",
      "Spacious enough for bridal essentials (smartphone, makeup touch-up, essentials)"
    ],
    fabricCare: [
      "Spot clean only with soft dry cloth",
      "Keep away from moisture and perfumes"
    ],
    delivery: [
      "Dispatched within 24-48 hours",
      "Packaged in luxury gift box"
    ],
    features: [
      { title: "Pure Velvet Base", desc: "Rich royal touch matching bridal lehengas" },
      { title: "Pearl Handle", desc: "Hand-strung cultured pearl wristlet" },
      { title: "Heirloom Zardozi", desc: "Traditional gold bullion and sequin embroidery" },
      { title: "Spacious Interior", desc: "Engineered to comfortably fit large smartphones" }
    ]
  },
  {
    id: "jadau-polki-choker-set",
    name: "Jadau Polki Choker & Matha Patti Set",
    subtitle: "24K antique gold plated royal Rajasthani bridal choker, statement matha patti, and chandelier jhumkas.",
    category: "Bridal Jewelry",
    section: "accessories",
    price: 42999,
    originalPrice: 52000,
    discount: "17% OFF",
    rating: 5.0,
    reviews: 89,
    colors: [
      { name: "Antique Gold & Emerald", hex: "#2A5B3E" },
      { name: "Antique Gold & Ruby", hex: "#8A1C2C" }
    ],
    selectedColor: "Antique Gold & Emerald",
    fabric: "Silver-Alloy / 24K Micro Gold Plated",
    sizes: ["Adjustable royal dori choker + free-size matha patti"],
    images: [
      "/images/products/accessories-jadau-choker.jpg",
      "/images/cat-accessories.jpg"
    ],
    description: "A regal Rajasthani Jadau bridal jewelry set reflecting timeless royal courts. Encrusted with high-clarity uncut polki stones, deep Columbian green emerald drops, and intricate Meenakari enamel on the reverse side.",
    details: [
      "Complete Bridal Set includes: Heavy choker necklace, multi-tiered matha patti, chandelier jhumkas, and matching nath",
      "Handcrafted in Jaipur using authentic Jadau setting technique",
      "Reverse side finished with traditional peacock meenakari artwork",
      "Anti-tarnish protective coating for lasting heirloom brilliance"
    ],
    fabricCare: [
      "Wipe gently with soft cotton cloth after use",
      "Store in the provided velvet air-tight heirloom box",
      "Avoid contact with water, perfumes, and chemical hair sprays"
    ],
    delivery: [
      "Dispatched in 2-3 business days in handcrafted velvet royal trunk",
      "Fully insured delivery with tracking"
    ],
    features: [
      { title: "Jaipur Jadau Craft", desc: "Uncut polki hand-set in pure silver alloy" },
      { title: "Meenakari Reverse", desc: "Intricate royal Rajasthani enamel work" },
      { title: "Full Bridal Suite", desc: "Choker, matha patti, jhumkas & matching nath" },
      { title: "Luxury Velvet Trunk", desc: "Premium keepsake presentation box" }
    ]
  }
];

export const filterOptions = {
  categories: [
    { label: "Bridal Lehengas", count: 42 },
    { label: "Reception Wear", count: 28 },
    { label: "Engagement", count: 24 },
    { label: "Sangeet", count: 32 },
    { label: "Party Wear", count: 18 }
  ],
  priceRange: { min: 5000, max: 200000, step: 5000 },
  colors: [
    { name: "Red", hex: "#9E1E2C" },
    { name: "Pink", hex: "#EAA6B2" },
    { name: "Maroon", hex: "#631322" },
    { name: "Beige", hex: "#D9CAAD" },
    { name: "Green", hex: "#1D5236" },
    { name: "Teal", hex: "#1C6067" },
    { name: "Peach", hex: "#E8B097" }
  ],
  fabrics: [
    { name: "Silk", count: 54 },
    { name: "Net", count: 38 },
    { name: "Velvet", count: 29 },
    { name: "Georgette", count: 44 },
    { name: "Organza", count: 26 },
    { name: "Chiffon", count: 18 }
  ],
  sizes: ["XS", "S", "M", "L", "XL", "XXL"]
};

export const reviewsData = [
  {
    id: 1,
    name: "Dr. Ananya Sharma",
    location: "Jaipur, Rajasthan",
    date: "2 weeks ago",
    rating: 5,
    title: "The royal lehenga of my dreams!",
    comment: "I visited the Shadi showroom for my bridal consultation and fell in love with the Royal Red Bridal Lehenga immediately. The hand-embroidery work in real zardozi is unmatched, and the custom fitting team was so attentive. Every guest at my wedding was stunned by how majestic the lehenga looked under the palace chandeliers. Thank you, Shadi team!",
    verified: true
  },
  {
    id: 2,
    name: "Pooja Singhania",
    location: "New Delhi",
    date: "1 month ago",
    rating: 5,
    title: "Felt like a queen on my big day",
    comment: "The sheer craftsmanship and lightweight feel of the skirt despite the heavy embroidery made my wedding day so comfortable. The dual dupatta styling advice given by their personal stylist was top notch.",
    verified: true
  },
  {
    id: 3,
    name: "Rhea Chhabra",
    location: "Mumbai",
    date: "2 months ago",
    rating: 5,
    title: "Impeccable quality and bespoke service",
    comment: "Ordered online with video styling consultation. The fabric quality, packaging, and timely delivery across India was 10/10. Definitely the premier Indian bridal fashion house.",
    verified: true
  }
];
