import { Schema, model } from "mongoose";
import { type RobotStructure } from "./types.js";

const robotSchema = new Schema<RobotStructure>({
  name: {
    type: String,
    requiered: true,
  },
  image: {
    type: String,
    required: true,
  },
  speed: {
    type: String,
    requiered: true,
  },
  endurance: {
    type: String,
    requiered: true,
  },
});

const Robot = model("Robots", robotSchema, "robots");

export default Robot;
