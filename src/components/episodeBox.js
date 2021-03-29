import React from 'react';
import styled from "styled-components";
import { EpisodeList } from './episodeList';
import backgroundImage from '../img/RaM_bgd.jpg';


const EpisodeBox = styled.div`
    background: url(${backgroundImage}) no-repeat right;
    background-size: cover;
    width: 100%;
    height: 720px;
    box-sizing: content-box;
    margin-top: -30px;
    position: absolute; 
`;

export class EpisodeBoxDiv extends React.Component {
    render() {
        return(
            <EpisodeBox >
                <EpisodeList/>
            </EpisodeBox>
        )
    };
}