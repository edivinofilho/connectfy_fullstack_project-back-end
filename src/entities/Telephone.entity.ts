import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
  } from "typeorm";
import { Contact } from "./Contact.entity";
  
  @Entity("telephones")
  export class Telephone {
    @PrimaryGeneratedColumn("uuid")
    id: string;
  
    @Column({ length: 100 })
    telephone: string;
    
    @ManyToOne(() => Contact, (c) => c.telephones)
    contact: Contact;
  }