import React from 'react';
<<<<<<< HEAD
import ArticleList from "./ArticleList/ArticleList";
import articles from "./data/articles.json";
=======
import PropTypes from 'prop-types';
>>>>>>> 9dcf61c405eddd096cc274c88174c6529e6b7ff1

const App = ({ article }) => {
  return (
    <div className="App">
      <ArticleList articles={Object.values(articles)} />
    </div>
  );
}

App.propTypes = {
  article: PropTypes.shape({
    "title": PropTypes.string.isRequired,
    "shortText": PropTypes.string.isRequired,
    "pubDate": PropTypes.string.isRequired,
    "pubYear": PropTypes.string.isRequired,
    "author": PropTypes.string.isRequired
  }).isRequired
}
export default App;
