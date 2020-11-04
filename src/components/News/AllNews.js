import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Pagination from "../Pagination";
import NewsItem from "./NewsItem";
import search from "../../images/search.png";
import { Sort } from "../icons/sort";
import "react-datepicker/dist/react-datepicker.css";
import "./style.scss";
import dayjs from "dayjs";

function AllNews({ news, catagories }) {
  const perPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const end = currentPage * perPage;
  const start = end - perPage;
  const current = news.slice(start, end);

  const onPageClick = (page) => {
    setCurrentPage(page);
  };

  const [filters, setFilters] = useState({
    filtered: null,
    from: "",
    to: "",
    query: "",
    category: null
  });
  const [sort, setSort] = useState("AtoZ");

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    // console.log("handleCategoryChange", value);

    setFilters({ ...filters, category: value });
    if (filters.filtered?.length > 0) {
      setFilters({
        ...filters,
        filtered: [...filters.filtered.filter((n) => n.sourceID == value)]
      });
    } else {
      setFilters({
        ...filters,
        filtered: [...news.filter((n) => n.sourceID == value)]
      });
    }
  };

  const handleQuerySearch = (e) => {
    const value = e.target.value;
    setFilters({ ...filters, query: value });
  };

  const submitSearch = () => {
    const value = filters.query;
    if (filters.filtered?.length > 0) {
      setFilters({
        ...filters,
        filtered: [...filters.filtered.filter((n) => n.title.includes(value))]
      });
    } else {
      setFilters({
        ...filters,
        filtered: [...news.filter((n) => n.title.includes(value))]
      });
    }
    // console.log("handleQuerySearch", value);
  };

  const toggleSort = () => {
    if (sort === "AtoZ") {
      setSort("ZtoA");
    } else {
      setSort("AtoZ");
    }
    // console.log(sort);
    handleSort(sort);
  };

  const handleSort = (sort) => {
    const sortType =
      sort === "AtoZ"
        ? (a, b) => a.title.localeCompare(b.title)
        : (a, b) => b.title.localeCompare(a.title);

    if (filters.filtered?.length > 0) {
      setFilters({
        ...filters,
        filtered: [...filters.filtered.concat().sort(sortType)]
      });
    } else {
      setFilters({
        ...filters,
        filtered: [...news.concat().sort(sortType)]
      });
    }
  };

  const handleToTimeChange = (date) => {
    // console.log("handleTimeChange", date);
    let slot;
    if (filters.filtered?.length > 0) {
      slot = filters.filtered.filter(
        (n) =>
          dayjs(n.publishedAt).isBefore(date) &&
          dayjs(n.publishedAt).isAfter(filters.from)
      );
    } else {
      slot = news.filter(
        (n) =>
          dayjs(n.publishedAt).isBefore(date) &&
          dayjs(n.publishedAt).isAfter(filters.from)
      );
    }
    // console.log("slot", slot);
    setFilters({
      ...filters,
      to: date,
      filtered: [...slot]
    });
  };

  //   console.log("catagories", catagories);

  const renderNews = (news) => {
    return news?.map((item, i) => {
      return (
        <div key={item.id} className="col-lg-4 col-md-6 col-12 item mb-4">
          <NewsItem item={item} />
        </div>
      );
    });
  };

  return (
    <div className="news container pt-2">
      <div className="row my-4">
        <h2 className="news__header col-10">News</h2>
      </div>
      <div className="row news__filters mb-5">
        <div className="col-md-2 col-4 mb-2">
          <label htmlFor="from">From</label>
          <DatePicker
            id="from"
            selected={filters.from}
            onChange={(date) => setFilters({ ...filters, from: date })}
            placeholderText="Select"
          />
        </div>
        <div className="col-md-2 col-4 mb-2">
          <label htmlFor="to">To</label>
          <DatePicker
            id="to"
            selected={filters.to}
            onChange={handleToTimeChange}
            placeholderText="Select"
          />
        </div>
        <div className="col-md-2 col-4 mb-2 options">
          <select
            onChange={handleCategoryChange}
            // defaultValue=""
            value={filters.category}
            id="category"
          >
            <option value="">Select</option>
            {catagories?.map((category, i) => {
              return (
                <option key={i} value={category.id}>
                  {category.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className={`search col-md-4 col-8 mb-2`}>
          <div className="input-group">
            <input
              type="text"
              value={filters.query}
              onChange={handleQuerySearch}
              className="form-control"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="basic-addon2"
            />
            <div className="input-group-append">
              <button
                onClick={() => submitSearch()}
                className="btn"
                type="button"
              >
                <img src={search} alt="search icon" />
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-2 col-4 mb-2 sort">
          <button className="btn" onClick={toggleSort}>
            Sort by
            {/* <img src={Sort} alt="sort icon" /> */}
            <Sort color={"#8cc043"} />
          </button>
        </div>
      </div>
      <div className="row mb-5 justify-content-center">
        {filters.filtered === null ? (
          renderNews(current)
        ) : filters.filtered?.length === 0 || filters.filtered === undefined ? (
          <p>No Result</p>
        ) : (
          renderNews(filters.filtered)
        )}
      </div>
      {news.length > perPage && filters.filtered === null ? (
        <div className="row my-5">
          <div className="col-12">
            <Pagination
              current={currentPage}
              perPage={perPage}
              totalArtists={news.length}
              paginate={onPageClick}
            />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default AllNews;
