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



const DivMain = styled.div`
    overflow:hidden;
`

function useQuery() {
    return new URLSearchParams(useLocation().search);
}
const MoreViewPageComponent = (props) => {

    const location = useLocation();
    let info = useQuery().get('info');


    const {
        popularMovies, nowPlayingMovies,
        upcommingMovies, popularTVs, trendingMovies,
        fetchPopularMovies, fetchNowPlaying,
        fetchPopularTv, fetchUpcomingMovies, fetchTrendingMovies
    } = props
    useEffect(() => {
        fetchPopularMovies(1);
        fetchNowPlaying(1);
        fetchUpcomingMovies(1);
        fetchPopularTv(1);
        fetchTrendingMovies();
    }, [])
    return (
        <DivMain>
            <PageHeader
                style={{ border: '1px solid rgb(235, 237, 240)' }}
                onBack={() => props.history.goBack()}
                title={`${info}`}
                subTitle={info}
            />
            <PaginationList></PaginationList>
        </DivMain>
    );
}



const mapStateToProps = ({ popularMovies, nowPlayingMovies, upcommingMovies, popularTVs, trendingMovies }) => {
    return { popularMovies, nowPlayingMovies, upcommingMovies, popularTVs, trendingMovies }
}

const MoreViewPage = connect(mapStateToProps,
    {
        fetchPopularMovies, fetchNowPlaying,
        fetchPopularTv, fetchUpcomingMovies, fetchTrendingMovies
    }
)(MoreViewPageComponent);



export { MoreViewPage }

