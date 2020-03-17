import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm'

@Entity()
export class Books {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  title!: string

  @Column('text')
  itemUrl!: string

  @Column('text')
  imageUrl!: string

  @Column('text')
  description!: string

  @Column()
  completedAt!: Date

  @CreateDateColumn()
  createdDate!: Date

  @UpdateDateColumn()
  updatedDate!: Date

  @DeleteDateColumn()
  deletedDate!: Date
}
