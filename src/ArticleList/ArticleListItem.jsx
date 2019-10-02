import React from 'react';
import PropTypes from 'prop-types';


const ArticleListItem = props => {
    return(
    <article>
        <header>
            <h2>{props.article.title}</h2>
        </header>
        <p>{props.article.shortText}
            <time dateTime = {props.article.pubYear}>{props.article.pubDate}</time>
            <button onClick = {() => alert(props.article.slug)}>{"show article slug"}</button>
        </p>
    </article>
    );
  }

ArticleListItem.propTypes = {
    articles: PropTypes.array.isRequired
};

export default ArticleListItem;