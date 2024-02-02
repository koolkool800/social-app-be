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
import { UserUseCase } from '../usecases/user/user.usecase';
import { AuthUseCase } from '../usecases/auth/auth.usecase';
import { IPayloadJWT } from 'src/interfaces/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userUseCase: UserUseCase,
    private authUseCase: AuthUseCase,
  ) {}

  async signUp(body: SignUpDto): Promise<boolean> {
    const isExist = await this.userUseCase.findUserExist({
      where: { email: body.email },
    });

    if (isExist) {
      throw new ErrorException(
        AuthErrorConstants.EXIST,
        'User already exist with email',
      );
    }

    const userEntity = await this.userUseCase.createUser(body);

    return userEntity ? true : false;
  }

  async signIn(
    body: SignInDto,
  ): Promise<{ accessToken: string; email: string }> {
    const user = await this.userUseCase.findUserExist({
      where: { email: body.email },
    });
    if (!user) {
      throw new ErrorException(AuthErrorConstants.NOT_FOUND, 'User not found');
    }

    const isPasswordMatch = this.authUseCase.comparePassword(
      body.password,
      user.password,
    );

    if (!isPasswordMatch) {
      throw new ErrorException(
        AuthErrorConstants.PASSWORD_INVALID,
        'Password is invalid',
      );
    }

    const payload: IPayloadJWT = {
      id: user.id,
      email: user.email,
      role: user.role,
    };

    const token = this.authUseCase.genenerateAccessToken(payload);

    return { accessToken: token, email: user.email };
  }
}
