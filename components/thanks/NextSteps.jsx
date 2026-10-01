const STEPS = [
  'We review your investor profile.',
  'If approved, we confirm your seat.',
  'Venue details are shared before the dinner.',
];

export default function NextSteps() {
  return (
    <section className="ty-next">
      <p className="ty-kicker">What happens next</p>
      <ol className="ty-steps">
        {STEPS.map((h, i) => (
          <li key={i} style={{ animationDelay: `${0.1 + i * 0.1}s` }}>
            <span>{String(i + 1).padStart(2, '0')}</span>
            <div><h3>{h}</h3></div>
          </li>
        ))}
      </ol>
    </section>
  );
}
