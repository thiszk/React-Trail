import React from 'react';
import styled from "styled-components";
import logo from '../img/RaM_logo.png';

const MainTitle = styled.p`
    font-size: 50px;
    color:white;
    font-style: italic;
    display: flex;
    justify-content: center;
`;

const NumberOfEpisodes = styled.p`
    color: whitesmoke;
    font-size: 20px;
    padding-left: 20px;
    display: flex;
    justify-content: left;
`;

const TitleDescription = styled.p`
    color: white;
    font-size: 15px;
    font-style: italic;
    padding-left: 20px;
    text-align: left;
    height: 80px;
`;

const TitleLogo = styled.img`
    content:url(${logo});
    float: left;
    width: 100px;
    height: 50px;
    padding-left: 20px;
    display: flex;
    justify-content: left;
`;

const TitleBox = styled.div`
    background-image: linear-gradient(to bottom, #000000 0%, #252825 100%);
    text-align: center;
    width: inherit;
    height:100%;
    margin-top: -50px;
    margin-botton: -50px:
`;

export function TitleBoxContainer({ episodeNumber }) {
    const number = episodeNumber.data.data.episodes.info;
    
    return (
        <TitleBox>
            <TitleLogo />
            <MainTitle>Rick and Morty</MainTitle>
            <NumberOfEpisodes>No of Episodes : { number.count }</NumberOfEpisodes>
            <TitleDescription>Rick and Morty is an American adult animated science fiction 
                sitcom created by Justin Roiland and Dan Harmon for Cartoon Network's nighttime Adult Swim 
                and his good-hearted but fretful grandson Morty Smith, who split their time between domestic 
                programming block. The series follows the misadventures of cynical mad scientist Rick Sanchez 
                life and interdimensional adventures.
            </TitleDescription>
        </TitleBox>
    );
}

    