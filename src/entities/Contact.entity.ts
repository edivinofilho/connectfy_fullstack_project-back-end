import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from "typeorm";
  import { User } from "./User.entity";
  import { Email } from "./Email.entity";
  import { Telephone } from "./Telephone.entity";

  
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
    
    @ManyToOne(() => User, (u) => u.contacts)
    user: User;

    @OneToMany(() => Email, (e) => e.contact)
    emails: Array<Email>;

    @OneToMany(() => Telephone, (t) => t.contact)
    telephones: Array<Telephone>;
  
  }