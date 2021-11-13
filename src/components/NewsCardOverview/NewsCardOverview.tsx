import './NewsCardOverview.css';
import React from 'react';
import { Link } from 'react-router-dom';
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
  saveToStorage: () => void
}

export const NewsCardOverview: React.FC<Props> = ({articleNews, changeViewStatus, saveToStorage}) => {
  let articleNaming = articleNews.title
  const sendStatus = ():void => {
      saveToStorage()
      changeViewStatus('overview', articleNaming)
  }

  return (
    <div className="news-card-overview" style={{  backgroundSize:"100%", backgroundPosition: "center", backgroundImage: `url(${articleNews.multimedia[0].url})` }}>
      <div className="info-card-overview">
        <h2 className="overview-text">{articleNews.title}</h2>
        <p className="overview-text">Category #{articleNews.section}</p>
        <button className="more-info-btn" onClick={sendStatus}>More info</button>
      </div>
    </div>
  );
}

// backgroundRepeat: "no-repeat"