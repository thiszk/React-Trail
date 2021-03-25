import React from 'react';
import Logo from './img/RaM_logo.png';

function TitleLogo() {
        return <img className="titleLogo" src={Logo} alt="Title Logo"/>
}
function MainTitle() {
        return <p className="title">Rick and Morty</p>
}

export function TitleBox() {
    return (
        <div className="titleBox">
            <TitleLogo/>
            <MainTitle/>
        </div>
    )
}
