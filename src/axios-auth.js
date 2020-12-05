import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://f0ztti2nsk.execute-api.ap-south-1.amazonaws.com/v1/consignment/fetch',
    headers: {
        Authorization: 'Bearer tTU3gFVUdP'
    }
});

export default instance;