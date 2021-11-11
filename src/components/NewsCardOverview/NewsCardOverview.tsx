import './NewsCardOverview.css';
import React from 'react';
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

export const NewsCardOverview: React.FC<Props> = ({articleNews}) => {
  // console.log(articleNews)
  return (
    <div className="NewsCardDetailed">
      <p>{articleNews.title}</p>
      <p>{articleNews.section}</p>
      <p>{articleNews.published_date}</p>
      <button className="more-info-btn">More info</button>
    </div>
  );
}