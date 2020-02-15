
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