import { Fragment } from 'react';
import React from 'react';
import './App.css';
import { TitleBoxContainer } from './components/titleBox';
import GlobalStyle from './theme/globalStyles';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <TitleBoxContainer />
    </Fragment>
  );
}

export default App;
