import React, { Component } from 'react';
import { render } from '@testing-library/react';
import './news.scss';






const NewsItem = (props) => (
  <li className="news-item">
    <a href={props.url} className={props.name}>

    </a>
  </li>
)

class News extends Component {

  constructor(props) {
    super(props);
    this.state = {
      newsItem: [
        {
          url: '#',
          name: 'news-link'
        },
        {
          url: '#',
          name: 'news-link'
        },
        {
          url: '#',
          name: 'news-link'
        }
      ]
    }
  }

  render() {

    const {
      newsItem
    } = this.state

    return (
      <div className="news">
        <ul className="news-list">
          {this.state.newsItem.map((newsList, index) => {
            return (
              <NewsItem key={index} url={newsList.url} name={newsList.name} />
            )
          })}
        </ul>
      </div>
    )
  }
}































export default News;
