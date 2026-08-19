import { GalleryItem, ReviewItem } from '@/types';

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    title: 'The Hearth Sanctuary',
    category: 'sanctuary',
    image: '/assets/images/gallery-interior.jpg',
    alt: 'Cozy rustic brick fireplace and leather armchairs in warm café sanctuary',
    isTall: true
  },
  {
    id: 2,
    title: 'Velvety Microfoam Craft',
    category: 'espresso',
    image: '/assets/images/gallery-latte-art.jpg',
    alt: 'Barista pouring precise velvety latte art'
  },
  {
    id: 3,
    title: 'Copper-Kettle Spiced Chai',
    category: 'chai',
    image: '/assets/images/gallery-chai-pot.jpg',
    alt: 'Authentic spiced chai simmering in traditional copper kettle'
  },
  {
    id: 4,
    title: 'High-Altitude Single Origin',
    category: 'brews',
    image: '/assets/images/gallery-beans.jpg',
    alt: 'Freshly roasted whole mountain coffee beans'
  },
  {
    id: 5,
    title: 'Artisan Morning Bakes',
    category: 'bakery',
    image: '/assets/images/gallery-pastry-board.jpg',
    alt: 'Fresh baked croissants, cardamom buns, and pastries'
  },
  {
    id: 6,
    title: 'Precision Manual Pour-Over',
    category: 'brews',
    image: '/assets/images/gallery-pour.jpg',
    alt: 'Barista performing slow pour-over extraction with gooseneck kettle'
  }
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 1,
    name: 'Elena Rostova',
    avatar: '/assets/images/avatar-1.jpg',
    rating: 5,
    tag: 'Verified Patron • Midtown Toronto',
    text: '"The Himalayan Spiced Latte is completely unmatched anywhere else in Toronto. The cardamom aroma hits you immediately and the espresso is silky, rich, and never bitter. The fireplace seating makes working here feel like a retreat."',
    date: '2 days ago',
    favorite: 'Himalayan Spiced Latte & Saffron Croissant'
  },
  {
    id: 2,
    name: 'Marcus Sterling',
    avatar: '/assets/images/avatar-2.jpg',
    rating: 5,
    tag: 'Coffee Enthusiast • Yonge & Eglinton',
    text: '"As someone who takes single-origin pour-overs seriously, the slow-bar baristas here have master-level technique. You can taste the high-elevation notes clearly. Fast Wi-Fi and the quiet study nook are unbeatable."',
    date: '1 week ago',
    favorite: 'Ethiopian High-Altitude Pour-Over'
  },
  {
    id: 3,
    name: 'Priya Sharma',
    avatar: '/assets/images/avatar-3.jpg',
    rating: 5,
    tag: 'Tea Sommelier • North York',
    text: '"Finally, real copper kettle Masala Chai brewed from crushed spices rather than sweet powder concentrate! You taste the crushed ginger, fresh black pepper, and real buffalo milk richness. Pure nostalgia and perfection."',
    date: '2 weeks ago',
    favorite: 'Copper-Kettle Masala Chai'
  }
];
