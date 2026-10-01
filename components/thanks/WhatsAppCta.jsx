'use client';
import useApplicant from './useApplicant';
import { WHATSAPP_NUMBER, track } from '@/data/links';

export const WaIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35ZM12.04 21.8h-.01a9.8 9.8 0 0 1-4.99-1.37l-.36-.21-3.71.97.99-3.62-.23-.37a9.77 9.77 0 0 1-1.5-5.21c0-5.41 4.41-9.81 9.83-9.81 2.62 0 5.09 1.02 6.94 2.88a9.75 9.75 0 0 1 2.87 6.94c0 5.41-4.41 9.8-9.83 9.8Zm8.37-18.17A11.75 11.75 0 0 0 12.04.17C5.52.17.21 5.47.21 12a11.8 11.8 0 0 0 1.58 5.9L.11 24l6.27-1.64a11.8 11.8 0 0 0 5.65 1.44h.01c6.52 0 11.83-5.3 11.83-11.83 0-3.16-1.23-6.13-3.46-8.37Z" /></svg>
);

export default function WhatsAppCta() {
  const { full, dinner } = useApplicant();
  const what = dinner ? `the Legends Investor Dinner in ${dinner.city} on ${dinner.day} ${dinner.month}` : 'a Legends Investor Dinner';
  const msg = `Hi, I’ve just submitted a request for ${what}. My name is ${full || '[your name]'}.`;
  // wa.me opens the app on mobile and WhatsApp Web / the app chooser on desktop.
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  return (
    <section className="ty-card ty-wa">
      <h2 className="flush">Want a faster response?</h2>
      <p>Message us directly on WhatsApp.</p>
      <a className="ty-wa-btn" href={href} target="_blank" rel="noopener noreferrer" onClick={() => track('whatsapp_inbound', { dinner: dinner ? dinner.id : '' })}>
        <WaIcon />Message Legends on WhatsApp <span aria-hidden="true">→</span>
      </a>
    </section>
  );
}
