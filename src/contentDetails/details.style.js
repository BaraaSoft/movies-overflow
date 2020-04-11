
import React from 'react';
import styled from 'styled-components';
import { Tag } from 'antd';
import media from '../media';
import {
    YoutubeOutlined
} from '@ant-design/icons';



export const DivContainer = styled.div`
   
    
    height:60vh;
    position:relative;
    display:flex;
    margin-top:8em;
    margin-bottom:.2em;

    ${media.xl`
        min-width:1140px;
        width:70%;
    `};
    ${media.md`
        margin-top:14em;
        min-width:auto;
        flex-direction:column;
        width:90%;
        height:65em;
        padding-top:4em;
        margin-bottom:0em;
    `};
   
`;

/** content design **/

export const PlayIcon = styled(YoutubeOutlined)`
    color: #aaaaaa9c;
    font-weight:200;
    font-size:170px;
    position:absolute;
    left:30%;
    top:30%;
`;

export const SectionImage = styled.div`
    position:absolute;
    top:-20%;
`

export const DivImageContainer = styled.div`
    cursor:pointer;
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

export const DivImage = styled.img`
    height: 100%;
    width: 100%;
    background-size:cover;
    background-repeat: no-repeat;
    background-position: center;
    transition: all 0.6s ease;
`;
export const DivImageTitle = styled.div`
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


export const DivOverlay = styled.div`
    height: 100%;
    width: 100%;
    z-index:5;
    background:linear-gradient(0deg, rgba(0,0,0,0.8281687675070029) 0%, rgba(0,0,0,0.6348914565826331) 13%, rgba(255,255,255,0) 22%);
    position:absolute;
    top:0;
`;


export const DivTagHolder = styled(Tag)`
    position:absolute;
    font-size: 14px;
    top: 4px;
    right: 0px;
    background:transparent;
    border:none;
`;

/** Description Design **/
export const DivSplitOne = styled.div`
    flex:1;
    min-width:350px;
`;

export const DivSplitTwo = styled.div`
    flex:3;
    overflow-y:auto;
    margin:32px 32px;
`;