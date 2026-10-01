export const MAIN_URL = 'https://belegends.club';

// Public URL of THIS landing (share links). Empty -> current site address is used.
export const SELF_URL = '';

// WhatsApp of the team handling dinner requests. Digits only, e.g. '971500000000'. TODO: set.
export const WHATSAPP_NUMBER = '';

// Analytics / CRM hook (GTM dataLayer). Events: 'application_submitted', 'whatsapp_inbound'.
export const track = (event, data = {}) => {
  try { (window.dataLayer = window.dataLayer || []).push({ event, ...data }); } catch {}
};
