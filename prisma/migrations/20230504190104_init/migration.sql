/*
  Warnings:

  - Added the required column `movieDate` to the `Ticket` table without a default value. This is not possible if the table is not empty.
  - Added the required column `movieTime` to the `Ticket` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Ticket" ADD COLUMN     "movieDate" DATE NOT NULL,
ADD COLUMN     "movieTime" TEXT NOT NULL;
