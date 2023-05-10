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

                <div key={ticket.id}>
                    <div key={ticket.id}
                    >


                        <SingleTicket ticket={ticket} setActive={setActive} active={active} setTickets={setTickets} />

                    </div>


                </div>
            ))}
        </>
    );
}