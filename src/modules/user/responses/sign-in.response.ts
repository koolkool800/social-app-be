import { BaseResponse } from 'src/common/responses/base.response';
import { UserEntity } from '../entities/user.entity';

export class SignInResponse extends BaseResponse {
  accessToken: string;
  user: UserEntity;
  constructor(data: { accessToken: string; user: UserEntity }) {
    super();
    this.accessToken = data.accessToken;
    this.user = data.user;
  }

  public toJSON() {
    return {
      accessToken: this.accessToken,
      user: this.user,
    };
  }
}
