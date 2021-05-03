import { Mutation, Query, Resolver, Args } from "@nestjs/graphql";
import { Book, Count } from "../../types";
import { BooksService } from "./book.service";

@Resolver("Book")
export class BooksResolver {
  constructor(private readonly booksService: BooksService) {}

  @Query("books")
  getBooks(@Args("search") search: string): Book[] {
    return this.booksService.searchBooks(search);
  }

  @Query("booksCount")
  countAddedBooks(@Args("startingDate") startingDate: string): Count {
    return this.booksService.countAddedBooks(startingDate);
  }

  @Mutation("changeBookTitle")
  changeBookTitle(@Args("id") id: number, @Args("title") title: string): Book {
    return this.booksService.changeBookTitle(id, title);
  }
}
