import { hash } from "bcryptjs";
import { AppDataSource } from "../data-source";
import { User } from "../entities/User.entity";
import {
  TUserResponse,
  TUserRequest,
  TUserUpdateResquest,
} from "../interfaces/users.interfaces";
import {
  userSchema,
  userSchemaResponse,
  usersSchemaResponse,
} from "../schemas/users.schema";
import { AppError } from "../errors/AppError";
import { Contact } from "../entities/Contact.entity";
import {
  TContactRequest,
  TContactResponse,
  TContactsResponse,
} from "../interfaces/contacts.interfaces";
import {
  contactSchema,
  contactsSchemaResponse,
} from "../schemas/contacts.schema";

export class ContactsService {
  async create(
    data: TContactRequest,
    userId: string
  ): Promise<TContactResponse> {
    const contactRepository = AppDataSource.getRepository(Contact);

    if (!data.name || !data.email || !data.telephone) {
      throw new AppError("Name, email and password are required fields", 400);
    }

    const userRepository = AppDataSource.getRepository(User);

    const user = await userRepository.findOne({
      where: { id: userId },
    });

    if (!user) {
      throw new AppError("User not found", 404);
    }

    const foundContact = await contactRepository.findOneBy({ email: data.email });

    if (foundContact) {
      throw new AppError("Contact already exists", 404);
    }

    const contact = contactRepository.create({
      ...data,
      user,
    });

    
    await contactRepository.save(contact);

    return contactSchema.parse(contact);
  }

  async list(userId: string): Promise<TContactsResponse> {
    const userRepository = AppDataSource.getRepository(User);

    const user = await userRepository.findOne({
      where: {
        id: userId,
      },
      relations: {
        contacts: true,
      },
    });

    if (!user) {
      throw new AppError("User not found", 404);
    }

    return contactsSchemaResponse.parse(user.contacts);
  }

  async update(
    data: TUserUpdateResquest,
    contactId: string
  ): Promise<TContactResponse> {
    const contactRepository = AppDataSource.getRepository(Contact);

    const oldContact = await contactRepository.findOneBy({ id: contactId });

    if (!oldContact) {
      throw new AppError("Contact not found", 404);
    }

    const updatedContact = contactRepository.create({
      ...oldContact,
      ...data,
    });

    await contactRepository.save(updatedContact);

    return contactSchema.parse(updatedContact);
  }

  async remove(contactId: string): Promise<void> {
    const contactRepository = AppDataSource.getRepository(Contact);

    const contact = await contactRepository.findOneBy({ id: contactId });

    if (!contact) {
      throw new AppError("Contact not found", 404);
    }

    await contactRepository.remove(contact);
  }
}
