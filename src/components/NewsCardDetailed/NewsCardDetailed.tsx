import './NewsCardDetailed.css';
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

interface Body {
  abstract?: string
  byline?: string
  title?: string
  multimediaurl?: string
  multimediacaption?: string
  urlink?: string
  section?: string
}

interface Props {
  articleNews: Article
  changeViewStatus: (viewStatus: string, articleTitle?: string) => void
  saveToStorage: (objBody: Body) => void
}

export const NewsCardDetailed: React.FC<Props> = ({articleNews, changeViewStatus, saveToStorage}) => {
  // console.log(articleNews)
  const sendStatus = ():void => {
    changeViewStatus('detailed')
  }

  const saveArticle = (): void => {
    // saveToStorage()
    const body = {
      "abstract": articleNews.abstract,
      "byline": articleNews.byline,
      "title": articleNews.title,
      "multimediaurl": articleNews.multimedia[0].url,
      "multimediacaption": articleNews.multimedia[0].caption,
      "urlink": articleNews.url,
      "section": articleNews.section
    }
    saveToStorage(body)
  }

  return (
    <div className="news-card-detailed">
      <img className="img-card-detailed" src={articleNews.multimedia[0].url} alt={articleNews.multimedia[0].caption} width="500" height="600"></img>
      <h2 className="card-detailed-text">{articleNews.title}</h2>
      <p className="card-detailed-text">{articleNews.abstract}</p>
      <h4 className="card-detailed-text">{articleNews.byline}</h4>
      <p className="card-detailed-text">Category #{articleNews.section}</p>
      <button className='card-detailed-btns'>
      <a href={articleNews.url} target="_blank" rel="noreferrer"  >Read Article</a>
      </button>
      <button onClick={saveArticle} className='card-detailed-btns'>Save Article</button>
      <button className='card-detailed-btns' onClick={sendStatus}>Back Home</button>
    </div>
  );
}