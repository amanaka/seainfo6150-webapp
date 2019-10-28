import React from 'react';
import PropTypes from 'prop-types';
import styles from './ArticleImage.module.css';

const ArticleImage = props => {
    return (
      <img id={styles.image} src={props.url} alt={props.title}/>
    );
}

ArticleImage.propTypes = {
  articles: PropTypes.array.isRequired
};

export default ArticleImage;