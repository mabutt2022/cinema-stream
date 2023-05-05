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
