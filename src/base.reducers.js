import { combineReducers } from 'redux';
import { MenuGenreReducer, SearchedMoviesReducer } from './menu/menu.reducer';
import {
    PopularMoviesReducer, NowPlayingMoviesReducer,
    UpcomingMoviesReducer, PopularTVReducer, PaginationReducer,
    TrendingMoviesReducer, GenreMoviesReducer
} from './featureList';

import { MovieDetailsReducer, SimilarMoviesReducer, MovieActorsReducer, ActorDetailsReducer, ActorsAllMoviesReducer, SimilarTvsReducer, MovieTrailerReducer } from './contentDetails'



export default combineReducers({
    menuGenre: MenuGenreReducer,
    searchedMovies: SearchedMoviesReducer,
    popularMovies: PopularMoviesReducer,
    nowPlayingMovies: NowPlayingMoviesReducer,
    upcommingMovies: UpcomingMoviesReducer,
    popularTVs: PopularTVReducer,
    movieDetails: MovieDetailsReducer,
    similarMovies: SimilarMoviesReducer,
    similarTvs: SimilarTvsReducer,
    trendingMovies: TrendingMoviesReducer,
    movieActors: MovieActorsReducer,
    actorDetails: ActorDetailsReducer,
    actorAllMovies: ActorsAllMoviesReducer,
    pagination: PaginationReducer,
    genreMovies: GenreMoviesReducer,
    movieTrailer: MovieTrailerReducer

});