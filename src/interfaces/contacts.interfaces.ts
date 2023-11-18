import { z } from "zod";
import {
  contactSchema,
  contactSchemaRequest,
  contactsSchemaResponse,
} from "../schemas/contacts.schema";
import { DeepPartial } from "typeorm";

type TContactRequest = z.infer<typeof contactSchemaRequest>;
type TContact = z.infer<typeof contactSchema>;
type TContactResponse = z.infer<typeof contactSchema>;
type TContactsResponse = z.infer<typeof contactsSchemaResponse>;

type TContactUpdateResquest = DeepPartial<TContactRequest>

export { TContact, TContactRequest, TContactResponse, TContactsResponse, TContactUpdateResquest };
