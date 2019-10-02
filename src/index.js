import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Demo from "./Demo";
import articles from "./data/articles.json";

<<<<<<< HEAD
const querystring = window.location.search || '';

if (/demo/.test(querystring.toLowerCase())) {
    ReactDOM.render(<Demo querystring={querystring} />, document.getElementById('root'));
} else {
    ReactDOM.render(<App />, document.getElementById('root'));
}
=======
const querystring = window.location.search || "";

if (querystring.toLowerCase() === "?demo=true") {
  ReactDOM.render(<Demo />, document.getElementById("root"));
} else {
  ReactDOM.render(
    <App article={Object.values(articles)[0]} />,
    document.getElementById("root")
  );
}
>>>>>>> 9dcf61c405eddd096cc274c88174c6529e6b7ff1
