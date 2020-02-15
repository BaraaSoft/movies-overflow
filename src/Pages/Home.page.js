import React, { Component } from 'react';
import styled from 'styled-components';
import { TopMenu } from '../menu';
import { FeatureList } from '../featureList';


const SpaceTop = styled.div`
    margin-top:4em;
`

export const HomePage = (props) => {
    return (
        <div>

            <TopMenu />
            <SpaceTop />
            <FeatureList />

        </div>
    );
}
