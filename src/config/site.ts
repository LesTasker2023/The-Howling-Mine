/**
 * Site Configuration
 * Central config for SEO, branding, and site-wide settings
 */

export const siteConfig = {
  name: 'The Howling Mine',
  tagline: 'Get Paid to Play',
  description:
    "Earn real money playing games at The Howling Mine. Get paid up to $18/month with free weapons, zero deposit required. Withdraw real cash to your bank.",

  // URLs
  url: 'https://www.thehowlingmine.com',
  discord: 'https://discord.gg/NnkPwamsDQ',
  signup: 'https://account.entropiauniverse.com/create-account?ref=howlingmine',

  // Social
  twitter: '@JonNEVERDIE',
  youtube: 'https://www.youtube.com/@NEVERDIE',

  // SEO defaults
  defaultKeywords: [
    // High-intent money queries
    'earn money playing games',
    'games that pay real money',
    'get paid to play games',
    'free games that pay real money',
    'make money gaming',
    'play to earn games',
    'mmo that pays real money',
    // Brand terms
    'howling mine',
    'entropia universe',
    'neverdie',
    'club neverdie',
    // Feature terms
    'entropia jobs',
    'entropia mining',
    'real cash economy',
    'free mmo no deposit',
    'withdraw real money mmo',
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
