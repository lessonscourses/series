'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { track } from '@/data/links';
import { DINNERS, label } from '@/data/dinners';

// Apply form in the #invite section.
// Prototype: no backend yet - any valid submit goes to /thank-you.
// TODO: send `data` to the CRM / API before redirecting.
const PROFILES = ['Private Investor', 'Family Office', 'Fund / GP', 'LP / Allocator', 'Institutional Investor', 'Other'];

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
    track('application_submitted', { dinner: data.city || '', investor_profile: data.profile || '' });
    setSending(true);
    setTimeout(() => router.push('/thank-you'), 400);
  };

  const id = (k) => `${idPrefix}-${k}`;
  return (
    <form className="af" onSubmit={onSubmit}>
      <div className="af-field">
        <label htmlFor={id('name')}>Full name <b>*</b></label>
        <input id={id('name')} name="name" required placeholder="Your full name" autoComplete="name" autoFocus={autoFocus} />
      </div>
      <div className="af-row">
        <div className="af-field">
          <label htmlFor={id('phone')}>WhatsApp / mobile <b>*</b></label>
          <input id={id('phone')} name="phone" type="tel" required placeholder="+971 ..." autoComplete="tel" />
        </div>
        <div className="af-field">
          <label htmlFor={id('email')}>Work email <b>*</b></label>
          <input id={id('email')} name="email" type="email" required placeholder="you@company.com" autoComplete="email" />
        </div>
      </div>
      <div className="af-row">
        <div className="af-field">
          <label htmlFor={id('linkedin')}>LinkedIn profile <b>*</b></label>
          <input id={id('linkedin')} name="linkedin" type="text" required placeholder="linkedin.com/in/..." pattern=".*linkedin\.com/.+" title="Please enter your LinkedIn profile link" />
        </div>
        <div className="af-field">
          <label htmlFor={id('profile')}>Investor profile <b>*</b></label>
          <select id={id('profile')} name="profile" required defaultValue="">
            <option value="" disabled>Select</option>
            {PROFILES.map((o) => <option key={o}>{o}</option>)}
          </select>
        </div>
      </div>
      <div className="af-field">
        <label htmlFor={id('city')}>Which dinner? <b>*</b></label>
        <select id={id('city')} name="city" required value={city} onChange={(e) => setCity(e.target.value)}>
          <option value="" disabled>Select a city and date</option>
          {DINNERS.map((d) => <option key={d.id} value={d.id}>{label(d)}</option>)}
          <option value="multi">More than one - we’ll discuss</option>
        </select>
      </div>
      <div className="af-field">
        <label htmlFor={id('focus')}>Investment focus <em>(optional)</em></label>
        <input id={id('focus')} name="focus" type="text" placeholder="e.g. B2B software, growth equity, Europe & Asia" />
      </div>
      <button className="af-submit" type="submit" disabled={sending}>
        {sending ? 'Sending…' : 'Request an invitation →'}
      </button>
      <p className="af-note">Submission does not guarantee a seat.</p>
      <p className="af-legal">By submitting, you agree to our <a href="https://belegends.club/terms">Terms</a> &amp; <a href="https://belegends.club/privacy">Privacy</a>.</p>
    </form>
  );
}
