import './SavedNewsContainer.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { mockUpData } from './mockUpData';
import { SavedNewsCard } from '../SavedNewsCard/SavedNewsCard';
import { Loading } from '../Loading/Loading';
import { getSavedNews } from '../Util/util';

interface savedData {
  abstract: string
  title: string
  byline: string
  section: string
  imgUrl: string
  multimediaUrl: string
  multimediaCaption: string
}

export const SavedNewsContainer: React.FC = () => {
  const [ savedNews, setSavedNews ] = useState<Array<savedData>>([]);

  useEffect(() => {
    retrieveStoredData()
  }, [])

  const retrieveStoredData = () => {
    setSavedNews(mockUpData)
    getSavedNews()
    // .then(data => console.log(data))
  }
    
  const deleteStoredData = () => {
  }

  if (savedNews) {
    const renderNews = savedNews.map(data => <SavedNewsCard 
      abstract={data.abstract} 
      title={data.title}
      byline={data.byline}
      section={data.section}
      imgUrl={data.imgUrl}
      multimediaUrl={data.multimediaUrl}
      multimediaCaption={data.multimediaCaption}
      />)
    return (
      <div className="saved-news-container">
        {renderNews}
      </div>
    )
  }

  return (
    <Loading />
  );
}

















// import './SavedNewsContainer.css';
// import React from 'react';
// import { useState, useEffect } from 'react';

// export const SavedNewsContainer: React.FC = () => {
//   const [ savedNews, setSavedNews ] = useState([]);

//   useEffect(() => {
//     retrieveFromStorage()
//   }, [])

//   const retrieveFromStorage = () => {
//     const getStoredPosts = Object.keys(localStorage).map(reqData => {
//         // return JSON.parse(localStorage.getItem(reqData))
//         // return JSON.parse(localStorage.getItem(reqData))
//         // console.log(JSON.parse(localStorage.getItem(reqData)))
//         console.log(typeof reqData)
//     })
//     // setIpCardsData(getStoredPosts);
//     // createIpCards(ipCardsData);
//   }
    
//   const deleteFromStorage = () => {
//     // localStorage.removeItem(data)
//     // retrieveFromStorage()
//     // console.log(data, "data in container")
//   }

//   return (
//     <div >
//       <p>hello</p>
//     </div>
//   );
// }