import { Controller } from '@nestjs/common';
import { ReplyReviewTripService } from './reply_review_trip.service';

@Controller('reply-review-trip')
export class ReplyReviewTripController {
  constructor(private readonly replyReviewTripService: ReplyReviewTripService) {}
}
