import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { SignUpDto } from '../dto/auth/sign-up.dto';
import { SignInDto } from '../dto/auth/sign-in.dto';
import { SignInResponse } from '../responses/sign-in.response';
import { CUSTOMER_TYPE, LEVEL_USER, LOGIN_TYPE } from '../enum/user.enum';
import { ErrorException } from 'src/configs/exceptions/exception-error';
import { AuthErrorConstants } from '../contants/auth.error';

@Injectable()
export class AuthService {
  constructor() {}

  async signUp(body: SignUpDto): Promise<boolean> {
    const user = new UserEntity();
    user.name = body.name;
    user.email = body.email;
    user.password = body.password;
    user.phoneNumber = body.phoneNumber;

    const userEntity = this.userRepository.create(user);

    await this.userRepository.save(userEntity);

    return true;
  }

  async signIn(body: SignInDto): Promise<SignInResponse> {
    const user = await this.userRepository.findOne({
      where: {
        email: body.email,
      },
    });

    if (!user) {
      throw new ErrorException(AuthErrorConstants.NOT_FOUND, 'User not found');
    }
  }
}
