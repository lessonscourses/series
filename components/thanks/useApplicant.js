'use client';
import { useEffect, useState } from 'react';
import { DINNERS } from '@/data/dinners';

// Name and chosen dinner stored by the apply form (sessionStorage 'legends-apply').
export default function useApplicant() {
  const [d, setD] = useState({ name: '', dinner: '' });
  useEffect(() => {
    try { const v = JSON.parse(sessionStorage.getItem('legends-apply') || '{}'); setD({ name: (v.name || '').trim(), dinner: String(v.dinner || '') }); } catch {}
  }, []);
  const dinner = DINNERS.find((x) => String(x.id) === d.dinner) || null;
  return { full: d.name, first: d.name.split(/\s+/)[0] || '', dinner, multi: d.dinner === 'multi' };
}
