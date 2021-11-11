import './NewsCardDetailed.css';
import React from 'react';

// interface NewsInfoApi {
//   status?: string
//   copyright?: string
//   section?: string
//   last_updated?: string
//   num_results?: number
//   results: Array<Article>
// }

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
  articleNews: Article
}

export const NewsCardDetailed: React.FC<Props> = ({articleNews}) => {
  // console.log(articleNews)
  return (
    <div className="NewsCardDetailed">
      <p>{articleNews.title}</p>
      <p>{articleNews.abstract}</p>
      <p>{articleNews.byline}</p>
      <p>{articleNews.published_date}</p>
      <p>{articleNews.url}</p>
    </div>
  );
}