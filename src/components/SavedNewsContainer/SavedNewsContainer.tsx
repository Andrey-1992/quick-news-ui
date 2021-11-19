import './SavedNewsContainer.css';
import React from 'react';
import { useState, useEffect } from 'react';

export const SavedNewsContainer: React.FC = () => {
  const [ savedNews, setSavedNews ] = useState([]);

  useEffect(() => {
    retrieveStoredData()
  }, [])

  const retrieveStoredData = () => {
    const getStoredPosts = Object.keys(localStorage).map(reqData => {
        // return JSON.parse(localStorage.getItem(reqData))
        // return JSON.parse(localStorage.getItem(reqData))
        // console.log(JSON.parse(localStorage.getItem(reqData)))
        console.log(typeof reqData)
    })
    // setIpCardsData(getStoredPosts);
    // createIpCards(ipCardsData);
  }
    
  const deleteStoredData = () => {
    // localStorage.removeItem(data)
    // retrieveFromStorage()
    // console.log(data, "data in container")
  }

  return (
    <div >
      <p>hello</p>
    </div>
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