/**
 * Site Configuration
 * Central config for SEO, branding, and site-wide settings
 */

export const siteConfig = {
  name: 'The Howling Mine',
  tagline: 'Get Paid to Play',
  description:
    "Earn real money at The Howling Mine in Entropia Universe. Free weapons, daily income from the Job System, and zero deposit required.",

  // URLs
  url: 'https://www.thehowlingmine.com',
  discord: 'https://discord.gg/NnkPwamsDQ',
  signup: 'https://account.entropiauniverse.com/create-account?ref=howlingmine',

  // Social
  twitter: '@JonNEVERDIE',
  youtube: 'https://www.youtube.com/@NEVERDIE',

  // SEO defaults
  defaultKeywords: [
    'howling mine',
    'entropia universe',
    'get paid to play',
    'entropia jobs',
    'neverdie',
    'club neverdie',
    'entropia mining',
    'real cash economy',
    'mmo earn money',
  ],

  // Schema.org
  organization: {
    name: 'The Howling Mine',
    logo: '/logo.png',
    sameAs: [
      'https://discord.gg/NnkPwamsDQ',
      'https://www.youtube.com/@NEVERDIE',
      'https://x.com/JonNEVERDIE',
    ],
  },

  // Navigation
  nav: [
    { label: 'Home', href: '/' },
    { label: 'Jobs', href: '/jobs' },
    { label: 'Mining', href: '/mining' },
    { label: 'Guide', href: '/guide' },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
