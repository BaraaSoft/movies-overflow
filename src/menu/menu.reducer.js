
import { ActionTypes } from '../actionTypes';
import _ from 'lodash';

export const MenuGenreReducer = (state = [], action) => {
    console.log(action.payload)
    if (action.type === ActionTypes.MENU_GENRE) {
        return [...action.payload];
    }
    return state;
}


export const SearchedMoviesReducer = (state = [], action) => {
    if (action.type === ActionTypes.MENU_SEARCH) {
        return _.uniqBy([...action.payload, ...state], "id");
    }
    return state;
}