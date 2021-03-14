import React, { useState } from 'react';
import { Category } from '../../config/categories';
import { Article, getArticlesByCategory } from '../../libs/axios';
import { News as Presentational } from './News';

type Props = {
  initialArticles: Article[];
};
export const News: React.VFC<Props> = ({ initialArticles }) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLaoding, setIsLoading] = useState<boolean>(false);

  const handleChangeCategory = async (value: Category) => {
    setIsLoading(true);
    const data = await getArticlesByCategory(value);
    setArticles(data);
    setIsLoading(false);
  };

  return (
    <Presentational
      articles={articles.length > 0 ? articles : initialArticles}
      isLaoding={isLaoding}
      handleChangeCategory={handleChangeCategory}
    />
  );
};
