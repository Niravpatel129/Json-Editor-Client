import axios from 'axios';

const BASE_URL = 'https://random-data-api.com/api';

const fetcher = (url) => axios.get(BASE_URL + url).then((res) => res.data);

export default fetcher;
