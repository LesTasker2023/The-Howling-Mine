import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Space Mining Guide - Entropia Universe | Ships, Asteroids & Tips",
  description:
    "Complete Entropia Universe space mining guide. Learn about mining ships (Quad-Wing, Sleipnir, Kronan), asteroid types (C/S/F/M/ND), Howling Mine locations, beginner tips, and profit strategies.",
  keywords: [
    "entropia universe space mining",
    "EU space mining guide",
    "entropia universe mining ships",
    "quad-wing interceptor",
    "sleipnir mk1",
    "kronan mining ship",
    "asteroid mining entropia",
    "space mining asteroids",
    "entropia universe mothership",
    "FOMA mining",
    "howling mine",
    "scottium mining",
    "M-type asteroids",
  ],
  openGraph: {
    title: "Space Mining Guide - Entropia Universe",
    description:
      "Complete guide to space mining at Howling Mine. Ships, asteroids, locations, tips, and profit strategies.",
  },
};

const asteroidTypes = [
  {
    type: "C-Type",
    name: "Carbonaceous",
    difficulty: "Easy",
    location: "All asteroid belts",
    description: "Most common type. Easiest to break. Good for beginners.",
    loot: ["Iron", "Belkar", "Lysterium", "Narcanisum", "Copper", "Azzurdite"],
  },
  {
    type: "S-Type",
    name: "Silicaceous",
    difficulty: "Medium",
    location: "All asteroid belts",
    description:
      "Silicate materials and nickel-iron. Crystalline structures jutting from rocky core.",
    loot: ["Similar to C-Type with different ratios"],
  },
  {
    type: "F-Type",
    name: "Frozen",
    difficulty: "Medium",
    location: "All asteroid belts",
    description: "Frozen fluids and gases. Bluish veins score the surface.",
    loot: ["Frozen compounds and gases"],
  },
  {
    type: "M-Type",
    name: "Metallic",
    difficulty: "Hard",
    location: "Howling Mine ONLY (Lootable PVP)",
    description:
      "Dense heavy metals. Only source of ultra-rare Scottium! Requires high-powered lasers.",
    loot: [
      "Lanorium",
      "Narcanisum",
      "Durulium",
      "Terrudite",
      "Scottium",
      "Ignisium",
      "Gold",
    ],
  },
  {
    type: "ND-Type",
    name: "New Discovery",
    difficulty: "Medium",
    location: "Howling Mine (Non-Lootable PVP)",
    description:
      "Added v19.1.0. Found OUTSIDE the lootable PVP area near Howling Mine.",
    loot: ["Community testing ongoing"],
  },
];

const ships = [
  {
    name: "Sleipnir",
    type: "Small",
    passengers: 1,
    notes:
      "Entry-level space-capable ship. Versatile for beginners. Requires thruster.",
    obtain: "Purchase from players or Auction House",
  },
  {
    name: "Quad-Wing Interceptor",
    type: "Small",
    passengers: 1,
    notes: "Similar to Sleipnir. Good for solo mining in safe zones.",
    obtain: "Purchase from players or Auction House",
  },
  {
    name: "Pioneer Mining Ship (L)",
    type: "Medium",
    passengers: 3,
    notes: "Purpose-built mining ship. Can equip Mounted Defensive Weapon.",
    obtain: "Complete mission from Shipwright Shoal at Howling Mine",
  },
  {
    name: "Trident Heavy Fighter",
    type: "Medium",
    passengers: 3,
    notes:
      "Combat-focused ship added April 2025. Good for mining with protection.",
    obtain: "Available from Shipwright Shoal at Howling Mine",
  },
  {
    name: "Prospector",
    type: "Large",
    passengers: 50,
    notes:
      "Ultimate mining vessel. 8 high-powered laser hardpoints. Built-in turrets. Two repair stations.",
    obtain: "Rare drop or purchase from players",
  },
];

