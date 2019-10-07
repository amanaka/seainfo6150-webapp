import React from 'react';
import PropTypes from 'prop-types';
import styles from "./SlugButton.module.css";

const SlugButton = (props) => {
  return (
    <button id={styles.slugButton} onClick={() => alert(props.articles.slug)}>
        {props.text}
    </button>  
  );
}
SlugButton.propTypes = {
    button: PropTypes.object.isRequired,
    text:PropTypes.string.isRequired
};
export default SlugButton;