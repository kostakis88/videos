import axios from 'axios';

const KEY = 'AIzaSyCAcavSHnvKAv0zN8lnmr8JMToeOtDINto';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});