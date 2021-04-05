import { seriesInfo, episodesByName, cardInfo, episodeList } from './queries.js'
import axios from 'axios';

export function getSeriesInfo() {
    return axios({ url: 'https://rickandmortyapi.com/graphql', method: 'post', data: { query: seriesInfo } })
}

export function getEpisodeList(currentPage) {
    return axios({ url: 'https://rickandmortyapi.com/graphql', method: 'post', data: { query: episodeList, variables: { currentPage: currentPage } } })
}

export function getEpisodesByName(stringInput, currentPage) {
  return axios({ url: 'https://rickandmortyapi.com/graphql', method: 'post', data: { query: episodesByName, variables: { episodeName: stringInput, page: currentPage } } })
}


export function getCardInfo(episodeId) {
  return axios({ url: 'https://rickandmortyapi.com/graphql', method: 'post', data: { query: cardInfo, variables: { episodeId: episodeId } } })
}