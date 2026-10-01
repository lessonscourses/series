import { CITIES } from '@/data/cities';

// single = one-city landing: show only that city instead of a chooser
export default function InviteForm({ city, single = false }) {
  return (
    <>
      <section className="sec" id="invite" style={{paddingTop:"0"}}><div className="wrap inv">
      <div className="apply-card rv"><div className="rings"><i></i><i></i><i></i></div><span className="kicker">Request an invite</span>
      <h2>Seats are limited and every guest is reviewed.</h2><p>Tell us who you are and what you invest in. We seat people by thesis, so this is how we make the evening useful for you.</p>
      <ol className="flow"><li><b>1</b>Request an invite</li><li><b>2</b>Personal review by the team</li><li><b>3</b>Confirmation and your matches</li><li><b>4</b>Venue details for confirmed guests</li></ol></div>
      <form className="form rv d1" id="inviteForm"><div id="fBody"><div className="fgrid">
      <div className="field full"><label htmlFor="i0">Gathering*</label><select id="i0" defaultValue={city || CITIES[0].key}>
        {(single ? CITIES.filter((c) => c.key === city) : CITIES).map((c) => (
          <option key={c.key} value={c.key}>{String(c.n).padStart(2, '0')} · {c.city} · {c.dow}, {Number(c.day)} {c.mon}</option>
        ))}
      </select></div>
      <div className="field"><label htmlFor="i1">Full name*</label><input id="i1" required placeholder="Your full name" /></div>
      <div className="field"><label htmlFor="i2">Email*</label><input id="i2" type="email" required placeholder="you@company.com" /></div>
      <div className="field"><label htmlFor="i3">LinkedIn*</label><input id="i3" required placeholder="linkedin.com/in/…" /></div>
      <div className="field"><label htmlFor="i4">You are*</label><select id="i4"><option>Family office</option><option>CIO / institutional investor</option><option>LP</option><option>Fund partner / GP</option><option>Private investor / angel</option></select></div>
      <div className="field full"><label htmlFor="i5">Who would you like to meet that evening?</label><textarea id="i5" placeholder="A co-investor in a sector, a manager, an LP, a market…"></textarea></div>
      </div><button className="btn gold" type="submit" style={{marginTop:"18px"}}>Request an invite <svg className="arr" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></button></div>
      <div className="done" id="fDone"><div className="ok"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12l5 5 9-10"/></svg></div>
      <h3 style={{fontSize:"30px",fontWeight:"700",letterSpacing:"-.04em"}}>Request received.</h3><p style={{color:"var(--ink-2)",marginTop:"10px"}}>We review every request personally and come back to you by email.</p>
      <button className="btn ghost" type="button" id="fBack" style={{marginTop:"22px"}}>Back</button></div></form></div></section>
    </>
  );
}
