import { hash } from "bcryptjs";
import { AppDataSource } from "../data-source";
import { User } from "../entities/User.entity";
import { TUserResponse, TUserRequest, TUserUpdateResquest } from "../interfaces/users.interfaces";
import {
  userSchema,
  userSchemaResponse,
  usersSchemaResponse,
} from "../schemas/users.schema";
import { AppError } from "../errors/AppError";
import { Contact } from "../entities/Contact.entity";

export class UsersService {
  async create(payload: TUserRequest):Promise<TUserResponse> {

    if (!payload.name || !payload.email || !payload.password || !payload.telephone) {
      throw new AppError("Name, email, telephone and password are required fields", 400);
    }
    
    const userRepository = AppDataSource.getRepository(User);
    
    const findUser = await userRepository.findOne({
      where: { email: payload.email}
    });
    

    if (findUser) {
      throw new AppError("User already exists, please login!", 409);
    }

    const hashedPassword = await hash(payload.password, 10);

    const user = userRepository.create({
      name: payload.name,
      email: payload.email,
      password: hashedPassword,
      telephone: payload.telephone,
    });

    await userRepository.save(user);

    return userSchemaResponse.parse(user);
  }

  async list() {
    const userRepository = AppDataSource.getRepository(User);
    const user = await userRepository.find();

    return usersSchemaResponse.parse(user);
  }

  async remove(userId: string): Promise<void> {
    const userRepository = AppDataSource.getRepository(User)

    const contactRepository = AppDataSource.getRepository(Contact);

    const user = await userRepository.findOne({
      where: { id: userId}
    });
    

    if (!user) {
      throw new AppError("User not found", 404);
    }
   
    await contactRepository.delete({ user: user });
    
    await userRepository.remove(user)

  }

  async update(data: TUserUpdateResquest, userId: string): Promise<TUserResponse> {
    const userRepository = AppDataSource.getRepository(User);

    const oldUser = await userRepository.findOneBy({id: userId})

    if(!oldUser){
      throw new AppError("User not found", 404);
    }

    const updatedUser = userRepository.create({
          ...oldUser,
          ...data
        }) 

    await userRepository.save(updatedUser)

    return userSchema.parse(updatedUser)
  }
}

