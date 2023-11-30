import { Injectable } from '@nestjs/common';
import { ErrorException } from './configs/exceptions/exception-error';
import { CommonErrorCode } from './configs/exceptions/exception-filter';

@Injectable()
export class AppService {
  getHello(): string {
    throw new ErrorException(
      CommonErrorCode.FORBIDDEN,
      'Method not implementedasdasdasd .',
    );
  }
}
