import { hashSync } from "bcryptjs";

export const session = {
  secretKey: "kenzie",
  base: {
    name: "John",
    email: "john@mail.com",
    password: hashSync("654321"),
    telephone: "5552305",
  },

  valid: {
    name: "John",
    email: "john@mail.com",
    password: "654321",
  },

  invalidEmail: {
    email: "invalidEmail@mail.com",
    password: "654321",
  },

  invalidPassword: {
    email: "paul@mail.com",
    password: "invalidPassword",
  },
};
