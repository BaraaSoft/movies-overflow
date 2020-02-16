import { https } from '../https';
import { ActionTypes } from '../actionTypes';



export const fetchMovieDetails = (id) => async (dispatch) => {
    const response = await https.get(`/movie/${id}`,
        { params: { api_key: 'b52327a9c201390c336b46ebee1c395b' } });
    dispatch({
        type: ActionTypes.MOVIE_DETAILS,
        payload: response.data
    });
}

export const fetchTvDetails = (id) => async (dispatch) => {
    const response = await https.get(`/tv/${id}`,
        { params: { api_key: 'b52327a9c201390c336b46ebee1c395b' } });
    dispatch({
        type: ActionTypes.MOVIE_DETAILS,
        payload: response.data
    });
}


export const fetchSimilarMovies = (id) => async (dispatch) => {
    const response = await https.get(`/movie/${id}/similar`,
        { params: { api_key: 'b52327a9c201390c336b46ebee1c395b' } });
    console.log({ res: response.data.results })
    dispatch({
        type: ActionTypes.MOVIES_SIMILAR,
        payload: response.data.results
    });
}