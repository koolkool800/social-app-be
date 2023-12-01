import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  UnauthorizedException,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { ErrorException } from './exception-error';
import { CommonErrorCode } from 'src/common/contants/error-code';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    let errorException: ErrorException = null;

    if (exception instanceof UnauthorizedException) {
      console.log('herer');
      errorException = new ErrorException(
        CommonErrorCode.UNAUTHORIZED,
        'You are not authorized to access this resource',
      );
    } else
      errorException = new ErrorException(
        CommonErrorCode.INTERNAL_SERVER_ERROR,
        'Server sập',
      );

    response
      .status(errorException.httpStatusCode)
      .json(errorException.returnError());
  }
}
