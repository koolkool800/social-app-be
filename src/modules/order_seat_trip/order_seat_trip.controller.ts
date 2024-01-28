import { Controller } from '@nestjs/common';
import { OrderSeatTripService } from './order_seat_trip.service';

@Controller('order-seat-trip')
export class OrderSeatTripController {
  constructor(private readonly orderSeatTripService: OrderSeatTripService) {}
}
