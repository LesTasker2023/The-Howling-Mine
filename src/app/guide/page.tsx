import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { HowToSchema } from "@/components/seo/JsonLd";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title:
    "How to Get to Howling Mine - Step by Step Guide | Entropia Universe 2025",
  description:
    "Complete guide on how to get to Howling Mine in Entropia Universe. Learn about Teleporter Tokens, interplanetary travel from Setesh/Calypso, and start earning $18/month with the Job System.",
  keywords: [
    "how to get to howling mine",
    "entropia interplanetary teleport",
    "teleporter tokens entropia",
    "entropia universe travel guide",
    "howling mine location",
    "entropia space travel",
    "setesh to howling mine",
    "calypso to howling mine",
    "entropia teleport guide",
  ],
  openGraph: {
    title: "How to Get to Howling Mine - Complete Travel Guide",
    description:
      "Step-by-step guide to reach Howling Mine and start earning with the Job System. Covers Teleporter Tokens and interplanetary travel.",
  },
};

const howToSteps = [
  {
    name: "Start on Setesh (Tutorial Moon)",
    text: 'All new players begin on Setesh, the tutorial moon. You\'ll spawn at Port Cabrakan. Find Harkov for the "A New Arrival" mission chain.',
  },
  {
    name: "Complete Tutorial Missions",
    text: "Learn hunting, looting, and basics fighting Altaik, Sabakuma, and Exarosaur. Complete all of Harkov's missions for free Standard Undersuit and Vivo S10 healing tool.",
  },
  {
    name: "Use Free Shuttle (or get Teleporter Tokens)",
    text: "Take the FREE daily shuttle from any major spaceport",
  },
  {
    name: "Find the Interplanetary Teleporter",
    text: "Locate an Interplanetary Teleporter at Port Cabrakan (Setesh), Port Atlantis (Calypso), or any major outpost on other planets.",
  },
  {
    name: "Teleport to Howling Mine",
    text: "Select Howling Mine from the destination list. Cost: 6 Teleporter Tokens. IMPORTANT: 150kg weight limit for teleportation. Travel light!",
  },
  {
    name: "Find the Job Broker",
    text: 'Inside Howling Mine Space Terminal, find "The Employer" NPC. Accept daily missions, get FREE weapons and ammo, earn 2 PED/day (~$0.20 USD).',
  },
];

export default function GuidePage() {
  return (
    <>
      <HowToSchema
        name="How to Get to Howling Mine in Entropia Universe"
        description="Complete guide to reaching Howling Mine, including Teleporter Tokens, interplanetary travel, and starting your career with the Job System."
        steps={howToSteps}
      />

      <section className={styles.hero}>
        <div className={styles.badge}>Travel Guide</div>
        <h1 className={styles.title}>How to Get to Howling Mine</h1>
        <p className={styles.subtitle}>
          Complete step-by-step guide for new Entropia Universe players
        </p>
      </section>

      {/* Quick Summary */}
      <section className={styles.summary}>
        <h2>Quick Summary</h2>
        <div className={styles.summaryStats}>
          <div className={styles.summaryStat}>
            <span className={styles.summaryValue}>~1 hour</span>
            <span className={styles.summaryLabel}>Tutorial Time</span>
          </div>
          <div className={styles.summaryStat}>
            <span className={styles.summaryValue}>Free</span>
            <span className={styles.summaryLabel}>Travel Cost</span>
          </div>
          <div className={styles.summaryStat}>
            <span className={styles.summaryValue}>Free</span>
            <span className={styles.summaryLabel}>Account Cost</span>
          </div>
        </div>
        <p className={styles.summaryNote}>
          New players start on <strong>Setesh</strong> (tutorial moon). Complete
          the tutorial to learn basics, then travel to Howling Mine. You can
          take the <strong>FREE daily shuttle</strong> from any major spaceport,
          or use 6 Teleporter Tokens for instant travel.
        </p>
      </section>

      {/* Prerequisites */}
      <section className={styles.requirements}>
        <h2>Prerequisites</h2>
        <div className={styles.reqGrid}>
          <div className={styles.reqCard}>
            <h3>✓ Free Entropia Account</h3>
            <p>
              <a href={siteConfig.signup} className={styles.link}>
                Create your free account here
              </a>{" "}
              - no payment required
            </p>
          </div>
          <div className={styles.reqCard}>
            <h3>✓ Free Shuttle</h3>
            <p>FREE daily shuttle from major spaceports.</p>
          </div>
          <div className={styles.reqCard}>
            <h3>✓ Basic Tutorial Completion</h3>
            <p>Learn movement, combat, and inventory basics on Setesh</p>
          </div>
        </div>
      </section>

      <section className={styles.timeline}>
        <h2>Step-by-Step Journey</h2>
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

      <section className={styles.tips}>
        <h2>Pro Tips</h2>
        <div className={styles.tipsGrid}>
          <div className={styles.tip}>
            <div className={styles.tipIcon}>🚀</div>
            <h3>Maximize Earnings</h3>
            <p>
              Combine Howling Mine jobs with <strong>Rocktropia jobs</strong>{" "}
              for up to $18/month total earnings.
            </p>
          </div>
          <div className={styles.tip}>
            <div className={styles.tipIcon}>⛏️</div>
            <h3>Try Mining</h3>
            <p>
              While at Howling Mine, try space mining! Scrap asteroids in the
              safe zone are perfect for beginners.
            </p>
          </div>
          <div className={styles.tip}>
            <div className={styles.tipIcon}>🎪</div>
            <h3>Visit Club NEVERDIE</h3>
            <p>
              Explore the interior of the asteroid to find Club NEVERDIE -
              socialize and find community events.
            </p>
          </div>
          <div className={styles.tip}>
            <div className={styles.tipIcon}>📈</div>
            <h3>Skill Building</h3>
            <p>
              The job missions help you build combat skills. Higher skills =
              more efficient hunting later.
            </p>
          </div>
        </div>
      </section>

      {/* Alternative Routes */}
      <section className={styles.faq}>
        <h2>Alternative Routes</h2>
        <div className={styles.faqList}>
          <details className={styles.faqItem}>
            <summary>By Spaceship (Advanced)</summary>
            <p>
              If you own or can borrow a spaceship, you can fly directly to
              Howling Mine. However, space travel passes through{" "}
              <strong>PvP lootable zones</strong> - not recommended for new
              players.
            </p>
          </details>
          <details className={styles.faqItem}>
            <summary>From Other Planets</summary>
            <p>
              Any interplanetary teleporter works. If you&apos;ve already
              traveled to Calypso, Rocktropia, or another planet, you can
              teleport to Howling Mine from there.
            </p>
          </details>
          <details className={styles.faqItem}>
            <summary>How long does the download take?</summary>
            <p>
              The client is about 40GB. On a typical connection, expect 2-4
              hours. You can start reading guides while it downloads.
            </p>
          </details>
        </div>
      </section>

      <section className={styles.cta}>
        <h2>Ready to Start Your Journey?</h2>
        <p>Create your account and begin your path to The Howling Mine.</p>
        <div className={styles.ctaButtons}>
          <a href={siteConfig.signup} className={styles.ctaPrimary}>
            Create Free Account
          </a>
          <a href="/jobs" className={styles.ctaSecondary}>
            Job System Details
          </a>
        </div>
      </section>
    </>
  );
}
