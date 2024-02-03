import { BaseEntity } from 'src/common/entities/base-entity';
import { Column, Entity, OneToMany } from 'typeorm';
import {
  CUSTOMER_TYPE,
  LEVEL_USER,
  LOGIN_TYPE,
  USER_ROLE,
} from '../enum/user.enum';
import { PostEntity } from 'src/modules/post/entities/post.entity';
import { TripEntity } from 'src/modules/trip/entities/trip.entity';
import { ReviewTripEntity } from 'src/modules/review_trip/entities/review_trip.entity';
import { ReplyReviewTripEntity } from 'src/modules/reply_review_trip/entities/reply-review-trip.entity';
import { OrderEntity } from 'src/modules/order/entities/order.entity';

@Entity('users')
export class UserEntity extends BaseEntity {
  @Column()
  name: string;

  @Column('json', {
    transformer: {
      to(value: LEVEL_USER): string {
        return JSON.stringify(value);
      },
      from(value: string): LEVEL_USER {
        return JSON.parse(value);
      },
    },
    default: LEVEL_USER.LEVEL1,
    nullable: true,
  })
  level: LEVEL_USER;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  phoneNumber: string;

  @Column('json', {
    transformer: {
      to(value: CUSTOMER_TYPE): string {
        return JSON.stringify(value);
      },
      from(value: string): CUSTOMER_TYPE {
        return JSON.parse(value);
      },
    },
    default: CUSTOMER_TYPE.PERSONAL,
    nullable: true,
  })
  customerType: CUSTOMER_TYPE;

  @Column({ default: 0 })
  moneyWallet: number;

  @Column('json', {
    transformer: {
      to(value: LOGIN_TYPE): string {
        return JSON.stringify(value);
      },
      from(value: string): LOGIN_TYPE {
        return JSON.parse(value);
      },
    },
    default: LOGIN_TYPE.NORMAL,
    nullable: true,
  })
  loginType: LOGIN_TYPE;

  @Column({ nullable: true })
  googleId: string;

  @Column('json', {
    transformer: {
      to(value: USER_ROLE): string {
        return JSON.stringify(value);
      },
      from(value: string): USER_ROLE {
        return JSON.parse(value);
      },
    },
    default: USER_ROLE.USER,
    nullable: true,
  })
  role: USER_ROLE;

  // ----------------- relations

  @OneToMany(() => PostEntity, (post) => post.author)
  posts: PostEntity[];

  @OneToMany(() => TripEntity, (trip) => trip.business)
  trips: TripEntity[];

  @OneToMany(() => ReviewTripEntity, (reviewTrip) => reviewTrip.author)
  reviewTrips: ReviewTripEntity[];

  @OneToMany(() => ReplyReviewTripEntity, (replyTrip) => replyTrip.author)
  replyReviewTrips: ReplyReviewTripEntity[];

  @OneToMany(() => OrderEntity, (order) => order.user)
  orders: OrderEntity[];
}
