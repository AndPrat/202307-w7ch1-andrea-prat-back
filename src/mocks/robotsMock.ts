import mongoose from "mongoose";
import { type RobotStructure } from "../database/models/patataFrita.js";

export const idRobot = new mongoose.Types.ObjectId().toString();

export const robotsMock: RobotStructure[] = [
  {
    id: idRobot,
    name: "Wall-e",
    image:
      "https://cosmocaixa.org/documents/139771/351893/WALL+E+OK+SIN+RECURSO+spa2AG+-+2422+-+18245jpg/c15e2c4e-2c8a-9216-ced1-fb5db4d38fbd?version=1.0&t=1568814933620",
    speed: "5",
    endurance: "6",
  },
  {
    id: idRobot,
    name: "Eva",
    image: "https://www.spotern.com/es/product/67321?spotID=97980",
    speed: "8",
    endurance: "7",
  },
  {
    id: idRobot,
    name: "Baymax",
    image: "https://los40.cl/wp-content/uploads/2022/05/image-69.jpg",
    speed: "4",
    endurance: "8",
  },
  {
    id: idRobot,
    name: "Ben Gun",
    image: "https://los40.cl/wp-content/uploads/2022/05/image-69.jpg",
    speed: "6",
    endurance: "4",
  },
  {
    id: idRobot,
    name: "Weebo",
    image:
      "https://static1.srcdn.com/wordpress/wp-content/uploads/2021/09/Weebo-from-Flubber.jpg?q=50&fit=crop&w=1500&dpr=1.5",
    speed: "8",
    endurance: "8",
  },
  {
    id: idRobot,
    name: "BB-0",
    image:
      "https://static1.srcdn.com/wordpress/wp-content/uploads/2020/07/Star-Wars-BB8-on-jakku.jpg?q=50&fit=crop&w=1500&dpr=1.5",
    speed: "7",
    endurance: "8",
  },
  {
    id: idRobot,
    name: "R2D2",
    image:
      "https://lumiere-a.akamaihd.net/v1/images/r2-d2-main_f315b094.jpeg?region=273%2C0%2C951%2C536",
    speed: "8",
    endurance: "9",
  },
  {
    id: idRobot,
    name: "C-3PO",
    image:
      "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2021/06/star-wars-c-3po-2371761.jpg?tf=1200x",
    speed: "6",
    endurance: "7",
  },
];
