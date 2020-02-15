
import { ActionTypes } from '../actionTypes';


export const MenuGenreReducer = (state = [], action) => {
    console.log(action.payload)
    if (action.type === ActionTypes.MENU_GENRE) {
        return [...action.payload];
    }
    return state;
}