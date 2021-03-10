import { Controller, Get } from '@nestjs/common';
import RepoService from './repo.service';

@Controller()
export class AppController {
  constructor(private readonly repoService: RepoService) {}

  @Get()
  async getHello() {
    const userCount = await this.repoService.userRepo.count()
    return `Number of users: ${userCount}`
  }
}
