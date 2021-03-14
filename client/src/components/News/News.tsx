import React from 'react';
import { Category } from '../../config/categories';
import { Article } from '../../libs/axios';
import { CategoryList } from '../CategoryList';
import { NewsList } from '../NewsList';
import { PageLoader } from '../PageLoader';
import styles from './index.module.scss';

type Props = {
  articles: Article[];
  isLaoding: boolean;
  handleChangeCategory: (_value: Category) => Promise<void>;
};
export const News: React.VFC<Props> = ({
  articles,
  isLaoding,
  handleChangeCategory,
}) => (
  <section className={styles.root}>
    <CategoryList handleChangeCategory={handleChangeCategory} />
    {isLaoding ? <PageLoader /> : <NewsList articles={articles} />}
  </section>
);
