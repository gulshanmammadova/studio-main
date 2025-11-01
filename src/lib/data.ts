export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number | string | { S: number; M: number; L: number } | { Cup: number; Kettle: number };
  category: string;
  image: string;
}

export const menuCategories = [
  { id: 'hot-coffee', name: 'Hot Coffee' },
  { id: 'special-hot-coffee', name: 'Special Hot Coffee' },
  { id: 'hot-drinks', name: 'Hot Drinks' },
  { id: 'cold-coffee', name: 'Cold Coffee' },
  { id: 'special-cold-coffee', name: 'Special Cold Coffee' },
  { id: 'shake', name: 'Shake' },
  { id: 'ice-tea', name: 'Ice Tea' },
  { id: 'special-lemonade', name: 'Special Lemonade' },
  { id: 'mojito', name: 'Mojito' },
  { id: 'fruit-juice', name: 'Fruit Juice' },
  { id: 'fresh-juice', name: 'Fresh Juice' },
  { id: 'extras', name: 'Extras' },
  { id: 'tea', name: 'Tea' },
];

export const menuItems: MenuItem[] = [
  // Hot Coffee
  { id: 1, name: 'Espresso', price: 3.00, category: 'hot-coffee', description: '', image: 'espresso' },
  { id: 2, name: 'Double espresso', price: 3.50, category: 'hot-coffee', description: '', image: 'espresso' },
  { id: 3, name: 'Lungo', price: 3.50, category: 'hot-coffee', description: '', image: 'americano' },
  { id: 4, name: 'Americano', price: { S: 0, M: 5.00, L: 5.50 }, category: 'hot-coffee', description: '', image: 'americano' },
  { id: 5, name: 'Esp. machiato', price: 5.00, category: 'hot-coffee', description: '', image: 'cappuccino' },
  { id: 6, name: 'Matcha latte', price: { S: 0, M: 9.00, L: 0 }, category: 'hot-coffee', description: '', image: 'latte' },
  { id: 7, name: 'Cappuccino', price: { S: 0, M: 6.00, L: 6.50 }, category: 'hot-coffee', description: '', image: 'cappuccino' },
  { id: 8, name: 'Flat white', price: 5.00, category: 'hot-coffee', description: '', image: 'latte' },
  { id: 9, name: 'Cortado', price: 5.00, category: 'hot-coffee', description: '', image: 'latte' },
  { id: 10, name: 'Raf', price: { S: 0, M: 6.00, L: 0 }, category: 'hot-coffee', description: '', image: 'latte' },
  { id: 11, name: 'Mocha', price: { S: 0, M: 6.50, L: 0 }, category: 'hot-coffee', description: '', image: 'latte' },
  { id: 12, name: 'Spanish latte', price: 6.00, category: 'hot-coffee', description: '', image: 'latte' },
  { id: 13, name: 'V 60', price: 7.00, category: 'hot-coffee', description: '', image: 'americano' },
  { id: 14, name: 'Chemex', price: 7.00, category: 'hot-coffee', description: '', image: 'americano' },

  // Special Hot Coffee
  { id: 15, name: 'Cherry mocha', price: 7.0, category: 'special-hot-coffee', description: '', image: 'latte' },
  { id: 16, name: 'Raspberry mocha', price: 7.0, category: 'special-hot-coffee', description: '', image: 'latte' },
  { id: 17, name: 'Lavander latte', price: 7.0, category: 'special-hot-coffee', description: '', image: 'latte' },
  { id: 18, name: 'Rafaello latte', price: 7.0, category: 'special-hot-coffee', description: '', image: 'latte' },

  // Hot Drinks
  { id: 19, name: 'Sahlep', price: 5.0, category: 'hot-drinks', description: '', image: 'latte' },
  { id: 20, name: 'Cacao', price: 5.0, category: 'hot-drinks', description: '', image: 'latte' },
  { id: 21, name: 'Hot chocolate', price: 5.0, category: 'hot-drinks', description: '', image: 'latte' },
  { id: 22, name: 'Chai tea latte', price: 5.0, category: 'hot-drinks', description: '', image: 'chai' },
  
  // Cold Coffee
  { id: 23, name: 'Ice americano', price: 5.0, category: 'cold-coffee', description: '', image: 'icedLatte' },
  { id: 24, name: 'Ice latte', price: 5.5, category: 'cold-coffee', description: '', image: 'icedLatte' },
  { id: 25, name: 'Ice matcha latte', price: 9.5, category: 'cold-coffee', description: '', image: 'icedLatte' },
  { id: 26, name: 'Ice cappuccino', price: 5.5, category: 'cold-coffee', description: '', image: 'icedLatte' },
  { id: 27, name: 'Ice chai tea latte', price: 5.5, category: 'cold-coffee', description: '', image: 'icedLatte' },
  { id: 28, name: 'Ice mocha', price: 6.5, category: 'cold-coffee', description: '', image: 'icedLatte' },
  { id: 29, name: 'Ice raf', price: 6.5, category: 'cold-coffee', description: '', image: 'icedLatte' },
  { id: 30, name: 'Affogato', price: 5.5, category: 'cold-coffee', description: '', image: 'icedLatte' },
  { id: 31, name: 'Frappe', price: 7.0, category: 'cold-coffee', description: '', image: 'icedLatte' },

  // Special Cold Coffee
  { id: 32, name: 'Ice strawberry matcha', price: 10.0, category: 'special-cold-coffee', description: '', image: 'icedLatte' },
  { id: 33, name: 'Ice rafaello latte', price: 7.5, category: 'special-cold-coffee', description: '', image: 'icedLatte' },
  { id: 34, name: 'Ice lavander latte', price: 6.5, category: 'special-cold-coffee', description: '', image: 'icedLatte' },
  
  // Shake
  { id: 35, name: 'Chocolate shake', price: 7.0, category: 'shake', description: '', image: 'muffin' },
  { id: 36, name: 'Banana shake', price: 7.0, category: 'shake', description: '', image: 'muffin' },
  { id: 37, name: 'Strawberry shake', price: 7.0, category: 'shake', description: '', image: 'muffin' },
  { id: 38, name: 'Bubble gum shake', price: 7.0, category: 'shake', description: '', image: 'muffin' },
  { id: 39, name: 'Oreo shake', price: 8.0, category: 'shake', description: '', image: 'muffin' },

  // Ice Tea
  { id: 40, name: 'Lemon ice tea', price: 6.0, category: 'ice-tea', description: '', image: 'fruitTea' },
  { id: 41, name: 'Strawberry ice tea', price: 6.0, category: 'ice-tea', description: '', image: 'fruitTea' },
  { id: 42, name: 'Mango ice tea', price: 6.0, category: 'ice-tea', description: '', image: 'fruitTea' },
  { id: 43, name: 'Peach ice tea', price: 6.0, category: 'ice-tea', description: '', image: 'fruitTea' },
  { id: 44, name: 'Passionfruit ice tea', price: 6.0, category: 'ice-tea', description: '', image: 'fruitTea' },
  
  // Special Lemonade
  { id: 45, name: 'Ocean breeze', price: 7.0, category: 'special-lemonade', description: '', image: 'fruitTea' },
  { id: 46, name: 'Pino colada', price: 6.0, category: 'special-lemonade', description: '', image: 'fruitTea' },
  { id: 47, name: 'Sunset', price: 7.0, category: 'special-lemonade', description: '', image: 'fruitTea' },
  { id: 48, name: 'Applemint', price: 6.0, category: 'special-lemonade', description: '', image: 'fruitTea' },
  { id: 49, name: 'Passion mango', price: 6.0, category: 'special-lemonade', description: '', image: 'fruitTea' },
  { id: 50, name: 'Kiwigum', price: 6.0, category: 'special-lemonade', description: '', image: 'fruitTea' },
  { id: 51, name: 'Kipassionfizz', price: 7.0, category: 'special-lemonade', description: '', image: 'fruitTea' },

  // Mojito
  { id: 52, name: 'Classic', price: 6.0, category: 'mojito', description: '', image: 'fruitTea' },
  { id: 53, name: 'Strawberry', price: 7.0, category: 'mojito', description: '', image: 'fruitTea' },
  { id: 54, name: 'Kiwi blueberry', price: 7.0, category: 'mojito', description: '', image: 'fruitTea' },
  { id: 55, name: 'Mixberry', price: 7.0, category: 'mojito', description: '', image: 'fruitTea' },

  // Fruit Juice
  { id: 56, name: 'Peach Juice', price: 2.5, category: 'fruit-juice', description: '', image: 'fruitTea' },
  { id: 57, name: 'Apple Juice', price: 2.5, category: 'fruit-juice', description: '', image: 'fruitTea' },
  { id: 58, name: 'Mix Juice', price: 2.5, category: 'fruit-juice', description: '', image: 'fruitTea' },

  // Fresh Juice
  { id: 59, name: 'Orange', price: 6.0, category: 'fresh-juice', description: '', image: 'fruitTea' },
  { id: 60, name: 'Apple', price: 5.0, category: 'fresh-juice', description: '', image: 'fruitTea' },
  { id: 61, name: 'Grapefruit', price: 6.5, category: 'fresh-juice', description: '', image: 'fruitTea' },
  { id: 62, name: 'Mix', price: 7.0, category: 'fresh-juice', description: '', image: 'fruitTea' },

  // Extras
  { id: 63, name: 'Espresso Shot', price: 2.0, category: 'extras', description: '', image: 'espresso' },
  { id: 64, name: 'Syrup', price: 1.0, category: 'extras', description: '', image: 'espresso' },
  { id: 65, name: 'Milk', price: 1.5, category: 'extras', description: '', image: 'espresso' },
  { id: 66, name: 'Lactose Free Milk', price: 2.0, category: 'extras', description: '', image: 'espresso' },
  { id: 67, name: 'Special Milk', price: 3.0, category: 'extras', description: '', image: 'espresso' },
  { id: 68, name: 'Whipped Cream', price: 1.5, category: 'extras', description: '', image: 'espresso' },
  { id: 69, name: 'Cookie', price: 0.5, category: 'extras', description: '', image: 'espresso' },
  { id: 70, name: 'Lemon', price: 1.0, category: 'extras', description: '', image: 'espresso' },

  // Tea
  { id: 71, name: 'Black Tea', price: { Cup: 3.0, Kettle: 6.5 }, category: 'tea', description: '', image: 'blackTea' },
  { id: 72, name: 'Green Tea', price: { Cup: 3.0, Kettle: 6.5 }, category: 'tea', description: '', image: 'greenTea' },
  { id: 73, name: 'Hibiscus Tea', price: { Cup: 0, Kettle: 7.0 }, category: 'tea', description: '', image: 'fruitTea' },
  { id: 74, name: 'Fruits Tea', price: { Cup: 0, Kettle: 8.0 }, category: 'tea', description: '', image: 'fruitTea' },
];

