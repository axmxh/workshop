import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Router } from "@reach/router";

// import history from "./history";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./components/Layout";
import Home from "./components/Home";
import AllNews from "./components/News/AllNews";
import Article from "./components/Article";
import data from "./newsapi.json";

import "./App.scss";

function App() {
  const [news, setNews] = useState([]);
  const [catagories, setCatagories] = useState(null);

  useEffect(() => {
    if (news.length === 0) {
      setNews(data.articles);
      setCatagories(data.sourceCategory.map((category) => category));
    }
  }, [news]);
  //   console.log("news", news);

  return (
    <div className="App">
      <Layout>
        <Router>
          <Home news={news} path="/" />
          <AllNews news={news} catagories={catagories} path="/news" />
          <Article news={news} path="/news/:id" />
        </Router>
      </Layout>
    </div>
  );
}

export default App;
