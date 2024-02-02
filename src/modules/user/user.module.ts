import { Module } from '@nestjs/common';
import { UserService } from './services/user.service';
import { UserController } from './controllers/user.controller';
import { AuthController } from './controllers/auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { UserUseCase } from './usecases/user/user.usecase';
import { AuthUseCase } from './usecases/auth/auth.usecase';
import { AuthService } from './services/auth.service';
import { OrderEntity } from '../order/entities/order.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, OrderEntity])],
  controllers: [UserController, AuthController],
  providers: [UserService, UserUseCase, AuthUseCase, AuthService],
})
export class UserModule {}
