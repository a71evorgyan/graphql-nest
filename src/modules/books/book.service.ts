import { Injectable } from "@nestjs/common";
import fs from "fs";
import { join } from "path";
import { Book, Library, Count } from "../../types";
import data from "../../db/mock_data.json";

@Injectable()
export class BooksService {
  private data: { libraries: Library[]; books: Book[] };
  constructor() {
    this.data = { ...data };
  }

  searchBooks(search: string): [Book] {
    return !search ? this.data.books : (this.data.books.filter((book: Book) => book.title.toLowerCase().includes(search.toLowerCase())) as any);
  }

  countAddedBooks(startingDate: string): Count {
    const count = this.data.books.reduce((acc: number, { created }: Book) => (new Date(created) > new Date(startingDate) ? ++acc : acc), 0);
    return { count };
  }

  changeBookTitle(id: number, title: string): Book {
    this.data = {
      ...this.data,
      books: this.data.books.map((book: Book) => (book.id === id ? { ...book, title } : book)),
    };

    fs.writeFileSync(join(process.cwd(), "src/db/mock_data.json"), JSON.stringify(this.data));

    return this.data?.books?.find((book: Book) => book.id === id);
  }
}
