import { BaseEntity } from 'src/common/entities/base-entity';
import { Entity, ManyToOne } from 'typeorm';
import { OrderEntity } from './order.entity';
import { SeatTripEntity } from 'src/modules/seat_trip/entities/seat_trip.entity';

@Entity('order_seat_trip')
export class OrderSeatTripEntity extends BaseEntity {
  @ManyToOne(() => OrderEntity, (order) => order.orderSeatTrips)
  order: OrderEntity;

  @ManyToOne(() => SeatTripEntity, (seatTrip) => seatTrip.orderSeatTrips)
  seatTrip: SeatTripEntity;
}
