import { BaseEntity } from 'src/common/entities/base-entity';
import { UserEntity } from 'src/modules/user/entities/user.entity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { OrderSeatTripEntity } from './order-seat-trip.entity';
import { PAYMENT_CHANNEL, PAYMENT_METHOD } from '../enum/payment.enum';

@Entity('orders')
export class OrderEntity extends BaseEntity {
  @Column()
  totalPrice: number;

  @Column()
  totalDiscount: number;

  @Column()
  totalPayment: number;

  @Column()
  paymentMethod: PAYMENT_METHOD;

  @Column()
  paymentChannel: PAYMENT_CHANNEL;

  @Column()
  paymentRefId: string;

  // -------------- Relations
  @ManyToOne(() => UserEntity, (user) => user.orders)
  user: UserEntity;

  @OneToMany(() => OrderSeatTripEntity, (orderSeatTrip) => orderSeatTrip.order)
  orderSeatTrips: OrderSeatTripEntity[];
}
