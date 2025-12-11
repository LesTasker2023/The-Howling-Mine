/**
 * Footer Component
 * Links and credits
 */

import { siteConfig } from "@/config/site";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <span className={styles.name}>THE HOWLING MINE</span>
          <p className={styles.tagline}>
            Earn real money at The Howling Mine in Entropia Universe. Free
            weapons, daily income from the Job System, and zero deposit
            required.
          </p>
        </div>

        <div className={styles.features}>
          <h4>Features</h4>
          <ul>
            <li>No credit card required – ever</li>
            <li>One-click signup, start earning today</li>
            <li>Runs on your existing Windows PC</li>
          </ul>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            Copyright {new Date().getFullYear()} The Howling Mine. All rights
            reserved.
          </p>
          <p className={styles.legal}>
            TheHowlingMine.com is not connected with MindArk PE AB. Entropia
            Universe® is a registered trademark of MindArk PE AB.
          </p>
        </div>
      </div>
    </footer>
  );
}
