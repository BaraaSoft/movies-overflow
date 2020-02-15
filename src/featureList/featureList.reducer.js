
import { ActionTypes } from '../actionTypes';
import _ from 'lodash'
_.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');

export const PopularMoviesReducer = (state = [], action) => {
    console.log(action.payload)
    if (action.type === ActionTypes.MOVIES_MOSTPOPULAR) {
        return _.uniqBy([...action.payload, ...state], "id");
    }
    return state;
}

export const NowPlayingMoviesReducer = (state = [], action) => {
    console.log(action.payload)
    if (action.type === ActionTypes.MOVIES_NOWPLAYING) {
        return _.uniqBy([...action.payload, ...state], "id");
    }
    return state;
}