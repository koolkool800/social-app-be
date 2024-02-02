import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from 'src/common/entities/base-entity';
import { UserEntity } from 'src/modules/user/entities/user.entity';
import { PAYMENT_METHOD } from '../enum/trip.enum';
import { SeatTripEntity } from 'src/modules/seat_trip/entities/seat_trip.entity';
import { ReviewTripEntity } from 'src/modules/review_trip/entities/review_trip.entity';

export interface ITripPoint {
  address: string;
  time: string;
}

@Entity('trips')
export class TripEntity extends BaseEntity {
  @Column()
  thumbnail: string;

  @Column('json')
  images: string[];

  @Column({
    type: 'json',
    transformer: {
      to(value: PAYMENT_METHOD[]): string {
        return JSON.stringify(value);
      },
      from(value: string): PAYMENT_METHOD[] {
        return JSON.parse(value);
      },
    },
    nullable: true,
  })
  paymentMethods: PAYMENT_METHOD[];

  @Column()
  departure: string;

  @Column()
  destination: string;

  @Column()
  startTime: string;

  @Column()
  endTime: string;

  @Column('json')
  pickUpPoints: ITripPoint[];

  @Column('json')
  dropOffPoints: ITripPoint[];

  @Column()
  seatTemplateOption: string;

  @Column()
  seatTemplateLevel: number;

  @Column()
  seatTemplateRows: number;

  @Column()
  seatTemplateColumns: number;

  @Column({ default: false })
  isPrePayment: boolean;

  @Column()
  minPrice: number;

  @Column()
  businessId: number;

  // ----------------- relations
  @ManyToOne(() => UserEntity, (user) => user.trips)
  business: UserEntity;

  @OneToMany(() => SeatTripEntity, (seatTrip) => seatTrip.trip)
  seatTrips: SeatTripEntity[];

  @OneToMany(() => ReviewTripEntity, (reviewTrip) => reviewTrip.trip)
  reviewTrips: ReviewTripEntity[];
}
