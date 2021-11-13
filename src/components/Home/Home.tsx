import './Home.css';
import React from 'react';
import { NewsCardContainer } from '../NewsCardContainer/NewsCardContainer';
import { Loading } from '../Loading/Loading';

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
  multimedia: Array<MultimediaInfo>
  short_url?: string
}

interface MultimediaInfo {
  caption: string
  copyright: string
  format: string
  height: number
  subtype: string
  type: string
  url: string
  width: number
}

interface Props {
  searchedNews?: NewsInfoApi
  saveToStorage: () => void
}

export const Home: React.FC<Props> = ({searchedNews, saveToStorage}) => {
  if (searchedNews) {
    return (
      <NewsCardContainer searchedNews={searchedNews} saveToStorage={saveToStorage} />
    );
  }
  return (
    <Loading />
  );
}