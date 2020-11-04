import React from "react";
import { Link } from "@reach/router";
import * as dayjs from "dayjs";
// import history from "../../history";
import date from "../../images/date.png";
import love from "../../images/love.png";
import share from "../../images/share.png";
// import { useLocation } from "@reach/router";

function NewsItem({ item }) {
  //   const location = useLocation();
  //   console.log("location current,", location, current);

  return (
    <div className="card">
      <img
        className="item__banner card-img-top"
        src={item.urlToImage}
        alt={item.title}
      />
      <div className="item__actions mt-3 mx-1">
        <a href="#">
          <img src={love} alt="love icon" className="mr-3" />
        </a>
        <a href="#">
          <img src={share} alt="share icon" className="mr-3" />
        </a>
      </div>
      <div className="item__body card-body">
        <Link to={`/news/${item.id}`}>
          <h4 className="item__body-title">{item.title}</h4>
        </Link>
        <div className="item__body-tags my-3">
          <span>News</span>
        </div>
        <div className="item__body-content">{item.content}</div>
      </div>
      <div className="item__date">
        <img src={date} alt="date icon" className="mr-2" />
        <b>{dayjs(item.publishedAt).format("ddd DD MMM YYYY")}</b>
      </div>
    </div>
  );
}

export default NewsItem;
