import { Module } from '@nestjs/common';
import { ReplyReviewTripService } from './reply_review_trip.service';
import { ReplyReviewTripController } from './reply_review_trip.controller';

@Module({
  controllers: [ReplyReviewTripController],
  providers: [ReplyReviewTripService],
})
export class ReplyReviewTripModule {}
