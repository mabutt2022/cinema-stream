/*
  Warnings:

  - Added the required column `ticketType` to the `TicketHeader` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `TicketHeader` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `ticketCount` on the `TicketHeader` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "TicketHeader" ADD COLUMN     "ticketType" JSONB NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL,
DROP COLUMN "ticketCount",
ADD COLUMN     "ticketCount" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "TicketHeader" ADD CONSTRAINT "TicketHeader_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