export interface ShopItem {
  id: number;
  name: string;
  description: string;
  price: number;
  weight: string;
  image: string;
}

export const shopItems: ShopItem[] = [
  {
    id: 1,
    name: '100% Arabica Brazil Mogiana Medium',
    description: 'Qovrulma dərəcəsi: Orta. Dad notları: şokolad, qoz, qırmızı alma. Braziliyanın Mogiana bölgəsindən gələn bu qəhvə balanslı turşuluğu və şirinliyi ilə seçilir. Həm espresso, həm də filtr üsulları üçün uyğundur.',
    price: 65.00,
    weight: '1kq',
    image: 'coffeeBag1kg',
  },
    {
    id: 2,
    name: '100% Arabica Brazil Mogiana Medium',
    description: 'Qovrulma dərəcəsi: Orta. Dad notları: şokolad, qoz, qırmızı alma. Braziliyanın Mogiana bölgəsindən gələn bu qəhvə balanslı turşuluğu və şirinliyi ilə seçilir. Həm espresso, həm də filtr üsulları üçün uyğundur.',
    price: 20.00,
    weight: '200qr',
    image: 'coffeeBag200gr',
  },
];

export const galleryImages = [
  {
    imageUrl: "/images/gallery-1.jpg",
    alt: "Coffee beans",
    hint: "coffee beans"
  },
  {
    imageUrl: "/images/gallery-2.jpg",
    alt: "Cup of coffee",
    hint: "cup coffee"
  },
  {
    imageUrl: "/images/gallery-3.jpg",
    alt: "Coffee shop atmosphere",
    hint: "coffee shop"
  },
  {
    imageUrl: "/images/gallery-4.jpg",
    alt: "Barista making coffee",
    hint: "barista coffee"
  }
];
