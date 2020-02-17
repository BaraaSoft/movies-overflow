
import { https } from '../https';
import { ActionTypes } from '../actionTypes';



export const fetchPopularMovies = (page) => async (dispatch) => {
    const response = await https.get('/movie/popular',
        { params: { api_key: 'b52327a9c201390c336b46ebee1c395b', page } });
    dispatch({
        type: ActionTypes.MOVIES_MOSTPOPULAR,
        payload: response.data.results
    });
}

export const fetchNowPlaying = (page) => async (dispatch) => {
    const response = await https.get('/movie/now_playing',
        { params: { api_key: 'b52327a9c201390c336b46ebee1c395b', page } });
    dispatch({
        type: ActionTypes.MOVIES_NOWPLAYING,
        payload: response.data.results
    });
}

export const fetchUpcomingMovies = (page) => async (dispatch) => {
    const response = await https.get('/movie/upcoming',
        { params: { api_key: 'b52327a9c201390c336b46ebee1c395b', page } });
    dispatch({
        type: ActionTypes.MOVIES_UPCOMING,
        payload: response.data.results
    });
}

export const fetchPopularTv = (page) => async (dispatch) => {
    const response = await https.get('/tv/popular',
        { params: { api_key: 'b52327a9c201390c336b46ebee1c395b', page } });
    dispatch({
        type: ActionTypes.TVS_MOSTPOPULAR,
        payload: response.data.results
    });
}

export const fetchTrendingMovies = (page) => async (dispatch) => {
    const response = await https.get('/trending/movie/day',
        { params: { api_key: 'b52327a9c201390c336b46ebee1c395b', page } });
    dispatch({
        type: ActionTypes.MOVIES_TRENDING,
        payload: response.data.results
    });
}