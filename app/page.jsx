import Calendar from '@/components/Calendar';
import Faq from '@/components/Faq';
import Gallery from '@/components/Gallery';
import ApplyForm from '@/components/apply/ApplyForm';
import SeatTable from '@/components/SeatTable';
import { SINGAPORE_URL } from '@/data/dinners';

const Arr = ({ c = 'arr' }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>;

const STEPS = [
  ['17:00', 'Arrival', 'Meet the other nine investors.'],
  ['17:30', 'Introductions', 'Who you are, what you invest in.'],
  ['18:00', 'Asks & gives', 'What you need. What you can offer.', true],
  ['18:30', 'Dinner', 'Deals, market views, open conversation.', true],
  ['20:00', 'Close', 'The network continues after dinner.'],
];
const GUESTS = [
  ['Family offices', 'Principals and investment teams. Direct deals, funds, private markets.'],
  ['CIOs & institutions', 'Allocators of institutional capital.'],
  ['GPs & LPs', 'Fund managers and the LPs backing them.'],
  ['Private investors', 'Investing their own capital, directly.'],
];
const OUTCOMES = [
  ['Co-investment', 'A co-investor for your next deal.'],
  ['Deal flow', 'A deal that never reaches the open market.'],
  ['Capital', 'Capital for what you’re already building.'],
  ['Peers', 'Someone worth keeping in your circle.'],
];

export default function Page() {
  return (
    <>
      {/* ===== Hero ===== */}
      <section className="m-hero" id="top">
        <div className="m-orb o1" data-speed="-.15" /><div className="m-orb o2" data-speed=".1" />
        <div className="m-bigword w1" data-speed=".35" data-axis="x">PRIVATE INVESTOR DINNERS · TEN SEATS · ONE TABLE ·</div>
        <div className="m-bigword w2" data-speed="-.3" data-axis="x">OCTOBER · NOVEMBER · DECEMBER · 2026 ·</div>
        <div className="wrap m-hero-grid">
          <div>
            <div className="m-when rv">
              <b>October - December 2026</b>
              <span><em>Private investor dinners</em><i /><em>Next: Singapore, Thu 8 October</em></span>
            </div>
            <h1 className="rv d1">Twelve evenings<br />Eight cities<br /><span className="gold">One network</span></h1>
            <p className="lead rv d2">Private networking dinners for active investors - 10 guests, one table, in the week when the right people are already in town.</p>
            <div className="ctas rv d3"><a className="btn gold" href="#invite">Request an invitation <Arr /></a><a className="btn ghost" href="#calendar">See the calendar</a></div>
          </div>
          <div className="m-media rv d2">
            <div className="m-frame f1" data-speed="-.06"><video autoPlay muted loop playsInline poster="https://belegends.club/assets/site-loop-poster.jpg"><source src="https://belegends.club/assets/site-loop.webm" type="video/webm" /></video></div>
            <div className="m-frame f2" data-speed=".08"><img src="/gallery/evening-5.jpg" alt="Legends private dinner" /></div>
            <a className="m-chip c1" data-speed=".12" href={SINGAPORE_URL}><b>8</b><div>Singapore<small>Thu, 8 October</small></div></a>
            <a className="m-chip c2" data-speed="-.1" href="#calendar"><b>14</b><div>Dubai<small>Wed, 14 October</small></div></a>
            <div className="m-chip c3" data-speed=".18"><b data-days="2026-10-08T09:00:00Z">-</b><div>days to Singapore<small>next dinner</small></div></div>
          </div>
        </div>
        <div className="scroll-cue"><i />Scroll</div>
      </section>

      {/* ===== Why: scroll-lit manifesto + what one evening can bring ===== */}
      <section className="mf" id="why">
        <div className="mf-glow" data-speed=".2" aria-hidden="true" />
        <div className="mf-word" data-speed="-.25" data-axis="x" aria-hidden="true">10 · 1 · 0 · 10 · 1 · 0 ·</div>
        <div className="wrap mf-in">
          <p className="mf-text" data-lit>
            You do not need more contacts. The right ten are harder to find.
            Legends selects the table - introductions that usually take years, in one evening.
          </p>
          <ul className="mf-facts">
            <li className="rv"><b><span data-to="10">0</span> seats</b><span>Active investors only</span></li>
            <li className="rv d1"><b>Reviewed</b><span>Every guest, personally</span></li>
            <li className="rv d2"><b>Private</b><span>Venue and guests stay off this page</span></li>
          </ul>
          <div className="mf-one">
            <h2 className="mf-one-h rv">One evening, one relationship may be enough</h2>
            <ul>
              {OUTCOMES.map(([h, p], i) => <li key={h} className={'rv d' + i}><b>{h}</b><span>{p}</span></li>)}
            </ul>
          </div>
        </div>
      </section>

      {/* ===== Calendar ===== */}
      <section className="sec" id="calendar" style={{ paddingTop: 0 }}><div className="wrap">
        <div className="sec-head rv"><h2 className="h2">Upcoming investor dinners</h2>
          <p className="lead sec-sub">Twelve dinners in eight cities, each during a major investor week. Fly in for the evening - every dinner has its own guest list, and you can apply for more than one.</p></div>
        <Calendar />
      </div></section>

      {/* ===== Who attends ===== */}
      <section className="sec" id="guests" style={{ paddingTop: 0 }}><div className="wrap">
        <div className="sec-head rv"><h2 className="h2">Who sits at the table</h2>
          <p className="lead sec-sub">Only investors, at your level. Nobody pitching you. People who have walked the same journey.</p></div>
        <div className="tables4">
          {GUESTS.map(([h, p], i) => (
            <div key={h} className={'tbl rv d' + i}><h3>{h}</h3><p>{p}</p></div>
          ))}
        </div>
      </div></section>

      {/* ===== How it runs ===== */}
      <section className="sec" id="format" style={{ paddingTop: 0 }}><div className="wrap">
        <div className="sec-head rv"><h2 className="h2">Three hours, simple by design</h2>
          <p className="lead sec-sub">One format in every city. Exact time and venue are confirmed for each dinner and shared with confirmed guests.</p></div>
        <div className="flowline rv">
          <span className="fl-track"><i /></span>
          {STEPS.map(([k, h, p, key], i) => (
            <div key={k} className={'fl-step' + (key ? ' key' : '')}><span className="fl-t">{k}</span><h3>{h}</h3><p>{p}</p></div>
          ))}
        </div>
        <div className="fl-foot rv"><span><i />Times shown for Singapore - each city confirms its own</span><a className="tlink" href={SINGAPORE_URL + '#evening'}>See the Singapore schedule <Arr c="" /></a></div>
      </div></section>

      <Gallery />

      {/* ===== Invite ===== */}
      <section className="sec" id="invite" style={{ paddingTop: 0 }}><div className="wrap inv">
        <div className="apply-card rv">
          <h2>10 seats, each one personally confirmed</h2>
          <p>The goal is not to fill the table. It is to make the table worth joining.</p>
          <SeatTable />
          <figure className="ap-quote">
            <blockquote>“Every deal I regret started with the wrong introduction. Every one I’m proud of started with the right one.”</blockquote>
            <figcaption><img src="/brand/yanis.webp" alt="Yanis Chkhatval" /><span><b>Yanis Chkhatval</b>Private investor &amp; entrepreneur. Founder of Legends.</span></figcaption>
          </figure>
        </div>
        <div className="form rv d1"><ApplyForm idPrefix="inv" /></div>
      </div></section>

      <Faq />
    </>
  );
}
