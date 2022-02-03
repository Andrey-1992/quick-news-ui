import './SavedNewsContainer.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { SavedNewsCard } from '../SavedNewsCard/SavedNewsCard';
import { Loading } from '../Loading/Loading';
import { getSavedNews, deleteSavedNews } from '../Util/util';

interface savedData {
  abstract: string
  title: string
  byline: string
  section: string
  urlink: string
  multimediaurl: string
  multimediacaption: string
  id: number
}

export const SavedNewsContainer: React.FC = () => {
  const [ savedNews, setSavedNews ] = useState<Array<savedData>>([]);

  useEffect(() => {
    retrieveStoredData()
  }, [])

  const retrieveStoredData = () => {
    getSavedNews()
    .then(data => setSavedNews(data))
    .catch(error => console.log(error))
  }
    
  const deleteStoredNews = (id: number): void => {
    deleteSavedNews(id)
  }

  if (savedNews) {
    const renderNews = savedNews.map(data => 
      <SavedNewsCard 
        abstract={data.abstract} 
        title={data.title}
        byline={data.byline}
        section={data.section}
        multimediaurl={data.multimediaurl}
        urlink={data.urlink}
        multimediaCaption={data.multimediacaption}
        key={data.id}
        id={data.id}
        deleteStoredNews={deleteStoredNews}
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