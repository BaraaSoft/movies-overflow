
import { ActionTypes } from '../actionTypes';
import _ from 'lodash';

export const PopularMoviesReducer = (state = [], action) => {
    if (action.type === ActionTypes.MOVIES_MOSTPOPULAR) {
        return _.uniqBy([...state, ...action.payload], "id");
    }
    return state;
}

export const NowPlayingMoviesReducer = (state = [], action) => {
    if (action.type === ActionTypes.MOVIES_NOWPLAYING) {
        return _.uniqBy([...state, ...action.payload], "id");
    }
    return state;
}

export const UpcomingMoviesReducer = (state = [], action) => {
    if (action.type === ActionTypes.MOVIES_UPCOMING) {
        return _.uniqBy([...state, ...action.payload], "id");
    }
    return state;
}

export const PopularTVReducer = (state = [], action) => {
    if (action.type === ActionTypes.TVS_MOSTPOPULAR) {
        return _.uniqBy([...state, ...action.payload], "id");
    }
    return state;
}

export const TrendingMoviesReducer = (state = [], action) => {
    if (action.type === ActionTypes.MOVIES_TRENDING) {
        return _.uniqBy([...state, ...action.payload], "id");
    }
    return state;
}