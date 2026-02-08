
import React from 'react';

export const OGLE_TESLA_SPECS = [
  { label: 'Bio-Harmonic Sync', value: '528.16 Hz', color: 'text-amber-500' },
  { label: 'Etheric Field Flux', value: '1.618 Phi', color: 'text-cyan-400' },
  { label: 'Cellular Restoration', value: 'ACTIVE', color: 'text-emerald-500' },
  { label: 'Ambient Harvest', value: '94.2 kW/m³', color: 'text-orange-400' },
];

export const HISTORICAL_RESONANCE = [
  { event: 'Colorado Springs Proving', date: '1899-07-03', result: 'Wireless Transm.' },
  { event: 'El Paso Vapor Run', date: '1977-05-01', result: '100+ MPG Verified' },
  { event: 'The Refusal Event', date: '1981-08-19', result: 'Interface Locked' },
];

export const Icons = {
  Harmonizer: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
      <path d="M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
    </svg>
  ),
  Etheric: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),
  Human: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM8 21v-4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4M12 7v8M8 10h8" />
    </svg>
  ),
};
