/* eslint-disable no-undef */
import axios from 'axios';

export default axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    timeout: 5000,
    headers: { 'Content-Type': 'application/json' }
});
