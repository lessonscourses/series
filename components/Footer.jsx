import { DINNERS } from '@/data/dinners';

const SITE = 'https://belegends.club';

export default function Footer() {
  const next = DINNERS.filter((d) => d.month === 'October');
  return (
    <footer><div className="wrap"><div className="foot">
      <div>
        <a className="brand" href="/"><img src="/brand/symbol.png" alt="" /><span><b>LEGENDS</b><small>PRIVATE INVESTOR NETWORK</small></span></a>
        <p className="foot-about">Private Investors Network. Rare, high-quality deals from investors. Co-investment. Additional capital. Private events.</p>
      </div>
      <div><h4>Next dinners</h4><ul>
        {next.map((d) => <li key={d.id}><a href={d.url || '/#calendar'}>{d.city} · {d.day} {d.month}</a></li>)}
      </ul></div>
      <div><h4>Contact</h4><ul>
        <li><a href="mailto:concierge@belegends.club">concierge@belegends.club</a></li>
        <li className="foot-muted">AVELYTH PLATFORM LTD</li>
        <li className="foot-muted">Arch. Makariou III, 115, 3021, Limassol, Cyprus</li>
      </ul></div>
      <div className="legal">
        <span>© 2026 AVELYTH PLATFORM LTD. All rights reserved.</span>
        <span className="legal-links"><a href={SITE + '/privacy'}>Privacy</a><a href={SITE + '/terms'}>Terms</a><a href={SITE + '/codex'}>Codex of Honour</a></span>
      </div>
    </div></div></footer>
  );
}
