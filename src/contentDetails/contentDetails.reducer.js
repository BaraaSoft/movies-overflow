
import { ActionTypes } from '../actionTypes';
import _ from 'lodash';

export const MovieDetailsReducer = (state = {}, action) => {
    if (action.type === ActionTypes.MOVIE_DETAILS) {
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


export const MovieActorsReducer = (state = [], action) => {
    if (action.type === ActionTypes.MOVIE_ACTORS) {
        return _.uniqBy([...action.payload, ...state], "id");
    }
    return state;
}


export const ActorsAllMoviesReducer = (state = [], action) => {
    if (action.type === ActionTypes.ACTOR_ALL_MOVIES) {
        return _.uniqBy([...action.payload, ...state], "id");
    }
    return state;
}


export const ActorDetailsReducer = (state = {}, action) => {
    if (action.type === ActionTypes.ACTOR_DETAILS) {
        return { ...action.payload };
    }
    return state;
}


