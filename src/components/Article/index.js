import React, { useState, useEffect } from "react";
// import date from "../../images/date.png";
import love from "../../images/love.png";
import share from "../../images/share.png";
import "./style.scss";

function Article({ id, news }) {
  const [article, setArticle] = useState(undefined);
  //   debugger;
  const getArticleById = news.find((n) => n.id == id);
  //   console.log(
  //     "Article news",
  //     news.find((n) => n.id === id)
  //   );

  if (news.length > 0) console.log("getArticleById", getArticleById);
  console.log("art", article);

  useEffect(() => {
    if (news.length > 0 || article === undefined) {
      console.log("getArticleById", getArticleById);
      setArticle(getArticleById);
    }
  }, [article, news]);

  return (
    <div className="article pt-2 mb-5">
      {article !== undefined ? (
        <div className="container">
          <h1 className="my-4">Article Details</h1>
          <div className="row article__details">
            <img
              className="item__banner card-img-top"
              src={article.urlToImage}
              alt={article.title}
            />
            <div className="col-10 pt-3">
              <h4 className="item__title">{article.title}</h4>
            </div>
            <div className="col-2">
              <div className="item__actions mt-3 mx-1">
                <a href="#">
                  <img src={love} alt="love icon" className="mr-3" />
                </a>
                <a href="#">
                  <img src={share} alt="share icon" className="mr-3" />
                </a>
              </div>
            </div>
            <div className="col-12 article__description py-3">
              {article.description || (
                <p className="article__empty">No Details</p>
              )}
            </div>
          </div>
        </div>
      ) : (
        "Loading..."
      )}
    </div>
  );
}

export default Article;
