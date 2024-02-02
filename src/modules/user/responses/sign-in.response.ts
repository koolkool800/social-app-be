import { BaseResponse } from 'src/common/responses/base.response';

export class SignInResponse extends BaseResponse {
  accessToken: string;
  email: string;

  constructor(data: { accessToken: string; email: string }) {
    super();
    this.accessToken = data.accessToken;
    this.email = data.email;
  }

  public toJSON() {
    return {
      accessToken: this.accessToken,
      email: this.email,
    };
  }
}
