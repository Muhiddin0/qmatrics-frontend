export interface SectionListResponse {
  links: {
    next: string | null;
    previous: string | null;
  };
  count: number;
  page_size: number;
  results: SectionItem[];
}

export interface SectionItem {
  id: number;
  title: string;
  short_description: string;
  icon: string;
}

export interface SectionDetail extends SectionItem {
  description: string;
  poster: string;
  services: {
    id: number;
    title: string;
    short_description: string;
  }[];
}
