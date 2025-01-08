export interface ArticleItem {
  id: number;
  poster: string;
  title: string;
  desk: string;
  created_at: string;
  updated_at: string;
}

export interface ArticleResponse {
  links: {
    next: string | null;
    previous: string | null;
  };
  count: number;
  page_size: number;
  results: ArticleItem[];
}

export interface Article {
  id: number;
  poster: string;
  title: string;
  content: string;
  desk: string;
  created_at: string;
  updated_at: string;
}
