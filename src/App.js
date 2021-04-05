import { Fragment, useState } from 'react';
import React from 'react';
import { TitleBoxContainer } from './components/titleBox';
import GlobalStyle from './theme/globalStyles';
import { EpisodeBoxDiv } from './components/episodeBox';
import { EpisodeCardDiv } from './components/episodeCard';
import { SearchBarDiv } from './components/searchBar';


function App({ firstList, episodeNumber }) {   
  const [cardInfo, setCardInfo ] = useState(null);
  const [episodeList, setEpisodeList] = useState(firstList);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <Fragment>
      <GlobalStyle />
      <TitleBoxContainer episodeNumber = { episodeNumber } />
      <EpisodeBoxDiv  episodeList = { episodeList } 
                      setEpisodeList = { setEpisodeList }
                      setCardInfo = { setCardInfo }
                      currentPage = { currentPage }
                      setCurrentPage = { setCurrentPage }/>
      <EpisodeCardDiv cardInfo = { cardInfo } />
      <SearchBarDiv setEpisodeList = { setEpisodeList }
                    setCurrentPage = { setCurrentPage }/>  
    </Fragment>
  );
}

export default App;
