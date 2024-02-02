import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from 'src/common/constants/jwt';
import { IPayloadJWT } from 'src/interfaces/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthUseCase {
  constructor(private jwtService: JwtService) {}

  genenerateAccessToken(payload: IPayloadJWT): string {
    const aToken = this.jwtService.sign(payload, {
      secret: jwtConstants.secret,
      expiresIn: jwtConstants.expiresIn,
    });

    return aToken;
  }

  comparePassword(password: string, hashPassword: string): boolean {
    return bcrypt.compareSync(password, hashPassword);
  }
}
