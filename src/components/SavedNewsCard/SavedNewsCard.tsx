import './SavedNewsCard.css';
import React from 'react';

// interface savedData {
//   abstract: string
//   title: string
//   byline: string
//   section: string
//   imgUrl: string
//   multimediaUrl: string
//   multimediaCaption: string
// }
// interface Props {
//   retrivedData: Array<savedData>
// }

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

  // const renderData = () => {
  //   const createdCards =  retrivedData.map(data => {
  //     return ( 
  //     // <p>{data.section}</p>
  //     <p>{data.title}</p>
  //     // <div className="news-card-detailed">
  //     //   <img className="img-card-detailed" src={retrivedData.multimediaUrl} alt={retrivedData.multimedia[0].caption} width="500" height="600"></img>
  //     //   <h2 className="card-detailed-text">{retrivedData.title}</h2>
  //     //   <p className="card-detailed-text">{retrivedData.abstract}</p>
  //     //   <h4 className="card-detailed-text">{retrivedData.byline}</h4>
  //     //   <p className="card-detailed-text">Category #{retrivedData.section}</p>
  //     //   <button className='card-detailed-btns'>
  //     //     <a href={retrivedData.imgUrl} target="_blank">Read Article</a>
  //     //   </button>
  //     //   <button onClick={deleteArticle} className='card-detailed-btns'>Delete Article</button>
  //     // </div>
  //     )
  //   })
  //   console.log(createdCards)
  // }

  const deleteArticle = () => {
    console.log('delete gfunctionality would be here')
  }

  return (
    <div className="news-card-detailed">
      <img className="img-card-detailed" src={multimediaUrl} alt={multimediaCaption} width="500" height="600"></img>
      <h2 className="card-detailed-text">{title}</h2>
      <p className="card-detailed-text">{abstract}</p>
      <h4 className="card-detailed-text">{byline}</h4>
      <p className="card-detailed-text">Category #{section}</p>
      <button className='card-detailed-btns'>
      <a href={imgUrl} target="_blank">Read Article</a>
      </button>
      <button onClick={deleteArticle} className='card-detailed-btns'>Delete Article</button>
    </div>
  );
}