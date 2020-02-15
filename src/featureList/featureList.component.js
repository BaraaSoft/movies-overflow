import React, { Component } from 'react';
import { Button, Icon } from 'antd';
import styled from 'styled-components';

const DivContainer = styled.div`
    margin:6em 6em;

    width:100%;
`

const DivSubcontainer = styled.div`
    display:flex;
    justify-content:flex-start;
    width:100%;

`;

const DivTitle = styled.div`
   width:100%;
    display:flex;
    font-size:26px;
    color:#b1b1b1;
    font-weight:700;
    text-transform:uppercase;
`;

const DivSubtitleList = styled.div`
    flex:4;
    display:flex;
    justify-content:flex-start;
    padding-top:6px;
    padding-left:16px;

`
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
`;
const DivsubtitleLast = styled(Divsubtitle)`
    flex:1;
    margin-top:10px;
    padding-right:16px;
     &:hover{
        border-bottom:1px solid transparent;
    }
`






const FeatureList = (props) => {
    return (
        <DivContainer>
            <DivSubcontainer>
                <DivTitle>
                    <div>Lastest Movies</div>

                    <DivSubtitleList>
                        <Divsubtitle>All</Divsubtitle>
                        <Divsubtitle>Action</Divsubtitle>
                        <Divsubtitle>Comedy</Divsubtitle>
                        <Divsubtitle>Horror</Divsubtitle>
                        <Divsubtitle>Drama</Divsubtitle>
                    </DivSubtitleList>
                    <DivsubtitleLast>
                        <Button type="dashed">
                            More<Icon type="double-right" />
                        </Button>
                    </DivsubtitleLast>
                </DivTitle>
            </DivSubcontainer>
        </DivContainer>
    );
}



export { FeatureList }
