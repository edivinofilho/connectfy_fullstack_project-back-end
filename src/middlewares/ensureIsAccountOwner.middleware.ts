import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors/AppError";
import { User } from "../entities/User.entity";

export const ensureIsAccountsOwnerMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userRepository = AppDataSource.getRepository(User);

  const accountOwner = req.params.id;
  const userId = res.locals.userId;

  const user = await userRepository.findOne({
    where: {
      id: userId,
    },
  });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  if (user.id !== accountOwner) {
    throw new AppError(
      "You don't have permission for any action regarding this account",
      403
    );
  }

  return next();
};
