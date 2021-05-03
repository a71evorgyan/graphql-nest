import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { BooksModule } from "../books/books.module";

@Module({
  imports: [
    BooksModule,
    GraphQLModule.forRoot({
      typePaths: ["./**/*.graphql"],
      installSubscriptionHandlers: true,
    }),
  ],
})
export class AppModule {}
