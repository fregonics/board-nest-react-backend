import { Global, Module } from '@nestjs/common';
import RepoModule from 'src/repo.module';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Global()
@Module({
  imports: [RepoModule],
  controllers: [UserController],
  providers: [UserService, UserController],
  exports: [UserController]
})
export class UserModule {}
