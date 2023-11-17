import { Request, Response } from "express";
import { ContactsServices } from "../services/contacts.service";
import { TUserRequest } from "../interfaces/users.interfaces";
import { TContactRequest } from "../interfaces/contacts.interfaces";

class ContactsController {
  constructor(private contactService: ContactsServices) {}

  async create(req: Request, res: Response) {
    const contact: TContactRequest = res.locals.foundEntity;

   
  }

  async list(_: Request, res: Response) {
    const users = await this.contactService.list();

    return res.json(users);
  }
}

export { ContactsController }