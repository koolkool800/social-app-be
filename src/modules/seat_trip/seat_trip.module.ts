import { Module } from '@nestjs/common';
import { SeatTripService } from './seat_trip.service';
import { SeatTripController } from './seat_trip.controller';

@Module({
  controllers: [SeatTripController],
  providers: [SeatTripService],
})
export class SeatTripModule {}
