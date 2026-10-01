'use client';
import { useEffect, useState } from 'react';
import { SELF_URL } from '@/data/links';
import { WaIcon } from './WhatsAppCta';

export default function ShareInvite() {
  const [copied, setCopied] = useState(false);
  const [url, setUrl] = useState(SELF_URL);
  useEffect(() => { if (!SELF_URL) setUrl(window.location.origin + '/'); }, []);
  const text = `Legends Investor Dinners · October - December 2026\n\nPrivate evenings for 10 active investors in eight investment hubs. Thought this might be relevant for you:\n${url}`;
  const copy = async () => {
    try { await navigator.clipboard.writeText(url); } catch {
      const ta = document.createElement('textarea'); ta.value = url; document.body.appendChild(ta); ta.select();
      try { document.execCommand('copy'); } catch {} ta.remove();
    }
    setCopied(true); setTimeout(() => setCopied(false), 2200);
  };
  return (
    <section className="ty-card">
      <h2 className="flush">Know another investor who should be there?</h2>
      <p>Share the invitation with them.</p>
      <div className="ty-pair">
        <a className="ty-chip" href={'https://wa.me/?text=' + encodeURIComponent(text)} target="_blank" rel="noopener noreferrer"><WaIcon />Share via WhatsApp</a>
        <button type="button" className={'ty-chip' + (copied ? ' on' : '')} onClick={copy} aria-live="polite">{copied ? 'Copied ✓' : 'Copy invitation link'}</button>
      </div>
    </section>
  );
}
