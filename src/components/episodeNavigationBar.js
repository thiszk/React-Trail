import React from 'react';
import styled from "styled-components";

const PageButtonsGroup = styled.div`
    &:first-child {
        border-bottom-left-radius: 10px;
        border-top-left-radius: 10px;
        border-color: yellowgreen;
    }

    &:last-child {
        border-bottom-right-radius: 10px;
        border-top-right-radius: 10px;
        border-color: yellowgreen;
    }
`;

const PageButton = styled.button`
    float: left;
    position: relative;
    left: 50px;
    bottom: 10px;
    width: 30px;
    border-color: yellowgreen;
`;

const PreviousButton = styled.button`
    background-color: green;
    color: white;
    margin-right: 25px;
    float: left;
    position: relative;
    left: 50px;
    bottom: 10px;
    width: 30px;
    border-style: inset;
    border-color: yellowgreen;
    border-radius: 15px; 
    cursor: pointer;
`;

const NextButton = styled.button`
    background-color: green;
    color: white;
    margin-left: 25px;
    float: left;
    position: relative;
    left: 50px;
    bottom: 10px;
    width: 30px;
    border-style: inset;
    border-color: yellowgreen;
    border-radius: 15px;
    cursor: pointer;
`;

const NavigationBar = styled.div`
    margin-top: 20px;
    margin-left: -50px;
    width: 200px;
;`

export function EpisodeNavigationBar() {
    return (
        <NavigationBar>
            <PreviousButton>{`<`}</PreviousButton>
            <PageButtonsGroup>
                <PageButton>1</PageButton>
                <PageButton>2</PageButton>
                <PageButton>3</PageButton>
            </PageButtonsGroup>
            <NextButton>{`>`}</NextButton>
        </NavigationBar>                
    )
}



