import { Book, Library, Count } from ".";

export type Data = {
  libraries: Library[];
  books: Book[];
};

type SearchBooks = (search: string) => Book[];

export interface IBooksService {
  searchBooks: SearchBooks;
  countAddedBooks: (startingDate: string) => Count;
  changeBookTitle: (id: number, title: string) => Book;
}

export interface ILibraryService {
  findOneById: (id: number) => Library;
}
