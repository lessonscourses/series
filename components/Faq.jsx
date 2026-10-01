const QA = [
  ['Are the dinners part of the conferences?', ['No. Legends is independent. Each dinner takes place in the city during a major investor week, when many investors are already there.']],
  ['Is there a fee?', ['There is no attendance fee for confirmed guests. Food and drinks are settled directly with the venue.']],
  ['Where are the venues?', ['At premium venues in each city. The exact location is shared with confirmed guests.']],
  ['What happens after I apply?', ['We review your details and may contact you briefly. If approved, we confirm your seat and share the venue details.']],
  ['Can I join more than one dinner?', ['Yes. Choose one city in the form and mention the others when we contact you - each dinner has its own guest list.']],
];

export default function Faq() {
  return (
    <>
      <section className="sec" id="faq" style={{paddingTop:"0"}}><div className="wrap" style={{maxWidth:"900px"}}>
      <div className="sec-head rv"><span className="kicker">Good to know</span><h2 className="h2">Questions</h2></div>
      <div className="faq rv">
        {QA.map(([q, a], i) => (
          <details key={q} open={i === 0}><summary>{q}<i></i></summary>{a.map((p) => <p key={p}>{p}</p>)}</details>
        ))}
      </div></div></section>
    </>
  );
}
