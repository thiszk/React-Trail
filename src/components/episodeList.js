import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import { EpisodeNavigationBar } from './episodeNavigationBar';
import { getCardInfo } from './getFunctions';

const EpisodeButton = styled.button`
    display: block;
    color: black; 
    border: 2px;
    border-style: inset;
    border-color: yellowgreen;
    border-radius: 15px;
    margin-block: 10px;
    cursor: pointer;
    width: 200px;
    background-color: ${ props => props.isSelected ? "yellowgreen" : "white" };

    &:hover  {
        background-color: yellowgreen;
        color: white;
    }
`;

const EpisodeButtonList = styled.div`
    color:white;
    padding-left: 50px;
    padding-top: 40px;
    float: left;
`;

function getCardById(episodeId, setCardInfo, setCurrentCard) {
    getCardInfo(episodeId).then((episodeInfo) => setCardInfo(episodeInfo));
    setCurrentCard(episodeId);
}

export function EpisodeList({ list, setEpisodeList, setCardInfo, currentPage, setCurrentPage }) {
    const episodeList = list.data.data.episodes.results;
    const episodeNav = list.data.data.episodes.info;
    const [currentCard, setCurrentCard] = useState();

    return (
        <Fragment>
            <EpisodeButtonList>
                { episodeList.map((episodeId) => 
                    <EpisodeButton key = { episodeId.id } 
                        onClick = {() => getCardById(episodeId.id, setCardInfo, setCurrentCard) }
                        isSelected = { episodeId.id == currentCard }>
                            { episodeId.episode }
                    </EpisodeButton>) }
            </EpisodeButtonList >
            <EpisodeNavigationBar 
                navInfo = { episodeNav } 
                setEpisodeList = { setEpisodeList }
                currentPage = { currentPage }
                setCurrentPage = { setCurrentPage }/>
        </Fragment>
    )
}
