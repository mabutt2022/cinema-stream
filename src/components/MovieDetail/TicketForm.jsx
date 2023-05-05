import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as moviesAPI from '../../utilities/api/movies.js'
import { sendTicket } from '../../utilities/api/movies.js'

export default function TicketForm({ movie, movieId, movieDate, movieTime, user }) {
    const navigate = useNavigate();
    const [price, setPrice] = useState([]);
    const [totalTicket, setTotalTicket] = useState([]);
    const [ticketPrice, setTicketPrice] = useState({
        adult: 0,
        child: 0,
        senior: 0
    });
    const [ticketActive, setTicketActive] = useState(false);
    const [formData, setFormData] = useState({
        adult: 0,
        child: 0,
        senior: 0,
        movieDate: movieDate[0].date,
        movieTime: movieTime[0].time,
        movieId: movieId,
        userId: user.id
    });

    const numberOfTicket = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];




    async function onChangeTicketPrice(evt) {
        if (evt.target.name === 'adult') {
            setTicketPrice({ ...ticketPrice, adult: evt.target.value * price[0].price })
        }
        if (evt.target.name === 'child') {
            setTicketPrice({ ...ticketPrice, child: evt.target.value * price[1].price })
        }
        if (evt.target.name === 'senior') {
            setTicketPrice({ ...ticketPrice, senior: evt.target.value * price[2].price })
        }
        setFormData({ ...formData, [evt.target.name]: evt.target.value })
    }


    async function handleSubmit(evt) {
        evt.preventDefault();
        try {
            await sendTicket(formData);
            setTotalTicket([]);
            setTicketPrice({ adult: 0, child: 0, senior: 0 });
            setFormData({ adult: 0, child: 0, senior: 0, movieDate: movieDate[0].date, movieTime: movieTime[0].time, movieId: movieId, userId: user.id })
            setTicketActive(false);
            console.log('Done this far')
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        async function getPrice() {
            const dataPrice = await moviesAPI.getPrice();
            return setPrice(dataPrice);;
        }
        getPrice();
    }, []);

    useEffect(() => {
        setTotalTicket([ticketPrice.adult + ticketPrice.child + ticketPrice.senior]);
    }, [ticketPrice]);



    return (
        <>
            <div>
                <button onClick={() => { setTicketActive(!ticketActive) }}>Buy Ticket Here</button>
            </div>

            {ticketActive ?
                <form onSubmit={handleSubmit}>
                    <h3>Ticket Form</h3>
                    <label>{movie}</label>
                    <br />
                    <label>Date</label>
                    <select name="movieDate" id="movieDate" onChange={onChangeTicketPrice}>
                        {movieDate.map((date) => (
                            <option key={date.id} value={date.date}>{date.date.substring(0, 10)}</option>
                        ))}
                    </select>
                    <label>Time</label>
                    <select name="movieTime" id="movieTime" onChange={onChangeTicketPrice}>
                        {movieTime.map((time) => (
                            <option key={time.id} value={time.time}>{time.time}</option>
                        ))}
                    </select>
                    <br /> <br />
                    <div>
                        <label>Adult</label>
                        <select name="adult" id="adult" onChange={onChangeTicketPrice}>
                            {numberOfTicket.map((ticket) => (
                                <option key={ticket} value={ticket}>{ticket}</option>
                            ))}
                        </select>
                        <div>
                            Price per Ticket: ${price[0].price}
                            <br />
                            Total:  ${ticketPrice.adult}
                        </div>
                        <label>Child</label>
                        <select name="child" id="child" onChange={onChangeTicketPrice}>
                            {numberOfTicket.map((ticket) => (
                                <option key={ticket} value={ticket}>{ticket}</option>
                            ))}
                        </select>
                        <div>
                            Price per Ticket: ${price[1].price}
                            <br />
                            Total:  ${ticketPrice.child}
                        </div>
                        <label>Senior</label>
                        <select name="senior" id="senior" onChange={onChangeTicketPrice}>
                            {numberOfTicket.map((ticket) => (
                                <option key={ticket} value={ticket}>{ticket}</option>
                            ))}
                        </select>
                        <div>
                            Price per Ticket: ${price[2].price}
                            <br />
                            Total:  ${ticketPrice.senior}
                        </div>
                        <br />
                        <div>
                            Total ${totalTicket}
                        </div>
                    </div>
                    <div>
                        <button type='submit'>Checkout</button>
                    </div>
                </form>
                : null}

        </>
    );
}