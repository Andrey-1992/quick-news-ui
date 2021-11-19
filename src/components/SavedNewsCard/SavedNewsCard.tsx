import './SavedNewsCard.css';
import React from 'react';

interface Props {
  abstract: string
  title: string
  byline: string
  section: string
  imgUrl: string
  multimediaUrl: string
  multimediaCaption: string
}

export const SavedNewsCard: React.FC<Props> = ({
  abstract,
  title,
  byline,
  section,
  imgUrl,
  multimediaUrl,
  multimediaCaption
  }) => {

  const deleteArticle = () => {
    console.log('delete gfunctionality would be here')
  }

  return (
    // <div className="news-card-overview" style={{  backgroundSize:"100%", backgroundPosition: "center", backgroundImage: `url(${multimediaUrl})` }}>
    <div className="news-card-saved">
      <img className="img-card-detailed" src={multimediaUrl} alt={multimediaCaption} width="500" height="600"></img>
      {/* <div className="info-card-saved"> */}
        <h2 className="card-detailed-text">{title}</h2>
        <p className="card-detailed-text">{abstract}</p>
        <h4 className="card-detailed-text">{byline}</h4>
        <p className="card-detailed-text">Category #{section}</p>
        <button className='card-detailed-btns'>
        <a href={imgUrl} target="_blank">Read Article</a>
        </button>
        <button onClick={deleteArticle} className='card-detailed-btns'>Delete Article</button>
      {/* </div> */}
    </div>
  );
}