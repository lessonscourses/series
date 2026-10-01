# Legends - Private Investor Dinners (Q4 2026)

Series landing for all dinners. Next.js (App Router) + React, one global stylesheet `app/globals.css`.

```bash
npm install
npm run dev                  # http://localhost:3000
npm run build && npm start
```

- `data/dinners.js` - the 12 dinners (city, date, anchor event, region). Add `url` + `time` when a city has its own landing (card becomes "Venue confirmed" and links there). `SINGAPORE_URL` lives here.
- `data/links.js` - WhatsApp number for the thank-you page (TODO), self URL, `track()` for GTM/CRM.
- Hero: video + photo with parallax chips and moving city words (markup in `app/page.jsx`, parallax via `data-speed` in `components/Interactions.jsx`).
- Why block: words light up on scroll (`data-lit`), numbers count up (`data-to`).
- `components/Calendar.jsx` - calendar with region filter; clicking a card picks it in the form.
- `components/apply/ApplyForm.jsx` - form -> `/thank-you`. TODO: send data to the CRM.
- `app/thank-you` - request received, 3 steps, WhatsApp, event details + calendar (for the chosen dinner), referral.

Deploy: upload the contents of this folder to the repo root; Railway runs `npm run build` / `npm start`.
