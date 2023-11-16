import { z } from "zod";
import {
  telephoneSchema,
  telephoneSchemaRequest,
  telephonesSchemaResponse,
} from "../schemas/telephones.schema";

type TTelephoneRequest = z.infer<typeof telephoneSchemaRequest>;
type TTelephone = z.infer<typeof telephoneSchema>;
type TTelephoneResponse = z.infer<typeof telephonesSchemaResponse>;

export { TTelephone, TTelephoneRequest, TTelephoneResponse };
