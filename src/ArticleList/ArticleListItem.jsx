import React from 'react';
import PropTypes from 'prop-types';
import SlugButton from './SlugButton.jsx';
import './ArticleListItem.module.css'

const ArticleListItem = props => {
    return(
    <article>
        <header>
            <h2>{props.article.title}</h2>
        </header>
        <p>{props.article.shortText}</p>
        <div>
            <time dateTime = {props.article.pubYear}>{props.article.pubDate}</time>
            {<SlugButton button = {props.article} text={props.article.author}/>}
        </div>       
    </article>
    );
  }

ArticleListItem.propTypes = {
    articles: PropTypes.array.isRequired
};

export default ArticleListItem;
