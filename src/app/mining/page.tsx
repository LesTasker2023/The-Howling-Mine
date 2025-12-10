import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Asteroid Mining',
  description:
    'Learn about asteroid mining at The Howling Mine. Extract valuable ores in Entropia Universe with no initial investment required.',
  keywords: [
    ...siteConfig.defaultKeywords,
    'entropia mining',
    'asteroid mining',
    'FOMA mining',
    'entropia ores',
    'lysterium',
    'belkar',
  ],
  openGraph: {
    title: 'Asteroid Mining at The Howling Mine',
    description: 'Extract valuable ores with zero deposit required.',
  },
};

const ores = [
  { name: 'Lysterium', rarity: 'Common', use: 'Basic crafting, ammo production' },
  { name: 'Belkar', rarity: 'Uncommon', use: 'Weapons and armor crafting' },
  { name: 'Caldorite', rarity: 'Rare', use: 'Advanced manufacturing' },
  { name: 'Narcanisum', rarity: 'Very Rare', use: 'High-end item production' },
];

export default function MiningPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.badge}>Coming Soon</div>
        <h1 className={styles.title}>Asteroid Mining</h1>
        <p className={styles.subtitle}>
          FOMA&apos;s asteroids contain valuable ores used throughout Entropia Universe. Mining
          provides steady income for players who enjoy resource extraction.
        </p>
      </section>

      <section className={styles.overview}>
        <h2>How Mining Works</h2>
        <div className={styles.overviewGrid}>
          <div className={styles.overviewCard}>
            <div className={styles.overviewIcon}>🔍</div>
            <h3>Find Deposits</h3>
            <p>
              Use a finder tool to probe the asteroid surface. Claims appear when ore is detected.
            </p>
          </div>
          <div className={styles.overviewCard}>
            <div className={styles.overviewIcon}>⛏️</div>
            <h3>Extract Ore</h3>
            <p>Deploy an extractor on your claim to pull resources from the ground.</p>
          </div>
          <div className={styles.overviewCard}>
            <div className={styles.overviewIcon}>📦</div>
            <h3>Refine & Sell</h3>
            <p>Process raw ores at refineries and sell on the auction house for PED.</p>
          </div>
        </div>
      </section>

      <section className={styles.ores}>
        <h2>FOMA Ores</h2>
        <div className={styles.oreTable}>
          <div className={styles.oreHeader}>
            <span>Ore</span>
            <span>Rarity</span>
            <span>Primary Use</span>
          </div>
          {ores.map((ore, index) => (
            <div key={index} className={styles.oreRow}>
              <span className={styles.oreName}>{ore.name}</span>
              <span className={styles.oreRarity} data-rarity={ore.rarity.toLowerCase()}>
                {ore.rarity}
              </span>
              <span className={styles.oreUse}>{ore.use}</span>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.equipment}>
        <h2>Required Equipment</h2>
        <div className={styles.equipGrid}>
          <div className={styles.equipCard}>
            <h3>Finder</h3>
            <p>Detects underground deposits. Basic finders available for purchase at low cost.</p>
            <span className={styles.equipPrice}>From 5 PED</span>
          </div>
          <div className={styles.equipCard}>
            <h3>Extractor</h3>
            <p>Pulls ore from discovered claims. Multiple sizes for different claim sizes.</p>
            <span className={styles.equipPrice}>From 8 PED</span>
          </div>
          <div className={styles.equipCard}>
            <h3>Probes</h3>
            <p>Consumable items dropped by the finder. Budget your probe costs carefully.</p>
            <span className={styles.equipPrice}>~0.01 PED each</span>
          </div>
        </div>
      </section>

      <section className={styles.warning}>
        <div className={styles.warningContent}>
          <h3>⚠️ Mining Involves Risk</h3>
          <p>
            Unlike jobs, mining has inherent variance. You may find valuable claims or come up
            empty. We recommend starting with jobs to build capital before transitioning to mining.
          </p>
        </div>
      </section>

      <section className={styles.coming}>
        <h2>Mining Guide Coming Soon</h2>
        <p>
          We&apos;re preparing a comprehensive mining guide with maps, strategies, and efficiency
          calculators. Join our Discord to be notified when it launches.
        </p>
        <div className={styles.ctaButtons}>
          <a href={siteConfig.discord} className={styles.ctaPrimary}>
            Join Discord
          </a>
          <a href="/jobs" className={styles.ctaSecondary}>
            Start with Jobs
          </a>
        </div>
      </section>
    </>
  );
}
