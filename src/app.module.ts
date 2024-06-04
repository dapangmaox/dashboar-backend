import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './services/prisma.service';
import { UserModule } from './user/user.module';
import { ReminderModule } from './reminder/reminder.module';
import { TodoModule } from './todo/todo.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule, ReminderModule, TodoModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
