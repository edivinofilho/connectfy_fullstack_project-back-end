import { DataSource, QueryFailedError, Repository } from "typeorm";
import { User } from "../../entities/User.entity";
import { AppDataSource } from "../../data-source";
import { createUser } from "../mocks/user.mocks";
import { UsersService } from "../../services/users.service";
import { AppError } from "../../errors/AppError";

describe("Unit test: createUser functionabilities", () => {
  let userRepository: Repository<User>;
  let connection: DataSource;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => {
        connection = res;
        userRepository = res.getRepository(User);
      })
      .catch((err) => console.log(err));
  });

  beforeEach(async () => {
    await userRepository.remove(await userRepository.find());
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it("Should be able to create a user - Valid payload", async () => {
    const { valid } = createUser;
    const userService = new UsersService();
    const result = await userService.create(valid);

    const expectedResult = {
      id: expect.any(String),
      name: "John",
      email: "john@mail.com",
      telephone: "5552305",
      createdAt: expect.any(String),
    };

    expect(result).toStrictEqual(expectedResult);
    expect(result).not.toStrictEqual(
      expect.objectContaining({ password: expect.any(String) })
    );
  });

  it("Should not be able to create a user - Unique email", async () => {
    const { unique } = createUser;

    await userRepository.save({ ...unique });
    const userService = new UsersService();

    try {
      await userService.create(unique);
      fail("Expected AppError, but no error was thrown.");
    } catch (error: any) {
      expect(error).toBeInstanceOf(AppError);
      expect((error as AppError).message).toBe(
        "User already exists, please login!"
      );
    }
  });

  it("Should be able to update a user - Valid payload", async () => {
    const { valid, updateData } = createUser;
    const { id } = await userRepository.save({ ...valid });

    const userService = new UsersService();
    const result = await userService.update(updateData, id);

    const expectedResult = {
      id: expect.any(String),
      name: "UpdatedName",
      email: "john@mail.com",
      telephone: updateData.telephone,
      password: expect.any(String),
      createdAt: expect.any(String),
    };

    expect(result).toStrictEqual(expectedResult);
  });

  it("Should be able to remove a user", async () => {
    const { valid } = createUser;
    const { id } = await userRepository.save({ ...valid });

    const userService = new UsersService();
    await userService.remove(id);

    const users = await userRepository.find();
    expect(users).toHaveLength(0);
  });
});
