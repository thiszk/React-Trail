import React from 'react';

export function SearchBar() {
    return (
        <div className='searchBar'>
            <SearchButton />
            <SearchInput />
        </div>
    )
}

export function SearchButton() {
    return <button className='searchButton'></button>
}

export function SearchInput() {
    return <input className='searchInput'></input>
}