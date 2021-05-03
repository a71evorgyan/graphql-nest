import { Parent, ResolveField, Resolver } from "@nestjs/graphql";
import { LibrariesService } from ".";
import { Book, Library } from "../../types";

@Resolver("Book")
export class LibraryResolver {
  constructor(private readonly librariesService: LibrariesService) {}

  @ResolveField()
  library(@Parent() book: Book & { libraryId: number }): Library {
    return this.librariesService.findOneById(book.libraryId);
  }
}
