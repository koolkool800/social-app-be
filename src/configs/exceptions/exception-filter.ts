import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  UnauthorizedException,
  ForbiddenException,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { ErrorException } from './exception-error';
import { QueryFailedError } from 'typeorm';

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
    let errorException: ErrorException = null;

    if (exception instanceof UnauthorizedException) {
      errorException = new ErrorException(
        CommonErrorCode.UNAUTHORIZED,
        'Unauthorized',
      );
    } else if (exception instanceof ForbiddenException) {
      errorException = new ErrorException(
        CommonErrorCode.FORBIDDEN,
        'Forbidden resource',
      );
    } else if (exception instanceof ErrorException) {
      errorException = exception;
    } else if (exception instanceof NotFoundException) {
      errorException = new ErrorException(
        CommonErrorCode.PATH_NOT_FOUND,
        'Path not found',
      );
    } else if (exception instanceof QueryFailedError) {
      errorException = new ErrorException(
        CommonErrorCode.INTERNAL_SERVER_ERROR,
        'Database query error',
      );
    } else if (exception instanceof BadRequestException) {
      errorException = new ErrorException(
        CommonErrorCode.VALIDATION_ERROR,
        'Validation error',
        (exception.getResponse() as any)?.message?.[0]?.constraints,
      );
    } else {
      errorException = new ErrorException(
        CommonErrorCode.INTERNAL_SERVER_ERROR,
        'Server sập',
      );
    }

    response
      .status(errorException.httpStatusCode)
      .json(errorException.returnError());
  }
}
