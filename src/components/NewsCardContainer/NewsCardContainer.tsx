import './NewsCardContainer.css';
import React from 'react';
import { useState } from 'react'
import { Loading } from '../Loading/Loading';
import { NewsCardDetailed } from '../NewsCardDetailed/NewsCardDetailed';
import { NewsCardOverview } from '../NewsCardOverview/NewsCardOverview';

interface Body {
  abstract?: string
  byline?: string
  title?: string
  multimediaurl?: string
  multimediacaption?: string
  urlink?: string
  section?: string
}
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
  multimedia: Array<MultimediaInfo>
  short_url?: string
}

interface MultimediaInfo {
  caption: string
  copyright: string
  format: string
  height: number
  subtype: string
  type: string
  url: string
  width: number
}

interface Props {
  searchedNews?: NewsInfoApi
  saveToStorage: (objBody: Body) => void 
}

let id = 0;
function getId() {
  return id++;
}

export const NewsCardContainer: React.FC<Props> = ({searchedNews, saveToStorage}) => {
  const [ detailedView, setDetailedView ] = useState<boolean>(true);
  const [ articleName, setArticleName ] = useState<string | undefined>('');

  const changeViewStatus = (viewStatus: string, articleTitle?: string): void => {
    if (viewStatus === 'overview') {
      setDetailedView(false)
      setArticleName(articleTitle)
    } else if (viewStatus === 'detailed') {
      setDetailedView(true)
    }  
  }

  if (searchedNews) {
    const resultArray = searchedNews.results
    const findArticle = resultArray.filter(article => article.title === articleName);
    const newsCardDetail = findArticle.map(news => <NewsCardDetailed articleNews={news} key={getId() + 1} changeViewStatus={changeViewStatus} saveToStorage={saveToStorage}/>)
    const newsCardOver = resultArray.map(news => <NewsCardOverview articleNews={news} key={getId()} changeViewStatus={changeViewStatus} />)
    return (
      <div className="home">
        {!detailedView ? newsCardDetail : newsCardOver}
      </div>
    );
  }
  return (
    <Loading />
  );
}