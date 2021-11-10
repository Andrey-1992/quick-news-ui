export const fetchTopStories = async (newCategory: string) => {
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