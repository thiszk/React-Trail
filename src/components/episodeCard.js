import React from 'react';
import styled from 'styled-components';

export class EpisodeCardDiv extends React.Component {
    render () {
        return (
            <EpisodeCard>
                <EpisodeName />
                <EpisodeCode />
                <EpisodeAirDate />
                <CharacterList />
            </EpisodeCard>
        )
    };
}


const EpisodeCardParagraph = styled.p`
    text-align: center;
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

class EpisodeName extends React.Component {
    render () {
        return (
                <EpisodeCardParagraph >
                    Pilot 
                </EpisodeCardParagraph>
        )
    }
}

class EpisodeCode extends React.Component {
    render () {
        return (
            <EpisodeCardParagraph >
                S01E01 
            </EpisodeCardParagraph>
        )
    }
}

class EpisodeAirDate extends React.Component {
    render () {
        return (
            <EpisodeCardParagraph>
                April 1, 2012
            </EpisodeCardParagraph>
        )
    }
}

class CharacterList extends React.Component {
    render () {
        return (
            <EpisodeCardParagraph>
                CharacterList
            </EpisodeCardParagraph> 
        )
    }
}
