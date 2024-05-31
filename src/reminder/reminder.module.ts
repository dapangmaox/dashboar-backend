import { Module } from '@nestjs/common';
import { ReminderService } from './reminder.service';
import { ReminderController } from './reminder.controller';
import { PrismaService } from 'src/services/prisma.service';

@Module({
  providers: [ReminderService, PrismaService],
  controllers: [ReminderController],
})
export class ReminderModule {}
