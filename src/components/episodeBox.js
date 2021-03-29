import React from 'react';
import { EpisodeList } from './episodeList';
import { EpisodeNavigationBar } from './episodeNavigationBar';

export class EpisodeBox extends React.Component {
    render() {
        return(
            <div className="episodeBox">
                <EpisodeList/>
                <EpisodeNavigationBar/>
            </div>
        )
    };
}