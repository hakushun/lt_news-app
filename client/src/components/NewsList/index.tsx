import React from 'react';
import { Article } from '../../libs/axios';
import { NewsItem } from '../NewsItem';
import styles from './index.module.scss';

type Props = {
  articles: Article[];
};
export const NewsList: React.VFC<Props> = ({ articles }) => (
  <ul className={styles.list}>
    {articles.map((article) => (
      <NewsItem key={article.title} article={article} />
    ))}
  </ul>
);
