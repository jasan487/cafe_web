export interface MenuItem {
  id: string;
  title: string;
  category: 'specialty' | 'chai' | 'iced' | 'bakery';
  price: number;
  badge: string;
  description: string;
  tags: string[];
  image: string;
  alt: string;
}

export interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
  custom?: string;
  image?: string;
}

export interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
  alt: string;
  isTall?: boolean;
}

export interface ReviewItem {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  tag: string;
  text: string;
  date: string;
  favorite: string;
}

export interface ReservationData {
  seating: string;
  guests: string;
  date: string;
  time: string;
  name: string;
  email: string;
  phone: string;
  notes?: string;
}
