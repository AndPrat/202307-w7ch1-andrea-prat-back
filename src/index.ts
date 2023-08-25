import "dotenv/config";
import startServer from "./startServer.js";

const port = process.env.PORT ?? 4000;

startServer(+port);

export default port;
