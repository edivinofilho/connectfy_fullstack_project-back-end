import {
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from "typeorm";
  
  import { Contact } from "./Contact.entity";
//   import { getRounds, hashSync } from "bcryptjs";
  
  @Entity("users")
  class User {

    @PrimaryGeneratedColumn("uuid")
    id: string;
  
    @Column({ length: 150 })
    name: string;
  
    @Column({ length: 100, unique: true })
    email: string;
  
    @Column({ length: 150 })
    password: string;

    @Column({ length: 60 })
    telephone: string;
  
    @CreateDateColumn({ type: "date" })
    createdAt: string;
    
    @OneToMany(() => Contact, (c) => c.user)
    contacts: Array<Contact>;
  
    // @BeforeInsert()
    // @BeforeUpdate()
    // hashPassword() {
    //   const hasRounds: number = getRounds(this.password);
    //   if (!hasRounds) {
    //     this.password = hashSync(this.password, 10);
    //   }
    // }
  }

  export { User }