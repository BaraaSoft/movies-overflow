import React, { Component, useEffect, useState } from 'react';
import {
    Link,
    useParams,
    Redirect,
    useLocation,
    BrowserRouter
} from "react-router-dom";
import { PageHeader, Descriptions } from 'antd';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { FeatureList } from '../featureList'
import { ContentDetails } from '../contentDetails';
import { fetchMovieDetails, fetchTvDetails, fetchSimilarMovies } from '../contentDetails'





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
    const { fetchMovieDetails, fetchTvDetails, fetchSimilarMovies, movieDetails, similarMovies } = props;
    useEffect(() => {
        isMovies == 'true' ? fetchMovieDetails(id) : fetchTvDetails(id);
        fetchSimilarMovies(id);

    }, [location]);
    return (
        <DivMain>
            <PageHeader
                style={{ border: '1px solid rgb(235, 237, 240)' }}
                onBack={() => props.history.push("/")}
                title="Home"
                subTitle={title}
            />
            <DivBody>
                <ContentDetails data={movieDetails} />
                <FeatureList
                    data={similarMovies}
                    title="Similar Movies" />
            </DivBody>
        </DivMain>
    );
}



const mapStateToProps = ({ movieDetails, similarMovies }) => {
    return { movieDetails, similarMovies };
}

const MovieDetailsPage = connect(mapStateToProps, { fetchMovieDetails, fetchTvDetails, fetchSimilarMovies })(MovieDetailsPageComponent)
export { MovieDetailsPage };