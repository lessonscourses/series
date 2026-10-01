'use client';
import useApplicant from './useApplicant';

export default function ThanksHero() {
  const { first } = useApplicant();
  return (
    <section className="ty-hero">
      <span className="ty-badge"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12l5 5 9-10" /></svg></i>Request received</span>
      <h1>Thank you{first ? `, ${first}` : ''}<span>We’re reviewing your details</span></h1>
      <p>We’ll contact you within 24 hours.</p>
    </section>
  );
}
