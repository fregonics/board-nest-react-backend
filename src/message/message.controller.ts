import { BadRequestException, Body, Controller, Get, Post, Query } from '@nestjs/common';
import RepoService from 'src/repo.service';

interface CreateMessageDto {
    user_id: number;
    content: string;
}

@Controller('message')
export class MessageController {

    public constructor(public readonly repoService: RepoService) {}

    @Get()
    async show(@Query('user') user: string) {
        if(!user){
            return await this.repoService.messageRepo
                .createQueryBuilder('messages')
                .leftJoin('users', 'u')
                .addSelect('u.email')
                .getMany()
        } 
        
        return await this.repoService.messageRepo.find({where: {
            user_id: parseInt(user, 10)
        }})
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
