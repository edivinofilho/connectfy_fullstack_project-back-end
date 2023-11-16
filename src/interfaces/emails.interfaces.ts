import { z } from "zod";
import {
    emailSchema, emailSchemaRequest, emailsSchemaResponse
} from "../schemas/emails.schema";

type TEmailRequest = z.infer<typeof emailSchemaRequest>;
type TEmail = z.infer<typeof emailSchema>;
type TEmailResponse = z.infer<typeof emailsSchemaResponse>;

export { TEmail, TEmailRequest, TEmailResponse };
