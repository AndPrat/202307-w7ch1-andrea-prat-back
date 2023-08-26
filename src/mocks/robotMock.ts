import mongoose from "mongoose";
import { type RobotStructure } from "../database/models/patataFrita.js";

export const idRobot = new mongoose.Types.ObjectId().toString();

export const robotsMock: RobotStructure = {
  id: idRobot,
  name: "Wall-e",
  image:
    "https://cosmocaixa.org/documents/139771/351893/WALL+E+OK+SIN+RECURSO+spa2AG+-+2422+-+18245jpg/c15e2c4e-2c8a-9216-ced1-fb5db4d38fbd?version=1.0&t=1568814933620",
  speed: "5",
  endurance: "6",
};
