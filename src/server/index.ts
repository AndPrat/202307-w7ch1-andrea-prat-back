import express from "express";
import morgan from "morgan";
import pingController from "../controllers/ping/PingController.js";
import { endpointNotFound, generalErrorHandler } from "./middlewares/errors.js";

const app = express();

app.use(morgan("dev"));

app.use("/", pingController);

app.use(pingController);
app.use(endpointNotFound);
app.use(generalErrorHandler);

export default app;
