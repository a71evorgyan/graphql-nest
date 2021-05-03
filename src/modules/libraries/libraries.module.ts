import { Module } from "@nestjs/common";
import { LibrariesService } from "./libraries.service";

@Module({
  providers: [LibrariesService],
  exports: [LibrariesService],
})
export class LibrariesModule {}
