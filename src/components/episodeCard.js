import { Fragment, React } from 'react';
import styled from 'styled-components';
import { blank } from '../index'

export function EpisodeCardDiv({ cardInfo }) {

    return (
        <EpisodeCard>
            <EpisodeName name = { cardInfo }/>
            <EpisodeCode code = { cardInfo }/>
            <EpisodeAirDate date = { cardInfo }/>
            <CharacterList list = { cardInfo }/>
        </EpisodeCard>
    )
}

const EpisodeCardParagraph = styled.p`
    text-align: left;
    position: relative;
    font-size: 20px;
    margin: 5px;
`;

const Character = styled.p`
    color: white;
    font-style: italic;
    font-size: 15px;
    margin: 0px;
    display: list-item;
    list-style: inside;
`;

const List = styled.div`
    display: table-cell;
    column-count: 2;
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

function EpisodeName({name}) {
    const episodeName = name != null ? ('Episode Name : ' + name.data.data.episode.name) : blank

    return (
        <EpisodeCardParagraph >
            { episodeName } 
        </EpisodeCardParagraph>
    )
}


function EpisodeCode({code}) {
    const episodeCode = code != null ? ('EpisodeCode : '+ code.data.data.episode.episode) : blank

    return (
        <EpisodeCardParagraph >
            { episodeCode } 
        </EpisodeCardParagraph>
    )
}

function EpisodeAirDate({date}) {
    const episodeDate = date != null ? ('Air Date : ' + date.data.data.episode.air_date) : blank

    return (
        <EpisodeCardParagraph>
            { episodeDate }
        </EpisodeCardParagraph>
    )
}


function CharacterList({list}) {
    const initialList = [];
    const characterList = list != null ? list.data.data.episode.characters : initialList;
    const type = list != null ? 'Character List : ' : blank;

    return (
        <Fragment>
            <EpisodeCardParagraph> { type } </EpisodeCardParagraph>
            <List>
                { characterList.map((characters, index) => 
                    <Character key = { index }>
                        { characters.name } 
                    </Character>) } 
            </List>
        </Fragment>
    )
}    

    