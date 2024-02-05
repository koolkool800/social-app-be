import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { SignInDto } from '../dto/auth/sign-in.dto';
import { SignInResponse } from '../responses/sign-in.response';
import { SuccessResponse } from 'src/common/responses/success.response';
import { SignUpDto } from '../dto/auth/sign-up.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('sign-in')
  async signIn(@Body() body: SignInDto) {
    console.log('here');
    const result = await this.authService.signIn(body);
    return SuccessResponse.call(new SignInResponse(result));
  }

  @Post('sign-up')
  async signUp(@Body() body: SignUpDto) {
    const result = await this.authService.signUp(body);
    return SuccessResponse.call(result);
  }
}
