import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { ErrorException } from './exception-error';

export enum CommonErrorCode {
  VALIDATION_ERROR = 'VALIDATION_ERROR|400',
  INTERNAL_SERVER_ERROR = 'INTERNAL_SERVER_ERROR|500',
  UNAUTHORIZED = 'UNAUTHORIZED|401',
  FORBIDDEN = 'FORBIDDEN|403',
  NOT_FOUND = 'NOT_FOUND|404',
  PATH_NOT_FOUND = 'PATH_NOT_FOUND|404',
  FILTER_NULL = 'FILTER_NULL|404',
  INVALID_INFORMATION = 'INVALID_INFORMATION|400',
  MISSING_VALUE = 'MISSING_VALUE|400',
}

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    let errorException: ErrorException = null;

    errorException = new ErrorException(
      CommonErrorCode.INTERNAL_SERVER_ERROR,
      'Server sập',
    );

    response
      .status(errorException.httpStatusCode)
      .json(errorException.returnError());
  }
}
