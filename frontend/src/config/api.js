import axios from 'axios';

// Determine API base URL based on environment - with Railway production URL as fallback
const API_BASE_URL = import.meta.env.VITE_API_URL || 
                     'https://sole-style-project-8jog-production.up.railway.app/api' ||
                     'http://localhost:5000/api';

// Create axios instance with base configuration
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;