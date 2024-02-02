import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { USER_ROLE } from 'src/modules/user/enum/user.enum';

@Injectable()
export class AdminGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    return request['user'] &&
      request['user'].role.toUpperCase() === USER_ROLE.ADMIN
      ? true
      : false;
  }
}
