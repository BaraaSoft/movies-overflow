import React, { Component, useEffect, useState } from 'react';
import {
    useParams,
    useLocation,
} from "react-router-dom";
import { PageHeader } from 'antd';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { FeatureList } from '../featureList'
import { ContentDetails } from '../contentDetails';
import {
    fetchMovieDetails, fetchTvDetails,
    fetchSimilarMovies, fetchMovieActors, fetchSimilarTvs
} from '../contentDetails'





/** container design **/
const DivMain = styled.div`
overflow:hidden;
`

const DivBody = styled.div`
    width: 100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    overflow-x:auto;
`




function useQuery() {
    return new URLSearchParams(useLocation().search);
}


export const MovieDetailsPageComponent = (props) => {
    const { id } = useParams();
    const location = useLocation();
    let isMovies = useQuery().get('isMovies');
    let title = useQuery().get('title');
    const {
        fetchMovieDetails, fetchTvDetails, fetchMovieActors, fetchSimilarTvs,
        fetchSimilarMovies, movieDetails, similarMovies, movieActors, similarTvs
    } = props;
    let similarShowListData = isMovies == 'true' ? similarMovies : similarTvs;
    useEffect(() => {
        let isMovie = isMovies == 'true';
        if (isMovie) {

            fetchMovieDetails(id);
            fetchSimilarMovies(id);
        } else {

            fetchSimilarTvs(id);
            fetchTvDetails(id);
        }
        fetchMovieActors(id, isMovie);
    }, [location]);


    return (
        <DivMain>
            <PageHeader
                style={{ border: '1px solid rgb(235, 237, 240)' }}
                onBack={() => props.history.goBack()}
                title="Details"
                subTitle={title}
            />
            <DivBody className="light-scroll" >
                <ContentDetails data={movieDetails} movieActors={movieActors} />
                <FeatureList
                    isMovie={isMovies == 'true'}
                    data={similarShowListData}
                    title={isMovies == 'true' ? "Similar Movies" : "Similar TV Show"} />
            </DivBody>
        </DivMain>
    );
}



const mapStateToProps = ({ movieDetails, similarMovies, movieActors, similarTvs }) => {
    return { movieDetails, similarMovies, movieActors, similarTvs };
}

const MovieDetailsPage = connect(mapStateToProps,
    {
        fetchMovieDetails, fetchTvDetails,
        fetchSimilarMovies, fetchMovieActors, fetchSimilarTvs
    })(MovieDetailsPageComponent)
export { MovieDetailsPage };