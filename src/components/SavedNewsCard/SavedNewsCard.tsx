import './SavedNewsCard.css';
import React from 'react';

interface savedData {
  abstract: string
  title: string
  byline: string
  section: string
  imgUrl: string
  multimediaUrl: string
}
interface Props {
  retrivedData: Array<savedData>
}

export const SavedNewsCard: React.FC<Props> = ({retrivedData}) => {
  const renderData = () => {
    return retrivedData.map(data => {
      <div className="news-card-detailed">
        <img className="img-card-detailed" src={retrivedData.multimedia[0].url} alt={retrivedData.multimedia[0].caption} width="500" height="600"></img>
        <h2 className="card-detailed-text">{retrivedData.title}</h2>
        <p className="card-detailed-text">{retrivedData.abstract}</p>
        <h4 className="card-detailed-text">{retrivedData.byline}</h4>
        <p className="card-detailed-text">Category #{retrivedData.section}</p>
        <button className='card-detailed-btns'>
          <a href={retrivedData.url} target="_blank">Read Article</a>
        </button>
        <button onClick={deleteArticle} className='card-detailed-btns'>Delete Article</button>
      </div>
    })
  }

  const deleteArticle = () => {
    console.log('delete gfunctionality would be here')
  }

  return (
    <p>test saved cards</p>
    // <div className="news-card-detailed">
    //    <img className="img-card-detailed" src={retrivedData.multimedia[0].url} alt={retrivedData.multimedia[0].caption} width="500" height="600"></img>
    //   <h2 className="card-detailed-text">{articleNews.title}</h2>
    //   <p className="card-detailed-text">{articleNews.abstract}</p>
    //   <h4 className="card-detailed-text">{articleNews.byline}</h4>
    //   <p className="card-detailed-text">Category #{articleNews.section}</p>
    //   <button className='card-detailed-btns'>
    //     <a href={articleNews.url} target="_blank">Read Article</a>
    //   </button>
    //   <button onClick={saveArticle} className='card-detailed-btns'>Save Article</button>
    //   <button className='card-detailed-btns' onClick={sendStatus}>Back Home</button>
    // </div>
  );
}