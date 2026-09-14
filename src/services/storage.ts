import type {
  MenuItem,
  Category,
  Order,
  Customer,
  SiteSettings,
  AdminUser,
  CartLine,
} from "../types";

export const STORAGE_KEYS = {
  CART: "pb_delicacies_cart_v2",
  AUTH: "pb_delicacies_admin_auth_v2",
  SETTINGS: "pb_delicacies_settings_v2",
  CATEGORIES: "pb_delicacies_categories_v2",
  MENU: "pb_delicacies_menu_v2",
  ORDERS: "pb_delicacies_orders_v2",
  CUSTOMERS: "pb_delicacies_customers_v2",
  ADMIN_USERS: "pb_delicacies_admin_users_v2",
} as const;

export const INITIAL_CATEGORIES: Category[] = [
  { id: "cat-1", name: "Rice", description: "Classic Nigerian party & native rice specialties", icon: "fire" },
  { id: "cat-2", name: "Swallows & Soups", description: "Freshly pounded swallows and traditional rich soups", icon: "chef" },
  { id: "cat-3", name: "Proteins", description: "Succulent flame-grilled, spiced and peppered meats", icon: "fire" },
  { id: "cat-4", name: "Sides", description: "Savory accompaniments, golden plantains and bean puddings", icon: "spark" },
  { id: "cat-5", name: "Drinks", description: "Chilled house-crafted beverages and Nigerian punches", icon: "spark" },
];

