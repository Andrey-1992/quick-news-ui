import './NewsCardOverview.css';
import React from 'react';
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
  articleNews: Article
  changeViewStatus: (viewStatus: string, articleTitle?: string) => void
}

export const NewsCardOverview: React.FC<Props> = ({articleNews, changeViewStatus}) => {
  console.log(articleNews.multimedia[0].url)
  let articleNaming = articleNews.title
  const sendStatus = ():void => {
      changeViewStatus('overview', articleNaming)
  }

  return (
    <div className="NewsCardDetailed">
      <img src={articleNews.multimedia[0].url} alt={articleNews.multimedia[0].caption} width="500" height="600"></img>
      <p>{articleNews.title}</p>
      <p>{articleNews.section}</p>
      <p>{articleNews.published_date}</p>
      {/* <p>{articleNews.multimedia}</p> */}
      <button className="more-info-btn" onClick={sendStatus}>More info</button>
    </div>
  );
}