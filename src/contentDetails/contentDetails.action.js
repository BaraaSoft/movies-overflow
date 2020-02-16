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
    dispatch({
        type: ActionTypes.MOVIES_SIMILAR,
        payload: response.data.results
    });
}


export const fetchMovieActors = (id) => async (dispatch) => {
    const response = await https.get(`/movie/${id}/credits`,
        { params: { api_key: 'b52327a9c201390c336b46ebee1c395b' } });
    dispatch({
        type: ActionTypes.MOVIE_ACTORS,
        payload: response.data.cast
    });
};

export const fetcActorAllMovies = (id) => async (dispatch) => {
    const response = await https.get(`/person/${id}/movie_credits`,
        { params: { api_key: 'b52327a9c201390c336b46ebee1c395b' } });
    dispatch({
        type: ActionTypes.ACTOR_ALL_MOVIES,
        payload: response.data.cast
    });
};


export const fetcActorDetails = (id) => async (dispatch) => {
    const response = await https.get(`/person/${id}`,
        { params: { api_key: 'b52327a9c201390c336b46ebee1c395b' } });


    dispatch({
        type: ActionTypes.ACTOR_DETAILS,
        payload: response.data
    });
};




