export interface BookImage {
  url: string;
  color?: string;
}

export interface Author {
  name: string;
  slug?: string;
}

export interface Contribution {
  author: Author;
}

export interface Book {
  id: number;
  title: string;
  slug: string;
  description?: string;
  rating?: number;
  ratings_count?: number;
  users_read_count?: number;
  pages?: number;
  release_year?: number;
  release_date?: string;
  // image.url can be a CDN URL or a relative path — always treat as string
  image?: BookImage;
  cached_contributors?: Contribution[];
}

// Search results have same shape (service normalizes them)
export type SearchResult = Book;
