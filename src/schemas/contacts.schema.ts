import { z } from "zod";
import { userSchema } from "./users.schema";

const contactSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  telephone: z.string(),
  createAt: z.string(),
  user: userSchema,
});

const contactSchemaRequest = contactSchema.omit({
  id: true,
  createdAt: true,
  user: true
});

const contactsSchemaResponse = z.array(contactSchema);

export { contactSchema, contactSchemaRequest, contactsSchemaResponse };
