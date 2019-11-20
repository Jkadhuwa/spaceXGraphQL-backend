import express from "express";
import graphqlHTTP from "express-graphql";
import cors from "cors";
import { config } from "dotenv";
import schema from "./schema";

config();

const app = express();

app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
