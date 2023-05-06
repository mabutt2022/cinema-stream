-- AlterTable
ALTER TABLE "Ticket" ADD COLUMN     "ticketHeaderId" TEXT;

-- CreateTable
CREATE TABLE "TicketHeader" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TicketHeader_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_ticketHeaderId_fkey" FOREIGN KEY ("ticketHeaderId") REFERENCES "TicketHeader"("id") ON DELETE SET NULL ON UPDATE CASCADE;
