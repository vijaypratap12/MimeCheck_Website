# MimeCheck Website

This is the official website for the MimeCheck NuGet package.

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

This site can be deployed to:

### Netlify
1. Connect your repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`

### Vercel
1. Connect your repository to Vercel
2. Framework preset: Vite
3. Build command: `npm run build`
4. Output directory: `dist`

### GitHub Pages
1. Enable GitHub Pages in repository settings
2. Push to main branch
3. GitHub Actions will automatically build and deploy

## Structure

- `/src/pages` - Page components (Home, Docs, About)
- `/src/components` - Reusable components (Navbar, Footer)
- `/src/App.tsx` - Main app component with routing
- `/public` - Static assets

## Technology Stack

- React 18
- TypeScript
- React Router
- Vite
- CSS3

