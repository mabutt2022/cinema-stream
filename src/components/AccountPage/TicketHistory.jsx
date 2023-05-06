import { useState, useEffect } from "react";
import * as moviesAPI from '../../utilities/api/movies.js'
import SingleTicket from "./SingleTicketComp.jsx";
export default function TicketHistory({ user }) {
    const [tickets, setTickets] = useState([]);
    const [active, setActive] = useState(null);

    
    
    
    useEffect(() => {
        async function getTickets() {
            const allTickets = await moviesAPI.getTickets();
            setTickets(allTickets);
        }
        getTickets(); 

    }, []);




    return (
        <>
        {tickets.map((ticket) => (       
                 
            <div>
            <div key={ticket.id}
            onClick={() => {
                if (active === ticket.id) {
                    setActive(null);
                    return;
                }else if (active !== ticket.id) {
                    setActive(ticket.id);
                    return;
                }
            }}>
                
                <SingleTicket ticket={ticket} setActive={setActive} active={active}/>
                
            </div>

                <button onClick={() => {
                    console.log(ticket.id)
                    setActive(null);
                    moviesAPI.deleteTicket(ticket.id);
                    window.location.reload();
                }}>Refund Ticket</button>
                <br /><br />
            </div>
        ))}
        </>
    );
}