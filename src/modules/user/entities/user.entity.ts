import { BaseEntity } from 'src/common/entities/base-entity';
import { Column, OneToMany } from 'typeorm';
import { CUSTOMER_TYPE, LEVEL_USER, LOGIN_TYPE } from '../enum/user.enum';
import { PostEntity } from 'src/modules/post/entities/post.entity';
import { TripEntity } from 'src/modules/trip/entities/trip.entity';
import { ReviewTripEntity } from 'src/modules/review_trip/entities/review_trip.entity';

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

  @Column({ enum: CUSTOMER_TYPE })
  customerType: CUSTOMER_TYPE;

  @Column()
  moneyWallet: number;

  @Column({ enum: LOGIN_TYPE })
  loginType: LOGIN_TYPE;

  @Column({ nullable: true })
  googleId: string;

  // ----------------- relations

  @OneToMany(() => PostEntity, (post) => post.author)
  posts: PostEntity[];

  @OneToMany(() => TripEntity, (trip) => trip.business)
  trips: TripEntity[];

  @OneToMany(() => ReviewTripEntity, (reviewTrip) => reviewTrip.author)
  reviewTrips: ReviewTripEntity[];
}
