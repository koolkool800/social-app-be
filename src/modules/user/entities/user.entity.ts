import { BaseEntity } from 'src/common/entities/base-entity';
import { Column } from 'typeorm';

export class User extends BaseEntity {
  @Column()
  name: string;
  @Column()
  email: string;
  @Column()
  password: string;
}
