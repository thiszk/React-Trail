import { React } from 'react';
import styled from "styled-components";
import { getEpisodeList } from './getFunctions';

const PageButtonsGroup = styled.div`
    display:flex;
    justify-content:center;
`;

const PageButton = styled.button`
    float: left;
    position: relative;
    left: 50px;
    bottom: 10px;
    width: 30px;
    border-color: yellowgreen;
    background-color: ${ props => props.isSelected ? "yellowgreen" : "white" };
    cursor: pointer;
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
    margin-left: 0px;
    width: 200px;
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: 0;
    cursor: pointer;
;`

function navPage(navPageNumber, setEpisodeList, setCurrentPage) {
    if (navPageNumber != null) {
        getEpisodeList(navPageNumber).then(newList => setEpisodeList(newList));
        setCurrentPage(navPageNumber);
    }
}

function thisPage(pageNumber, setEpisodeList, setCurrentPage) {
    getEpisodeList(pageNumber).then(newList => setEpisodeList(newList));
    setCurrentPage(pageNumber);
}

export function EpisodeNavigationBar({ navInfo, setEpisodeList, currentPage, setCurrentPage }) {
    const numberOfPages = Array.from(Array(navInfo.pages).keys()).map(i => i + 1);
    
    return (
        <NavigationBar>
            <PreviousButton onClick = { () => navPage(navInfo.prev, setEpisodeList, setCurrentPage) }>
                { `<` }
            </PreviousButton>
            <PageButtonsGroup>
                { numberOfPages.map((page) => 
                <PageButton key = { page } 
                    onClick = { () => thisPage(page, setEpisodeList, setCurrentPage) }
                    isSelected = { currentPage == page }>
                        { page }
                </PageButton>) }
            </PageButtonsGroup>
            <NextButton onClick = { () => navPage(navInfo.next, setEpisodeList, setCurrentPage) }>
                { `>` }
            </NextButton>
        </NavigationBar>                
    )
}






