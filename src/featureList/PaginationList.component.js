import React, { Component, Fragment } from 'react';
import { Button, Icon, Badge } from 'antd';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { getImageUrl } from '../https';


const MainDiv = styled.div`
    max-width: 1140px;
    margin: 24px auto;
`;
const ListContainerDiv = styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:space-around;

`;

const DivImageList = styled.div`
    overflow-x: auto;
    width:100%;
    display:flex;
    padding-top: 14px;
`;

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


const listTest = [
    { vote_average: 5, title: "Hello!", id: 1234 },
    { vote_average: 5, title: "Hello!", id: 1234 },
    { vote_average: 5, title: "Hello!", id: 1234 },
    { vote_average: 5, title: "Hello!", id: 1234 },
    { vote_average: 5, title: "Hello!", id: 1234 },
    { vote_average: 5, title: "Hello!", id: 1234 },
    { vote_average: 5, title: "Hello!", id: 1234 },
    { vote_average: 5, title: "Hello!", id: 1234 },
    { vote_average: 5, title: "Hello!", id: 1234 },
    { vote_average: 5, title: "Hello!", id: 1234 },
    { vote_average: 5, title: "Hello!", id: 1234 },
    { vote_average: 5, title: "Hello!", id: 1234 },
    { vote_average: 5, title: "Hello!", id: 1234 },
    { vote_average: 5, title: "Hello!", id: 1234 },
    { vote_average: 5, title: "Hello!", id: 1234 },
    { vote_average: 5, title: "Hello!", id: 1234 },
    { vote_average: 5, title: "Hello!", id: 1234 },
    { vote_average: 5, title: "Hello!", id: 1234 },
    { vote_average: 5, title: "Hello!", id: 1234 },
    { vote_average: 5, title: "Hello!", id: 1234 },
    { vote_average: 5, title: "Hello!", id: 1234 },
    { vote_average: 5, title: "Hello!", id: 1234 },
    { vote_average: 5, title: "Hello!", id: 1234 },
    { vote_average: 5, title: "Hello!", id: 1234 }
]


const RenderListItem = ({ data = [], isMovie = true }) => {
    return data.map((item) => {
        return (
            <Badge count={item.vote_average} overflowCount={10} style={{ backgroundColor: '#FFA500' }} >
                <Link to={`/details/${item.id}?isMovies=${isMovie}&title=${item.title || "TV"}`}>
                    <DivImageContainer className='elevate-3'>
                        <DivImage src={getImageUrl(item.poster_path)} />
                        <DivImageTitle>
                            <p>{item.title}</p>
                        </DivImageTitle>
                        <DivOverlay></DivOverlay>
                    </DivImageContainer>
                </Link>
            </Badge>)
    });
}


const PaginationList = (props) => {
    return (
        <MainDiv>
            <ListContainerDiv>
                <RenderListItem data={listTest} />
            </ListContainerDiv>
        </MainDiv>
    );
}


export { PaginationList };


