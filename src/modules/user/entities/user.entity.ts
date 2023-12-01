import { BaseEntity } from 'src/common/entities/base-entity';
import { Column, Entity } from 'typeorm';

@Entity('users')
export class User extends BaseEntity {
  @Column()
  name: string;
  @Column()
  email: string;
  @Column()
  password: string;
}
