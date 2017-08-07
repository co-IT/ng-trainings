export interface Book {
  isbn: string;
  title: string;
  subtitle: string;
  authors: string[];
  descrition: string;

  rating: number|null;
}