export const INITIAL_MENU: MenuItem[] = [
  {
    id: 1,
    name: "Smoky Party Jollof Rice & Crispy Chicken",
    description: "Classic firewood-flavored Nigerian jollof rice simmered in rich tomato-pepper reduction, served with deep-seasoned golden chicken and sweet fried plantains.",
    price: 3500,
    discountPrice: 3200,
    discount_price: 3200,
    category: "Rice",
    category_name: "Rice",
    image: "https://images.unsplash.com/photo-1665332195309-9d75071138f0?w=800&h=600&fit=crop&auto=format",
    image_url: "https://images.unsplash.com/photo-1665332195309-9d75071138f0?w=800&h=600&fit=crop&auto=format",
    available: true,
    is_available: true,
    featured: true,
    is_featured: true,
    isSpecial: true,
    is_special: true,
    ingredients: ["Long Grain Rice", "Tatashe & Rodo Pepper", "Smoked Chicken", "Plantain (Dodo)", "House Seasoning Blend"],
    preparationTime: "25-35 mins",
    preparation_time: "25-35 mins",
    createdAt: new Date().toISOString(),
    created_at: new Date().toISOString(),
  },
  {
    id: 2,
    name: "Special Fried Rice & Spiced Grilled Chicken",
    description: "Fluffy seasoned rice tossed with colorful sweet corn, diced carrots, green peas, liver bits, and paired with tender aromatic grilled chicken.",
    price: 3800,
    category: "Rice",
    category_name: "Rice",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop&auto=format",
    image_url: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop&auto=format",
    available: true,
    is_available: true,
    featured: true,
    is_featured: true,
    ingredients: ["Parboiled Rice", "Fresh Carrots & Peas", "Sweet Corn", "Liver Bits", "Quarter Chicken"],
    preparationTime: "30 mins",
    preparation_time: "30 mins",
    createdAt: new Date().toISOString(),
    created_at: new Date().toISOString(),
  },
  {
    id: 3,
    name: "Ofada Rice with Spicy Designer Ayamase Sauce",
    description: "Unpolished aromatic native Ofada rice wrapped in authentic banana leaves, served with slow-cooked bleached palm oil green-pepper sauce and assorted meats.",
    price: 4200,
    category: "Rice",
    category_name: "Rice",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=600&fit=crop&auto=format",
    image_url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=600&fit=crop&auto=format",
    available: true,
    is_available: true,
    featured: true,
    is_featured: true,
    isSpecial: true,
    is_special: true,
    ingredients: ["Ekiti Native Ofada Rice", "Green Bell Pepper Blend", "Iru (Locust Beans)", "Towel & Shaki", "Boiled Egg"],
    preparationTime: "35 mins",
    preparation_time: "35 mins",
    createdAt: new Date().toISOString(),
    created_at: new Date().toISOString(),
  },
  {
    id: 4,
    name: "Freshly Pounded Yam & Rich Egusi Soup with Assorted Meats",
    description: "Pillow-soft Ekiti yam pounded to velvety perfection, served alongside rich melon seed soup simmered with dried fish, stockfish, and assorted cuts.",
    price: 4500,
    category: "Swallows & Soups",
    category_name: "Swallows & Soups",
    image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=800&h=600&fit=crop&auto=format",
    image_url: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=800&h=600&fit=crop&auto=format",
    available: true,
    is_available: true,
    featured: true,
    is_featured: true,
    ingredients: ["Ekiti Puna Yam", "Hand-ground Egusi Melon", "Stockfish & Panla", "Assorted Beef & Tripe", "Ugu Leaves"],
    preparationTime: "30-40 mins",
    preparation_time: "30-40 mins",
    createdAt: new Date().toISOString(),
    created_at: new Date().toISOString(),
  },
  {
    id: 5,
    name: "Hot Amala with Gbegiri, Ewedu & Tender Goat Meat",
    description: "Traditional Oyo-style dark fluffy amala paired with rich bean soup (gbegiri), silky ewedu leaf soup, peppery buka stew, and soft simmered goat meat.",
    price: 4000,
    category: "Swallows & Soups",
    category_name: "Swallows & Soups",
    image: "https://images.unsplash.com/photo-1547496502-affa22d38842?w=800&h=600&fit=crop&auto=format",
    image_url: "https://images.unsplash.com/photo-1547496502-affa22d38842?w=800&h=600&fit=crop&auto=format",
    available: true,
    is_available: true,
    featured: true,
    is_featured: true,
    ingredients: ["Yam Flour (Elubo)", "Brown Beans (Gbegiri)", "Fresh Ewedu Leaves", "Succulent Goat Meat", "Iru"],
    preparationTime: "25-35 mins",
    preparation_time: "25-35 mins",
    createdAt: new Date().toISOString(),
    created_at: new Date().toISOString(),
  },
  {
    id: 6,
    name: "Signature Efo Riro with Smoked Fish & Beef Tripe",
    description: "Steaming hot traditional Yoruba vegetable soup packed with water leaves, rich bell pepper base, dried catfish, crayfish, and assorted cuts.",
    price: 3900,
    category: "Swallows & Soups",
    category_name: "Swallows & Soups",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop&auto=format",
    image_url: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop&auto=format",
    available: true,
    is_available: true,
    ingredients: ["Fresh Spinach / Shoko", "Smoked Catfish", "Beef Tripe (Shaki)", "Ground Crayfish", "Locust Beans"],
    preparationTime: "25 mins",
    preparation_time: "25 mins",
    createdAt: new Date().toISOString(),
    created_at: new Date().toISOString(),
  },
  {
    id: 7,
    name: "Spicy Peppered Goat Meat (Asun Special Bowl)",
    description: "Tender flame-charred goat meat cut into bite-sized morsels, tossed in coarse Scotch bonnet peppers, sweet red onions, and local spices.",
    price: 3000,
    category: "Proteins",
    category_name: "Proteins",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&h=600&fit=crop&auto=format",
    image_url: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&h=600&fit=crop&auto=format",
    available: true,
    is_available: true,
    featured: true,
    is_featured: true,
    ingredients: ["Roasted Goat Meat", "Coarse Scotch Bonnet", "Sliced Red Onions", "Nutmeg & Spices"],
    preparationTime: "20 mins",
    preparation_time: "20 mins",
    createdAt: new Date().toISOString(),
    created_at: new Date().toISOString(),
  },
  {
    id: 8,
    name: "Crispy Peppered Turkey Wing",
    description: "Generous succulent turkey wing braised with garlic, thyme, and ginger, then fried crisp and coated in a fiery sweet pepper sauce.",
    price: 2800,
    category: "Proteins",
    category_name: "Proteins",
    image: "https://images.unsplash.com/photo-1588767763784-068ca601e389?w=800&h=600&fit=crop&auto=format",
    image_url: "https://images.unsplash.com/photo-1588767763784-068ca601e389?w=800&h=600&fit=crop&auto=format",
    available: true,
    is_available: true,
    ingredients: ["Prime Turkey Wing", "Tatashe & Habanero", "Garlic & Ginger", "Fresh Thyme"],
    preparationTime: "20 mins",
    preparation_time: "20 mins",
    createdAt: new Date().toISOString(),
    created_at: new Date().toISOString(),
  },
  {
    id: 9,
    name: "Golden Fried Plantain Platter (Dodo Extras)",
    description: "Sweet, caramelized ripe plantains sliced and gently fried to a glistening golden-brown finish. The quintessential Nigerian side dish.",
    price: 1000,
    category: "Sides",
    category_name: "Sides",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=800&h=600&fit=crop&auto=format",
    image_url: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=800&h=600&fit=crop&auto=format",
    available: true,
    is_available: true,
    ingredients: ["Sweet Ripe Plantains", "Pure Vegetable Oil", "Pinch of Sea Salt"],
    preparationTime: "15 mins",
    preparation_time: "15 mins",
    createdAt: new Date().toISOString(),
    created_at: new Date().toISOString(),
  },
  {
    id: 10,
    name: "Chilled Hibiscus Zobo Infusion with Ginger & Cloves",
    description: "House-brewed refreshing cold beverage made from organic dried hibiscus flowers, crushed spicy ginger, pineapple chunks, and sweet aromatic cloves.",
    price: 800,
    category: "Drinks",
    category_name: "Drinks",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&h=600&fit=crop&auto=format",
    image_url: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&h=600&fit=crop&auto=format",
    available: true,
    is_available: true,
    featured: true,
    is_featured: true,
    ingredients: ["Organic Zobo Leaves", "Fresh Ginger", "Ripe Pineapple Juice", "Aromatic Cloves"],
    preparationTime: "Instant / Chilled",
    preparation_time: "Instant / Chilled",
    createdAt: new Date().toISOString(),
    created_at: new Date().toISOString(),
  },
];

