/*
  Warnings:

  - Added the required column `movieId` to the `TicketHeader` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TicketHeader" ADD COLUMN     "movieId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "TicketHeader" ADD CONSTRAINT "TicketHeader_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
