import { USER_ROLE } from 'src/modules/user/enum/user.enum';

export interface IPayloadJWT {
  id: number;
  email: string;
  role: USER_ROLE;
}
