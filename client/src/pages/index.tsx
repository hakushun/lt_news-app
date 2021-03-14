import React from 'react';
import { News } from '../components/News';
import { Layout } from '../components/Layout';
import { Article, getArticles } from '../libs/axios';

export async function getServerSideProps(): Promise<{
  props: { initialArticles: Article[] };
}> {
  const initialArticles = await getArticles();
  return {
    props: { initialArticles },
  };
}

type Props = {
  initialArticles: Article[];
};
const index: React.VFC<Props> = ({ initialArticles }) => (
  <Layout>
    <News initialArticles={initialArticles} />
  </Layout>
);

export default index;
