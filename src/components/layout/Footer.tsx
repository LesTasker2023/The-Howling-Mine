/**
 * Footer Component
 * Links and credits
 */

import { siteConfig } from '@/config/site';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <div className={styles.logoDiamond} />
          <span className={styles.name}>THE HOWLING MINE</span>
          <p className={styles.tagline}>{siteConfig.description}</p>
        </div>

        <div className={styles.columns}>
          <div className={styles.column}>
            <h4>Platform</h4>
            <ul>
              <li><a href="/jobs">Job System</a></li>
              <li><a href="/guide">Getting Started</a></li>
              <li><a href="/mining">Asteroid Mining</a></li>
              <li><a href={siteConfig.signup} target="_blank" rel="noopener noreferrer">Create Account</a></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4>Community</h4>
            <ul>
              <li><a href={siteConfig.discord} target="_blank" rel="noopener noreferrer">Discord</a></li>
              <li><a href={siteConfig.twitter} target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href={siteConfig.youtube} target="_blank" rel="noopener noreferrer">YouTube</a></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4>Game</h4>
            <ul>
              <li><a href="https://www.entropiauniverse.com" target="_blank" rel="noopener noreferrer">Entropia Universe</a></li>
              <li><a href="https://www.entropialife.com" target="_blank" rel="noopener noreferrer">EntropiaLife</a></li>
              <li><a href="https://www.entropiawiki.com" target="_blank" rel="noopener noreferrer">Entropia Wiki</a></li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} The Howling Mine. Not affiliated with MindArk.
          </p>
          <p className={styles.legal}>
            Entropia Universe® is a registered trademark of MindArk PE AB.
          </p>
        </div>
      </div>
    </footer>
  );
}
