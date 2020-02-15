import React, { Component, useEffect } from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components';
import { TopMenu } from '../menu';
import { FeatureList, fetchPopularMovies, fetchNowPlaying } from '../featureList';


const SpaceTop = styled.div`
    margin-top:4em;
`

export const HomePageComponent = (props) => {
    const { popularMovies, nowPlayingMovies, fetchPopularMovies, fetchNowPlaying } = props
    useEffect(() => {
        fetchPopularMovies(1);
        fetchNowPlaying(1)
    }, [])
    return (
        <div>
            <TopMenu />
            <SpaceTop />
            <FeatureList
                data={popularMovies}
                title="Most Popular"
                moreUrl={'/search/popular'}
                topGenre={['Action', 'Drama', 'Comdey', 'Horror']} />
            <FeatureList
                data={nowPlayingMovies}
                title="Now on cinema"
                moreUrl={'/search/now_playing'}
                topGenre={['Action', 'Drama', 'Comdey', 'Horror']} />
        </div>
    );
}


const mapStateToProps = ({ popularMovies, nowPlayingMovies }) => {
    return { popularMovies, nowPlayingMovies }
}

const HomePage = connect(mapStateToProps, { fetchPopularMovies, fetchNowPlaying })(HomePageComponent);

export { HomePage }
