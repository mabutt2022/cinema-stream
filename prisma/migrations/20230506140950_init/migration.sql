/*
  Warnings:

  - Added the required column `ticketCount` to the `TicketHeader` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total` to the `TicketHeader` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TicketHeader" ADD COLUMN     "ticketCount" JSONB NOT NULL,
ADD COLUMN     "total" DOUBLE PRECISION NOT NULL;
