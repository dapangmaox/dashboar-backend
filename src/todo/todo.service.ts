import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { Todo } from '@prisma/client';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodoService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateTodoDto) {
    return this.prisma.todo.create({ data });
  }

  async findAll() {
    return this.prisma.todo.findMany({ orderBy: { updatedAt: 'desc' } });
  }

  async findOne(id: number): Promise<Todo> {
    return this.prisma.todo.findUnique({ where: { id } });
  }

  async update(id: number, data: UpdateTodoDto) {
    return this.prisma.todo.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    return this.prisma.todo.delete({ where: { id } });
  }
}
