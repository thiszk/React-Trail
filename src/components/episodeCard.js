import React from 'react';
import styled from 'styled-components';

export function EpisodeCardDiv() {
    return (
        <EpisodeCard>
            <EpisodeName />
            <EpisodeCode />
            <EpisodeAirDate />
            <CharacterList />
        </EpisodeCard>
    )
}

const EpisodeCardParagraph = styled.p`
    text-align: left;
    position: relative;
    font-size: 20px;
`;

const EpisodeCard = styled.div`
    color: white;
    width: 600px;
    height: 500px;
    background: lightslategray;
    border-radius: 5%;
    border: yellowgreen;
    border-style: inset;
    overflow: auto;
    position: relative;
    right: 150px;
    top: 100px;
    opacity: 80%;
    padding: 20px;
    float: right;
`;

function EpisodeName() {
    return (
        <EpisodeCardParagraph >
            Pilot 
        </EpisodeCardParagraph>
    )
}


function EpisodeCode() {
    return (
        <EpisodeCardParagraph >
            S01E01 
        </EpisodeCardParagraph>
    )
}

function EpisodeAirDate() {
    return (
        <EpisodeCardParagraph>
            April 1, 2012
        </EpisodeCardParagraph>
    )
}


function CharacterList() {
    return (
        <EpisodeCardParagraph>
            CharacterList
        </EpisodeCardParagraph> 
    )
}

