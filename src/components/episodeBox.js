import { React } from 'react';
import styled from 'styled-components';
import { EpisodeList } from './episodeList';
import backgroundImage from '../img/RaM_bgd.jpg';

const EpisodeBox = styled.div`
    background: url(${ backgroundImage }) no-repeat right;
    background-size: cover;
    width: 100%;
    height: 720px;
    box-sizing: content-box;
    margin-top: -15px;
    position: absolute; 
    display: flex;
    flex-direction: column;
`;

export function EpisodeBoxDiv({ episodeList, setEpisodeList, setCardInfo, currentPage, setCurrentPage }) {
    
    return(
        <EpisodeBox >
            <EpisodeList list = { episodeList } 
            setEpisodeList = { setEpisodeList }
            setCardInfo = { setCardInfo }
            currentPage = { currentPage }
            setCurrentPage = { setCurrentPage }/>
        </EpisodeBox>
    )
}
