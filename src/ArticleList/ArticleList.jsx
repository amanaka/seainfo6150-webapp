import React from "react";
import PropTypes from 'prop-types';
import ArticleListItem from"./ArticleListItem.jsx";
import style from './ArticleList.module.css';

const ArticleList = props => {
  return (
    <ul className={style.list}>
      {props.articles.map(article =>(
        <li key={article.slug} className={style.article}>
          <ArticleListItem article ={article}/></li>
      ))}
    </ul>
  );
};

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired
};

export default ArticleList; 
