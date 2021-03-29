import { Fragment } from 'react';
import React from 'react';
import './App.css';
import { TitleBoxContainer } from './components/titleBox';
import GlobalStyle from './theme/globalStyles';
import { EpisodeList } from './components/episodeList';
import { EpisodeNavigationBar } from './components/episodeNavigationBar';
import { EpisodeBoxDiv } from './components/episodeBox';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <TitleBoxContainer />
      <EpisodeBoxDiv />
        
    </Fragment>
  );
}

export default App;
