import Link from 'next/link';
import React from 'react';
import { Article } from '../../libs/axios';
import styles from './index.module.scss';

type Props = {
  article: Article;
};
export const NewsItem: React.VFC<Props> = ({ article }) => (
  <li className={styles.root}>
    <Link href={article.url}>
      <a className={styles.link}>
        <div className={styles.media}>
          <img src={article.urlToImage} alt={article.title} />
        </div>
        <div className={styles.content}>
          <h3 className={styles.title}>{article.title}</h3>
          <div className={styles.info}>
            <time>{article.publishedAt}</time>
            <cite>{article.author}</cite>
          </div>
        </div>
      </a>
    </Link>
  </li>
);
