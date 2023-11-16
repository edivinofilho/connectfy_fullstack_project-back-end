import { Request, Response } from "express";
import { ContactsServices } from "../services/contacts.service";
import { TUserRequest } from "../interfaces/users.interfaces";
import { TContactRequest } from "../interfaces/contacts.interfaces";

class ContactsController {
  constructor(private contactService: ContactsServices) {}

  async create(req: Request, res: Response) {
    const contact: TContactRequest = res.locals.foundEntity;

    // const newContact = await this.contactService.create({
    //   name,
    //   email,
    //   telephone,
    // }, user: {
    //     name,

    // });

    return res.status(201).json(contact);
  }

  async list(_: Request, res: Response) {
    const users = await this.contactService.list();

    return res.json(users);
  }
}

export { ContactsController }