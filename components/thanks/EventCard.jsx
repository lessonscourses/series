'use client';
import useApplicant from './useApplicant';
import { DINNERS } from '@/data/dinners';

const Cal = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M8 2v4M16 2v4" /><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M3 10h18" /></svg>;
const Pin = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 22s7-6.1 7-12a7 7 0 1 0-14 0c0 5.9 7 12 7 12Z" /><circle cx="12" cy="10" r="2.5" /></svg>;
const DESC = 'Private networking dinner for active investors. Your attendance is subject to confirmation by Legends. Venue details will be shared with confirmed guests.';
const ymd = (iso) => iso.replace(/-/g, '');
const next = (iso) => { const t = new Date(iso + 'T00:00:00Z'); t.setUTCDate(t.getUTCDate() + 1); return t.toISOString().slice(0, 10).replace(/-/g, ''); };

// Dinner details + "hold the date" (all-day event: exact time is confirmed later, except Singapore).
export default function EventCard() {
  const { dinner, multi } = useApplicant();
  if (!dinner) {
    return (
      <section className="ty-card ty-event">
          <h2 className="ty-event-title">Legends Investor Dinners</h2>
        <ul className="ty-details">
          <li><Cal /><span><b>{multi ? 'Several dinners selected' : 'October - December 2026'}</b>We’ll confirm dates and venues with you directly.</span></li>
          <li><Pin /><span><b>{DINNERS.length} dinners in 8 cities</b><em>Venues shared with confirmed guests</em></span></li>
        </ul>
      </section>
    );
  }
  const title = `Legends Investor Dinner - ${dinner.city}`;
  const g = 'https://calendar.google.com/calendar/render?' + new URLSearchParams({ action: 'TEMPLATE', text: title, dates: `${ymd(dinner.iso)}/${next(dinner.iso)}`, details: DESC, location: `Premium venue in ${dinner.city} (address shared with confirmed guests)` });
  const ics = 'data:text/calendar;charset=utf-8,' + encodeURIComponent(['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Legends//Investor Dinner//EN', 'BEGIN:VEVENT', `UID:legends-${dinner.id}-${ymd(dinner.iso)}@belegends.club`, `DTSTART;VALUE=DATE:${ymd(dinner.iso)}`, `DTEND;VALUE=DATE:${next(dinner.iso)}`, `SUMMARY:${title}`, `DESCRIPTION:${DESC}`, `LOCATION:Premium venue in ${dinner.city}`, 'STATUS:TENTATIVE', 'END:VEVENT', 'END:VCALENDAR'].join('\r\n'));
  return (
    <section className="ty-card ty-event">
      <h2 className="ty-event-title">{title}</h2>
      <ul className="ty-details">
        <li><Cal /><span><b>{dinner.dow === 'Thu' ? 'Thursday' : dinner.dow === 'Wed' ? 'Wednesday' : 'Tuesday'}, {dinner.day} {dinner.month} 2026</b>{dinner.time || 'Exact time confirmed with your seat'}</span></li>
        <li><Pin /><span><b>Premium venue in {dinner.city}</b><em>Address shared with confirmed guests</em></span></li>
      </ul>
      <p className="ty-hint">Hold the date while we review your details.</p>
      <div className="ty-actions">
        <a className="ty-btn gold" href={g} target="_blank" rel="noopener noreferrer"><Cal />Google Calendar</a>
        <a className="ty-btn outline" href={ics} download={`legends-${dinner.city.toLowerCase().replace(/\s+/g, '-')}.ics`}><Cal />Apple / Outlook</a>
      </div>
    </section>
  );
}
