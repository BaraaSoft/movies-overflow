import React, { Component, useEffect, useState } from 'react';
import {
    useParams,
    useLocation,
} from "react-router-dom";
import { PageHeader } from 'antd';
import styled from 'styled-components';
import { connect } from 'react-redux';

import {
    FeatureList, fetchPopularMovies,
    fetchNowPlaying, fetchPopularTv,
    fetchUpcomingMovies, fetchTrendingMovies, PaginationList
} from '../featureList';


import { MoreviewTypes, Genre } from '../moreviewTypes';



const DivMain = styled.div`
    overflow:hidden;
`

function fetchData(props, queryParams, pagenum) {
    const {
        fetchPopularMovies, fetchNowPlaying,
        fetchPopularTv, fetchUpcomingMovies, fetchTrendingMovies
    } = props
    let info = queryParams.info || "";
    switch (info.toUpperCase()) {
        case MoreviewTypes.MOST_POPULAR:
            fetchPopularMovies(pagenum);
            break;
        case MoreviewTypes.NOW_SHOWING:
            fetchNowPlaying(pagenum);
            break;
        case MoreviewTypes.POPULAR_TV_SHOWS:
            fetchPopularTv(pagenum);
            break;
        case MoreviewTypes.TRENDING:
            fetchTrendingMovies(pagenum);
            break;
        case MoreviewTypes.UP_COMING:
            fetchUpcomingMovies(pagenum);
            break;
        default:
            break;
    }
}

function selectDataSource(props, queryParams) {
    const {
        popularMovies, nowPlayingMovies,
        upcommingMovies, popularTVs, trendingMovies,
    } = props;
    let info = queryParams.info || "";
    switch (info.toUpperCase()) {
        case MoreviewTypes.MOST_POPULAR:
            return popularMovies;
        case MoreviewTypes.NOW_SHOWING:
            return nowPlayingMovies;
        case MoreviewTypes.POPULAR_TV_SHOWS:
            return popularTVs;
        case MoreviewTypes.TRENDING:
            return trendingMovies;
        case MoreviewTypes.UP_COMING:
            return upcommingMovies;
        default:
            return [];
    }
}

function useQuery() {
    return new URLSearchParams(useLocation().search);
}
const MoreViewPageComponent = (props) => {

    const location = useLocation();
    let info = useQuery().get('info');
    let subinfo = useQuery().get('subinfo');
    const {
        pagination
    } = props;

    useEffect(() => {
        fetchData(props, { info, subinfo }, 1);
    }, []);

    const onPageChange = function (pagenum) {
        fetchData(props, { info, subinfo }, pagenum);
    }

    return (
        <DivMain>
            <PageHeader
                style={{ border: '1px solid rgb(235, 237, 240)' }}
                onBack={() => props.history.goBack()}
                title={`${info.toLocaleUpperCase()}`}
                subTitle={`${subinfo.toLocaleUpperCase()}`} />
            <PaginationList pagination={pagination}
                onPageChange={onPageChange} data={selectDataSource(props, { info, subinfo })} />
        </DivMain>
    );
}



const mapStateToProps = ({ popularMovies, nowPlayingMovies,
    upcommingMovies, popularTVs,
    trendingMovies, pagination }) => {
    return { popularMovies, nowPlayingMovies, upcommingMovies, popularTVs, trendingMovies, pagination }
}

const MoreViewPage = connect(mapStateToProps,
    {
        fetchPopularMovies, fetchNowPlaying,
        fetchPopularTv, fetchUpcomingMovies, fetchTrendingMovies
    }
)(MoreViewPageComponent);



export { MoreViewPage }

