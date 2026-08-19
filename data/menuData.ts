import { MenuItem } from '@/types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'himalayan-latte',
    title: 'Himalayan Spiced Latte',
    category: 'specialty',
    price: 6.75,
    badge: 'Signature',
    description: 'Double shot high-altitude espresso infused with green cardamom, mountain honey, cinnamon bark, and steamed microfoam.',
    tags: ['Wild Honey', 'Green Cardamom', 'Organic Spice'],
    image: '/assets/images/menu-himalayan-latte.jpg',
    alt: 'Himalayan Spiced Latte in ceramic cup'
  },
  {
    id: 'butter-brew',
    title: 'Highland Butter Brew',
    category: 'specialty',
    price: 7.25,
    badge: 'Tradition',
    description: 'Traditional slow-emulsified organic grass-fed clarified butter, mountain pink salt, and single-origin dark roast espresso.',
    tags: ['Grass-Fed Ghee', 'Pink Salt', 'Rich & Silky'],
    image: '/assets/images/menu-butter-brew.jpg',
    alt: 'Highland Butter Brew with velvety foam'
  },
  {
    id: 'masala-chai',
    title: 'Copper-Kettle Masala Chai',
    category: 'chai',
    price: 5.85,
    badge: 'Slow Brew',
    description: 'Direct-trade Assam CTC tea slow simmered in hammered copper with crushed ginger root, black pepper, cloves, and whole buffalo milk.',
    tags: ['Direct Trade', 'Slow-Simmered', 'Crushed Ginger'],
    image: '/assets/images/menu-masala-chai.jpg',
    alt: 'Copper Kettle Masala Chai with whole spices'
  },
  {
    id: 'iced-cold-brew',
    title: 'Cascara Citrus Cold Brew',
    category: 'iced',
    price: 6.25,
    badge: '18hr Steep',
    description: 'Eighteen-hour steeped high-elevation beans finished with dried coffee cherry cascara, clarified orange peel, and crystal ice.',
    tags: ['18h Steep', 'Cascara Tea', 'Orange Peel'],
    image: '/assets/images/menu-cold-brew.jpg',
    alt: 'Cascara Citrus Cold Brew on ice'
  },
  {
    id: 'cafe-latte',
    title: 'Highland Velvet Latte',
    category: 'specialty',
    price: 6.45,
    badge: 'Artisan',
    description: 'Creamy steamed microfoam poured over double-shot high altitude single origin espresso with delicate rosette latte art.',
    tags: ['Artisan Rosette', 'Double Shot', 'Smooth Finish'],
    image: '/assets/images/menu-cafe-latte.jpg',
    alt: 'Highland Velvet Latte with latte art'
  },
  {
    id: 'cafe-mocha',
    title: 'Dark Cocoa Mount Mocha',
    category: 'specialty',
    price: 7.10,
    badge: 'House Made',
    description: 'Single-origin espresso swirled with 72% dark artisan cocoa ganache, steamed oat milk, and a dusting of Himalayan cinnamon.',
    tags: ['72% Dark Chocolate', 'Handcrafted Ganache', 'Rich'],
    image: '/assets/images/menu-cafe-mocha.jpg',
    alt: 'Dark Cocoa Mount Mocha in glass cup'
  },
  {
    id: 'iced-coffee',
    title: 'Mountain Glacier Iced Coffee',
    category: 'iced',
    price: 5.95,
    badge: 'Refreshing',
    description: 'Freshly pulled espresso flash-chilled over crystal clear mountain ice cubes with a splash of sweet vanilla syrup.',
    tags: ['Flash Chilled', 'Pure Mountain Ice', 'Vanilla Bean'],
    image: '/assets/images/menu-iced-coffee.jpg',
    alt: 'Mountain Glacier Iced Coffee glass'
  },
  {
    id: 'hot-chocolate',
    title: 'Spiced Mountain Hot Chocolate',
    category: 'chai',
    price: 6.50,
    badge: 'Comfort',
    description: 'Melted Belgian dark chocolate simmered with whole milk, crushed star anise, and a touch of wild mountain nutmeg.',
    tags: ['Belgian Chocolate', 'Star Anise', 'Winter Comfort'],
    image: '/assets/images/menu-hot-chocolate.jpg',
    alt: 'Spiced Mountain Hot Chocolate'
  },
  {
    id: 'pastries',
    title: 'Cardamom Saffron Croissant',
    category: 'bakery',
    price: 5.25,
    badge: 'Fresh Daily',
    description: 'Flaky 72-layer European butter pastry brushed with Kashmir saffron glaze, crushed green cardamom seeds, and roasted pistachios.',
    tags: ['72-Layer Flaky', 'Kashmir Saffron', 'Pistachio'],
    image: '/assets/images/menu-pastries.jpg',
    alt: 'Cardamom Saffron Croissant'
  }
];
