import { BaseEntity } from 'src/common/entities/base-entity';
import { OrderSeatTripEntity } from 'src/modules/order/entities/order-seat-trip.entity';
import { TripEntity } from 'src/modules/trip/entities/trip.entity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';

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

  @OneToMany(
    () => OrderSeatTripEntity,
    (orderSeatTrip) => orderSeatTrip.seatTrip,
  )
  orderSeatTrips: OrderSeatTripEntity[];

  @Column()
  tripId: number;
}
