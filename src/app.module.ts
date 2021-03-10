import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MessageModule } from './message/message.module';

import * as ormOptions from './config/orm'
import RepoModule from './repo.module';

@Module({
  imports: [TypeOrmModule.forRoot(ormOptions), RepoModule, UserModule, MessageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
