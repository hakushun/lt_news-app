import React from 'react';
import { CategoryItem } from '../CategoryItem';
import { categories, Category } from '../../config/categories';
import styles from './index.module.scss';

type Props = {
  handleChangeCategory: (_value: Category) => Promise<void>;
};
export const CategoryList: React.VFC<Props> = ({ handleChangeCategory }) => (
  <ul className={styles.root}>
    {categories.map((category) => (
      <CategoryItem
        key={category.id}
        label={category.label}
        handleChangeCategory={handleChangeCategory}
      />
    ))}
  </ul>
);
