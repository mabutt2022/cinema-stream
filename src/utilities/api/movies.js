import sendRequest from "../send-request";

const BASE_URL = '/api/movies';
// const sendRequest = require('../send-request');

export async function moviesList() {
    return sendRequest(`${BASE_URL}`);
}

export async function getPrice() {
    return sendRequest(`${BASE_URL}/price`);
}

export async function sendTicket(formData) {
    return sendRequest(`${BASE_URL}/ticket`, 'POST', formData);
}

export async function getTickets() {
    return sendRequest(`${BASE_URL}/getTickets`);
}

export async function deleteTicket(id) {
    console.log(id);
    return sendRequest(`${BASE_URL}/deleteTicket/${id}`, 'DELETE');
}