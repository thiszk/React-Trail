import React, { Fragment } from 'react';
import styled from 'styled-components';
import searchIcon from '../img/RaM_searchIcon.png'

export function SearchBarDiv() {
    return (
        <SearchBar>
            <SearchButton />
            <SearchInput />
        </SearchBar>
    )
}

const SearchBar = styled.div`
    position: absolute;
    margin-left: 470px;
    width: 100%;
    height: 36px;
    display: flex;
`;

const SearchButton = styled.button`
    background-image: url(${searchIcon});
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
