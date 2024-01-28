import { Module } from '@nestjs/common';
import { ReviewTripService } from './review_trip.service';
import { ReviewTripController } from './review_trip.controller';

@Module({
  controllers: [ReviewTripController],
  providers: [ReviewTripService],
})
export class ReviewTripModule {}
