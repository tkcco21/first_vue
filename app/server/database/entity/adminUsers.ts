import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm'

@Entity()
export class AdminUsers {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  username!: string

  @Column()
  password!: string

  @CreateDateColumn()
  createdDate!: Date

  @UpdateDateColumn()
  updatedDate!: Date

  @DeleteDateColumn()
  deletedDate!: Date
}
