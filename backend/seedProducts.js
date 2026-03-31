import mongoose from 'mongoose';
import Product from './models/Product.js';
import dotenv from 'dotenv';

dotenv.config();

const sampleProducts = [
  // SHOES
  {
    name: 'Nike Air Max 270',
    description: 'Premium running shoes with maximum cushioning and breathable mesh upper. Features Air Max unit in heel for responsive comfort.',
    price: 150,
    originalPrice: 180,
    category: 'shoes',
    stock: 25,
    brand: 'Nike',
    section: 'featured',
    age: 'adults',
    images: ['https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop'],
    rating: 4.8,
    reviews: [],
    discount: 16
  },
  {
    name: 'Adidas Ultraboost 22',
    description: 'Energy-returning running shoes with Primeknit upper and Boost midsole technology for ultimate comfort.',
    price: 190,
    category: 'shoes',
    stock: 30,
    brand: 'Adidas',
    section: 'bestseller',
    age: 'adults',
    images: ['https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?w=400&h=300&fit=crop'],
    rating: 4.9,
    reviews: []
  },
  {
    name: 'Converse Chuck Taylor All Star',
    description: 'Classic canvas sneakers with rubber toe cap and vulcanized rubber sole. Timeless style for everyday wear.',
    price: 65,
    category: 'shoes',
    stock: 50,
    brand: 'Converse',
    section: 'new-arrival',
    age: 'all',
    images: ['https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=400&h=300&fit=crop'],
    rating: 4.6,
    reviews: []
  },
  {
    name: 'Vans Old Skool',
    description: 'Iconic skate shoes with suede and canvas upper, padded collar, and signature waffle outsole.',
    price: 75,
    originalPrice: 85,
    category: 'shoes',
    stock: 40,
    brand: 'Vans',
    section: 'featured',
    age: 'teens',
    images: ['https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400&h=300&fit=crop'],
    rating: 4.7,
    reviews: [],
    discount: 12
  },
  {
    name: 'Puma RS-X',
    description: 'Bold retro-inspired sneakers with chunky silhouette and Running System cushioning technology.',
    price: 110,
    category: 'shoes',
    stock: 20,
    brand: 'Puma',
    section: 'bestseller',
    age: 'adults',
    images: ['https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&h=300&fit=crop'],
    rating: 4.5,
    reviews: []
  },
  
  // CLOTHING
  {
    name: 'Classic Cotton T-Shirt',
    description: 'Premium quality 100% organic cotton t-shirt. Soft, breathable, and perfect for everyday wear. Available in multiple colors.',
    price: 25,
    originalPrice: 35,
    category: 'clothing',
    stock: 100,
    brand: 'SoleStyle',
    section: 'featured',
    age: 'adults',
    images: ['https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop'],
    rating: 4.7,
    reviews: [],
    discount: 28
  },
  {
    name: 'Slim Fit Denim Jeans',
    description: 'Modern slim fit jeans with stretch fabric for comfort. Classic 5-pocket styling with quality denim construction.',
    price: 65,
    category: 'clothing',
    stock: 45,
    brand: 'Levi\'s',
    section: 'bestseller',
    age: 'adults',
    images: ['https://images.unsplash.com/photo-1541099649107-f6be611f02b0?w=400&h=300&fit=crop'],
    rating: 4.6,
    reviews: []
  },
  {
    name: 'Casual Hoodie Sweatshirt',
    description: 'Comfortable fleece-lined hoodie with kangaroo pocket and adjustable drawstring hood. Perfect for cooler weather.',
    price: 45,
    category: 'clothing',
    stock: 60,
    brand: 'SoleStyle',
    section: 'new-arrival',
    age: 'all',
    images: ['https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=300&fit=crop'],
    rating: 4.8,
    reviews: []
  },
  {
    name: 'Formal Dress Shirt',
    description: 'Elegant button-up dress shirt with wrinkle-resistant fabric. Suitable for business and formal occasions.',
    price: 55,
    originalPrice: 75,
    category: 'clothing',
    stock: 35,
    brand: 'Calvin Klein',
    section: 'featured',
    age: 'adults',
    images: ['https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=300&fit=crop'],
    rating: 4.5,
    reviews: [],
    discount: 27
  },
  {
    name: 'Summer Floral Dress',
    description: 'Light and breezy summer dress with beautiful floral print. Comfortable fit perfect for warm days.',
    price: 40,
    category: 'clothing',
    stock: 30,
    brand: 'Zara',
    section: 'new-arrival',
    age: 'adults',
    images: ['https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=300&fit=crop'],
    rating: 4.9,
    reviews: []
  },
  
  // ACCESSORIES
  {
    name: 'Leather Wallet',
    description: 'Genuine leather bi-fold wallet with multiple card slots and bill compartments. RFID blocking technology.',
    price: 35,
    category: 'accessories',
    stock: 50,
    brand: 'Fossil',
    section: 'featured',
    age: 'adults',
    images: ['https://images.unsplash.com/photo-1627123424574-181ce5171c98?w=400&h=300&fit=crop'],
    rating: 4.6,
    reviews: []
  },
  {
    name: 'Classic Sunglasses',
    description: 'UV protection sunglasses with polarized lenses. Stylish frame design suitable for all face shapes.',
    price: 85,
    originalPrice: 120,
    category: 'accessories',
    stock: 25,
    brand: 'Ray-Ban',
    section: 'bestseller',
    age: 'adults',
    images: ['https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=300&fit=crop'],
    rating: 4.8,
    reviews: [],
    discount: 29
  },
  
  // BAGS
  {
    name: 'Classic Backpack',
    description: 'Durable canvas backpack with laptop compartment and multiple pockets. Perfect for school or travel.',
    price: 55,
    category: 'bags',
    stock: 40,
    brand: 'Herschel',
    section: 'featured',
    age: 'all',
    images: ['https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop'],
    rating: 4.7,
    reviews: []
  },
  {
    name: 'Designer Tote Bag',
    description: 'Spacious and stylish tote bag with faux leather construction. Perfect for shopping and everyday use.',
    price: 75,
    category: 'bags',
    stock: 20,
    brand: 'Michael Kors',
    section: 'new-arrival',
    age: 'adults',
    images: ['https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=300&fit=crop'],
    rating: 4.5,
    reviews: []
  }
];

const seedProducts = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');

    // Delete existing products
    await Product.deleteMany({});
    console.log('Cleared existing products');

    // Insert new products
    const products = await Product.insertMany(sampleProducts);
    console.log(`${products.length} products added successfully!`);
    
    products.forEach(product => {
      console.log(`✓ ${product.name} - $${product.price}`);
    });

    process.exit();
  } catch (error) {
    console.error('Error seeding products:', error.message);
    process.exit(1);
  }
};

seedProducts();