export const INITIAL_ORDERS: Order[] = [
  {
    id: "PB-1042",
    customerName: "Dr. Taiwo Adeleke",
    customerPhone: "08150781154",
    customerEmail: "taiwo.adeleke@fmc-ido.gov.ng",
    deliveryAddress: "Doctors' Quarters, Federal Medical Centre (FMC)",
    deliveryArea: "Hospital Road, Ido-Ekiti",
    preferredTime: "Saturday 1:30 PM",
    orderNotes: "Please deliver hot, extra spicy pepper sauce.",
    type: "Food Delivery",
    paymentMethod: "Bank Transfer",
    paymentStatus: "Paid",
    status: "Delivered",
    items: [
      {
        id: 1,
        name: "Smoky Party Jollof Rice & Crispy Chicken",
        price: 3200,
        quantity: 2,
        extras: ["Extra Fried Plantain (Dodo)", "Crisp Creamy Coleslaw"],
        total: 7900,
      },
      {
        id: 10,
        name: "Chilled Hibiscus Zobo Infusion",
        price: 800,
        quantity: 2,
        total: 1600,
      },
    ],
    subtotal: 9500,
    deliveryFee: 1000,
    total: 10500,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 26).toISOString(),
  },
  {
    id: "PB-1043",
    customerName: "Mrs. Folashade Bamidele",
    customerPhone: "08034567890",
    customerEmail: "folashade.b@gmail.com",
    deliveryAddress: "Behind General Post Office, Fajuyi Street",
    deliveryArea: "Central Ido-Ekiti",
    preferredTime: "Sunday 2:00 PM",
    orderNotes: "Call when rider arrives at the gate.",
    type: "Food Delivery",
    paymentMethod: "Pay on Delivery",
    paymentStatus: "Pending",
    status: "Preparing",
    items: [
      {
        id: 4,
        name: "Pounded Yam & Rich Egusi Soup",
        price: 4500,
        quantity: 3,
        extras: ["Extra Pepper Sauce (Ata)"],
        total: 14000,
      },
      {
        id: 7,
        name: "Spicy Peppered Goat Meat (Asun)",
        price: 3000,
        quantity: 1,
        total: 3000,
      },
    ],
    subtotal: 17000,
    deliveryFee: 1000,
    total: 18000,
    createdAt: new Date(Date.now() - 1000 * 60 * 45).toISOString(),
  },
];

