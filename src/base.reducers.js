import { combineReducers } from 'redux';
import { MenuGenreReducer } from './menu/menu.reducer';



export default combineReducers({ menuGenre: MenuGenreReducer });