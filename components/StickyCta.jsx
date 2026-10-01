'use client';
import { usePathname } from 'next/navigation';

// Mobile "Request an invitation" bar (scrolls to the form). Hidden on the thank-you page.
export default function StickyCta() {
  if (usePathname() === '/thank-you') return null;
  return (
    <a className="m-sticky" href="/#invite">Request an invitation <svg className="arr" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg></a>
  );
}