export const INITIAL_CUSTOMERS: Customer[] = [
  {
    id: "cust-1",
    name: "Dr. Taiwo Adeleke",
    phone: "08150781154",
    email: "taiwo.adeleke@fmc-ido.gov.ng",
    address: "Doctors' Quarters, FMC Ido-Ekiti",
    area: "Hospital Road",
    totalOrders: 6,
    totalSpent: 48500,
    lastOrderDate: new Date(Date.now() - 1000 * 60 * 60 * 26).toISOString(),
    status: "VIP",
    notes: "Regular weekend hospital lunch delivery customer.",
  },
  {
    id: "cust-2",
    name: "Mrs. Folashade Bamidele",
    phone: "08034567890",
    email: "folashade.b@gmail.com",
    address: "Fajuyi Street, Central Ido-Ekiti",
    area: "Central Ido-Ekiti",
    totalOrders: 3,
    totalSpent: 32000,
    lastOrderDate: new Date(Date.now() - 1000 * 60 * 45).toISOString(),
    status: "Active",
    notes: "Loves Pounded Yam and Egusi soup.",
  },
  {
    id: "cust-3",
    name: "Engr. Kayode Ogundipe",
    phone: "08129876543",
    email: "kayode.ogundipe@ekitistate.gov.ng",
    address: "GRA Phase 2, Ado / Ido Bypass",
    area: "GRA Ido-Ekiti",
    totalOrders: 8,
    totalSpent: 76000,
    lastOrderDate: new Date(Date.now() - 1000 * 60 * 60 * 96).toISOString(),
    status: "VIP",
    notes: "Frequently books Home Cooking chef for family Sunday dinners.",
  },
];

export const INITIAL_SETTINGS: SiteSettings = {
  business: {
    name: "PB DELICACIES",
    tagline: "Delicious Food, Made With Love",
    location: "Ido-Ekiti, Ekiti State, Nigeria",
    phone: "08150781154",
    whatsapp: "2348150781154",
    email: "orders@pbdelicacies.com",
    openingDays: "Fridays, Saturdays & Sundays",
    openingHours: "10:00 AM – 9:00 PM",
    deliveryFee: 1000,
    bankName: "Moniepoint / OPay / GTBank",
    accountNumber: "08150781154",
    accountName: "PB DELICACIES",
  },
  hero: {
    headline: "Delicious Food,",
    highlightedText: "Made With Love.",
    subheadline: "Freshly prepared weekend Nigerian meals delivered hot to your doorstep in Ido-Ekiti — or let us bring the kitchen to your home for personalized private cooking.",
    primaryCtaText: "Order This Week's Menu",
    secondaryCtaText: "Book Home Cooking",
    heroImage: "https://images.unsplash.com/photo-1665332195309-9d75071138f0?w=900&h=900&fit=crop&auto=format",
    badgeText: "Weekend Deliveries Across Ido-Ekiti & Environs",
    ratingScore: "4.9 / 5.0",
    ratingLabel: "Trusted by 500+ Ekiti Food Lovers",
  },
  weekLabel: "Weekend Menu · Orders Open",
  weeklySpecialsNotice: "🍲 Menu is prepared fresh every weekend. Pre-order early for guaranteed delivery time slots!",
  announcement: {
    enabled: true,
    text: "🔥 Weekend orders now open! Hot deliveries across Ido-Ekiti & FMC quarters. WhatsApp / Call: 08150781154",
  },
  testimonials: [
    {
      id: "test-1",
      name: "Dr. Taiwo A.",
      role: "Medical Officer, FMC Ido-Ekiti",
      text: "PB DELICACIES is our go-to whenever we're on weekend hospital call duty. The Jollof rice is smoky and authentic, and the chicken is always well-spiced and hot upon delivery.",
      rating: 5,
    },
    {
      id: "test-2",
      name: "Mrs. Folashade B.",
      role: "Ido-Ekiti Resident",
      text: "We booked PB DELICACIES for our daughter's birthday home cooking last Saturday. The chef arrived right on time, handled our kitchen with extreme cleanliness, and the Pounded Yam & Egusi was 10/10!",
      rating: 5,
    },
    {
      id: "test-3",
      name: "Engr. Kayode O.",
      role: "Ekiti State Civil Service",
      text: "Top tier homemade taste! You can tell quality ingredients and pure palm oil were used for the Ofada Ayamase sauce. Very hygienic packaging and fast delivery.",
      rating: 5,
    },
  ],
};

export const INITIAL_ADMIN_USERS: AdminUser[] = [
  {
    id: "admin-1",
    username: "admin@pbdelicacies.com",
    email: "admin@pbdelicacies.com",
    role: "super_admin",
  },
];

