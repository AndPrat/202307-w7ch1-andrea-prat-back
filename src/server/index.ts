import express from "express";
import morgan from "morgan";
import { endpointNotFound, generalErrorHandler } from "./middlewares/errors.js";
import pingController from "./controllers/ping/PingController.js";
import robotsRouter from "./routers/robotsRouter.js";

const app = express();

app.use(morgan("dev"));

app.get("/", pingController);
app.use("/robots", robotsRouter);

app.use(endpointNotFound);
app.use(generalErrorHandler);

export default app;
