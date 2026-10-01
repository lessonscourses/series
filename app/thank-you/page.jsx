import './thank-you.css';
import ThanksHero from '@/components/thanks/ThanksHero';
import NextSteps from '@/components/thanks/NextSteps';
import WhatsAppCta from '@/components/thanks/WhatsAppCta';
import EventCard from '@/components/thanks/EventCard';
import ShareInvite from '@/components/thanks/ShareInvite';

export const metadata = { title: 'Request received · Legends Investor Dinners', robots: { index: false } };

// Flow: request received -> 3 steps -> WhatsApp -> event + calendar -> referral.
export default function ThankYou() {
  return (
    <div className="ty">
      <div className="ty-glow" aria-hidden="true" />
      <div className="ty-wrap">
        <ThanksHero />
        <NextSteps />
        <WhatsAppCta />
        <EventCard />
        <ShareInvite />
      </div>
    </div>
  );
}
