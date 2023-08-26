import { type NextFunction, type Request, type Response } from "express";
import { getRobots } from "../robotsControllers.js";
import { robotsMock } from "../../../mocks/robotsMock.js";
import Robot from "../../../database/models/Robot.js";
import CustomError from "../../../CustomError/CustomError.js";

beforeEach(() => {
  jest.clearAllMocks();
});

const req: Partial<Request> = {};
const res: Partial<Response> = {
  status: jest.fn().mockReturnThis(),
  json: jest.fn(),
};
const next: NextFunction = jest.fn();

const expectedStatusCode = 200;

describe("Given robotsControllers controller", () => {
  describe("When it receives a response", () => {
    test("Then it should call its method status with 200", async () => {
      Robot.find = jest.fn().mockReturnValue({
        exec: jest.fn().mockResolvedValue(robotsMock),
      });

      await getRobots(req as Request, res as Response, next);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call its method jhon with 'Wall-e', 'Eva', 'BayMax'", async () => {
      await getRobots(req as Request, res as Response, next);

      expect(res.json).toHaveBeenCalledWith({ robots: robotsMock });
    });
  });

  describe("When it receives a next function and there is an error", () => {
    test("Then it should call the received next function with a 500 status code and the message 'Can't retrive the robots'", async () => {
      const expectedError = new CustomError(
        "Can't retrive the robots",
        500,
        "Can't retrive the robots",
      );

      Robot.find = jest
        .fn()
        .mockReturnValue({ exec: jest.fn().mockRejectedValue(expectedError) });

      await getRobots(req as Request, res as Response, next);

      expect(next).toHaveBeenCalledWith(expectedError);
    });
  });
});
