import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as moviesAPI from '../../utilities/api/movies.js'
import { sendTicket } from '../../utilities/api/movies.js'
import './TicketForm.css';

export default function TicketForm({ movie, movieId, movieDate, movieTime, user }) {
    // const val = 'margin-left:40px;'
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
        userId: user.id,
        orderTotal: 0
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
        setFormData({ ...formData, orderTotal: ticketPrice.adult + ticketPrice.child + ticketPrice.senior })
    }, [ticketPrice]);



    return (
        <>
            <div>
                <br />
                <button className='ticket-btn' onClick={() => { setTicketActive(!ticketActive) }}>Buy Ticket Here</button>
            </div>
            <br />

            {ticketActive ?
                <form onSubmit={handleSubmit}>
                    <h2 className='h2-ticketform'>Ticket Form</h2>
                    <label className='label-ticketform'>Movie: &nbsp;&nbsp;&nbsp;{movie}</label>
                    <br />
                    <label className='label-ticketform'>Date</label>&nbsp;&nbsp;&nbsp;
                    <select name="movieDate" id="movieDate" onChange={onChangeTicketPrice}>
                        {movieDate.map((date) => (
                            <option key={date.id} value={date.date}>{date.date.substring(0, 10)}</option>
                        ))}
                    </select>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <label className='label-ticketform'>Time</label>&nbsp;&nbsp;&nbsp;
                    <select name="movieTime" id="movieTime" onChange={onChangeTicketPrice}>
                        {movieTime.map((time) => (
                            <option key={time.id} value={time.time}>{time.time}</option>
                        ))}
                    </select>
                    <br /> <br />
                    <table className='rwd-table'>
                        <tbody>
                            <tr>
                                <th>Age</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                            <tr>
                                <td data-th="title">Adult</td>
                                <td data-th="price">${price[0].price}</td>
                                <td data-th="quantity">
                                    <select name="adult" id="adult" onChange={onChangeTicketPrice}>
                                        {numberOfTicket.map((ticket) => (
                                            <option key={ticket} value={ticket}>{ticket}</option>
                                        ))}
                                    </select>
                                </td>
                                <td data-th="price">${ticketPrice.adult}</td>
                            </tr>
                            <tr>
                                <td data-th="title">Child</td>
                                <td data-th="price">${price[1].price}</td>
                                <td data-th="quantity">
                                    <select name="child" id="child" onChange={onChangeTicketPrice}>
                                        {numberOfTicket.map((ticket) => (
                                            <option key={ticket} value={ticket}>{ticket}</option>
                                        ))}
                                    </select>
                                </td>
                                <td data-th="price">${ticketPrice.child}</td>
                            </tr>
                            <tr>
                                <td data-th="title">Senior</td>
                                <td data-th="price">${price[2].price}</td>
                                <td data-th="quantity">
                                    <select name="senior" id="senior" onChange={onChangeTicketPrice}>
                                        {numberOfTicket.map((ticket) => (
                                            <option key={ticket} value={ticket}>{ticket}</option>
                                        ))}
                                    </select>
                                </td>
                                <td data-th="price">${ticketPrice.senior}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='checkout-button'>
                        <button className='button' type='submit'>Checkout</button>
                    </div>
                    <div className='result-ticketform' id='total_cost'>CAD ${totalTicket}</div>
                </form>
                : null}

        </>
    );
}