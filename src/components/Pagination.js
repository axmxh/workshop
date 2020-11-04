import React from "react";

const Pagination = ({ perPage, totalArtists, paginate, current }) => {
  const pages = [];
  for (let i = 1; i <= Math.ceil(totalArtists / perPage); i++) {
    pages.push(i);
  }

  return (
    <div className="ui pagination menu">
      {pages.map((page) => (
        <span
          style={{ cursor: "pointer" }}
          key={page}
          onClick={() => paginate(page)}
          className={`item pagination ${current === page ? "active" : ""} `}
        >
          {page}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
