import { type NextFunction, type Request, type Response } from "express";
import CustomError from "../../CustomError/CustomError";

export const endpointNotFound = (
  _req: Request,
  _res: Response,
  next: NextFunction,
) => {
  const errorEndpointNotFound = new CustomError(
    "Endpoint not found",
    404,
    "Endpoint not found",
  );

  next(errorEndpointNotFound);
};

export const generalErrorHandler = (
  error: CustomError,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  const errorMessage =
    error.message ??
    "Error: These are not the droids you're looking for. - Obi-Wan Kenobi";
  const errorStatusCode = error.statusCode ?? 500;

  res.status(errorStatusCode).json({ error: errorMessage });
};
