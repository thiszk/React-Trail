import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { getEpisodeList, getSeriesInfo } from './components/getFunctions';

export const initialPage = 1;
export const blank = '';

function renderPage(firstList, episodeNumber) {

  ReactDOM.render(
    <App firstList = { firstList } episodeNumber = { episodeNumber } />,
    document.getElementById('root')
  );  
}
getSeriesInfo()
.then((episodeNumber) => getEpisodeList(initialPage)
.then(firstList => renderPage(firstList, episodeNumber)));
