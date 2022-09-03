export interface NewItem {
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export class ArticleRes  {
  status: string;
  totalResults: Number; 
  articles: NewItem[];
}
