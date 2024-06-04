import { Priority, Status } from '@prisma/client';

export class CreateTodoDto {
  title: string;
  description?: string;
  dueDate: Date;
  priority: Priority;
  status: Status;
}
