'use client';
import { useState } from 'react';

const EMAIL = 'concierge@legends.app';
const QA = [
  ['Is there a fee?', 'No. Dinner is settled with the venue.'],
  ['Who else will be there?', '10 active investors: family offices, allocators, GPs, LPs and private investors. Every guest is reviewed.'],
  ['Where is the venue?', 'A private venue in each city. Shared after your seat is confirmed.'],
  ['What happens after I apply?', 'Personal review, a short call if needed, then seat confirmation and venue details.'],
  ['Is this part of the summits?', 'No. Legends is independent. Each dinner runs during a major investor week, when the right people are already in town.'],
  ['Can I join more than one dinner?', 'Yes. Every dinner has its own guest list. Pick one in the form and mention the others when we contact you.'],
];

export default function Faq() {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    try { navigator.clipboard.writeText(EMAIL); } catch {}
    setCopied(true); setTimeout(() => setCopied(false), 1800);
  };
  return (
    <section className="sec" id="faq" style={{ paddingTop: 0 }}><div className="wrap fq">
      <div className="fq-l rv">
        <h2 className="h2">FAQ</h2>
        <a className="fq-mail" href={'mailto:' + EMAIL}>{EMAIL}</a>
        <button type="button" className="fq-copy" onClick={copy}>{copied ? 'Copied' : 'Copy email'}</button>
      </div>
      <div className="fq-list rv d1">
        {QA.map(([q, a], i) => (
          <details key={q} open={i === 0}><summary>{q}<i /></summary><p>{a}</p></details>
        ))}
      </div>
    </div></section>
  );
}
