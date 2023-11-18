import { Router } from "express";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import {
  contactSchemaRequest,
  contactSchemaUpdate,
} from "../schemas/contacts.schema";
import { contactsController } from "../controllers";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware";
import { ensureIsContactsOwnerMiddleware } from "../middlewares/ensureIsContactsOwner.middleware";

const contactsRoutes = Router();

contactsRoutes.use(ensureAuthMiddleware);

contactsRoutes.post(
  "",
  ensureDataIsValidMiddleware(contactSchemaRequest),
  (req: any, res: any) => contactsController.create(req, res)
);

contactsRoutes.get("", (req, res) => contactsController.list(req, res));

contactsRoutes.patch(
  "/:id",
  ensureIsContactsOwnerMiddleware,
  ensureDataIsValidMiddleware(contactSchemaUpdate),
  (req:any, res:any) => contactsController.update(req, res)
);

contactsRoutes.delete("/:id", ensureIsContactsOwnerMiddleware, (req, res) =>
  contactsController.remove(req, res)
);

export { contactsRoutes };
