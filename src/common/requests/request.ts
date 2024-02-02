import { Request } from 'express';
import { USER_ROLE } from 'src/modules/user/enum/user.enum';

export type UserRequest = {
  role: USER_ROLE;
  id: number;
  email: string;
};

export interface REQUEST_USER extends Request {
  user: UserRequest;
}
