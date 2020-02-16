import React, { Component, useEffect } from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components';
import { TopMenu } from '../menu';
import { FeatureList, fetchPopularMovies, fetchNowPlaying, fetchPopularTv, fetchUpcomingMovies } from '../featureList';


const SpaceTop = styled.div`
    margin-top:4em;
`

export const HomePageComponent = (props) => {
    const {
        popularMovies, nowPlayingMovies,
        upcommingMovies, popularTVs,
        fetchPopularMovies, fetchNowPlaying,
        fetchPopularTv, fetchUpcomingMovies
    } = props
    useEffect(() => {
        fetchPopularMovies(1);
        fetchNowPlaying(1);
        fetchUpcomingMovies(1);
        fetchPopularTv(1)
    }, [])
    return (
        <div>
            <TopMenu />
            <SpaceTop />
            <FeatureList
                data={popularMovies}
                title="Most Popular"
                moreUrl={'/search/popular_movies'}
                topGenre={['Action', 'Drama', 'Comdey', 'Horror']} />
            <FeatureList
                data={nowPlayingMovies}
                title="Now showing"
                moreUrl={'/search/now_playing'}
                topGenre={['Action', 'Drama', 'Comdey', 'Horror']} />

            <FeatureList
                data={upcommingMovies}
                title="Up Coming"
                moreUrl={'/search/upcoming'}
                topGenre={['Action', 'Drama', 'Comdey', 'Horror']} />
            <FeatureList
                isMovie={false}
                data={popularTVs}
                title="Popular TV Shows"
                moreUrl={'/search/popular_tv'}
                topGenre={['Action', 'Drama', 'Comdey']} />
        </div>
    );
}


const mapStateToProps = ({ popularMovies, nowPlayingMovies, upcommingMovies, popularTVs }) => {
    return { popularMovies, nowPlayingMovies, upcommingMovies, popularTVs }
}

const HomePage = connect(mapStateToProps,
    {
        fetchPopularMovies, fetchNowPlaying,
        fetchPopularTv, fetchUpcomingMovies
    }
)(HomePageComponent);

export { HomePage }
