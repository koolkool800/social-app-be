// import {
//   Injectable,
//   NestInterceptor,
//   ExecutionContext,
//   CallHandler,
//   BadGatewayException,
// } from '@nestjs/common';
// import { Observable, throwError } from 'rxjs';
// import { catchError } from 'rxjs/operators';

// @Injectable()
// export class ErrorsInterceptor implements NestInterceptor {
//   intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
//     return next.handle().pipe(
//       catchError((error) => {
//         // Handle specific database error and convert to HttpException
//         if (isDatabaseError(error)) {
//           return throwError(new BadGatewayException('Database error occurred'));
//         }
//         return throwError(error);
//       }),
//     );
//   }
// }

// // Define your specific database error check logic
// function isDatabaseError(error: any): boolean {
//   // Add your logic to identify database errors
//   // For example, check if the error is an instance of a specific database error class
//   return error instanceof DatabaseError;
// }
