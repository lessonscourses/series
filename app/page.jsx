import Calendar from '@/components/Calendar';
import Faq from '@/components/Faq';
import Gallery from '@/components/Gallery';
import ApplyForm from '@/components/apply/ApplyForm';
import { SINGAPORE_URL } from '@/data/dinners';

const Arr = ({ c = 'arr' }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>;

const STEPS = [
  ['Arrival', 'Arrive and settle in', 'Meet the other investors as everyone arrives.'],
  ['Introductions', 'Around the table', 'Who you are, what you invest in and what’s on your radar.'],
  ['Asks & gives', 'What you need - and what you offer', 'Current asks, opportunities and where you can help others.', true],
  ['Dinner', 'The rest of the evening is yours', 'Dinner, market views, deals and open conversation.', true],
  ['After', 'The network continues', 'Stay connected through Legends beyond the evening.'],
];
const GUESTS = [
  ['family-office', 'FAMILY OFFICES', 'Principals & investment teams', 'Direct deals, funds and private markets.'],
  ['institutions', 'CIOs & INSTITUTIONS', 'Capital allocators', 'Senior professionals allocating institutional capital.'],
  ['fund-lp', 'FUND PARTNERS & LPs', 'GPs & allocators', 'GPs deploying capital and LPs backing managers and private markets.'],
  ['private', 'PRIVATE INVESTORS', 'Investing their own capital', 'Active investors making direct investment decisions.'],
];

export default function Page() {
  return (
    <>
      {/* ===== Hero ===== */}
      <section className="m-hero" id="top">
        <div className="m-orb o1" data-speed="-.15" /><div className="m-orb o2" data-speed=".1" />
        <div className="m-bigword w1" data-speed=".35" data-axis="x">SINGAPORE · DUBAI · ABU DHABI · RIYADH · NEW YORK · ZURICH · LONDON · PALM BEACH ·</div>
        <div className="m-bigword w2" data-speed="-.3" data-axis="x">OCTOBER · NOVEMBER · DECEMBER · 2026 ·</div>
        <div className="wrap m-hero-grid">
          <div>
            <span className="m-kick rv"><i />Investor dinners · October - December 2026</span>
            <h1 className="rv d1">Twelve evenings.<br />Eight cities.<br /><span className="gold">One network.</span></h1>
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

      {/* ===== Why: scroll-lit manifesto ===== */}
      <section className="mf" id="why">
        <div className="mf-glow" data-speed=".2" aria-hidden="true" />
        <div className="mf-word" data-speed="-.25" data-axis="x" aria-hidden="true">10 · 1 · 0 · 10 · 1 · 0 ·</div>
        <div className="wrap mf-in">
          <span className="kicker rv">Why these dinners</span>
          <p className="mf-text" data-lit>
            Ten active investors. One table. One evening.
            No stage, no pitches, no brokers - just the people who deploy capital,
            in the week they are already in town.
          </p>
          <div className="mf-nums">
            <div className="rv"><b data-to="10">0</b><span>investors per dinner</span></div>
            <div className="rv d1"><b data-to="1">0</b><span>table, one evening</span></div>
            <div className="rv d2"><b>0</b><span>pitches, stages or brokers</span></div>
            <div className="rv d3"><b data-to="80" data-plus>0</b><span>private gatherings behind the format</span></div>
          </div>
        </div>
      </section>

      {/* ===== Calendar ===== */}
      <section className="sec" id="calendar" style={{ paddingTop: 0 }}><div className="wrap">
        <div className="sec-head rv"><span className="kicker">The calendar</span><h2 className="h2">Upcoming investor dinners</h2>
          <p className="lead sec-sub">Twelve dinners in eight cities, each during a major investor week. Fly in for the evening - every dinner has its own guest list, and you can apply for more than one.</p></div>
        <Calendar />
      </div></section>

      {/* ===== Who attends ===== */}
      <section className="sec" id="guests" style={{ paddingTop: 0 }}><div className="wrap">
        <div className="sec-head rv"><span className="kicker">Who attends</span><h2 className="h2">The people around the table</h2></div>
        <div className="tables4">
          {GUESTS.map(([ic, n, h, p], i) => (
            <div key={ic} className={'tbl rv d' + i}><img className="tbl-ic" src={`/icons/${ic}.png`} alt="" /><span className="tbl-n" style={{ textTransform: 'none' }}>{n}</span><h3>{h}</h3><p>{p}</p></div>
          ))}
        </div>
      </div></section>

      {/* ===== How it runs ===== */}
      <section className="sec" id="format" style={{ paddingTop: 0 }}><div className="wrap">
        <div className="sec-head rv"><span className="kicker">How an evening runs</span><h2 className="h2">One format. Every city</h2>
          <p className="lead sec-sub">About three hours in the early evening. The exact time and venue are confirmed for each dinner and shared with confirmed guests.</p></div>
        <div className="flowline rv">
          <span className="fl-track"><i /></span>
          {STEPS.map(([k, h, p, key], i) => (
            <div key={k} className={'fl-step' + (key ? ' key' : '')}><span className="fl-n">{String(i + 1).padStart(2, '0')}</span><span className="fl-k">{k}</span><h3>{h}</h3><p>{p}</p></div>
          ))}
        </div>
        <div className="fl-foot rv"><span><i />Indicative format - details vary by city and venue</span><a className="tlink" href={SINGAPORE_URL + '#schedule'}>See the Singapore schedule <Arr c="" /></a></div>
      </div></section>

      <Gallery />

      {/* ===== Invite ===== */}
      <section className="sec" id="invite" style={{ paddingTop: 0 }}><div className="wrap inv">
        <div className="apply-card rv"><div className="rings"><i /><i /><i /></div><span className="kicker">Invitation only</span>
          <h2>10 seats per dinner. Investors only</h2><p>Every guest is reviewed individually.</p>
          <ol className="flow"><li><b>01</b>Submit your details</li><li><b>02</b>Personal review</li><li><b>03</b>Seat confirmation</li><li><b>04</b>Venue details</li></ol></div>
        <div className="form rv d1"><ApplyForm idPrefix="inv" /></div>
      </div></section>

      <Faq />
    </>
  );
}
