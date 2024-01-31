import { BaseEntity } from 'src/common/entities/base-entity';
import { UserEntity } from 'src/modules/user/entities/user.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity('posts')
export class PostEntity extends BaseEntity {
  @Column()
  title: string;

  @Column()
  body: string;

  @Column()
  views: number;

  @Column()
  likes: number;

  @Column()
  userId: number;

  //   ----------------- relations
  @ManyToOne(() => UserEntity, (user) => user.posts)
  author: UserEntity;
}
