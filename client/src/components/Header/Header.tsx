import React from 'react';
import Link from 'next/link';
import styles from './index.module.scss';

export const Header: React.VFC = () => (
  <header className={styles.header}>
    <div className={styles.inner}>
      <h1 className={styles.title}>
        <Link href="/">
          <a className={styles.titleLink}>NewsApp</a>
        </Link>
      </h1>
    </div>
  </header>
);
