import { DINNERS } from '@/data/dinners';

const SITE = 'https://legends.app';
const Arr = () => <svg className="arr" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>;

export default function Footer() {
  const next = DINNERS.filter((d) => d.month === 'October');
  return (
    <footer><div className="wrap"><div className="foot">
      <div>
        <a className="brand" href={SITE + '/'}><img src="/brand/symbol.png" alt="" /><span><b>LEGENDS</b></span></a>
        <p className="foot-about">Uniting Legends. Private Investor Network: co-investment, deal flow, additional capital, private events.</p>
      </div>
      <div><h4>October</h4><ul>
        {next.map((d) => <li key={d.id}><a href={d.url || '/#calendar'}>{d.city}, {d.day} {d.month.slice(0, 3)}</a></li>)}
      </ul></div>
      <div><h4>Contact</h4><ul>
        <li><a href="mailto:concierge@legends.app">concierge@legends.app</a></li>
        <li className="foot-muted">AVELYTH PLATFORM LTD</li>
        <li className="foot-muted">Arch. Makariou III, 115, 3021, Limassol, Cyprus</li>
      </ul></div>
      <div className="legal">
        <span>© 2026 AVELYTH PLATFORM LTD</span>
        <span className="legal-links"><a href={SITE + '/privacy'}>Privacy</a><a href={SITE + '/terms'}>Terms</a></span>
        <a className="btn gold foot-cta" href="/#invite">Request an invitation <Arr /></a>
      </div>
    </div></div></footer>
  );
}
