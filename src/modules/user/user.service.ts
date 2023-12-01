import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { BaseRepository } from 'src/common/base/repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService extends BaseRepository<User> {
  constructor(@InjectRepository(User) repository: Repository<User>) {
    super(repository);
  }

  async createNew(createUserDto: CreateUserDto) {
    const salt = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(createUserDto.password, salt);

    const newUser = new User();
    console.log('debug');

    newUser.email = createUserDto.email;
    newUser.password = hashPass;
    newUser.name = createUserDto.name;
    console.log(newUser);

    const user = await this.create(newUser);
    console.log('new user created');
    console.log(user);
    return user;
  }
}
