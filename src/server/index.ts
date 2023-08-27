import express from "express";
import morgan from "morgan";
import cors from "cors";
import { endpointNotFound, generalErrorHandler } from "./middlewares/errors.js";
import pingController from "./controllers/ping/PingController.js";
import robotsRouter from "./routers/robotsRouter.js";

const app = express();

app.use(morgan("dev"));

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://202307-w7chwe-andrea-prat.netlify.app",
    ],
  }),
);

app.get("/", pingController);
app.use("/robots", robotsRouter);

app.use(endpointNotFound);
app.use(generalErrorHandler);

export default app;
