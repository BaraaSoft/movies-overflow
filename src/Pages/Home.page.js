import React, { Component, useEffect } from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components';
import { TopMenu } from '../menu';
import {
    FeatureList, fetchPopularMovies,
    fetchNowPlaying, fetchPopularTv,
    fetchUpcomingMovies, fetchTrendingMovies
} from '../featureList';

import { MoreviewTypes, Genre } from '../moreviewTypes'
const SpaceTop = styled.div`
    margin-top:4em;
`

export const HomePageComponent = (props) => {
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
        <div>
            <TopMenu />
            <SpaceTop />
            <FeatureList
                data={popularMovies}
                title="Most Popular"
                moreUrl={`/more?info=${MoreviewTypes.MOST_POPULAR}&subinfo=${"movies"}`}
                topGenre={['Action', 'Drama', 'Comdey', 'Horror']} />
            <FeatureList
                data={trendingMovies}
                title="Trending"
                moreUrl={`/more?info=${MoreviewTypes.TRENDING}&subinfo=${"movies"}`}
                topGenre={['Action', 'Drama', 'Comdey', 'Horror']} />
            <FeatureList
                data={nowPlayingMovies}
                title="Now showing"
                moreUrl={`/more?info=${MoreviewTypes.NOW_SHOWING}&subinfo=${"movies"}`}
                topGenre={['Action', 'Drama', 'Comdey', 'Horror']} />

            <FeatureList
                data={upcommingMovies}
                title="Up Coming"
                moreUrl={`/more?info=${MoreviewTypes.UP_COMING}&subinfo=${"movies"}`}
                topGenre={['Action', 'Drama', 'Comdey', 'Horror']} />
            <FeatureList
                isMovie={false}
                data={popularTVs}
                title="Popular TV Shows"
                moreUrl={`/more?info=${MoreviewTypes.POPULAR_TV_SHOWS}&subinfo=${"Tv"}`}
                topGenre={['Action', 'Drama', 'Comdey']} />
        </div>
    );
}


const mapStateToProps = ({ popularMovies, nowPlayingMovies, upcommingMovies, popularTVs, trendingMovies }) => {
    return { popularMovies, nowPlayingMovies, upcommingMovies, popularTVs, trendingMovies }
}

const HomePage = connect(mapStateToProps,
    {
        fetchPopularMovies, fetchNowPlaying,
        fetchPopularTv, fetchUpcomingMovies, fetchTrendingMovies
    }
)(HomePageComponent);

export { HomePage }
