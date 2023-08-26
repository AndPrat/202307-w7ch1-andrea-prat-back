import { type NextFunction, type Request, type Response } from "express";
import CustomError from "../../../CustomError/CustomError";
import { generalErrorHandler } from "../errors";

beforeAll(() => {
  jest.clearAllMocks();
});

const req: Partial<Request> = {};
const res: Partial<Response> = {
  status: jest.fn().mockReturnThis(),
  json: jest.fn(),
};
const next: NextFunction = jest.fn();

describe("Given a generalErrorHandler middleware", () => {
  describe("When it receives a response code status 404 and 'Robot not found' error message", () => {
    const errorMessage = new CustomError(
      "Robot not found",
      404,
      "Robot not found",
    );

    test("Then it should call its method json with error message 'Robot not found'", () => {
      const expectStatusCode = 404;

      generalErrorHandler(errorMessage, req as Request, res as Response, next);

      expect(res.status).toHaveBeenCalledWith(expectStatusCode);
    });

    test("Thn it should call its method json with error message 'Robots not found'", () => {
      const expectedMessage = { error: "Robot not found" };

      generalErrorHandler(errorMessage, req as Request, res as Response, next);

      expect(res.json).toHaveBeenCalledWith(expectedMessage);
    });
  });

  describe("When it receives a response and an error with no status code", () => {
    test("Then it should call the receives response status method with code 500", () => {
      const expectedStatusCode = 500;
      const error = new Error();

      generalErrorHandler(
        error as CustomError,
        req as Request,
        res as Response,
        next,
      );

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });
  });
});
