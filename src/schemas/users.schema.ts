import { z } from "zod";

const userSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
  telephone: z.string(),
  createdAt: z.string()
});

const userSchemaRequest = userSchema.omit({
  id: true,
  createdAt: true,
});

const userSchemaResponse = userSchema.omit({
  password: true,
});

const usersSchemaResponse = z.array(userSchemaResponse);

const userSchemaUpdate = userSchema.omit({
  id: true,
  createdAt: true,
}).partial()

export {
  userSchema,
  userSchemaRequest,
  userSchemaResponse,
  usersSchemaResponse,
  userSchemaUpdate,
};
