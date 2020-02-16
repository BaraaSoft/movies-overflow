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

const ActorList = (props) => {
    const { actors } = props;
    return actors.map(actor => {
        return (
            <Link to={`/actors/${actor.id}?name=${actor.name}`}>
                <Tag style={{ cursor: 'pointer' }} key={actor.id} color="blue">{actor.name}</Tag>
            </Link>
        );
    })
}


const ContentDetails = (props) => {

    const { data, movieActors } = props

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
                <Descriptions title={'Cast'} >
                    <Descriptions.Item label="">
                        <ActorList actors={movieActors} />
                    </Descriptions.Item>
                </Descriptions>
            </DivSplitTwo>
        </DivContainer>
    );
}


export { ContentDetails };