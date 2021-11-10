import React from 'react';
import './Home.css';

interface NewsInfoApi {
  status?: string
  copyright?: string
  section?: string
  last_updated?: string
  num_results?: number
  results: Array<Article>
}

interface Article {
  section?: string
  subsection?: string
  title?: string
  abstract?: string
  url?: string
  uri?: string
  byline?: string
  item_type?: string
  updated_date?: string 
  created_date?: string
  published_date?: string
  material_type_facet?: string
  kicker?: string
  des_facet?: Array<string>
  org_facet?: Array<string>
  per_facet?: Array<string>
  geo_facet?: Array<string>
  multimedia?: Array<string>
  short_url?: string
}

interface Props {
  searchedNews?: NewsInfoApi
}

export const Home: React.FC<Props> = ({searchedNews}) => {
  if (searchedNews) {
    console.log(searchedNews)
    const resultArray = searchedNews.results
    // const testMap = resultArray.map(news => news.title)
    console.log(resultArray[0].url)
    return (
      <div className="Home">
        <p>{resultArray[0].url}</p>

      </div>
    );
  }
  return (
    <div className="Home">
      <p>Home</p>
    </div>
  );
}