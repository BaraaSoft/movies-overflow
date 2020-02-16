import { combineReducers } from 'redux';
import { MenuGenreReducer, SearchedMoviesReducer } from './menu/menu.reducer';
import {
    PopularMoviesReducer, NowPlayingMoviesReducer,
    UpcomingMoviesReducer, PopularTVReducer,
    TrendingMoviesReducer,
} from './featureList';

import { MovieDetailsReducer, SimilarMoviesReducer, MovieActorsReducer, ActorDetailsReducer, ActorsAllMoviesReducer } from './contentDetails'



export default combineReducers({
    menuGenre: MenuGenreReducer,
    searchedMovies: SearchedMoviesReducer,
    popularMovies: PopularMoviesReducer,
    nowPlayingMovies: NowPlayingMoviesReducer,
    upcommingMovies: UpcomingMoviesReducer,
    popularTVs: PopularTVReducer,
    movieDetails: MovieDetailsReducer,
    similarMovies: SimilarMoviesReducer,
    trendingMovies: TrendingMoviesReducer,
    movieActors: MovieActorsReducer,
    actorDetails: ActorDetailsReducer,
    actorAllMovies: ActorsAllMoviesReducer
});