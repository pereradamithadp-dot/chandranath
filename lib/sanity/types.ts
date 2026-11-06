export type PostItem = {
  id: string;
  category: string;
  /** Formatted for display, e.g. "10 October 2026". */
  date: string;
  title: string;
  summary: string;
  image: string;
  featured: boolean;
};

export type ClientItem = {
  id: string;
  name: string;
  logo?: string;
  showOnHome: boolean;
};
