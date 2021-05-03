import { Module } from "@nestjs/common";
import { LibrariesModule, LibraryResolver } from "../libraries";

import { BooksResolver } from "./books.resolver";
import { BooksService } from "./book.service";

@Module({
  imports: [LibrariesModule],
  providers: [BooksService, BooksResolver, LibraryResolver],
})
export class BooksModule {}
