import { Global, Module } from '@nestjs/common';
import RepoModule from 'src/repo.module';
import { MessageController } from './message.controller';
import { MessageService } from './message.service';

@Module({
  imports: [RepoModule],
  controllers: [MessageController],
  providers: [MessageService, MessageController],
  exports: [MessageController]
})
export class MessageModule {}
