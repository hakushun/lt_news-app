import React from 'react';
import { Category } from '../../config/categories';
import styles from './index.module.scss';

type Props = {
  label: Category;
  handleChangeCategory: (_value: Category) => Promise<void>;
};
export const CategoryItem: React.VFC<Props> = ({
  label,
  handleChangeCategory,
}) => (
  <li className={styles.root}>
    <button type="button" onClick={() => handleChangeCategory(label)}>
      {label.toUpperCase()}
    </button>
  </li>
);
