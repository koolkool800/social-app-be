import { BaseEntity } from 'src/common/entities/base-entity';
import { TripEntity } from 'src/modules/trip/entities/trip.entity';
import { UserEntity } from 'src/modules/user/entities/user.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity('review_trip')
export class ReviewTripEntity extends BaseEntity {
  @Column()
  rating: number;

  @Column()
  comment: string;

  //   ----------------- relations
  @ManyToOne(() => UserEntity, (user) => user.reviewTrips)
  author: UserEntity;

  @ManyToOne(() => UserEntity, (user) => user.reviewTrips)
  business: UserEntity;

  @ManyToOne(() => TripEntity, (trip) => trip.reviewTrips)
  trip: TripEntity;
}
