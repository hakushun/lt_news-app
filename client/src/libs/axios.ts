import axios from 'axios';
import { Category } from '../config/categories';

export type Article = {
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
const apiKey = process.env.NEXT_PUBLIC_API_KEY;

export const getArticles = async (): Promise<Article[]> => {
  const { data } = await axios.get(
    `${baseUrl}/top-headlines?country=us&apiKey=${apiKey}`,
  );
  const articles = await data.articles;
  return articles;
};

export const getArticlesByCategory = async (
  category: Category,
): Promise<Article[]> => {
  const { data } = await axios.get(
    `${baseUrl}/top-headlines?country=us&category=${category}&apiKey=${apiKey}`,
  );
  const articles = await data.articles;
  return articles;
};
