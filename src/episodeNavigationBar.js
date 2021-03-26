import React from 'react';

export class EpisodeNavigationBar extends React.Component {
    render () {
        return (
            <div className='episodeNavigationBar'>
                <PreviousButton />
                <PageButtonsGroup />
                <NextButton />
            </div>
        )
    };
}

class PageButtonsGroup extends React.Component {
    render () {
        return (
            <div className='pageButtonGroup'>
                <PageButton page={1}/>
                <PageButton page={2}/>
                <PageButton page={3}/>
            </div>
        )
    }
}

function PageButton (props) {
    return (
        <button className="pageButton">
            {props.page}
        </button>
    )
}


class PreviousButton extends React.Component {
    render () {
        return (
            <button className="previousButton">
                { '<' }
            </button>
        )
    };
}

class NextButton extends React.Component {
    render () {
        return (
            <button className="nextButton">
                { '>' }
            </button>
        )
    };
}