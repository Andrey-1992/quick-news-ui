import './NewsCardContainer.css';
import React from 'react';
import { useState } from 'react'
import { Loading } from '../Loading/Loading';
import { NewsCardDetailed } from '../NewsCardDetailed/NewsCardDetailed';
import { NewsCardOverview } from '../NewsCardOverview/NewsCardOverview';

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
  const [ detailedView, setDetailedView ] = useState<boolean>(true);
  const [ articleName, setArticleName ] = useState<string | undefined>('');

  const changeViewStatus = (viewStatus: string, articleTitle?: string):void => {
    // let fakeArticle 
    if (viewStatus === 'overview') {
      // fakeArticle = articleTitle
      setDetailedView(false)
      setArticleName(articleTitle)
      // console.log(typeof articleTitle)
    } else if (viewStatus === 'detailed') {
      setDetailedView(true)
    }  
  }

  if (searchedNews) {
    const resultArray = searchedNews.results
    // console.log(articleName)
    const findArticle = resultArray.filter(article => article.title === articleName);
    // console.log(findArticle)
    const newsCardDetail= resultArray.map(news => <NewsCardDetailed articleNews={news} changeViewStatus={changeViewStatus}/>)
    const newsCardOver= resultArray.map(news => <NewsCardOverview articleNews={news} changeViewStatus={changeViewStatus}/>)
    return (
      <div className="Home">
        {/* {newsCardDetail}
        {newsCardOver} */}
        {!detailedView ? <NewsCardDetailed articleNews={findArticle} changeViewStatus={changeViewStatus}/> : newsCardOver}
      </div>
    );
  }
  return (
    <Loading />
  );
}