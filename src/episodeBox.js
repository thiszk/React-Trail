import React from 'react';
import { EpisodeCard } from './episodeCard';
import { EpisodeList } from './episodeList';
import { EpisodeNavigationBar } from './episodeNavigationBar';
import { SearchBar } from './searchBar';

export class EpisodeBox extends React.Component {
    render() {
        return(
            <div className="episodeBox">
                <EpisodeList/>
                <EpisodeNavigationBar/>
                <EpisodeCard />
                <SearchBar />
            </div>
        )
    };
}