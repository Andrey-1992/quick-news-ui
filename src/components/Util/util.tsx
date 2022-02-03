export const fetchTopStories = async (newCategory: string) => {
  try {
    const response = await fetch(`https://api.nytimes.com/svc/topstories/v2/${newCategory}.json?api-key=gFgfPotWyeyYBbaW9U3bbLbBXrropGAx`)
    if (!response.ok || response.status === 500) {
      throw Error('Error fetching news top stories')
    }
    const data = await response.json()
    return data
  } catch(err) {
    return err;
  }
}

export const getSavedNews = async () => {
  try {
    const response = await fetch('https://quick-news-api.herokuapp.com/saved-news')
    if (!response.ok || response.status === 500) {
      throw Error('Error fetching news top stories')
    }
    const data = await response.json()
    return data
  } catch(err) {
    return err;
  }
}

export const deleteSavedNews = async (id: number) => {
  try {
    const res = await fetch(`https://quick-news-api.herokuapp.com/saved-news/${id}`, {
      method: 'DELETE',
      headers: {
        // This line of code abilities the cors to fecth properly.
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(id)
    });
    const res_1 = await res.json();
    return console.log(res_1);
  } catch (err) {
    return err;
  }
}

export const postSavedNews = async (body: number) => {
  try {
    const res = await fetch(`https://quick-news-api.herokuapp.com/saved-news/${id}`, {
      method: 'POST',
      headers: {
        // This line of code abilities the cors to fecth properly.
        // 'Access-Control-Allow-Origin': '*'
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
    const res_1 = await res.json();
    return console.log(res_1);
  } catch (err) {
    return err;
  }
}