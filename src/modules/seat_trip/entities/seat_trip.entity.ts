import { BaseEntity, Column, Entity } from 'typeorm';

@Entity('seat_trip')
export class SeatTripEntity extends BaseEntity {
  @Column()
  seat_name: string;

  @Column({ default: false })
  is_discount: boolean;

  @Column({ nullable: true })
  discount_price: number;

  @Column()
  price: number;

  @Column({ default: true })
  is_available: boolean;

  trip_id: number;
}
