'use client';
import { usePathname } from 'next/navigation';

const Arr = () => <svg className="arr" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
const NAV = [['#why', 'Why'], ['#format', 'Schedule'], ['#gallery', 'Experience'], ['#faq', 'FAQ']];

export default function Header() {
  const thanks = (usePathname() || '').startsWith('/thank-you');
  const cta = thanks
    ? <a className="btn" href="/">Back to dinners <Arr /></a>
    : <a className="btn hdr-cta" href="/#invite">Request an invitation <Arr /></a>;
  return (
    <>
      <header className={'hdr' + (thanks ? ' hdr-min' : '')}><div className="hdr-in">
        <a className="brand" href="https://legends.app/"><img src="/brand/symbol.png" alt="" /><span><b>LEGENDS</b></span></a>
        {!thanks && <nav className="nav">{NAV.map(([h, t]) => <a key={h} href={'/' + h}>{t}</a>)}</nav>}
        <div className="hdr-act">{cta}
          {!thanks && <button className="burger" aria-label="Menu" aria-expanded="false"><i /><i /></button>}</div>
      </div></header>
      {!thanks && <nav className="mnav">{NAV.map(([h, t]) => <a key={h} href={'/' + h}>{t}</a>)}<a className="btn gold" href="/#invite">Request an invitation <Arr /></a></nav>}
    </>
  );
}