export default function MiningPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.badge}>Space Mining Guide</div>
        <h1 className={styles.title}>Asteroid Mining</h1>
        <p className={styles.subtitle}>
          Howling Mine is home to valuable M-Type asteroids—the only source of
          ultra-rare Scottium in Entropia Universe. Learn ships, equipment, and
          strategies for profitable space mining.
        </p>
      </section>

      <section className={styles.overview}>
        <h2>Mining Zones at Howling Mine</h2>
        <div className={styles.overviewGrid}>
          <div className={styles.overviewCard}>
            <div className={styles.overviewIcon}>🛡️</div>
            <h3>Safe Zone</h3>
            <p>
              C/S/F-type asteroids. No PvP. Perfect for beginners to learn space
              mining mechanics.
            </p>
          </div>
          <div className={styles.overviewCard}>
            <div className={styles.overviewIcon}>⚔️</div>
            <h3>Non-Lootable PvP</h3>
            <p>
              ND-type asteroids (v19.1.0). Can be attacked but won&apos;t lose
              items. Added October 2025.
            </p>
          </div>
          <div className={styles.overviewCard}>
            <div className={styles.overviewIcon}>💀</div>
            <h3>Lootable PvP</h3>
            <p>
              M-type asteroids. Highest risk but ONLY source of Scottium.
              Requires high-powered lasers.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.asteroids}>
        <h2>Asteroid Types</h2>
        <div className={styles.asteroidTable}>
          <div className={styles.asteroidHeader}>
            <span>Type</span>
            <span>Difficulty</span>
            <span>Location</span>
            <span>Notable Loot</span>
          </div>
          {asteroidTypes.map((asteroid, index) => (
            <div key={index} className={styles.asteroidRow}>
              <span className={styles.asteroidType}>
                <strong>{asteroid.type}</strong>
                <small>{asteroid.name}</small>
              </span>
              <span
                className={styles.asteroidDifficulty}
                data-difficulty={asteroid.difficulty.toLowerCase()}
              >
                {asteroid.difficulty}
              </span>
              <span className={styles.asteroidLocation}>
                {asteroid.location}
              </span>
              <span className={styles.asteroidLoot}>
                {asteroid.loot.slice(0, 3).join(", ")}
              </span>
            </div>
          ))}
        </div>
        <p className={styles.asteroidNote}>
          <strong>⚠️ M-Type Alert:</strong> Only found near Howling Mine in
          Lootable PvP. The ONLY source of Scottium—crucial for long-range
          teleportation technology.
        </p>
      </section>

      <section className={styles.ships}>
        <h2>Mining Ships</h2>
        <div className={styles.shipGrid}>
          {ships.map((ship, index) => (
            <div key={index} className={styles.shipCard}>
              <div className={styles.shipHeader}>
                <h3>{ship.name}</h3>
                <span className={styles.shipType}>{ship.type}</span>
              </div>
              <p className={styles.shipNotes}>{ship.notes}</p>
              <div className={styles.shipMeta}>
                <span>
                  👥 {ship.passengers} passenger{ship.passengers > 1 ? "s" : ""}
                </span>
                <span className={styles.shipObtain}>📍 {ship.obtain}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.warning}>
        <div className={styles.warningContent}>
          <h3>⚠️ Space Mining Risk Levels</h3>
          <p>
            <strong>Safe zones</strong> have no PvP but lower-value ores.{" "}
            <strong>Lootable PvP zones</strong> contain M-type asteroids with
            Scottium—but other players can kill you and take your loot. Start in
            safe zones to learn mechanics.
          </p>
        </div>
      </section>

      <section className={styles.tips}>
        <h2>Pro Tips</h2>
        <ul className={styles.tipsList}>
          <li>
            <strong>Start in safe zones:</strong> Learn mining mechanics on
            C-type asteroids before risking PvP.
          </li>
          <li>
            <strong>Use Vehicle RK-5:</strong> Optional for safety—provides
            quick escape if attacked.
          </li>
          <li>
            <strong>Watch protection levels:</strong> Higher protection
            asteroids require better lasers to break.
          </li>
          <li>
            <strong>Group mining:</strong> Teams can mine faster and protect
            each other in PvP zones.
          </li>
        </ul>
      </section>

      <section className={styles.cta}>
        <h2>Ready to Mine?</h2>
        <p>
          Start with the Job System to build capital, then invest in mining
          equipment. Join Discord for crew opportunities.
        </p>
        <div className={styles.ctaButtons}>
          <a href="/jobs" className={styles.ctaPrimary}>
            Start with Jobs
          </a>
          <a href={siteConfig.discord} className={styles.ctaSecondary}>
            Join Discord
          </a>
        </div>
      </section>
    </>
  );
}
