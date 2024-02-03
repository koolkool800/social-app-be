import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../../entities/user.entity';
import { FindOneOptions, Repository } from 'typeorm';
import { SignUpDto } from '../../dto/auth/sign-up.dto';
import { ErrorException } from 'src/configs/exceptions/exception-error';
import * as bcrypt from 'bcrypt';
import { CUSTOMER_TYPE, LOGIN_TYPE, USER_ROLE } from '../../enum/user.enum';
@Injectable()
export class UserUseCase {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async createUser(body: SignUpDto): Promise<UserEntity> {
    try {
      const user = new UserEntity();
      user.name = body.name;
      user.email = body.email;
      user.password = this.hashPassword(body.password);
      user.phoneNumber = body.phoneNumber;
      user.loginType = LOGIN_TYPE.NORMAL;
      user.customerType = CUSTOMER_TYPE.PERSONAL;
      // user.role = USER_ROLE.USER;

      const userEntity = this.userRepository.create(user);
      await this.userRepository.save(userEntity);
      return userEntity;
    } catch (error) {
      console.log(error);
    }
  }

  async findUserExist(
    options: FindOneOptions<UserEntity>,
  ): Promise<UserEntity> {
    const user = await this.userRepository.findOne(options);
    return user;
  }

  hashPassword(password: string): string {
    return bcrypt.hashSync(password, 10);
  }
}
