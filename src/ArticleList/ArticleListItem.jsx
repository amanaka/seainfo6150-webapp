import React from 'react';
import PropTypes from 'prop-types';
import SlugButton from './SlugButton.jsx';
import styles from './ArticleListItem.module.css'
import ArticleImage from './ArticleImage';

const ArticleListItem = props => (
  <section className = {styles.flexContainer}>
    <div className = {styles.image}>
      <ArticleImage title = {props.article.title} url = {props.article.image._url}/>
    </div>
    <div className = {styles.text}>
      <h2>{props.article.title}</h2>
      <p>{props.article.shortText}</p>
      <time dateTime = {props.article.pubYear}>{props.article.pubDate}</time>
    </div>    
    <div className = {styles.button}>         
      <SlugButton info={props.article}></SlugButton>
    </div>       
  </section>
);

ArticleListItem.propTypes = {
    articles: PropTypes.object.isRequired
};

export default ArticleListItem;