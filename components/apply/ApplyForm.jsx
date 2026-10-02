'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { track } from '@/data/links';
import { DINNERS, label } from '@/data/dinners';

// Apply form in the #invite section.
// Prototype: no backend yet - any valid submit goes to /thank-you.
// TODO: send `data` to the CRM / API before redirecting.

export default function ApplyForm({ idPrefix = 'af', autoFocus = false }) {
  const router = useRouter();
  const [sending, setSending] = useState(false);
  const [city, setCity] = useState('');
  useEffect(() => {
    const on = (e) => setCity(String(e.detail));
    window.addEventListener('legends:pick', on);
    return () => window.removeEventListener('legends:pick', on);
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try { sessionStorage.setItem('legends-apply', JSON.stringify({ name: (data.name || '').trim(), dinner: data.city || '' })); } catch {}
    track('application_submitted', { dinner: data.city || '', call_consent: data.consent ? 'yes' : 'no' });
    setSending(true);
    setTimeout(() => router.push('/thank-you'), 400);
  };

  const id = (k) => `${idPrefix}-${k}`;
  return (
    <form className="af" onSubmit={onSubmit}>
      <div className="af-field">
        <label htmlFor={id('name')}>Full name</label>
        <input id={id('name')} name="name" required placeholder="Your full name" autoComplete="name" autoFocus={autoFocus} />
      </div>
      <div className="af-row">
        <div className="af-field">
          <label htmlFor={id('email')}>Email</label>
          <input id={id('email')} name="email" type="email" required placeholder="you@company.com" autoComplete="email" />
        </div>
        <div className="af-field">
          <label htmlFor={id('phone')}>WhatsApp</label>
          <input id={id('phone')} name="phone" type="tel" required placeholder="+65 ..." autoComplete="tel" />
        </div>
      </div>
      <div className="af-row">
        <div className="af-field">
          <label htmlFor={id('linkedin')}>LinkedIn <em>(optional)</em></label>
          <input id={id('linkedin')} name="linkedin" type="text" placeholder="linkedin.com/in/..." />
        </div>
        <div className="af-field">
          <label htmlFor={id('city')}>Which dinner?</label>
          <select id={id('city')} name="city" required value={city} onChange={(e) => setCity(e.target.value)}>
            <option value="" disabled>Select a city and date</option>
            {DINNERS.map((d) => <option key={d.id} value={d.id}>{label(d)}</option>)}
            <option value="multi">More than one - we’ll discuss</option>
          </select>
        </div>
      </div>
      <label className="af-check"><input type="checkbox" name="investor" required />
        <span>I confirm I’m an <b>investor</b>: I invest my own capital or on behalf of a family office, fund or institution.</span></label>
      <label className="af-check"><input type="checkbox" name="consent" />
        <span>Legends may call, text or WhatsApp me about this request, for example to confirm my seat. Calls may be recorded. <em>(optional)</em></span></label>
      <button className="af-submit" type="submit" disabled={sending}>
        {sending ? 'Sending…' : 'Request an invitation →'}
      </button>
      <p className="af-legal">Submission does not guarantee a seat. By submitting, you agree to our <a href="https://belegends.club/terms">Terms</a> and <a href="https://belegends.club/privacy">Privacy</a>.</p>
      <ol className="af-steps"><li><b>01</b>Apply</li><li><b>02</b>Review</li><li><b>03</b>Seat confirmed</li><li><b>04</b>Venue shared</li></ol>
    </form>
  );
}
