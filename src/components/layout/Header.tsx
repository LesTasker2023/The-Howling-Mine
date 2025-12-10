/**
 * Navigation Component
 * Sticky header with logo and nav links
 */

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/config/site';
import styles from './Header.module.css';

export function Header() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>
          <div className={styles.logoDiamond} />
          <span>THE HOWLING MINE</span>
        </Link>

        <div className={styles.links}>
          {siteConfig.nav.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className={`${styles.link} ${pathname === item.href ? styles.active : ''}`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={siteConfig.discord}
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Discord
          </a>
          <a href={siteConfig.signup} className={styles.cta} target="_blank" rel="noopener noreferrer">
            Start Earning
          </a>
        </div>
      </nav>
    </header>
  );
}
