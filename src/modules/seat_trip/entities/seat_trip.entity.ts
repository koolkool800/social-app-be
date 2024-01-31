import { TripEntity } from 'src/modules/trip/entities/trip.entity';
import { BaseEntity, Column, Entity, ManyToOne } from 'typeorm';

@Entity('seat_trip')
export class SeatTripEntity extends BaseEntity {
  @Column()
  seatName: string;

  @Column({ default: false })
  isDiscount: boolean;

  @Column({ nullable: true })
  discountPrice: number;

  @Column()
  price: number;

  @Column({ default: true })
  isAvailable: boolean;

  @ManyToOne(() => TripEntity, (trip) => trip.seatTrips)
  trip: TripEntity;

  @Column()
  tripId: number;
}
