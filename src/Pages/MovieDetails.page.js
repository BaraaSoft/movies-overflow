import React, { Component, useEffect, useState, useRef } from 'react';
import {
    useParams,
    useLocation,
} from "react-router-dom";
import { PageHeader, Modal } from 'antd';
import styled from 'styled-components';
import { connect } from 'react-redux';
import YouTube from 'react-youtube';

import { FeatureList } from '../featureList'
import { ContentDetails } from '../contentDetails';
import {
    fetchMovieDetails, fetchTvDetails, fetchMovieTrailer,
    fetchSimilarMovies, fetchMovieActors, fetchSimilarTvs
} from '../contentDetails';
import media from '../media';





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
`;

const Popup = styled(Modal)`
    ${media.md`
        width:700px;
    `};
    ${media.sm`
         width:80%;
         height:310px;
    `}
`;




function useQuery() {
    return new URLSearchParams(useLocation().search);
}


export const MovieDetailsPageComponent = (props) => {
    const { id } = useParams();
    const location = useLocation();

    const [showVideo, setShowVideo] = useState(false);
    const [playerYT, setPlayer] = useState(null);

    let isMovies = useQuery().get('isMovies');
    let title = useQuery().get('title');
    const {
        fetchMovieDetails, fetchTvDetails, fetchMovieActors, fetchSimilarTvs, fetchMovieTrailer,
        fetchSimilarMovies, movieDetails, similarMovies, movieActors, similarTvs, movieTrailer
    } = props;
    let similarShowListData = isMovies == 'true' ? similarMovies : similarTvs;
    useEffect(() => {
        let isMovie = isMovies == 'true';
        if (isMovie) {

            fetchMovieDetails(id);
            fetchSimilarMovies(id);
            fetchMovieTrailer(id)
            // console.log(" >> movieDetails")
            // console.log({ movieDetails })
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
                <ContentDetails data={movieDetails} movieActors={movieActors} onClick={(e) => (setShowVideo(true))} />
                <FeatureList
                    isMovie={isMovies == 'true'}
                    data={similarShowListData}
                    title={isMovies == 'true' ? "Similar Movies" : "Similar TV Show"} />
            </DivBody>
            <Popup
                title={movieDetails.title + " Trailer"}
                visible={showVideo}
                onCancel={(e) => {
                    setShowVideo(false);
                    playerYT.stopVideo();
                }}
                footer={null}
                bodyStyle={{ backgroundColor: "#fff0" }}
            >
                <YouTube videoId={movieTrailer.results[0].key} onReady={(e) => setPlayer(e.target)} opts={{
                    height: '320',
                    width: '100%',
                }} />;
            </Popup>
        </DivMain>
    );
}



const mapStateToProps = ({ movieDetails, similarMovies, movieActors, similarTvs, movieTrailer }) => {
    return { movieDetails, similarMovies, movieActors, similarTvs, movieTrailer };
}

const MovieDetailsPage = connect(mapStateToProps,
    {
        fetchMovieDetails, fetchTvDetails, fetchMovieTrailer,
        fetchSimilarMovies, fetchMovieActors, fetchSimilarTvs
    })(MovieDetailsPageComponent)
export { MovieDetailsPage };



// <iframe id="player" type="text/html" width="640" height="390"
//     src="http://www.youtube.com/embed/jKCj3XuPG8M?enablejsapi=1&origin=http://example.com"
//     frameborder="0"></iframe>