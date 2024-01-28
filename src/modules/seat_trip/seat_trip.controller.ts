import { Controller } from '@nestjs/common';
import { SeatTripService } from './seat_trip.service';

@Controller('seat-trip')
export class SeatTripController {
  constructor(private readonly seatTripService: SeatTripService) {}
}
