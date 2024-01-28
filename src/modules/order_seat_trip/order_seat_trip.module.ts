import { Module } from '@nestjs/common';
import { OrderSeatTripService } from './order_seat_trip.service';
import { OrderSeatTripController } from './order_seat_trip.controller';

@Module({
  controllers: [OrderSeatTripController],
  providers: [OrderSeatTripService],
})
export class OrderSeatTripModule {}
