import { BaseEntity } from 'src/common/entities/base-entity';
import { Column, Entity, OneToMany } from 'typeorm';
import {
  CUSTOMER_TYPE,
  LEVEL_USER,
  LOGIN_TYPE,
  USER_ROLE,
} from '../enum/user.enum';
// import { PostEntity } from 'src/modules/post/entities/post.entity';
import { TripEntity } from 'src/modules/trip/entities/trip.entity';
import { ReviewTripEntity } from 'src/modules/review_trip/entities/review_trip.entity';
import { ReplyReviewTripEntity } from 'src/modules/reply_review_trip/entities/reply-review-trip.entity';
import { OrderEntity } from 'src/modules/order/entities/order.entity';

@Entity('users')
export class UserEntity extends BaseEntity {
  @Column()
  name: string;

  @Column({ enum: LEVEL_USER, default: LEVEL_USER.LEVEL1 })
  level: LEVEL_USER;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  phoneNumber: string;

  @Column({ enum: CUSTOMER_TYPE, default: CUSTOMER_TYPE.PERSONAL })
  customerType: CUSTOMER_TYPE;

  @Column({ default: 0 })
  moneyWallet: number;

  @Column({ enum: LOGIN_TYPE, default: LOGIN_TYPE.NORMAL })
  loginType: LOGIN_TYPE;

  @Column({ nullable: true })
  googleId: string;

  @Column({ enum: USER_ROLE, default: USER_ROLE.USER })
  role: USER_ROLE;

  // ----------------- relations

  // @OneToMany(() => PostEntity, (post) => post.author)
  // posts: PostEntity[];

  @OneToMany(() => TripEntity, (trip) => trip.business)
  trips: TripEntity[];

  @OneToMany(() => ReviewTripEntity, (reviewTrip) => reviewTrip.author)
  reviewTrips: ReviewTripEntity[];

  @OneToMany(() => ReplyReviewTripEntity, (replyTrip) => replyTrip.author)
  replyReviewTrips: ReplyReviewTripEntity[];

  @OneToMany(() => OrderEntity, (order) => order.user)
  orders: OrderEntity[];
}
