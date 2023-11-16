import { AppDataSource } from "../data-source";
import { Contact } from "../entities/Contact.entity";
import { User } from "../entities/User.entity";
import { AppError } from "../errors/AppError";
import {
  TContactRequest,
  TContactResponse,
} from "../interfaces/contacts.interfaces";
import { contactsSchemaResponse } from "../schemas/contacts.schema";

class ContactsServices {
  async create(payload: TContactRequest, user: User): Promise<TContactResponse> {

    const contactRepository = AppDataSource.getRepository(Contact);
    
    const findContact = await contactRepository.findOne({
      where: {email: payload.email},
    });

    if (findContact) {
      throw new AppError("Email already registered!", 409);
    }
    const contact = contactRepository.create({
     ...payload,
     user,
    });

    await contactRepository.save(contact);

    return contactsSchemaResponse.parse(contact);
  }

  async list() {
    const contactRepository = AppDataSource.getRepository(Contact);
    const contacts = await contactRepository.find();

    return contactsSchemaResponse.parse(contacts);
  }

  async destroy(contact: Contact): Promise<void> {}

  async update() {}
}

export { ContactsServices };