// Shopping Cart Storage Helpers
export const cartStorage = {
  getCart: (): CartLine[] => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.CART);
      return stored ? JSON.parse(stored) : [];
    } catch (err) {
      console.error("Error loading cart from localStorage:", err);
      return [];
    }
  },
  saveCart: (cart: CartLine[]): void => {
    try {
      localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(cart));
    } catch (err) {
      console.error("Error saving cart to localStorage:", err);
    }
  },
  clearCart: (): void => {
    try {
      localStorage.removeItem(STORAGE_KEYS.CART);
    } catch (err) {
      console.error("Error clearing cart from localStorage:", err);
    }
  },
};

// General LocalStorage Fallback Helpers
export function loadFromStorage<T>(key: string, defaultValue: T): T {
  try {
    if (typeof window === "undefined" || !window.localStorage) {
      return defaultValue;
    }
    const raw = localStorage.getItem(key);
    if (!raw) {
      try {
        localStorage.setItem(key, JSON.stringify(defaultValue));
      } catch (_) {}
      return defaultValue;
    }

    const parsed = JSON.parse(raw);

    // Deep merge for settings to guarantee business, hero, testimonials exist
    if (key === STORAGE_KEYS.SETTINGS) {
      const merged: SiteSettings = {
        ...INITIAL_SETTINGS,
        ...(typeof parsed === "object" && parsed !== null ? parsed : {}),
        business: {
          ...INITIAL_SETTINGS.business,
          ...(typeof parsed?.business === "object" && parsed?.business !== null ? parsed.business : {}),
        },
        hero: {
          ...INITIAL_SETTINGS.hero,
          ...(typeof parsed?.hero === "object" && parsed?.hero !== null ? parsed.hero : {}),
        },
        testimonials:
          Array.isArray(parsed?.testimonials) && parsed.testimonials.length > 0
            ? parsed.testimonials
            : INITIAL_SETTINGS.testimonials,
        announcement: {
          ...INITIAL_SETTINGS.announcement,
          ...(typeof parsed?.announcement === "object" && parsed?.announcement !== null ? parsed.announcement : {}),
        },
      };
      return merged as unknown as T;
    }

    // Fallback if stored array is empty but default is populated
    if (key === STORAGE_KEYS.MENU) {
      if (!Array.isArray(parsed) || parsed.length === 0) {
        return INITIAL_MENU as unknown as T;
      }
    }

    if (key === STORAGE_KEYS.CATEGORIES) {
      if (!Array.isArray(parsed) || parsed.length === 0) {
        return INITIAL_CATEGORIES as unknown as T;
      }
    }

    if (key === STORAGE_KEYS.ORDERS) {
      if (!Array.isArray(parsed) || parsed.length === 0) {
        return INITIAL_ORDERS as unknown as T;
      }
    }

    if (key === STORAGE_KEYS.CUSTOMERS) {
      if (!Array.isArray(parsed) || parsed.length === 0) {
        return INITIAL_CUSTOMERS as unknown as T;
      }
    }

    if (parsed === null || parsed === undefined) {
      return defaultValue;
    }

    return parsed as T;
  } catch (err) {
    console.warn(`Error loading key "${key}" from localStorage, using default:`, err);
    return defaultValue;
  }
}

export function saveToStorage<T>(key: string, value: T): void {
  try {
    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.setItem(key, JSON.stringify(value));
      window.dispatchEvent(new CustomEvent("pb-storage-change", { detail: { key, value } }));
    }
  } catch (err) {
    console.warn(`Error saving key "${key}" to localStorage:`, err);
  }
}

export function resetAllStorageToDefaults(): void {
  try {
    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(INITIAL_SETTINGS));
      localStorage.setItem(STORAGE_KEYS.CATEGORIES, JSON.stringify(INITIAL_CATEGORIES));
      localStorage.setItem(STORAGE_KEYS.MENU, JSON.stringify(INITIAL_MENU));
      localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(INITIAL_ORDERS));
      localStorage.setItem(STORAGE_KEYS.CUSTOMERS, JSON.stringify(INITIAL_CUSTOMERS));
      localStorage.setItem(STORAGE_KEYS.ADMIN_USERS, JSON.stringify(INITIAL_ADMIN_USERS));
      localStorage.removeItem(STORAGE_KEYS.CART);
      window.dispatchEvent(new CustomEvent("pb-storage-change", { detail: { key: "ALL" } }));
    }
  } catch (err) {
    console.warn("Error resetting storage to defaults:", err);
  }
}