import { Injectable } from "@nestjs/common";
import { Library } from "../../types";
import * as data from "../../db/mock_data.json";

@Injectable()
export class LibrariesService {
  private readonly libraries: Library[] = data.libraries;

  findOneById(id: number): Library {
    return this.libraries.find((lib) => lib.id === id);
  }
}
