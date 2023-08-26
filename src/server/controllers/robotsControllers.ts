import { type NextFunction, type Request, type Response } from "express";
import CustomError from "../../CustomError/CustomError.js";
import Robot from "../../database/models/Robot.js";

export const getRobots = async (
  _req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const robots = await Robot.find().exec();
    res.status(200).json({ robots });
  } catch (error: unknown) {
    const customError = new CustomError(
      "Can't retrive the robots",
      500,
      (error as Error).message,
    );

    next(customError);
  }
};
