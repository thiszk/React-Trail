import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { TitleBox } from './titleBox.js';
import { EpisodeList } from './episodeList.js';
import { EpisodeBox } from './episodeBox';

  ReactDOM.render(
    <TitleBox />,
    document.getElementById('titleBox')
  );
  ReactDOM.render(
      <EpisodeBox />,
      document.getElementById('container')
  );
