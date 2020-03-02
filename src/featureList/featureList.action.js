
import { https } from '../https';
import { ActionTypes } from '../actionTypes';
import moment from 'moment'



export const fetchPopularMovies = (page) => async (dispatch) => {
    const response = await https.get('/movie/popular',
        { params: { api_key: 'b52327a9c201390c336b46ebee1c395b', page } });
    await dispatch({
        type: ActionTypes.MOVIES_MOSTPOPULAR,
        payload: setPageNum(response.data.results, page)
    });
    await dispatch(setPagination({ total: response.data.total_pages }))
}

export const fetchNowPlaying = (page) => async (dispatch) => {
    const response = await https.get('/movie/now_playing',
        { params: { api_key: 'b52327a9c201390c336b46ebee1c395b', page } });
    await dispatch({
        type: ActionTypes.MOVIES_NOWPLAYING,
        payload: setPageNum(response.data.results, page)
    });
    await dispatch(setPagination({ total: response.data.total_pages }))
}

export const fetchUpcomingMovies = (page) => async (dispatch) => {
    const response = await https.get('/movie/upcoming',
        { params: { api_key: 'b52327a9c201390c336b46ebee1c395b', page } });
    await dispatch({
        type: ActionTypes.MOVIES_UPCOMING,
        payload: setPageNum(response.data.results, page)
    });
    await dispatch(setPagination({ total: response.data.total_pages }))
}

export const fetchPopularTv = (page) => async (dispatch) => {
    const response = await https.get('/tv/popular',
        { params: { api_key: 'b52327a9c201390c336b46ebee1c395b', page } });
    await dispatch({
        type: ActionTypes.TVS_MOSTPOPULAR,
        payload: setPageNum(response.data.results, page)
    });
    await dispatch(setPagination({ total: response.data.total_pages }))
}

export const fetchTrendingMovies = (page) => async (dispatch) => {
    const response = await https.get('/trending/movie/day',
        { params: { api_key: 'b52327a9c201390c336b46ebee1c395b', page } });
    await dispatch({
        type: ActionTypes.MOVIES_TRENDING,
        payload: setPageNum(response.data.results, page)
    });
    await dispatch(setPagination({ total: response.data.total_pages }))
}

export const fetchMoviesByGenre = (page, genreId) => async (dispatch) => {
    const response = await https.get('/discover/movie',
        {
            params: {
                api_key: 'b52327a9c201390c336b46ebee1c395b',
                sort_by: 'release_date.desc',
                include_video: true,
                with_genres: genreId,
                'vote_average.gte': 4.7,
                page
            }
        });
    await dispatch({
        type: ActionTypes.MOVIES_BY_GENRE,
        payload: setPageNum(response.data.results, page)
    });
    await dispatch(setPagination({ total: response.data.total_pages }))
}

export const fetchTopMoviesRecently = (page) => async (dispatch) => {
    const response = await https.get('/discover/movie',
        {
            params: {
                api_key: 'b52327a9c201390c336b46ebee1c395b',
                // sort_by: 'popularity.desc',
                'vote_average.gte': 7,
                'primary_release_date.gte': moment().subtract(8, 'month').format(),
                page
            }
        });
    await dispatch({
        type: ActionTypes.MOVIES_BY_GENRE,
        payload: setPageNum(response.data.results, page)
    });
    await dispatch(setPagination({ total: response.data.total_pages }))
}

export const clearMoviesByGenre = (page, genreId) => async (dispatch) => {
    await dispatch({
        type: ActionTypes.CLEAR_MOVIES_BY_GENRE,
        payload: []
    });
}


const setPagination = (pageInfo) => async (dispatch) => {
    dispatch({
        type: ActionTypes.PAGINATION,
        payload: pageInfo
    });
}
const setPageNum = (arr = [], pageNum) => {
    return arr.map((item) => ({ ...item, pageNum }));
}