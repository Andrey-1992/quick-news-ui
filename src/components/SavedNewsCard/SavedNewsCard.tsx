import './SavedNewsCard.css';
import React from 'react';

interface Props {
  abstract: string
  title: string
  byline: string
  section: string
  urlink: string
  multimediaurl: string
  multimediaCaption: string
  id: number,
  deleteStoredNews: (id: number) => void
}

export const SavedNewsCard: React.FC<Props> = ({
  abstract,
  title,
  byline,
  section,
  multimediaurl,
  urlink,
  multimediaCaption,
  id,
  deleteStoredNews
  }) => {

  const deleteArticle = () => {
    console.log('delete gfunctionality would be here')
  }

  return (
    <div className="news-card-saved">
      <img className="img-card-detailed" src={multimediaurl} alt={multimediaCaption} width="500" height="600"></img>
      <h2 className="card-detailed-text">{title}</h2>
      <p className="card-detailed-text">{abstract}</p>
      <h4 className="card-detailed-text">{byline}</h4>
      <p className="card-detailed-text">Category #{section}</p>
      <button className='card-detailed-btns'>
      <a href={urlink} target="_blank">Read Article</a>
      </button>
      <button onClick={deleteArticle} className='card-detailed-btns'>Delete Article</button>
    </div>
  );
}