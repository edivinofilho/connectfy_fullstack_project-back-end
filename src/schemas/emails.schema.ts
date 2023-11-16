import { z } from "zod";
import { contactSchema } from "./contacts.schema";

const emailSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  contact: contactSchema,
});

const emailSchemaRequest = emailSchema.omit({
  id: true,
  contact: true,
});

const emailsSchemaResponse = z.array(emailSchema);

export { emailSchema, emailSchemaRequest, emailsSchemaResponse };
