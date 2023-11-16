import { z } from "zod";
import {
  userSchema,
  userSchemaRequest,
  userSchemaResponse,
  usersSchemaResponse,
} from "../schemas/users.schema";

type TUserRequest = z.infer<typeof userSchemaRequest>;
type TUser = z.infer<typeof userSchema>;
type TUserResponse = z.infer<typeof userSchemaResponse>;
type TUsersResponse = z.infer<typeof usersSchemaResponse>;

export { TUser, TUserRequest, TUserResponse, TUsersResponse };
