import React, { Component, useEffect } from 'react';
import {
    Link,
    useParams,
    Redirect,
    useLocation
} from "react-router-dom";
import { Descriptions, Icon, Rate, Tag } from 'antd';
import styled from 'styled-components';
import moment from 'moment'

import { getImageUrl } from '../https';

import {
    SectionImage, DivImageContainer, DivImage, DivImageTitle,
    DivOverlay, DivContainer, DivSplitOne, DivSplitTwo
} from './details.style';



const DivMainContainer = styled(DivContainer)`
    height:40vh;
`

const MovieCard = (props) => {
    const { imgUrl, name } = props;
    return (
        <SectionImage>
            <DivImageContainer className='elevate-3'>
                <DivImage src={getImageUrl(imgUrl)} />
                <DivImageTitle>
                    <p>{name}</p>
                </DivImageTitle>
                <DivOverlay></DivOverlay>
            </DivImageContainer>
        </SectionImage>
    );

}


const ActorDetails = (props) => {
    const { data } = props;
    return (
        <DivMainContainer className="elevate-1">
            <DivSplitOne>
                <MovieCard name={data.name} imgUrl={data.profile_path} />
            </DivSplitOne>
            <DivSplitTwo>
                <Descriptions title={data.name}>
                    <Descriptions.Item label={<spn><Icon type="calendar" /> &nbsp; Birthday</spn>}>
                        <span className="submenu-title-wrapper">{data.birthday}</span>
                    </Descriptions.Item>
                    <Descriptions.Item label="From">{data.place_of_birth}</Descriptions.Item>
                </Descriptions>
                <Descriptions title={'About'} >
                    <Descriptions.Item label="">{data.biography}</Descriptions.Item>
                </Descriptions>
            </DivSplitTwo>
        </DivMainContainer>
    );
}


export { ActorDetails };


