import sendRequest from "../send-request";

const BASE_URL = '/api/movies';
// const sendRequest = require('../send-request');

export async function moviesList() {
    return sendRequest(`${BASE_URL}`);
}

