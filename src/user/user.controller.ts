import { Controller, Get, Param } from '@nestjs/common';
import { User } from '@prisma/client';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get(':username')
  async getUserByEmail(@Param('username') username: string): Promise<User> {
    return this.userService.findOne({ username: username });
  }
}
