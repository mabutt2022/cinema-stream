import { useState } from "react";
export default function SingleTicket({ ticket, setActive, active }) {
    

    return (
        <>
            <div>Trasaction Reference: {ticket.id.substring(0, 7).toUpperCase()}</div>
            <div>Movie: {ticket.movie.movie}</div>
            <div>Order Total: {ticket.total}</div>

            {active === ticket.id ?
            
            <div>
                <br />
                {ticket.ticket.map((t) => (
                    <div key={t.id}>
                        <div>Ticket ID: {t.id.substring(0,7).toUpperCase()}</div>
                        <div>Ticket Type: {t.ticketType}</div>
                        <div>${t.price}</div>         
                    </div>
                ))}
            </div>
            :
            null
            }
        </>
    );
}