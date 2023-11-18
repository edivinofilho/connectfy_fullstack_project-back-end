import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
  } from "typeorm";
  import { User } from "./User.entity";
 
  
  @Entity("contacts")
  export class Contact {
    @PrimaryGeneratedColumn("uuid")
    id: string;
  
    @Column({ length: 150 })
    name: string;
  
    @Column({ length: 100, unique: true })
    email: string;

    @Column({ length: 100 })
    telephone: string;
  
    @CreateDateColumn({ type: "date" })
    createdAt: string;
    
    @ManyToOne(() => User, (u) => u.contacts, {onDelete: "CASCADE"})
    user: User; 
  }