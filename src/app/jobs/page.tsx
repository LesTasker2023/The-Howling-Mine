import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Job System',
  description:
    'Earn guaranteed PED rewards through the Howling Mine Job System. Daily kill missions, codex bonuses, and consistent income in Entropia Universe.',
  keywords: [
    ...siteConfig.defaultKeywords,
    'entropia jobs',
    'howling mine jobs',
    'entropia kill missions',
    'PED earnings',
    'entropia daily income',
  ],
  openGraph: {
    title: 'Howling Mine Job System',
    description: 'Earn guaranteed PED rewards through daily kill missions.',
  },
};

const jobCategories = [
  {
    name: 'Araneatrox Jobs',
    icon: '🕷️',
    description: 'Hunt Araneatrox at the Howling Mine for PED rewards.',
    difficulty: 'Entry Level',
    weapons: 'Free blasters provided',
  },
  {
    name: 'Codex Missions',
    icon: '📖',
    description: 'Complete creature kill counts for stacking bonuses.',
    difficulty: 'All Levels',
    weapons: 'Any weapons work',
  },
  {
    name: 'Daily Missions',
    icon: '📅',
    description: 'Reset daily. Consistent income for active players.',
    difficulty: 'Varies',
    weapons: 'Depends on mission',
  },
];

export default function JobsPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.badge}>Earn PED</div>
        <h1 className={styles.title}>Job System</h1>
        <p className={styles.subtitle}>
          The Howling Mine Job System provides guaranteed income through kill missions. No gambling,
          no RNG—just complete the objectives and get paid.
        </p>
      </section>

      <section className={styles.intro}>
        <h2>How Jobs Work</h2>
        <div className={styles.introGrid}>
          <div className={styles.introCard}>
            <div className={styles.introIcon}>🎯</div>
            <h3>Accept Mission</h3>
            <p>Use the job terminal at Howling Mine to browse and accept available missions.</p>
          </div>
          <div className={styles.introCard}>
            <div className={styles.introIcon}>⚔️</div>
            <h3>Complete Kills</h3>
            <p>Hunt the specified creatures until you reach the kill requirement.</p>
          </div>
          <div className={styles.introCard}>
            <div className={styles.introIcon}>💰</div>
            <h3>Claim Reward</h3>
            <p>Return to the terminal to claim your PED reward. Withdraw anytime.</p>
          </div>
        </div>
      </section>

      <section className={styles.categories}>
        <h2>Job Categories</h2>
        <div className={styles.categoryGrid}>
          {jobCategories.map((category, index) => (
            <div key={index} className={styles.categoryCard}>
              <div className={styles.categoryIcon}>{category.icon}</div>
              <h3>{category.name}</h3>
              <p className={styles.categoryDesc}>{category.description}</p>
              <div className={styles.categoryMeta}>
                <span className={styles.difficulty}>{category.difficulty}</span>
                <span className={styles.weapons}>{category.weapons}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.tips}>
        <h2>Maximize Earnings</h2>
        <ul className={styles.tipsList}>
          <li>
            <strong>Stack jobs with codex:</strong> Codex missions give skill bonuses on top of job
            rewards.
          </li>
          <li>
            <strong>Use provided weapons:</strong> Free blasters minimize cost, maximizing net
            income.
          </li>
          <li>
            <strong>Daily consistency:</strong> Regular players earn more than sporadic high-hour
            sessions.
          </li>
          <li>
            <strong>Join Discord:</strong> Get real-time tips and spawn alerts from the community.
          </li>
        </ul>
      </section>

      <section className={styles.cta}>
        <h2>Ready to Start?</h2>
        <p>Create your free account and travel to the Howling Mine to begin earning.</p>
        <div className={styles.ctaButtons}>
          <a href={siteConfig.signup} className={styles.ctaPrimary}>
            Create Account
          </a>
          <a href="/guide" className={styles.ctaSecondary}>
            Read Travel Guide
          </a>
        </div>
      </section>
    </>
  );
}
