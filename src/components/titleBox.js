import React from 'react';
import styled from "styled-components";
import Logo from '../img/RaM_logo.png';

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
`;

const TitleLogo = styled.img`
    float: left;
    width: 100px;
    height: 50px;
    padding-left: 20px;
    display: flex;
    justify-content: left;
`;

const TitleBox = styled.div`
    background-color: black;
    text-align: center;
    width: inherit;
    margin-top: -50px;
`;

export class TitleBoxContainer extends React.Component {
    render() {
        return (
            <TitleBox>
                <TitleLogo src={Logo}/>
                <MainTitle>Rick and Morty</MainTitle>
                <NumberOfEpisodes>No. of Episodes : 41</NumberOfEpisodes>
                <TitleDescription>Rick and Morty is an American adult animated science fiction 
        sitcom created by Justin Roiland and Dan Harmon for Cartoon Network's nighttime Adult Swim 
        programming block. The series follows the misadventures of cynical mad scientist Rick Sanchez 
        and his good-hearted but fretful grandson Morty Smith, who split their time between domestic 
        life and interdimensional adventures.</TitleDescription>
            </TitleBox>
        )
    }
}
