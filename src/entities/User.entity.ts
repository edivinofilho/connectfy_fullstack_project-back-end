import {
    BeforeInsert,
    BeforeUpdate,
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from "typeorm";
  
//   import { Recipe } from "./Recipe.entity";
//   import { getRounds, hashSync } from "bcryptjs";
  
  @Entity("users")
  export class User {

    @PrimaryGeneratedColumn("increment")
    id: number;
  
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
    
    // @OneToMany(() => Contact, (r) => r.user)
    // recipes: Array<Recipe>;
  
    // @BeforeInsert()
    // @BeforeUpdate()
    // hashPassword() {
    //   const hasRounds: number = getRounds(this.password);
    //   if (!hasRounds) {
    //     this.password = hashSync(this.password, 10);
    //   }
    // }
  }