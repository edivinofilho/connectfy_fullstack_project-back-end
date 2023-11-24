import { Repository, DataSource } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/User.entity";
import { session } from "../mocks/session.mocks";
import { SessionService } from "../../services/session.service";
import { JwtPayload, decode } from "jsonwebtoken";
import { AppError } from "../../errors/AppError";

describe("Unit test: session functionalities", () => {
  let userRepository: Repository<User>;
  let connection: DataSource;

  beforeAll(async () => {
    process.env.SECRET_KEY = session.secretKey;
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

  it("Should be able to create a token - Valid Payload", async () => {
    const { base, valid } = session;
    const { id, name } = await userRepository.save({
      ...base,
    });

    const sessionService = new SessionService();
    const result = await sessionService.create(valid);

    expect(result.token).toStrictEqual(expect.any(String));

    const decodedToken = decode(result.token) as JwtPayload;
    expect(decodedToken).toStrictEqual(
      expect.objectContaining({
        sub: id.toString(),
        name,
        exp: expect.any(Number),
        iat: expect.any(Number),
      })
    );
  });

  it("Should not be able to create a token - Invalid Email", async () => {
    const { base, invalidEmail } = session;
    await userRepository.save({ ...base });

    const sessionService = new SessionService();

    try {
      const result = await sessionService.create(invalidEmail);
      fail("Expected AppError, but no error was thrown.");
    } catch (error: any) {
      expect(error).toBeInstanceOf(AppError);
      expect((error as AppError).message).toBe("Invalid credentials");
    }
  });

  it("Should not be able to create a token - Invalid Password", async () => {
    const { base, invalidPassword } = session;
    await userRepository.save({ ...base });

    const sessionService = new SessionService();

    try {
      const result = await sessionService.create(invalidPassword);
      fail("Expected AppError, but no error was thrown.");
    } catch (error: any) {
      expect(error).toBeInstanceOf(AppError);
      expect((error as AppError).message).toBe("Invalid credentials");
    }
  });
});
