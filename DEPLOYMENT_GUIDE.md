# 🚀 Complete Deployment Guide - SoleStyle E-Commerce

## Overview
This guide will help you deploy your MERN stack e-commerce application to production using:
- **Backend:** Railway (Node.js + Express + MongoDB)
- **Frontend:** Vercel (React + Vite)

---

## Prerequisites
- GitHub account connected to Railway and Vercel
- MongoDB Atlas database (already configured)
- Cloudinary account (already configured)

---

## PART 1: Deploy Backend to Railway 🔧

### Step 1: Access Railway
1. Go to https://railway.app/
2. Sign in with your GitHub account
3. Click **"New Project"** → **"Deploy from GitHub repo"**

### Step 2: Connect Repository
1. Click **"Connect GitHub"**
2. Select repository: `faizan001tech-ai/sole-style-project`
3. Grant Railway access to the repository

### Step 3: Configure Service
1. **Important:** Click on your service
2. Go to **"Settings"** tab
3. Under **"Root Directory"**, enter: `backend`
4. Railway will auto-detect `railway.json` configuration

### Step 4: Add Environment Variables
In Railway dashboard, click **"Variables"** tab and add:

```env
MONGO_URI=mongodb+srv://E-commerce1:E-commerce1@cluster0.8cof4ps.mongodb.net/windsurf-gear?retryWrites=true&w=majority
JWT_SECRET=windsurf_secret_key_2024_production
CLOUDINARY_CLOUD_NAME=drxmabjr4
CLOUDINARY_API_KEY=851793397576472
CLOUDINARY_API_SECRET=Twu5IbBJX1CbRN4D5zETnNu8OOI
CLOUDINARY_UPLOAD_PRESET=pch0sizm
NODE_ENV=production
PORT=5000
```

### Step 5: Deploy
1. Railway will automatically start building
2. Wait for deployment (~2-3 minutes)
3. Once deployed, you'll see a **"Generate Domain"** button
4. Click it to get your production URL:
   ```
   https://your-app-production.up.railway.app
   ```

### Step 6: Test Backend
Visit your Railway URL in browser:
```
https://your-app-production.up.railway.app
```
You should see:
```json
{"message":"Welcome to Windsurf Gear API"}
```

---

## PART 2: Deploy Frontend to Vercel ⚡

### Step 1: Update API Configuration
**IMPORTANT:** After getting your Railway URL, update the frontend:

1. Create `.env.production` file in `frontend` folder:
```env
VITE_API_URL=https://YOUR_RAILWAY_APP.up.railway.app/api
```

Replace `YOUR_RAILWAY_APP` with your actual Railway app name!

### Step 2: Push Changes to GitHub
```bash
cd "c:\Users\SHAYAN J\Desktop\WIndsurf-project"
git add .
git commit -m "chore: add production configuration"
git push
```

### Step 3: Deploy to Vercel
1. Go to https://vercel.com/
2. Sign in with GitHub
3. Click **"Add New..."** → **"Project"**
4. Import your repository: `faizan001tech-ai/sole-style-project`
5. **Configure Project:**
   - **Framework Preset:** Vite
   - **Root Directory:** `frontend`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`

### Step 4: Add Build Settings
In Vercel project settings:
1. Go to **"Settings"** → **"Build & Development Settings"**
2. Add environment variable:
   ```
   VITE_API_URL = https://YOUR_RAILWAY_APP.up.railway.app/api
   ```

### Step 5: Deploy
1. Click **"Deploy"**
2. Wait for build (~1-2 minutes)
3. Vercel will give you a production URL:
   ```
   https://sole-style-project.vercel.app
   ```

---

## PART 3: Update CORS Settings 🔒

After both deployments are live:

1. Go back to Railway dashboard
2. Edit your backend code or use Railway's shell
3. Update CORS allowed origins in `backend/server.js`:

```javascript
const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:5174',
  'https://sole-style-project.vercel.app', // Your Vercel URL
  'https://your-domain.com' // Custom domain if any
];
```

4. Commit and push changes:
```bash
git add .
git commit -m "fix: add production CORS origin"
git push
```

Railway will auto-redeploy with new settings.

---

## Testing Your Production App

### 1. Test Backend API
```bash
# Test connection
curl https://your-railway-app.up.railway.app

# Test products endpoint
curl https://your-railway-app.up.railway.app/api/products
```

### 2. Test Frontend
Visit your Vercel URL in browser:
```
https://sole-style-project.vercel.app
```

### 3. Test Full Integration
1. Browse products on Vercel frontend
2. Add items to cart
3. Register/Login (test authentication)
4. Place an order (test full checkout flow)
5. Upload product images (test Cloudinary integration)

---

## Environment Variables Reference

### Backend (Railway)
```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
CLOUDINARY_UPLOAD_PRESET=your_upload_preset
NODE_ENV=production
PORT=5000
```

### Frontend (Vercel)
```env
VITE_API_URL=https://your-railway-app.up.railway.app/api
```

---

## Troubleshooting

### Issue: CORS Errors
**Solution:** Update `backend/server.js` CORS settings to include your Vercel domain

### Issue: MongoDB Connection Failed
**Solution:** 
1. Check MongoDB Atlas IP whitelist (allow 0.0.0.0/0)
2. Verify connection string credentials
3. Ensure database user has read/write permissions

### Issue: Images Not Uploading
**Solution:**
1. Verify Cloudinary credentials in Railway
2. Check upload preset exists in Cloudinary dashboard
3. Ensure file size is under 10MB limit

### Issue: 404 on API Routes
**Solution:**
1. Verify Railway URL is correct in frontend
2. Check all routes start with `/api`
3. Ensure backend is running (check Railway logs)

---

## Monitoring & Logs

### Railway Logs
1. Go to Railway dashboard
2. Click on your service
3. View **"Deployments"** tab for build logs
4. View **"Logs"** tab for runtime logs

### Vercel Logs
1. Go to Vercel dashboard
2. Click on your project
3. View **"Deployments"** for build status
4. Click deployment → **"Function Logs"** for runtime errors

---

## Next Steps

### 1. Set Up Custom Domain (Optional)
- **Railway:** Add custom domain in Settings → Domains
- **Vercel:** Add domain in Settings → Domains

### 2. Enable HTTPS
Both Railway and Vercel provide free SSL certificates automatically!

### 3. Set Up CI/CD
- Every git push will auto-deploy to production
- Monitor deployments in Railway/Vercel dashboards

### 4. Database Backup
- Set up MongoDB Atlas automated backups
- Download regular backups for safety

---

## Security Checklist ✅

- [ ] Changed MongoDB password after GitHub push
- [ ] Regenerated JWT secret
- [ ] Updated Cloudinary API keys
- [ ] Enabled CORS only for production domains
- [ ] Set NODE_ENV=production
- [ ] Using environment variables (not hardcoded)
- [ ] HTTPS enabled on both services

---

## Support Resources

- **Railway Docs:** https://docs.railway.app
- **Vercel Docs:** https://vercel.com/docs
- **MongoDB Atlas:** https://www.mongodb.com/docs/atlas
- **Cloudinary Docs:** https://cloudinary.com/documentation

---

## Quick Commands Reference

```bash
# Push updates to trigger auto-deploy
git add .
git commit -m "fix: your message"
git push

# Check Railway deployment
railway up

# Check Vercel deployment
vercel --prod

# Local testing with production env
cd frontend
npm run dev -- --mode production
```

---

**🎉 Congratulations!** Your MERN stack e-commerce app is now live in production!
