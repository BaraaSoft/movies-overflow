
import { https } from '../https';
import { ActionTypes } from '../actionTypes';



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


const setPagination = (pageInfo) => async (dispatch) => {
    dispatch({
        type: ActionTypes.PAGINATION,
        payload: pageInfo
    });
}
const setPageNum = (arr = [], pageNum) => {
    return arr.map((item) => ({ ...item, pageNum }));
}