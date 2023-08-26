import mongoose from "mongoose";
import type RobotStructure from "../database/models/types.js";

export const idRobot = new mongoose.Types.ObjectId().toString();

export const robotsMock: RobotStructure[] = [
  {
    _id: idRobot,
    name: "Wall-e",
    image:
      "https://cosmocaixa.org/documents/139771/351893/WALL+E+OK+SIN+RECURSO+spa2AG+-+2422+-+18245jpg/c15e2c4e-2c8a-9216-ced1-fb5db4d38fbd?version=1.0&t=1568814933620",
    speed: "5",
    endurance: "6",
  },
  {
    _id: new mongoose.Types.ObjectId().toString(),
    name: "Eva",
    image: "https://www.spotern.com/es/product/67321?spotID=97980",
    speed: "8",
    endurance: "7",
  },
];
