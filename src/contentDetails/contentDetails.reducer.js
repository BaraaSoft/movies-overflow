
import { ActionTypes } from '../actionTypes';
import _ from 'lodash';

export const MovieDetailsReducer = (state = {}, action) => {
    if (action.type === ActionTypes.MOVIE_DETAILS) {
        console.log(action.payload)
        return { ...action.payload }
    }
    return state;
}


export const SimilarMoviesReducer = (state = [], action) => {
    if (action.type === ActionTypes.MOVIES_SIMILAR) {
        return _.uniqBy([...action.payload, ...state], "id");
    }
    return state;
}
