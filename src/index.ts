import chalk from "chalk";
import { debug } from "console";
import "dotenv/config";
import connectToDatabase from "./database/connectToDatabase.js";
import startServer from "./server/startServer.js";

const port = process.env.PORT ?? 4000;
const mongoDbUrl = process.env.MONGODB_URL;

try {
  await connectToDatabase(mongoDbUrl!);
  debug("Connected to database");

  startServer(+port);
} catch (error: unknown) {
  debug(chalk.red("Error connecting to database"));
  debug(chalk.red((error as Error).message));
  process.exit(1);
}

export default port;
