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
  let articleNaming = articleNews.title
  const sendStatus = ():void => {
      changeViewStatus('overview', articleNaming)
  }

  if (articleNews) {
    return (
      <div className="news-card-overview" style={{  backgroundSize:"100%", backgroundPosition: "center", backgroundImage: `url(${articleNews.multimedia[0].url})`}}>
        <div className="info-card-overview">
          <h2 className="overview-text">{articleNews.title}</h2>
          <p className="overview-text">Category #{articleNews.section}</p>
          <button className="more-info-btn" onClick={sendStatus}>More info</button>
        </div>
      </div>
    );
  }
  return(<p>loading</p>)
}