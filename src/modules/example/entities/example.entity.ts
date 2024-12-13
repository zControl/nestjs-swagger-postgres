import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Example {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column('int', { default: 0 })
  count: number;

  @Column('decimal', { precision: 10, scale: 2, default: 0.0 })
  price: number;

  @Column('boolean', { default: false })
  isActive: boolean;

  @Column('simple-array', { nullable: true })
  tags: string[];

  @Column('json', { nullable: true })
  metadata: Record<string, any>;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
