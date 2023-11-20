import { DataSource, Repository, UpdateResult } from "typeorm";
import { AppDataSource } from "../../data-source";
import { createContact } from "../mocks/contact.mocks";
import { ContactsService } from "../../services/contacts.service";
import { AppError } from "../../errors/AppError";
import { Contact } from "../../entities/Contact.entity";
import { User } from "../../entities/User.entity";

describe("Unit test: ContactsService functionalities", () => {
  let contactRepository: Repository<Contact>;
  let userRepository: Repository<User>;
  let connection: DataSource;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => {
        connection = res;
        contactRepository = res.getRepository(Contact);
        userRepository = res.getRepository(User);
      })
      .catch((err) => console.log(err));
  });

  beforeEach(async () => {
    await contactRepository.remove(await contactRepository.find());
    await userRepository.remove(await userRepository.find());
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it("Should be able to create a contact - Valid payload", async () => {
    const { valid, user } = createContact;
    const { id: userId } = await userRepository.save({ ...user });

    const contactService = new ContactsService();
    const result = await contactService.create(valid, userId);

    const expectedResult = {
      id: expect.any(String),
      name: valid.name,
      email: valid.email,
      telephone: valid.telephone,
      createdAt: expect.any(String),
    };

    expect(result).toStrictEqual(expectedResult);
  });

  it("Should not be able to create a contact - Unique email", async () => {
    const { unique, user } = createContact;
    const { id: userId } = await userRepository.save({ ...user });

    await contactRepository.save({ ...unique });
    const contactService = new ContactsService();

    try {
      await contactService.create(unique, userId);
      fail("Expected AppError, but no error was thrown.");
    } catch (error: any) {
      expect(error).toBeInstanceOf(AppError);
      expect((error as AppError).message).toBe("Contact already exists");
    }
  });

  it("Should be able to update a contact - Valid payload", async () => {
    const { valid, updateData, user } = createContact;
    const { id: userId } = await userRepository.save({ ...user });

    const contactService = new ContactsService();
    const result = await contactService.create(valid, userId);

    const updatedResult = await contactService.update(updateData, result.id);

    const expectedResult = {
      id: expect.any(String),
      name: updateData.name,
      email: valid.email,
      telephone: updateData.telephone,
      createdAt: expect.any(String),
    };

    expect(updatedResult).toStrictEqual(expectedResult);
  });

  it("Should be able to remove a contact", async () => {
    const { valid, user } = createContact;
    const { id: userId } = await userRepository.save({ ...user });

    const contactService = new ContactsService();
    const result = await contactService.create(valid, userId);

    await contactService.remove(result.id);
    const contacts = await contactRepository.find();

    expect(contacts).toHaveLength(0);
  });
});
