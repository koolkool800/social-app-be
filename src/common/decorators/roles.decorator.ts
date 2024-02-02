import { SetMetadata } from '@nestjs/common';
import { USER_ROLE } from 'src/modules/user/enum/user.enum';

export const ROLES_KEY = 'roles';
export const Roles = (...roles: USER_ROLE[]) => SetMetadata(ROLES_KEY, roles);
