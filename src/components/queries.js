export const seriesInfo = `query seriesInfo{
  episodes{
    info{
      count
    }
  }
}`;
  
export const episodeList = `query buttonInfo($currentPage: Int) {
  episodes(page: $currentPage) {
    info {
        next
        prev
        pages
    }  
    results {
      id
        episode
    }
  }
}`;

export const cardInfo = `query cardInfo($episodeId: ID!){
  episode(id: $episodeId){
    episode
    name
    air_date
    characters {
      name
    }
  }
}`;

export const episodesByName = `query nameFilter($episodeName: String, $page: Int) {
  episodes(filter: { name: $episodeName }, page: $page) {
    info {
      next
      prev
      pages
    }  
    results {
      id
      episode
    }
  }
}`;
