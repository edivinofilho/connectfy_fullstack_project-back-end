import { Router } from "express";
import { usersController } from "../controllers";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { userSchemaRequest } from "../schemas/users.schema";

const usersRoutes = Router();

usersRoutes.post("", ensureDataIsValidMiddleware(userSchemaRequest), (req: any, res: any) => 
  usersController.create(req, res));

usersRoutes.get("", (req, res) => {
  usersController.list(req, res);
});

export { usersRoutes }