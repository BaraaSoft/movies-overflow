
import React from 'react';
import styled from 'styled-components';


export const DivContainer = styled.div`
    width:70%;
    min-width:1140px;
    height:60vh;
    position:relative;
    display:flex;
    margin-top:8em;
    margin-bottom:.2em;
`

/** content design **/
export const SectionImage = styled.div`
    position:absolute;
    top:-20%;
`

export const DivImageContainer = styled.div`
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