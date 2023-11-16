import { z } from "zod";
import {
  contactSchema,
  contactSchemaRequest,
  contactsSchemaResponse,
} from "../schemas/contacts.schema";

type TContactRequest = z.infer<typeof contactSchemaRequest>;
type TContact = z.infer<typeof contactSchema>;
type TContactResponse = z.infer<typeof contactsSchemaResponse>;

export { TContact, TContactRequest, TContactResponse };
