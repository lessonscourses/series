'use client';
import { useState } from 'react';
import { DINNERS, MONTHS, REGIONS } from '@/data/dinners';

const Arr = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>;

// Calendar with region filter. Dinners with a url link to their landing;
// the others pick that dinner in the form (window event 'legends:pick').
export default function Calendar() {
  const [reg, setReg] = useState('all');
  const [picked, setPicked] = useState(null);
  const pick = (d) => {
    setPicked(d.id);
    window.dispatchEvent(new CustomEvent('legends:pick', { detail: d.id }));
    document.getElementById('invite')?.scrollIntoView({ behavior: 'smooth' });
  };
  const count = (r) => (r === 'all' ? DINNERS.length : DINNERS.filter((d) => d.region === r).length);
  return (
    <>
      <div className="cal-bar rv">
        <div className="cal-f">{REGIONS.map(([r, t]) => <button key={r} type="button" data-reg={r} className={reg === r ? 'on' : ''} onClick={() => setReg(r)}>{t} <em>{count(r)}</em></button>)}</div>
        <div className="cal-legend"><span><i className="lv" />Venue confirmed</span><span><i />Venue announced closer to the date</span></div>
      </div>
      <div className="cal">
        {MONTHS.map((m) => {
          const list = DINNERS.filter((d) => d.month === m && (reg === 'all' || d.region === reg));
          if (!list.length) return null;
          return (
            <div className="cal-m" key={m}>
              <h3>{m}<small>{list.length} {list.length === 1 ? 'dinner' : 'dinners'}</small></h3>
              <div className="cal-g">
                {list.map((d) => {
                  const live = !!d.url;
                  const inner = (
                    <>
                      <span className="d"><b>{d.day}</b><span>{d.dow}<br />{d.month.slice(0, 3)}</span></span>
                      <h4>{d.city}</h4>
                      <span className={'st' + (live ? ' lv' : '')}><i />{live ? `Venue confirmed · ${d.time}` : 'Venue to be announced'}</span>
                      <span className="go">{live ? 'View the dinner' : 'Apply for this dinner'}<Arr /></span>
                      {live && <span className="tag">Next</span>}
                    </>
                  );
                  return live
                    ? <a key={d.id} className="cal-c live" href={d.url} data-region={d.region}>{inner}</a>
                    : <button key={d.id} type="button" className={'cal-c' + (picked === d.id ? ' picked' : '')} data-region={d.region} data-id={d.id} onClick={() => pick(d)}>{inner}</button>;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
