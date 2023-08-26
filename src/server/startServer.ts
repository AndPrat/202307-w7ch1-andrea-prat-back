import chalk from "chalk";
import debugCreator from "debug";
import app from "./index.js";

const debug = debugCreator("robots:server:start");

const startServer = (port: number) => {
  app.listen(port, () => {
    debug(chalk.blue(`Listening on http://localhost:${port}`));
  });
};

export default startServer;
