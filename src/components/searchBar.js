import { useState } from 'react';
import styled from 'styled-components';
import searchIcon from '../img/RaM_searchIcon.png';
import { getEpisodesByName } from './getFunctions';
import { initialPage, blank } from '../index';

export function SearchBarDiv({ setEpisodeList, setCurrentPage}) {
    const [input, setInput] = useState(blank);

    return (
        <SearchBar>
            <SearchButton onClick = { () => getFilteredList(input, setEpisodeList, setCurrentPage) }/>
            <SearchInput value = { input } onInput ={ text => setInput(text.target.value) }/>
        </SearchBar>
    )
}

function getFilteredList(searchInput, setEpisodeList, setCurrentPage) {
    setCurrentPage(initialPage);
    getEpisodesByName(searchInput, initialPage).then(list => setEpisodeList(list));  
    
}

const SearchBar = styled.div`
    position: absolute;
    right: 150px;
    width: 100%;
    height: 36px;
    display: -ms-flexbox;
    display: flex;
    justify-content: flex-end;
`;

const SearchButton = styled.button`
    background-image: url(${ searchIcon });
    background-position: 3px 1px;
    background-repeat: no-repeat;
    background-size: 30px 30px;
    padding-left: 35px;
    height: 36px;
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
    border-color: yellowgreen;
    border-style: double;
    cursor: pointer;
`;

const SearchInput = styled.input`
    font-size: 20px;
    width: 590px;
    height: 30px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border-color: yellowgreen;
    border-style: double;
`;
