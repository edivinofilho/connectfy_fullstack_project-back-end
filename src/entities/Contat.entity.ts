import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from "typeorm";
//   import { User } from "./User.entity";
  
  @Entity("contacts")
  export class Contact {
    @PrimaryGeneratedColumn("uuid")
    id: number;
  
    @Column({ length: 150 })
    name: string;
  
    @Column({ length: 100, unique: true })
    email: string;

    @Column({ length: 100 })
    telephone: string;
  
    @CreateDateColumn({ type: "date" })
    createdAt: string;
    
    // @ManyToOne(() => User, (u) => u.contacts)
    // user: User;
  }