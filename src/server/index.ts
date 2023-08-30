import cors from "cors";
import express from "express";
import morgan from "morgan";
import pingController from "./controllers/ping/PingController.js";
import auth from "./middlewares/auth.js";
import { endpointNotFound, generalErrorHandler } from "./middlewares/errors.js";
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
app.use("/robots", auth, robotsRouter);

app.use(endpointNotFound);
app.use(generalErrorHandler);

export default app;
