# IP Address Tracker

A solution to the [IP Address Tracker challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0).

## Live site and code

- Live site: (https://ip-address-tracker-lovat-five.vercel.app/)
- Repo: https://github.com/lois-narh/IP-Address-Tracker

## Screenshot

![Desktop view](./screenshots/desktop.png)
![Mobile view](./screenshots/mobile.png)

## What it does

- Shows your own IP address and location when the page loads
- Search any IP address or domain and see its IP, location, timezone and ISP
- The map and pin move to the searched location
- Layout changes for desktop and mobile
- Hover state on the search button

## Built with

- React + TypeScript (Vite)
- Leaflet and React Leaflet for the map
- IPify Geolocation API
- CSS (flexbox, media queries)
- Deployed on Vercel

## What I learned

- How to fetch data from an API with `useEffect` and `fetch`
- Keeping an API key in a `.env` file so it isn't pushed to GitHub
- Moving a Leaflet map when the coordinates change
- Why images need to be imported in Vite, or they break after deploying
- Making a layout work on mobile with `<picture>` and media queries

## What I'd improve

- Search by place name, like "Accra"
- Support for IPv6 addresses
- Better loading and error messages

## Running it locally

1. Clone the repo
2. Run `npm install`
3. Create a `.env` file in the root with `VITE_API_KEY=your_key_here` (get a free key from [IPify](https://geo.ipify.org/))
4. Run `npm run dev`

## Author

- GitHub: [https://github.com/lois-narh](https://github.com/lois-narh)