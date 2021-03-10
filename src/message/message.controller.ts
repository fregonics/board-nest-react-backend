import { BadRequestException, Body, Controller, Get, Post } from '@nestjs/common';
import RepoService from 'src/repo.service';

interface CreateMessageDto {
    user_id: number;
    content: string;
}

@Controller('message')
export class MessageController {

    public constructor(public readonly repoService: RepoService) {}

    @Get()
    async show() {
        return await this.repoService.messageRepo.find()
    }

    @Post()
    async create(@Body() messageData: CreateMessageDto) {
        if (!this.repoService.userRepo.findOne({
            id: messageData.user_id
        })) throw BadRequestException

        const newMessage = this.repoService.messageRepo.create(
            {
                user_id: messageData.user_id,
                content: messageData.content
            }
        )

        return this.repoService.messageRepo.save(newMessage)
    }

}
