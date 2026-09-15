import React from "react";
import ReactPaginateModule from "react-paginate";

const ReactPaginate = ReactPaginateModule.default;

const PaginationPage = ({ pageCount, onpress }) => {
  const handlePageClick = (data) => {
    onpress(data.selected + 1);
  };

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="التالي"
      onPageChange={handlePageClick}
      marginPagesDisplayed={2}
      pageRangeDisplayed={2}
      pageCount={pageCount || 0}
      previousLabel="السابق"
      containerClassName={"pagination justify-content-center p-3 d-flex gap-2"}
      pageClassName={"page-item"}
      pageLinkClassName={"page-link"}
      previousClassName={"page-item"}
      nextClassName={"page-item"}
      previousLinkClassName={"page-link"}
      nextLinkClassName={"page-link"}
      breakClassName={"page-item"}
      breakLinkClassName={"page-link"}
      activeClassName={"active"}
    />
  );
};

export default PaginationPage;
