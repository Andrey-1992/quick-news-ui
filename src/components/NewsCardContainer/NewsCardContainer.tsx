import './NewsCardContainer.css';
import React from 'react';
import { NewsCardDetailed } from '../NewsCardDetailed/NewsCardDetailed';
import { Loading } from '../Loading/Loading';

interface NewsInfoApi {
  status?: string
  copyright?: string
  section?: string
  last_updated?: string
  num_results?: number
  results: Array<Article>
}

interface Article {
  section?: string
  subsection?: string
  title?: string
  abstract?: string
  url?: string
  uri?: string
  byline?: string
  item_type?: string
  updated_date?: string 
  created_date?: string
  published_date?: string
  material_type_facet?: string
  kicker?: string
  des_facet?: Array<string>
  org_facet?: Array<string>
  per_facet?: Array<string>
  geo_facet?: Array<string>
  multimedia?: Array<string>
  short_url?: string
}

interface Props {
  searchedNews?: NewsInfoApi
}

export const NewsCardContainer: React.FC<Props> = ({searchedNews}) => {
  if (searchedNews) {
    // console.log(searchedNews)
    const resultArray = searchedNews.results
    const newsCardArray = resultArray.map(news => <NewsCardDetailed searchedNews={searchedNews} />)
    console.log(newsCardArray)
    return (
      <div className="Home">
        {/* <p>{resultArray[0].url}</p> */}
        {resultArray.map(news => <p>{news.title}</p>)}
        {/* <p>Test</p> */}
      </div>
    );
  }
  return (
    <Loading />
  );
}