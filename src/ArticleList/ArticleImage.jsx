import React from 'react';
import styles from './ArticleImage.module.css';

const ArticleImage = props => {
    return (
      <img id={styles.image} src={props.url} alt={props.title}/>
    );
}


export default ArticleImage;