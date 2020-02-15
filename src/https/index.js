import axios from 'axios';
//https://api.themoviedb.org/3/movie/550?api_key=b52327a9c201390c336b46ebee1c395b
export const https = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    timeout: 1000,
    params: {
        language: 'en-US'
    }
});

export const getImageUrl = (relativeUrl) => {
    return `https://image.tmdb.org/t/p/original${relativeUrl}`;
}
