import { BaseEntity } from 'src/common/entities/base-entity';
import { ReviewTripEntity } from 'src/modules/review_trip/entities/review_trip.entity';
import { UserEntity } from 'src/modules/user/entities/user.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity('reply_review_trip')
export class ReplyReviewTripEntity extends BaseEntity {
  @Column()
  comment: string;

  //   @Column()
  //   businessId: number;

  //   @Column()
  //   reviewTripId: number;

  @ManyToOne(() => UserEntity, (user) => user.replyReviewTrips)
  author: UserEntity;

  @ManyToOne(
    () => ReviewTripEntity,
    (reviewTrip) => reviewTrip.replyReviewTrips,
  )
  reviewTrip: ReviewTripEntity;
}
