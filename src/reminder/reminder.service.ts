import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { CreateReminderDto } from './dto/create-reminder.dto';
import { UpdateReminderDto } from './dto/update-reminder.dto';
import { Reminder } from '@prisma/client';

@Injectable()
export class ReminderService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateReminderDto) {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return this.prisma.reminder.create({ data });
  }

  async findAll() {
    return this.prisma.reminder.findMany({ orderBy: { updatedAt: 'desc' } });
  }

  async findOne(id: number): Promise<Reminder> {
    return this.prisma.reminder.findUnique({ where: { id } });
  }

  async update(id: number, data: UpdateReminderDto) {
    return this.prisma.reminder.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    return this.prisma.reminder.delete({ where: { id } });
  }
}
