import React from 'react';

function EpisodeButton(episode) {
    return <button className="episodeButton">{ episode }</button>
}

export class EpisodeList extends React.Component {
    render() {
        return (
            <div className="episodeButtonList">
                {EpisodeButton('S01E01')}
                {EpisodeButton('S01E02')}
                {EpisodeButton('S01E03')}
                {EpisodeButton('S01E04')}
                {EpisodeButton('S01E05')}
                {EpisodeButton('S01E06')}
                {EpisodeButton('S01E07')}
                {EpisodeButton('S01E08')}
                {EpisodeButton('S01E09')}
                {EpisodeButton('S01E10')}
                {EpisodeButton('S01E11')}
                {EpisodeButton('S01E12')}
                {EpisodeButton('S01E13')}
                {EpisodeButton('S01E14')}
                {EpisodeButton('S01E15')}
                {EpisodeButton('S01E16')}
                {EpisodeButton('S01E17')}
                {EpisodeButton('S01E18')}
                {EpisodeButton('S01E19')}
                {EpisodeButton('S01E20')}     
            </div>
        )
    }
}