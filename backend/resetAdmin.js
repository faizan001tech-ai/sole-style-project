import mongoose from 'mongoose';
import User from './models/User.js';
import dotenv from 'dotenv';

dotenv.config();

const resetAdminPassword = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');

    // Delete existing admin
    await User.deleteOne({ email: 'admin@windsurfgear.com' });
    console.log('Deleted old admin user');

    // Create new admin with fresh password
    const admin = await User.create({
      name: 'Administrator',
      email: 'admin@windsurfgear.com',
      password: 'admin123456',
      role: 'admin',
    });

    console.log('Admin recreated successfully!');
    console.log('Email:', admin.email);
    console.log('Password: admin123456');
    
    process.exit();
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
};

resetAdminPassword();
