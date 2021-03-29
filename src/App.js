import { Fragment } from 'react';
import React from 'react';
import './App.css';
import { TitleBoxContainer } from './components/titleBox';
import GlobalStyle from './theme/globalStyles';
import { EpisodeBoxDiv } from './components/episodeBox';
import { EpisodeCardDiv } from './components/episodeCard';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <TitleBoxContainer />
      <EpisodeBoxDiv />
      <EpisodeCardDiv />  
    </Fragment>
  );
}

export default App;
