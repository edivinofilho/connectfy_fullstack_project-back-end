import { Router } from "express";
import { usersController } from "../controllers";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { userSchemaRequest } from "../schemas/users.schema";
import { ensureIsAccountsOwnerMiddleware } from "../middlewares/ensureIsAccountOwner.middleware";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware";

const usersRoutes = Router();

usersRoutes.get("", (req, res) => {
  usersController.list(req, res);
});

usersRoutes.post(
  "",
  ensureDataIsValidMiddleware(userSchemaRequest),
  (req: any, res: any) => usersController.create(req, res)
);

usersRoutes.use(ensureAuthMiddleware);

usersRoutes.get("/:id", ensureIsAccountsOwnerMiddleware, (req, res) =>
  usersController.getUserById(req, res)
);

usersRoutes.patch("/:id", ensureIsAccountsOwnerMiddleware, (req, res) =>
  usersController.update(req, res)
);

usersRoutes.delete("/:id", ensureIsAccountsOwnerMiddleware, (req, res) =>
  usersController.remove(req, res)
);

export { usersRoutes };
