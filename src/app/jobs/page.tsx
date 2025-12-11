import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { FAQSchema } from "@/components/seo/JsonLd";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title:
    "Entropia Universe Jobs - Get Paid to Play at Howling Mine | $18/Month",
  description:
    "Earn real money playing Entropia Universe! The Howling Mine Job System pays 2 PED/day ($0.20 USD) plus free weapons and ammo. No deposit required. Earn up to $18/month hunting AI bots.",
  keywords: [
    "entropia universe jobs",
    "get paid to play entropia",
    "entropia employment",
    "entropia free to play earn",
    "howling mine jobs",
    "entropia job broker",
    "entropia daily missions",
    "entropia paid to play",
    "make money entropia universe",
    "entropia income",
    "neverdie job system",
    "rocktropia jobs",
  ],
  openGraph: {
    title: "Entropia Universe Jobs - Get Paid $18/Month to Play",
    description:
      "Real jobs in a virtual world. Earn 2 PED/day + free weapons & ammo from the Job Broker at Howling Mine. No deposit required!",
  },
};

const faqs = [
  {
    question: "What good is a job that only pays $18/month?",
    answer:
      "You already spend hours watching Netflix or playing games — and you pay for the privilege. At Howling Mine, we flip that model. You get paid to play. The job system supports you while you level up skills and learn the economy. In many countries, $18/month makes a real difference — and as Howling Mine grows, so do the opportunities.",
  },
  {
    question: "Is this a zero-sum game?",
    answer:
      "Not at all. Entropia is a functioning virtual economy, not a poker table. People spend money for entertainment, to collect rare items, or to enjoy an immersive experience. Some of that value flows to builders, miners, creators — like you.",
  },
  {
    question: "Is it really free to play?",
    answer:
      "Yes! Create your free avatar, complete beginner missions on Setesh to score gear, and head to the Job Broker at Howling Mine or Rocktropia. From there, you can play without ever spending a dime.",
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

export default function JobsPage() {
  return (
    <>
      <FAQSchema items={faqs} />

      <section className={styles.hero}>
        <div className={styles.badge}>Job System</div>
        <h1 className={styles.title}>Get Paid to Play</h1>
        <p className={styles.subtitle}>
          Real jobs in a virtual world. Earn up to $18/month with FREE weapons
          and ammo.
        </p>
      </section>

      <section className={styles.intro}>
        <h2>How the Job System Works</h2>
        <div className={styles.introGrid}>
          <div className={styles.introCard}>
            <div className={styles.introNumber}>1</div>
            <h3>Create Free Account</h3>
            <p>
              Sign up for Entropia Universe - completely free. Complete the
              Setesh tutorial to learn the basics.
            </p>
          </div>
          <div className={styles.introCard}>
            <div className={styles.introNumber}>2</div>
            <h3>Travel to Howling Mine</h3>
            <p>
              Option A: Take the FREE daily shuttle from any major spaceport.
              Option B: Purchase 6 Teleporter Tokens for instant travel. Weight
              limit: 150kg.
            </p>
          </div>
          <div className={styles.introCard}>
            <div className={styles.introNumber}>3</div>
            <h3>Visit the Job Broker</h3>
            <p>
              Find &quot;The Employer&quot; NPC inside Howling Mine Space
              Terminal. Accept daily missions.
            </p>
          </div>
          <div className={styles.introCard}>
            <div className={styles.introNumber}>4</div>
            <h3>Hunt &amp; Get Paid</h3>
            <p>
              Clear AI bots using FREE provided weapons and ammo. Earn 2 PED
              ($0.20 USD) daily.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.earnings}>
        <h2>Earnings Breakdown</h2>
        <div className={styles.earningsGrid}>
          <div className={styles.earningsCard}>
            <span className={styles.earningsLabel}>Daily Mission Pay</span>
            <span className={styles.earningsValue}>2 PED</span>
            <span className={styles.earningsUsd}>≈ $0.20 USD</span>
          </div>
          <div className={styles.earningsCard}>
            <span className={styles.earningsLabel}>Monthly (30 days)</span>
            <span className={styles.earningsValue}>60 PED</span>
            <span className={styles.earningsUsd}>≈ $6.00 USD</span>
          </div>
          <div className={`${styles.earningsCard} ${styles.earningsHighlight}`}>
            <span className={styles.earningsLabel}>Max with Rocktropia</span>
            <span className={styles.earningsValue}>180 PED</span>
            <span className={styles.earningsUsd}>≈ $18.00 USD/month</span>
          </div>
          <div className={styles.earningsCard}>
            <span className={styles.earningsLabel}>Your Investment</span>
            <span className={styles.earningsValue}>$0</span>
            <span className={styles.earningsUsd}>
              Free weapons &amp; ammo provided
            </span>
          </div>
        </div>
        <p className={styles.earningsNote}>
          * Combine Howling Mine and Rocktropia jobs for maximum earnings.
          Withdraw directly to your bank account!
        </p>
      </section>

      <section className={styles.faq}>
        <h2>Frequently Asked Questions</h2>
        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <details key={index} className={styles.faqItem}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className={styles.about}>
        <h2>Who is NEVERDIE?</h2>
        <p>
          <strong>Jon NEVERDIE Jacobs</strong> is an award-winning indie
          actor/filmmaker, Metaverse pioneer, and Guinness World Record holder.
          He founded Club NEVERDIE (2005), Planet Rocktropia (2010), and The
          Howling Mine (2025).
        </p>
        <p>
          His metaverse highlights include the official KING KONG Epic Quest,
          The THING Mini MMO, and Lemmy Kilmister&apos;s Castle. After
          discovering rare minerals at Howling Mine that enabled interplanetary
          teleportation, NEVERDIE created the Job System to help new players
          enter the economy.
        </p>
      </section>

      <section className={styles.cta}>
        <h2>Ready to Start Earning?</h2>
        <p>
          Join thousands of players already earning real money in Entropia
          Universe.
        </p>
        <div className={styles.ctaButtons}>
          <a href={siteConfig.signup} className={styles.ctaPrimary}>
            Create Free Account
          </a>
          <a href="/guide" className={styles.ctaSecondary}>
            New Player Tutorial Guide
          </a>
        </div>
      </section>
    </>
  );
}
