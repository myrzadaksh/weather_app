# Weather App

https://weather-app-git-main-daulets-projects-d6dbf04a.vercel.app/

A small app to view current weather, forecasts, air quality, and map layers.

## Features
- Current weather + local time
- Hourly and daily forecast
- Extra info (UV, wind, pressure, sunrise/sunset)
- Map with weather layers and map type switch
- Air Quality Index (AQI)

## Tech Stack
- React
- TypeScript
- Vite
- TanStack Query
- Zod
- Leaflet + MapTiler

## Run locally
```bash
npm install
npm run dev
```

## Build & Preview
```bash
npm run build
npm run preview
```

## Environment
Create `.env`:
```
VITE_API_KEY=your_openweather_key
```

## Note
Any `VITE_` key is exposed to the client — don’t use secret keys.
