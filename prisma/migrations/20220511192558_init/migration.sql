/*
  Warnings:

  - You are about to drop the column `userId` on the `projects` table. All the data in the column will be lost.
  - You are about to drop the `queries` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `scripts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "TypeRequests" AS ENUM ('GRAHPQL', 'REST');

-- DropForeignKey
ALTER TABLE "projects" DROP CONSTRAINT "projects_userId_fkey";

-- DropForeignKey
ALTER TABLE "queries" DROP CONSTRAINT "queries_projectId_fkey";

-- DropForeignKey
ALTER TABLE "scripts" DROP CONSTRAINT "scripts_queryId_fkey";

-- AlterTable
ALTER TABLE "projects" DROP COLUMN "userId";

-- DropTable
DROP TABLE "queries";

-- DropTable
DROP TABLE "scripts";

-- DropTable
DROP TABLE "users";

-- CreateTable
CREATE TABLE "requests" (
    "id" SERIAL NOT NULL,
    "title" TEXT,
    "description" TEXT,
    "projectId" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "method" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "requests_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "metrics" (
    "id" SERIAL NOT NULL,
    "title" TEXT,
    "type" "TypeRequests" DEFAULT E'GRAHPQL',
    "content" TEXT,
    "metricId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "metrics_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "requests" ADD CONSTRAINT "requests_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "metrics" ADD CONSTRAINT "metrics_metricId_fkey" FOREIGN KEY ("metricId") REFERENCES "requests"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
