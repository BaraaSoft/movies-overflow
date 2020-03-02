import React, { Component, Fragment } from 'react';
import { Button, Icon, Badge } from 'antd';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { getImageUrl } from '../https';
import media from '../media';


const DivContainer = styled.div`
    width:100%;
    margin-top:4em;
    overflow: hidden;
`

const DivSubcontainer = styled.div`
    margin:.5em 6em;
    display:flex;
    justify-content:flex-start;
    width:100%;
    
    ${media.xl`
        margin-left:1em;
        margin-right:1em;
    `}
    ${media.md`
        margin-left:1em;
        margin-right:1em;
    `}
`;

const DivTitle = styled.div`
    width:100%;
    display:flex;
    color:#b1b1b1;
    font-weight:700;
    text-transform:uppercase;
    font-size:26px;

    
    ${media.xl`
        font-size:26px;
    `}
     ${media.md`
        font-size:22px;
        width:95%;
        align-items:flex-end;
    `};

    ${media.sm`
        width:95%;
        font-size:22px;
        align-items:flex-end;
    `};

`;

const DivSubtitleList = styled.div`
    flex:4;
    display:flex;
    justify-content:flex-start;
    padding-top:6px;
    padding-left:16px;
    
    ${media.md`
        align-items:flex-end;
    `}
    ${media.sm`
        align-items:flex-end;
        width:20%;
        visibility:hidden;
    `}
`;
const Divsubtitle = styled.div`
    font-size:14px;
    color:#1890ff;
    padding:8px;
    padding-top:8px;
    padding-bottom:0px;
    border-bottom:1px solid transparent;
    text-transform:capitalize;
    cursor: pointer;
    &:hover{
        border-bottom:1px solid #1890ff;
    }

    ${media.sm`
        font-size:13px;
    `};
`;
const DivsubtitleLast = styled(Divsubtitle)`
    flex:1;
    margin-top:10px;
    padding-right:16px;
     &:hover{
        border-bottom:1px solid transparent;
    }
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


const RenderTopGenre = ({ topGenre = ['Action', 'Drama', 'Comedy', 'Horror'] }) => {
    return (
        <DivSubtitleList>
            {
                topGenre.map((genre, index) => {
                    if (index > 5) return null
                    return (
                        <Divsubtitle>{genre}</Divsubtitle>
                    );
                })
            }
        </DivSubtitleList>
    );
}

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

const RenderMore = ({ moreUrl }) => {
    return (moreUrl ?
        (
            <DivsubtitleLast>
                <Link to={moreUrl} >
                    <Button type="dashed">
                        More<Icon type="double-right" />
                    </Button>
                </Link>
            </DivsubtitleLast>
        ) : null)
}


const FeatureList = (props) => {
    const { title, moreUrl, topGenre, data, isMovie } = props;
    return (
        <DivContainer>
            <DivSubcontainer>
                <DivTitle>
                    <div>{title}</div>
                    {topGenre && (<RenderTopGenre topGenre={topGenre} />)}
                    <RenderMore moreUrl={moreUrl} />
                </DivTitle>
            </DivSubcontainer>
            <DivImageList className="light-scroll">
                <RenderListItem data={data} isMovie={isMovie} />
            </DivImageList>
        </DivContainer>
    );
}



export { FeatureList }
