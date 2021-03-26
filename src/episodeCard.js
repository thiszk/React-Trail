import React from 'react';

export class EpisodeCard extends React.Component {
    render () {
        return (
            <div className='episodeCard'>
                <EpisodeName />
                <EpisodeCode />
                <EpisodeAirDate />
                <CharacterList />
            </div>
        )
    };
}

class EpisodeName extends React.Component {
    render () {
        return (
            <p className='episodeName'>
                {' Pilot '}
            </p>
        )
    }
}

class EpisodeCode extends React.Component {
    render () {
        return (
            <p> 
                {' S01E01 '}
            </p>
        )
    }
}

class EpisodeAirDate extends React.Component {
    render () {
        return (
            <p> 
                {' April 1, 2012 '}
            </p>
        )
    }
}

class CharacterList extends React.Component {
    render () {
        return (
            <p> 
                {' CharacterList '}
            </p>
        )
    }
}
