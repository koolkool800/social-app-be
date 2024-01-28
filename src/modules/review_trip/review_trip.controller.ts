import { Controller } from '@nestjs/common';
import { ReviewTripService } from './review_trip.service';

@Controller('review-trip')
export class ReviewTripController {
  constructor(private readonly reviewTripService: ReviewTripService) {}
}
