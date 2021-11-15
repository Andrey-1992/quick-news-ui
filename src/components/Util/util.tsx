import * as dotenv from "dotenv";
// dotenv.config({ path:'/.env' });
// require('dotenv').config()
// import 'dotenv/config'
//NYT_API_KEY=gFgfPotWyeyYBbaW9U3bbLbBXrropGAx
// require('dotenv').config({ path: './.env' })
// require('dotenv').config({path:'path_to_dotenv'});
// import { ENV_VAR } from "dotenv"

console.log(process.env)


export const fetchTopStories = async (newCategory: string) => {
  // const apiKey = process.env.NY_TIMES_API_KEY;
  // console.log(process.env.NY_TIMES_API_KEY)
  try {
    const response = await fetch(`https://api.nytimes.com/svc/topstories/v2/${newCategory}.json?api-key=gFgfPotWyeyYBbaW9U3bbLbBXrropGAx`)
    if (!response.ok || response.status === 500) {
      throw Error('Error fetching news top stories')
    }
    const data = await response.json()
    return data
    // const dataResults = await data.results
    // return dataResults
    // console.log(dataResults)
  } catch(err) {
    return err;
  }
}