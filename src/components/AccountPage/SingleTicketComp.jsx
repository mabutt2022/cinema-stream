import { useState, useEffect } from 'react';
import * as moviesAPI from '../../utilities/api/movies.js'
export default function SingleTicket({ ticket, setActive, active, setTickets }) {
    const [runticket, setRunTicket] = useState(false);
    useEffect(() => {

    async function getTickets() {
        const allTickets = await moviesAPI.getTickets();
        setTickets(allTickets);
    }
    getTickets();
}, [runticket]);

    return (
        <>
            <table className='rwd-table'>
                <tbody>
                    <tr>
                        <th>Transaction&nbsp;#</th>
                        <th>Movie</th>
                        <th>Ticket&nbsp;Total</th>
                        <th>Order&nbsp;Total</th>
                    </tr>
                    <tr>
                        <td data-th='Transaction #'>{ticket.id.substring(0, 7).toUpperCase()}</td>
                        <td data-th='Movie'>{ticket.movie.movie}</td>
                        {/* <td data-th='Movie Date'>{ticket.ticket[0].movieDate.substring(0, 10)}</td>
                        <td data-th='Movie Time'>{ticket.ticket[0].movieTime}</td> */}
                        <td data-th='Ticket Total'>{ticket.ticketCount}</td>
                        <td data-th='Order Total'>${ticket.total}</td>
                    </tr>
                    <tr>
                        {active === ticket.id ?
                            <td colSpan='6' data-th='Ticket Details'>
                                <button
                                    className="btn btn-primary mb-3 pass-btn purchase"
                                    onClick={() => setActive('')}>Hide Details</button>
                                <span className="space"> </span>
                                <button
                                    className="btn btn-primary mb-3 pass-btn purchase"
                                    onClick={() => {
                                        console.log(ticket.id)
                                        setActive(null);
                                        moviesAPI.deleteTicket(ticket.id);
                                        setRunTicket(!runticket)
                                        // window.location.reload();
                                        
                                    }}>Refund Ticket</button>
                            </td>
                            :
                            <td colSpan='6' data-th='Ticket Details'>
                                <button
                                    className="btn btn-primary mb-3 pass-btn purchase"
                                    onClick={() => setActive(ticket.id)}>Show Details</button>
                                <span className="space"> </span>
                                <button
                                    className="btn btn-primary mb-3 pass-btn purchase"
                                    onClick={() => {
                                        console.log(ticket.id)
                                        setActive(null);
                                        moviesAPI.deleteTicket(ticket.id);
                                        setRunTicket(!runticket)
                                        // window.location.reload();
                                    }}>Refund Ticket</button>
                            </td>
                        }
                    </tr>
                </tbody>
            </table>

            {active === ticket.id ?
                <table className='rwd-table'>
                    <tbody>
                    <tr>
                        <th>Ticket&nbsp;ID</th>
                        <th>Ticket&nbsp;Type</th>
                        <th>Movie&nbsp;Date</th>
                        <th>Movie&nbsp;Time</th>
                        <th>Price</th>
                    </tr>

                    {ticket.ticket.map((t) => (
                        <tr key={t.id}>
                            <td data-th='Ticket ID'>{t.id.substring(0, 7).toUpperCase()}</td>
                            <td data-th='Ticket Type'>{t.ticketType}</td>
                            <td data-th='Movie Date'>{t.movieDate.substring(0, 10)}</td>
                            <td data-th='Movie Time'>{t.movieTime}</td>
                            <td data-th='Price'>${t.price}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                :
                null
            }
        </>
    );
}