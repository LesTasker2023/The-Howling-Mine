/**
 * Homepage
 * High-impact landing page optimized for SEO and conversions
 */

import { siteConfig } from "@/config/site";
import { FAQSchema } from "@/components/seo/JsonLd";
import styles from "./page.module.css";

// FAQ data for both schema and display - sourced from Project Delta
const faqs = [
  {
    question: "Do I need to deposit money to start?",
    answer:
      "No! Create your free avatar, complete beginner missions on Setesh to score gear, and head to the Job Broker at Howling Mine. You can play without ever spending a dime.",
  },
  {
    question: "What good is a job that only pays $18/month?",
    answer:
      "You already spend hours watching Netflix or playing games — and you pay for the privilege. At Howling Mine, we flip that model. You get paid to play. The job system supports you while you level up skills and learn the economy. In many countries, $18/month makes a real difference.",
  },
  {
    question: "Can I actually withdraw real money?",
    answer:
      "Absolutely. Entropia Universe has processed tens of millions USD in player withdrawals since 2003. The in-game currency (PED) has a fixed exchange rate of 10 PED = $1 USD. Withdraw directly to your bank account.",
  },
  {
    question: "How do I get to Howling Mine?",
    answer:
      "New players start on Setesh tutorial moon. After learning the basics, you have two options: (1) Take the FREE daily shuttle from any major spaceport, or (2) Purchase 6 Teleporter Tokens for instant travel. Note: 150kg weight limit for teleportation.",
  },
];

export default function HomePage() {
  return (
    <>
      <FAQSchema items={faqs} />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <div className={styles.badge}>
            <span className={styles.badgeLine} />
            JOIN 20+ YEARS OF REAL CASH GAMING
            <span className={styles.badgeLine} />
          </div>
          <h1 className={styles.title}>
            GET <span className={styles.accent}>PAID</span> TO PLAY
          </h1>
          <p className={styles.subtitle}>
            Earn up to <strong>$18/month</strong> with free weapons, free
            community resources, and real support to help you succeed
          </p>
          <div className={styles.noCreditCard}>
            No Credit Card Required!
          </div>
          <div className={styles.ctas}>
            <a href={siteConfig.signup} className={styles.ctaPrimary}>
              Create Free Account
              <span className={styles.ctaArrow}>→</span>
            </a>
            <a href="/guide" className={styles.ctaSecondary}>
              See How It Works
            </a>
          </div>
          <div className={styles.trustItems}>
            <div className={styles.trustItem}>
              <span className={styles.trustIcon}>✓</span>
              Zero startup cost
            </div>
            <div className={styles.trustItem}>
              <span className={styles.trustIcon}>✓</span>
              Free community resources
            </div>
            <div className={styles.trustItem}>
              <span className={styles.trustIcon}>✓</span>
              Real mentors on Discord
            </div>
            <div className={styles.trustItem}>
              <span className={styles.trustIcon}>✓</span>
              Withdraw to bank account
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className={styles.howItWorks}>
        <h2 className={styles.sectionTitle}>Start Earning in 4 Steps</h2>
        <div className={styles.steps}>
          <div className={styles.step}>
            <div className={styles.stepNumber}>1</div>
            <h3>Create Free Account</h3>
            <p>
              Sign up for Entropia Universe - completely free. Complete the
              Setesh tutorial to learn the basics.
            </p>
          </div>
          <div className={styles.stepArrow}>→</div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>2</div>
            <h3>Travel to Howling Mine</h3>
            <p>
              Take the FREE daily shuttle from any spaceport, or use 6
              Teleporter Tokens for instant travel.
            </p>
          </div>
          <div className={styles.stepArrow}>→</div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>3</div>
            <h3>Visit the Job Broker</h3>
            <p>
              Find &quot;The Employer&quot; NPC inside Howling Mine Space
              Terminal. Accept daily missions.
            </p>
          </div>
          <div className={styles.stepArrow}>→</div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>4</div>
            <h3>Hunt &amp; Get Paid</h3>
            <p>
              Clear AI bots using FREE provided weapons and ammo. Earn 2 PED
              ($0.20 USD) daily.
            </p>
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
          <div className={styles.statValue}>$0</div>
          <div className={styles.statLabel}>Required Investment</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.statValue}>Free</div>
          <div className={styles.statLabel}>Daily Shuttle Travel</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.statValue}>$18</div>
          <div className={styles.statLabel}>Max Monthly Earnings</div>
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
