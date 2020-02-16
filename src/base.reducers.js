import { combineReducers } from 'redux';
import { MenuGenreReducer } from './menu/menu.reducer';
import {
    PopularMoviesReducer, NowPlayingMoviesReducer,
    UpcomingMoviesReducer, PopularTVReducer
} from './featureList';

import { MovieDetailsReducer, SimilarMoviesReducer } from './contentDetails'



export default combineReducers({
    menuGenre: MenuGenreReducer,
    popularMovies: PopularMoviesReducer,
    nowPlayingMovies: NowPlayingMoviesReducer,
    upcommingMovies: UpcomingMoviesReducer,
    popularTVs: PopularTVReducer,
    movieDetails: MovieDetailsReducer,
    similarMovies: SimilarMoviesReducer
});