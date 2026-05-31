# UROPLENUM 2026 Conference Website

Modern responsive trilingual conference website for **UROPLENUM 2026**, the Plenum of Urologists of Kazakhstan.

Production URL target: `https://uroplenum2026.vercel.app`

## Pages

- `/` - Home
- `/program/` - Program
- `/faculty/` - Faculty
- `/venue/` - Venue

## Local Development

```powershell
npm install
npm run dev
```

Open `http://localhost:3000`.

You can also run:

```powershell
npm start
```

This project is configured for static export, so `npm start` intentionally runs the local development server instead of `next start`.

## Static Build

```powershell
npm run build:pages
```

The static export is written to `out/`.

## Vercel Deployment

The site can be deployed by importing the GitHub repository into Vercel.

To publish:

1. Push the project to GitHub.
2. In Vercel, import the GitHub repository.
3. Use the default build command: `npm run build`.
4. Set the production domain to `uroplenum2026.vercel.app` in Vercel.
