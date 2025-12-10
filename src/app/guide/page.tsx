import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { HowToSchema } from '@/components/seo/JsonLd';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Getting Started Guide',
  description:
    'Step-by-step guide to reaching The Howling Mine in Entropia Universe. Create account, download client, travel to FOMA, and start earning PED.',
  keywords: [
    ...siteConfig.defaultKeywords,
    'entropia universe guide',
    'how to get to howling mine',
    'entropia beginner guide',
    'FOMA teleport',
    'entropia travel',
  ],
  openGraph: {
    title: 'How to Reach The Howling Mine',
    description: 'Complete beginner guide for Entropia Universe and the Howling Mine.',
  },
};

const howToSteps = [
  {
    name: 'Create Account',
    text: 'Visit account.entropiauniverse.com and create a free account. Verify your email.',
  },
  {
    name: 'Download Client',
    text: 'Download the Entropia Universe client. Installation requires approximately 40GB.',
  },
  {
    name: 'Complete Tutorial',
    text: 'Finish the in-game tutorial on Calypso to learn basic controls and mechanics.',
  },
  {
    name: 'Open Map & Teleport',
    text: 'Press M to open the map. Find a teleporter (blue icon) and interact with it.',
  },
  {
    name: 'Travel to FOMA',
    text: 'In the teleporter interface, search for "FOMA" and select The Howling Mine.',
  },
  {
    name: 'Get Free Weapons',
    text: 'At the Howling Mine, locate the weapon terminal and claim your free starter gear.',
  },
  {
    name: 'Accept Jobs',
    text: 'Use the job terminal to browse and accept missions. Start hunting and earning!',
  },
];

export default function GuidePage() {
  return (
    <>
      <HowToSchema
        name="How to Reach The Howling Mine in Entropia Universe"
        description="Complete guide to creating an account, traveling to FOMA, and starting your career at The Howling Mine."
        steps={howToSteps}
      />

      <section className={styles.hero}>
        <div className={styles.badge}>Beginner Guide</div>
        <h1 className={styles.title}>Getting Started</h1>
        <p className={styles.subtitle}>
          From zero to earning at The Howling Mine. This guide walks you through every step—from
          account creation to your first job reward.
        </p>
      </section>

      <section className={styles.timeline}>
        <h2>Your Journey</h2>
        <ol className={styles.steps}>
          {howToSteps.map((step, index) => (
            <li key={index} className={styles.step}>
              <div className={styles.stepMarker}>
                <span className={styles.stepNumber}>{index + 1}</span>
              </div>
              <div className={styles.stepContent}>
                <h3>{step.name}</h3>
                <p>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.requirements}>
        <h2>System Requirements</h2>
        <div className={styles.reqGrid}>
          <div className={styles.reqCard}>
            <h3>Minimum</h3>
            <ul>
              <li>Windows 10 (64-bit)</li>
              <li>Intel Core i5 or equivalent</li>
              <li>8 GB RAM</li>
              <li>DirectX 11 compatible GPU</li>
              <li>40 GB storage</li>
              <li>Broadband internet</li>
            </ul>
          </div>
          <div className={styles.reqCard}>
            <h3>Recommended</h3>
            <ul>
              <li>Windows 11 (64-bit)</li>
              <li>Intel Core i7 or equivalent</li>
              <li>16 GB RAM</li>
              <li>NVIDIA GTX 1660 or better</li>
              <li>SSD with 60 GB free</li>
              <li>Stable broadband</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.tips}>
        <h2>Pro Tips for New Players</h2>
        <div className={styles.tipsGrid}>
          <div className={styles.tip}>
            <div className={styles.tipIcon}>💬</div>
            <h3>Join Discord First</h3>
            <p>
              Our community can answer questions in real-time. Get your account verified before you
              even start downloading.
            </p>
          </div>
          <div className={styles.tip}>
            <div className={styles.tipIcon}>⚙️</div>
            <h3>Optimize Settings</h3>
            <p>
              Lower graphics initially for smoother performance. You can always increase them later
              once you&apos;re comfortable.
            </p>
          </div>
          <div className={styles.tip}>
            <div className={styles.tipIcon}>📱</div>
            <h3>Use Mobile App</h3>
            <p>
              Install the EU mobile app to manage your inventory and check market prices on the go.
            </p>
          </div>
          <div className={styles.tip}>
            <div className={styles.tipIcon}>🎯</div>
            <h3>Focus on Jobs</h3>
            <p>
              Don&apos;t get distracted by other activities early on. Jobs provide the most
              consistent income for new players.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.faq}>
        <h2>Common Questions</h2>
        <div className={styles.faqList}>
          <details className={styles.faqItem}>
            <summary>How long does the download take?</summary>
            <p>
              The client is about 40GB. On a typical connection, expect 2-4 hours. You can start
              reading guides while it downloads.
            </p>
          </details>
          <details className={styles.faqItem}>
            <summary>Is the tutorial required?</summary>
            <p>
              Technically no, but it teaches essential controls and gives you starting items.
              Complete it—takes only 10-15 minutes.
            </p>
          </details>
          <details className={styles.faqItem}>
            <summary>What if I get lost?</summary>
            <p>
              Use the map (M key) to find teleporters. If completely stuck, type in local chat or
              ask in Discord. The community is helpful.
            </p>
          </details>
          <details className={styles.faqItem}>
            <summary>Do I need to deposit money?</summary>
            <p>
              No. The Howling Mine provides free weapons. You can earn without any initial
              investment.
            </p>
          </details>
        </div>
      </section>

      <section className={styles.cta}>
        <h2>Ready to Begin?</h2>
        <p>Create your account and start your journey to The Howling Mine.</p>
        <div className={styles.ctaButtons}>
          <a href={siteConfig.signup} className={styles.ctaPrimary}>
            Create Free Account
          </a>
          <a href={siteConfig.discord} className={styles.ctaSecondary}>
            Join Discord
          </a>
        </div>
      </section>
    </>
  );
}
