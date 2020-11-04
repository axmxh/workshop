import React from "react";
import { Link } from "@reach/router";
import leftArrow from "../../images/left-arrow.png";

import NewsItem from "./NewsItem";

import "./style.scss";
function News({ news }) {
  return (
    <div className="news container pt-2">
      <div className="row my-4">
        <h2 className="news__header col-lg-10 col-7">Latest News</h2>
        {news.length > 6 ? (
          <div className="col-lg-2 col-5 view__more">
            {/* <button onClick={() => history.push("/news")} className="">
              View More
            </button> */}
            <Link to="/news">
              View All <img src={leftArrow} alt="arrow icon" />
            </Link>
          </div>
        ) : null}
      </div>
      <div className="row mb-5">
        {news
          .filter((n) => n.showOnHomepage)
          .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
          .slice(0, 6)
          .map((item, i) => {
            return (
              <div key={item.id} className="col-lg-4 col-md-6 col-12 item mb-4">
                <NewsItem item={item} />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default News;
