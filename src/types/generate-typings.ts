import { GraphQLDefinitionsFactory } from "@nestjs/graphql";
import { join } from "path";

const definitionsFactory = new GraphQLDefinitionsFactory();
definitionsFactory.generate({
  typePaths: ["./**/*.graphql"],
  path: join(process.cwd(), "src/types/graphql.schema.ts"),
  outputAs: "class",
});
