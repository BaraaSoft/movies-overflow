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


const DivContainer = styled.div`
    width:70%;
    min-width:1140px;
    height:50vh;
    position:relative;
    display:flex;
    margin-top:8em;
    margin-bottom:.2em;
`

/** content design **/
const SectionImage = styled.div`
    position:absolute;
    top:-20%;
`

const DivImageContainer = styled.div`
    flex: 0 0 auto;
    flex-shrink: 0;
    width:300px;
    height: 380px;
    margin:32px;
    margin-top:0px;
    overflow:hidden;
    position:relative;

    border-radius:3px;
    overflow:hidden;

    margin-right:0px;
`;

const DivImage = styled.img`
    height: 100%;
    width: 100%;
    background-size:cover;
    background-repeat: no-repeat;
    background-position: center;
    transition: all 0.6s ease;
`;
const DivImageTitle = styled.div`
    z-index: 10;
    width:100%;
    color: #fff;
    font-size:16px;
    margin:auto 8px;
    overflow-wrap: break-word;
    position:absolute;
    
    bottom: 8px;
    display:flex;
    justify-content:center;
`;


const DivOverlay = styled.div`
    height: 100%;
    width: 100%;
    z-index:5;
    background:linear-gradient(0deg, rgba(0,0,0,0.8281687675070029) 0%, rgba(0,0,0,0.6348914565826331) 13%, rgba(255,255,255,0) 22%);
    position:absolute;
    top:0;
`;

/** Description Design **/
const DivSplitOne = styled.div`
    flex:1;
    min-width:350px;
`;

const DivSplitTwo = styled.div`
    flex:3;
    overflow-y:auto;
    margin:32px 32px;
`;


const parseCountry = (data) => {
    if (data.production_countries && data.production_countries.length > 0) {
        return data.production_countries[0].name;
    }
    return null;
}

function getTimeFromMins(mins) {
    if (mins >= 24 * 60 || mins < 0) {
        throw new RangeError("Valid input should be greater than or equal to 0 and less than 1440.");
    }
    var h = mins / 60 | 0,
        m = mins % 60 | 0;
    return moment.utc().hours(h).minutes(m).format("hh:mm");
}


const MovieCard = (props) => {
    const { imgUrl, title, rate } = props;
    return (
        <SectionImage>
            <DivImageContainer className='elevate-3'>
                <DivImage src={getImageUrl(imgUrl)} />
                <DivImageTitle>
                    <p>{title}</p>
                </DivImageTitle>
                <DivOverlay></DivOverlay>
            </DivImageContainer>
            <Rate style={{ marginLeft: '30px' }} count={10} value={rate} disabled />
            <span className="ant-rate-text"><Tag color="gold">{rate}</Tag></span>
        </SectionImage>
    );

}


const ContentDetails = (props) => {

    const { data } = props

    return (
        <DivContainer className="elevate-1">
            <DivSplitOne>
                <MovieCard title={data.title} imgUrl={data.poster_path} rate={data.vote_average} />
            </DivSplitOne>
            <DivSplitTwo>
                <Descriptions title={data.title}>
                    <Descriptions.Item label="Headline">{data.tagline}</Descriptions.Item>
                    <Descriptions.Item label={<spn><Icon type="clock-circle" /> &nbsp; Length</spn>}>
                        <span className="submenu-title-wrapper">{getTimeFromMins(data.runtime)}</span>
                    </Descriptions.Item>
                    <Descriptions.Item label="Production country">{parseCountry(data)}</Descriptions.Item>
                    <Descriptions.Item label="Release Date">{moment(data.release_date).format("MMMM Do YYYY")}</Descriptions.Item>

                </Descriptions>
                <Descriptions title={'Overview'} >
                    <Descriptions.Item label="">{data.overview}</Descriptions.Item>
                </Descriptions>
            </DivSplitTwo>
        </DivContainer>
    );
}


export { ContentDetails };