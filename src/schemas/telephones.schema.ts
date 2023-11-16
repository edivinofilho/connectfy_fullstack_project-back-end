import { z } from "zod";
import { contactSchema } from "./contacts.schema";

const telephoneSchema = z.object({
  id: z.string(),
  telephone: z.string(),
  contact: contactSchema,
});

const telephoneSchemaRequest = telephoneSchema.omit({
  id: true,
  contact: true,
});

const telephonesSchemaResponse = z.array(telephoneSchema);

export { telephoneSchema, telephoneSchemaRequest, telephonesSchemaResponse };
