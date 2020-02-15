import { combineReducers } from 'redux';
import { MenuGenreReducer } from './menu/menu.reducer';
import { PopularMoviesReducer, NowPlayingMoviesReducer } from './featureList'



export default combineReducers({
    menuGenre: MenuGenreReducer,
    popularMovies: PopularMoviesReducer,
    nowPlayingMovies: NowPlayingMoviesReducer
});