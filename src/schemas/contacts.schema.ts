import { z } from "zod";
import { userSchema } from "./users.schema";

const contactSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  email: z.string().email(),
  telephone: z.string(),
  createdAt: z.string(),
});

const contactSchemaRequest = contactSchema.omit({
  id: true,
  createdAt: true,
});

// const contactSchemaResponse = contactSchema.omit({
//   user: true
// })

const contactsSchemaResponse= z.array(contactSchema);

const contactSchemaUpdate = contactSchema.omit({
  id: true,
  createdAt: true,
}).partial();

export { contactSchema, contactSchemaRequest, contactsSchemaResponse, contactSchemaUpdate };
