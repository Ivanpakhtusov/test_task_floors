import React from "react";

function Pagination({ apartmentsPerPage, totalApartments, paginate }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalApartments / apartmentsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="pagination">
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li className="pageNum" key={number}>
            <button className="page-link" onClick={() => paginate(number)}>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pagination;
