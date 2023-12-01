import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { UserService } from '../user/user.service';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { User } from '../user/entities/user.entity';
import { JWTPayload } from 'src/common/interfaces/jwt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async register(dto: CreateUserDto) {
    const newUser = await this.userService.create(dto);
    console.log(newUser);
    const tokens = this.genToken(newUser);
    console.log(tokens);

    return tokens;
  }

  genToken(user: User) {
    const payload: JWTPayload = {
      email: user.email,
      id: user.id,
      name: user.name,
    };

    const [accessToken, refreshToken] = [
      this.jwtService.sign(payload, { expiresIn: '15m' }),
      this.jwtService.sign(payload, { expiresIn: '7d' }),
    ];

    return {
      accessToken,
      refreshToken,
    };
  }
}
