import React, { Component, Fragment, useState, useEffect } from 'react';
import { Button, Icon, Badge, Pagination } from 'antd';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { getImageUrl } from '../https';


const MainDiv = styled.div`
    max-width: 95%;
    margin: 24px auto;
    min-height:80vh;
    
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

const DivPaginationContainer = styled.div`
    width:100%;
    margin-top:64px;
    display:flex;
    justify-content:center;
`;

const RenderListItem = ({ data = [], isMovie = true, paging }) => {
    const { currentPage, total, pageSize } = paging;
    return data.map((item, i) => {
        const limit = currentPage * pageSize;
        const lastLimit = (currentPage - 1) * pageSize;
        let index = item.pageNum * pageSize;
        /** Only display current page content **/
        if (!(index <= limit && index > lastLimit)) return null;
        // if (!(index <= limit && item.pageNum == currentPage)) return null;
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
    const [paging, setPaging] = useState(props.pagination);
    useEffect(() => {
        setPaging({ ...paging, total: props.pagination.total })
    }, [props.pagination])
    const onPageChage = (page, pageSize) => {
        setPaging({ ...paging, currentPage: page })
        props.onPageChange(page);
    }
    return (
        <MainDiv>
            <ListContainerDiv>
                <RenderListItem data={props.data} paging={paging} />
            </ListContainerDiv>
            <DivPaginationContainer>
                <Pagination size="large" onChange={onPageChage}
                    defaultPageSize={paging.pageSize} defaultCurrent={paging.currentPage} total={paging.total} />
            </DivPaginationContainer>
        </MainDiv>
    );
}


export { PaginationList };


