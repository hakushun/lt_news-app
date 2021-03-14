export type Category =
  | 'all'
  | 'business'
  | 'entertainment'
  | 'general'
  | 'health'
  | 'science'
  | 'sports'
  | 'technology';
type CategoryObj = { id: Category; label: Category };

export const categories: CategoryObj[] = [
  { id: 'all', label: 'all' },
  { id: 'business', label: 'business' },
  { id: 'entertainment', label: 'entertainment' },
  { id: 'general', label: 'general' },
  { id: 'health', label: 'health' },
  { id: 'science', label: 'science' },
  { id: 'sports', label: 'sports' },
  { id: 'technology', label: 'technology' },
];
