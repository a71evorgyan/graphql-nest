import { Injectable } from "@nestjs/common";

import data from "../../db/mock_data.json";

import type { Library, ILibraryService } from "../../types";

@Injectable()
export class LibrariesService implements ILibraryService {
  private readonly libraries: Library[];
  constructor() {
    this.libraries = data.libraries;
  }

  findOneById(id: number) {
    return this.libraries.find((lib) => lib.id === id);
  }
}
