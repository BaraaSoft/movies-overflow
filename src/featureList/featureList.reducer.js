
import { ActionTypes } from '../actionTypes';
import _ from 'lodash';

export const PopularMoviesReducer = (state = [], action) => {
    if (action.type === ActionTypes.MOVIES_MOSTPOPULAR) {
        return _.uniqBy([...state, ...action.payload], "id")
            .sort(({ pageNum: pageNumA }, { pageNum: pageNumB }) => pageNumA - pageNumB);
    }
    return state;
}

export const NowPlayingMoviesReducer = (state = [], action) => {
    if (action.type === ActionTypes.MOVIES_NOWPLAYING) {
        return _.uniqBy([...state, ...action.payload], "id")
            .sort(({ pageNum: pageNumA }, { pageNum: pageNumB }) => pageNumA - pageNumB);
    }
    return state;
}

export const UpcomingMoviesReducer = (state = [], action) => {
    if (action.type === ActionTypes.MOVIES_UPCOMING) {
        return _.uniqBy([...state, ...action.payload], "id")
            .sort(({ pageNum: pageNumA }, { pageNum: pageNumB }) => pageNumA - pageNumB);
    }
    return state;
}

export const PopularTVReducer = (state = [], action) => {
    if (action.type === ActionTypes.TVS_MOSTPOPULAR) {
        return _.uniqBy([...state, ...action.payload], "id")
            .sort(({ pageNum: pageNumA }, { pageNum: pageNumB }) => pageNumA - pageNumB);
    }
    return state;
}

export const TrendingMoviesReducer = (state = [], action) => {
    if (action.type === ActionTypes.MOVIES_TRENDING) {
        return _.uniqBy([...state, ...action.payload], "id")
            .sort(({ pageNum: pageNumA }, { pageNum: pageNumB }) => pageNumA - pageNumB);
    }
    return state;
}

export const GenreMoviesReducer = (state = [], action) => {
    if (action.type === ActionTypes.MOVIES_BY_GENRE) {
        return _.uniqBy([...state, ...action.payload], "id")
            .sort(({ pageNum: pageNumA }, { pageNum: pageNumB }) => pageNumA - pageNumB);
    } else if (action.type == ActionTypes.CLEAR_MOVIES_BY_GENRE) {
        return [];
    }
    return state;
}

export const PaginationReducer = (state = { currentPage: 1, total: 16, pageSize: 16 }, action) => {
    if (action.type == ActionTypes.PAGINATION) {
        return { ...state, ...action.payload }
    }
    return state;
}