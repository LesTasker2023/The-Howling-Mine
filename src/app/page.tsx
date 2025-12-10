/**
 * Homepage
 * High-impact landing page optimized for SEO and conversions
 */

import { siteConfig } from '@/config/site';
import { FAQSchema } from '@/components/seo/JsonLd';
import styles from './page.module.css';

// FAQ data for both schema and display
const faqs = [
  {
    question: 'Do I need to deposit money to start?',
    answer:
      "No. The Howling Mine provides free weapons and equipment. You can start earning from day one with zero deposit required.",
  },
  {
    question: 'How do I get paid?',
    answer:
      'Entropia Universe uses PED (Project Entropia Dollars) which converts to USD at 10:1. You can withdraw earnings directly to your bank account.',
  },
  {
    question: 'What is the Job System?',
    answer:
      'The Job System provides daily kill missions with guaranteed PED rewards. Complete jobs at the Howling Mine to earn consistent income.',
  },
  {
    question: 'How much can I earn?',
    answer:
      "Earnings vary based on time invested and skills developed. New players can earn small amounts daily, while experienced players can earn significantly more.",
  },
];

export default function HomePage() {
  return (
    <>
      <FAQSchema items={faqs} />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.badge}>Entropia Universe</div>
          <h1 className={styles.title}>
            Get Paid
            <br />
            <span className={styles.accent}>To Play</span>
          </h1>
          <p className={styles.subtitle}>
            Earn real money at The Howling Mine. Free weapons provided, no deposit required. Start
            earning from day one.
          </p>
          <div className={styles.ctas}>
            <a href={siteConfig.signup} className={styles.ctaPrimary}>
              Create Free Account
            </a>
            <a href="/guide" className={styles.ctaSecondary}>
              How It Works
            </a>
          </div>
        </div>
        <div className={styles.heroVisual}>
          <div className={styles.orb} />
        </div>
      </section>

      {/* Value Props */}
      <section className={styles.features}>
        <div className={styles.feature}>
          <div className={styles.featureIcon}>💰</div>
          <h3>Real Cash Economy</h3>
          <p>PED converts to USD at 10:1. Withdraw earnings directly to your bank account.</p>
        </div>
        <div className={styles.feature}>
          <div className={styles.featureIcon}>🎯</div>
          <h3>Daily Jobs</h3>
          <p>Complete missions for guaranteed rewards. No gambling, just work and earn.</p>
        </div>
        <div className={styles.feature}>
          <div className={styles.featureIcon}>🔧</div>
          <h3>Free Equipment</h3>
          <p>Start with provided weapons and gear. Zero investment required to begin.</p>
        </div>
        <div className={styles.feature}>
          <div className={styles.featureIcon}>🌐</div>
          <h3>Global Community</h3>
          <p>Join thousands of players worldwide. Active Discord with 24/7 support.</p>
        </div>
      </section>

      {/* How It Works */}
      <section className={styles.howItWorks}>
        <h2 className={styles.sectionTitle}>Start Earning in 3 Steps</h2>
        <div className={styles.steps}>
          <div className={styles.step}>
            <div className={styles.stepNumber}>1</div>
            <h3>Create Account</h3>
            <p>Sign up for free at Entropia Universe. Takes less than 5 minutes.</p>
          </div>
          <div className={styles.stepArrow}>→</div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>2</div>
            <h3>Travel to Howling Mine</h3>
            <p>Use the teleporter to reach the mining facility on FOMA. We&apos;ll guide you.</p>
          </div>
          <div className={styles.stepArrow}>→</div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>3</div>
            <h3>Start Working</h3>
            <p>Pick up free weapons, take jobs from the terminal, and start earning PED.</p>
          </div>
        </div>
        <div className={styles.stepsCta}>
          <a href="/guide" className={styles.ctaSecondary}>
            Read Full Guide
          </a>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.stats}>
        <div className={styles.stat}>
          <div className={styles.statValue}>$6M+</div>
          <div className={styles.statLabel}>Paid to Players</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.statValue}>20+</div>
          <div className={styles.statLabel}>Years Running</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.statValue}>24/7</div>
          <div className={styles.statLabel}>Discord Support</div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faq}>
        <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <details key={index} className={styles.faqItem}>
              <summary className={styles.faqQuestion}>{faq.question}</summary>
              <p className={styles.faqAnswer}>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className={styles.finalCta}>
        <h2>Ready to Start Earning?</h2>
        <p>Join thousands of players making real money in Entropia Universe.</p>
        <div className={styles.ctas}>
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
