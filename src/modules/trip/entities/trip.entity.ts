import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from 'src/common/entities/base-entity';
import { UserEntity } from 'src/modules/user/entities/user.entity';

enum PAYMENT_METHOD {}

interface ITripPoint {
  address: string;
  time: string;
}

@Entity('trips')
export class TripEntity extends BaseEntity {
  @Column()
  thumbnail: string;

  @Column()
  images: string[];

  @Column({ enum: PAYMENT_METHOD })
  payment_methods: PAYMENT_METHOD[];

  @Column()
  departure: string;

  @Column()
  destination: string;

  @Column()
  start_time: string;

  @Column()
  end_time: string;

  @Column()
  pick_up_points: ITripPoint[];

  @Column()
  drop_off_points: ITripPoint[];

  @Column()
  seat_template_option: string;

  @Column()
  seat_template_level: number;

  @Column()
  seat_template_rows: number;

  @Column()
  seat_template_columns: number;

  @Column({ default: false })
  is_pre_payment: boolean;

  @Column()
  min_price: number;

  @ManyToOne(() => UserEntity)
  business_id: string;
}
