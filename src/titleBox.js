import React from 'react';
import Logo from './img/RaM_logo.png';

function TitleLogo() {
    return <img className="titleLogo" src={Logo} alt="Title Logo"/>
}

function MainTitle() {
    return <p className="mainTitle">Rick and Morty</p>
}

function NumberOfEpisodes() {
    return <p className="numberOfEpisodes">No. of Episodes : 41 </p>    
}
function TitleDescription() {
    return <p className="titleDescription">Rick and Morty is an American adult animated science fiction 
    sitcom created by Justin Roiland and Dan Harmon for Cartoon Network's nighttime Adult Swim 
    programming block. The series follows the misadventures of cynical mad scientist Rick Sanchez 
    and his good-hearted but fretful grandson Morty Smith, who split their time between domestic 
    life and interdimensional adventures.</p>
}

export function TitleBox() {
    return (
        <div className="titleBox">
            <TitleLogo/>
            <MainTitle/>
            <NumberOfEpisodes/>
            <TitleDescription/>
        </div>
    )
}
