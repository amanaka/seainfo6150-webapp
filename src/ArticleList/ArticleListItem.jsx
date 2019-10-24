import React from 'react';
import PropTypes from 'prop-types';
import SlugButton from './SlugButton.jsx';
import './ArticleListItem.module.css';
import ArticleImage from './ArticleImage';

const ArticleListItem = props => {
    return(
    <article>
        <ArticleImage title = {props.article.title} url = {props.article.image._url}/>
        <header>
            <h2>{props.article.title}</h2>
        </header>
        <p>{props.article.shortText}</p>
        <div>
            <time dateTime = {props.article.pubYear}>{props.article.pubDate}</time>
            <SlugButton info={props.article}>
            </SlugButton>
        </div>       
    </article>
    );
  }

ArticleListItem.propTypes = {
    articles: PropTypes.array.isRequired
};

export default ArticleListItem;
