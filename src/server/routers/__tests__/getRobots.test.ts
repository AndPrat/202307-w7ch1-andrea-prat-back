import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import request from "supertest";
import connectToDatabase from "../../../database/connectToDatabase.js";
import Robot from "../../../database/models/Robot.js";
import type RobotStructure from "../../../database/models/types.js";
import app from "../..";
import { robotsMock } from "../../../mocks/robotsMock.js";
let server: MongoMemoryServer;

beforeAll(async () => {
  server = await MongoMemoryServer.create();
  await connectToDatabase(server.getUri());
});

afterAll(async () => {
  await mongoose.connection.close();
  await server.stop();
});

afterEach(async () => {
  await Robot.deleteMany();
});

describe("Given a GET '/robots' endpoint", () => {
  beforeEach(async () => {
    await Robot.create(robotsMock);
  });

  describe("When it receives a request", () => {
    test("Then it should respond with status 200 with 'Wall-e', 'Eva', 'BayMax'", async () => {
      const expectedStatusCode = 200;
      const robotsPath = "/robots";

      const response = await request(app)
        .get(robotsPath)
        .expect(expectedStatusCode);

      const responseBody = response.body as { robots: RobotStructure[] };

      robotsMock.forEach(({ name }, robotsPosition) => {
        expect(responseBody.robots[robotsPosition]).toHaveProperty(
          "name",
          name,
        );
      });
    });
  });
});
