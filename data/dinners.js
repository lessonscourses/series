// Legends investor dinners, Q4 2026. One row per dinner.
// url: set when the city has its own landing (the card links there and is shown as "Venue confirmed").
export const SINGAPORE_URL = 'https://offlineevent-production.up.railway.app/';

export const DINNERS = [
  { id: 1, city: 'Singapore', day: 8, dow: 'Thu', month: 'October', anchor: 'Milken Institute Asia Summit', region: 'Asia', iso: '2026-10-08', url: SINGAPORE_URL, time: '5:00-8:00 PM' },
  { id: 2, city: 'Dubai', day: 14, dow: 'Wed', month: 'October', anchor: 'SuperReturn Middle East', region: 'GCC', iso: '2026-10-14' },
  { id: 3, city: 'Abu Dhabi', day: 21, dow: 'Wed', month: 'October', anchor: 'Campden Congress', region: 'GCC', iso: '2026-10-21' },
  { id: 4, city: 'Riyadh', day: 28, dow: 'Wed', month: 'October', anchor: 'FII10', region: 'GCC', iso: '2026-10-28' },
  { id: 5, city: 'New York', day: 4, dow: 'Wed', month: 'November', anchor: 'ILPA Summit', region: 'USA', iso: '2026-11-04' },
  { id: 6, city: 'Zurich', day: 10, dow: 'Tue', month: 'November', anchor: 'Prestel Family Office Forum', region: 'Europe', iso: '2026-11-10' },
  { id: 7, city: 'London', day: 12, dow: 'Thu', month: 'November', anchor: 'UK Private Family Office Forum', region: 'Europe', iso: '2026-11-12' },
  { id: 8, city: 'Palm Beach', day: 18, dow: 'Wed', month: 'November', anchor: 'Campden North America Forum', region: 'USA', iso: '2026-11-18' },
  { id: 9, city: 'London', day: 1, dow: 'Tue', month: 'December', anchor: 'Campden European Forum', region: 'Europe', iso: '2026-12-01' },
  { id: 10, city: 'Riyadh', day: 3, dow: 'Thu', month: 'December', anchor: 'Prestel Family Office Forum', region: 'GCC', iso: '2026-12-03' },
  { id: 11, city: 'Abu Dhabi', day: 8, dow: 'Tue', month: 'December', anchor: 'Abu Dhabi Finance', region: 'GCC', iso: '2026-12-08' },
  { id: 12, city: 'Dubai', day: 15, dow: 'Tue', month: 'December', anchor: 'ME Family Office Summit', region: 'GCC', iso: '2026-12-15' },
];

export const MONTHS = ['October', 'November', 'December'];
export const REGIONS = [['all', 'All cities'], ['Asia', 'Asia'], ['GCC', 'Middle East'], ['Europe', 'Europe'], ['USA', 'USA']];
export const label = (d) => `${d.city} · ${d.day} ${d.month}`;
