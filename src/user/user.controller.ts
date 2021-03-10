import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import RepoService from 'src/repo.service';

interface CreateUserDto {
    email: string;
}

@Controller('user')
export class UserController {

    constructor(private readonly repoService: RepoService) {}

    @Get()
    getUsers() {
        return this.repoService.userRepo.find();
    }

    @Post()
    async createOrDetect(@Body() userData: CreateUserDto) {
        let user = await this.repoService.userRepo.findOne({email: userData.email})
        
        if (!user) {
            user = this.repoService.userRepo.create(
            {
                email: userData.email
            })
    
            this.repoService.userRepo.save(user)
        }
        
        return user
    }

}
