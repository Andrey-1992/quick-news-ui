import './SavedNewsContainer.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { mockUpData } from './mockUpData';
import { SavedNewsCard } from '../SavedNewsCard/SavedNewsCard';
import { Loading } from '../Loading/Loading';

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
  // console.log(mockUpData)
  useEffect(() => {
    retrieveStoredData()
  }, [])

  const retrieveStoredData = () => {
    setSavedNews(mockUpData)
    // console.log(savedNews)
  }
    
  const deleteStoredData = () => {
  }

  if (savedNews) {
    return (
      <div className="saved-news-container">
        <SavedNewsCard retrivedData={savedNews} />
        <p>true</p>
        <p>{savedNews[0].abstract}</p>
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