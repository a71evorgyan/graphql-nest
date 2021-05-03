import { Injectable } from "@nestjs/common";

import { join } from "path";
import fs from "fs";

import data from "../../db/mock_data.json";

import type { Book, Data, IBooksService } from "../../types";

@Injectable()
export class BooksService implements IBooksService {
  private data: Data;
  constructor() {
    this.data = { ...data };
  }

  searchBooks(search: string) {
    return !search ? this.data.books : this.data.books.filter((book: Book) => book.title.toLowerCase().includes(search.toLowerCase()));
  }

  countAddedBooks(startingDate: string) {
    const count = this.data.books.reduce((acc: number, { created }: Book) => (new Date(created) > new Date(startingDate) ? ++acc : acc), 0);
    return { count };
  }

  changeBookTitle(id: number, title: string) {
    const { books } = this.data;

    this.data = {
      ...this.data,
      books: books.map((book: Book) => (book.id === id ? { ...book, title } : book)),
    };

    fs.writeFileSync(join(process.cwd(), "src/db/mock_data.json"), JSON.stringify(this.data));

    return books.find((book: Book) => book.id === id);
  }
}
