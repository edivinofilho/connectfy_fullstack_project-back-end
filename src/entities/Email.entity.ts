import {
    Column,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
  } from "typeorm";
import { Contact } from "./Contact.entity";
//   import { User } from "./User.entity";
  
  @Entity("emails")
  export class Email {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    
    @Column({ length: 100, unique: true })
    email: string;
    
    @ManyToOne(() => Contact, (c) => c.emails)
    contact: Contact;

  }