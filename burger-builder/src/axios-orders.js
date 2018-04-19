import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-dbdb2.firebaseio.com/'
});

export default instance;

