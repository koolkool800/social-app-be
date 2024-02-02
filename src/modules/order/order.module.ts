import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { OrderEntity } from './entities/order.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../user/entities/user.entity';
import { OrderSeatTripEntity } from './entities/order-seat-trip.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([OrderEntity, UserEntity, OrderSeatTripEntity]),
  ],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
