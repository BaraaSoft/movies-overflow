import React, { Component, useEffect, useState } from 'react';
import {
    useParams,
    useLocation,
} from "react-router-dom";
import { PageHeader } from 'antd';
import styled from 'styled-components';
import { connect } from 'react-redux';


import { FeatureList } from '../featureList';
import { ActorDetails, fetcActorDetails, fetcActorAllMovies } from '../contentDetails';



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

const ActorDetailsPageComponent = (props) => {


    const { id } = useParams();
    const location = useLocation();
    let name = useQuery().get('name');

    const { actorAllMovies, actorDetails, fetcActorDetails, fetcActorAllMovies } = props;

    useEffect(() => {

        fetcActorDetails(id);
        fetcActorAllMovies(id);


    }, [location]);
    return (
        <DivMain>
            <PageHeader
                style={{ border: '1px solid rgb(235, 237, 240)' }}
                onBack={() => props.history.goBack()}
                title="Actor"
                subTitle={name}
            />
            <DivBody>
                <ActorDetails data={actorDetails} />
                <FeatureList
                    data={actorAllMovies}
                    title={`Movies by ${name}`} />
            </DivBody>
        </DivMain>
    );
}


const mapStateToProps = ({ actorDetails, actorAllMovies }) => {
    return { actorDetails, actorAllMovies };
}

const ActorDetailsPage = connect(mapStateToProps, { fetcActorDetails, fetcActorAllMovies })(ActorDetailsPageComponent)
export { ActorDetailsPage };