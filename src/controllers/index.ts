import { ContactsService } from "../services/contacts.service";
import { SessionService } from "../services/session.service";
import { UsersService } from "../services/users.service";
import { ContactsController } from "./contacts.controllers";
import { SessionController } from "./session.controller";

import { UsersController } from "./users.controllers";

const userService = new UsersService();
const usersController = new UsersController(userService);

const sessionService = new SessionService();
const sessionController = new SessionController(sessionService);

const contactsService = new ContactsService();
const contactsController = new ContactsController(contactsService);

export { usersController, sessionController, contactsController };
