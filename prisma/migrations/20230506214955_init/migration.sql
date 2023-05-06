-- DropForeignKey
ALTER TABLE "Ticket" DROP CONSTRAINT "Ticket_ticketHeaderId_fkey";

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_ticketHeaderId_fkey" FOREIGN KEY ("ticketHeaderId") REFERENCES "TicketHeader"("id") ON DELETE CASCADE ON UPDATE CASCADE;
