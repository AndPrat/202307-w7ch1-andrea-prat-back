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
    image:
      "https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1470764123221-X38RPP1B2D97VHELY7BA/Eve10.jpg?format=1500w",
    speed: "8",
    endurance: "7",
  },
];
