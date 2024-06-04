-- CreateEnum
CREATE TYPE "Priority" AS ENUM ('low', 'medium', 'high');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('not__started', 'in_progress', 'completed');

-- CreateTable
CREATE TABLE "Todo" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "dueDate" TIMESTAMP(3) NOT NULL,
    "priority" "Priority" NOT NULL DEFAULT 'medium',
    "status" "Status" NOT NULL DEFAULT 'not__started',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Todo_pkey" PRIMARY KEY ("id")
);
