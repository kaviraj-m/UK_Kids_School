# UK Kids International Play School - Deployment Guide

## Deploy to Vercel (Recommended)

### Method 1: GitHub Integration (Easiest)

1. **Create a GitHub Repository:**
   - Go to [GitHub](https://github.com) and create a new repository
   - Name it `uk-kids-school` or similar
   - Don't initialize with README (we already have files)

2. **Push Code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - UK Kids School website"
   git branch -M main
   git remote add origin https://github.com/yourusername/uk-kids-school.git
   git push -u origin main
   ```

3. **Deploy via Vercel:**
   - Go to [Vercel](https://vercel.com)
   - Sign up/Login with GitHub
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect it's a Vite project
   - Click "Deploy"

### Method 2: Vercel CLI

1. **Install and Login:**
   ```bash
   npm install -g vercel
   vercel login
   ```

2. **Deploy:**
   ```bash
   vercel --prod
   ```

## Project Configuration

The project is configured with:
- **Framework:** Vite + React + TypeScript
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Node Version:** 18.x or higher

## Build Settings for Vercel

If you encounter issues, use these build settings in Vercel dashboard:
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`
- **Node.js Version:** 18.x

## Environment Variables

No environment variables required for this static site.

## Custom Domain (Optional)

After deployment, you can add a custom domain in Vercel:
1. Go to your project dashboard
2. Click "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

## Features Included

✅ Responsive design (mobile + desktop)
✅ UK Kids logo integration
✅ Modern UI with Material-UI
✅ Smooth animations and transitions
✅ Contact forms and information
✅ About section with school details
✅ Features showcase
✅ SEO-friendly structure

## Support

If you encounter any deployment issues:
1. Check Vercel build logs
2. Ensure all dependencies are in package.json
3. Verify build commands work locally
4. Contact support if needed

## Live Preview

Once deployed, your site will be available at:
`https://your-project-name.vercel.app`

You can also configure a custom domain later. 