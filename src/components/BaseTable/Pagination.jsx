import React, { useState } from "react";

const Pagination = ({ totalPage, setPagination, pagination = "1", limit }) => {
  let page = [];
  for (let index = 1; index <= totalPage; index++) {
    page = [...page, index];
  }
  if (pagination > totalPage && totalPage != 0) {
    setPagination(totalPage);
  }

  const handleNext = () => {
    if (pagination < page.length) {
      setPagination(pagination + 1);
    }
  };
  const handlePrev = () => {
    if (pagination > 1) {
      setPagination(pagination - 1);
    }
  };
  const handlePage = (pg) => {
    setPagination(pg);
  };

  //   console.log("ini limit ", limit);
  //   console.log("ini totalpage ", totalPage);
  //   // console.log("ini total data ", totalCount);
  console.log("ini  pagination ", pagination);
  return (
    <div className="w-max mt-3 flex">
      <button
        onClick={handlePrev}
        className={`border px-4 rounded-tl rounded-bl py-2 ${[
          pagination == 1 || pagination == 0
            ? "font-light text-neutral-400"
            : "hover:bg-neutral-200",
        ]}`}
        disabled={pagination == 1 || pagination == 0}
      >
        Previous
      </button>
      {page.map((val) => (
        <div
          className={`border hover:cursor-pointer px-4 py-2 ${
            pagination == val ? "bg-sky-500 text-white" : ""
          }`}
          onClick={() => handlePage(val)}
        >
          {val}
        </div>
      ))}

      <button
        onClick={handleNext}
        className={`border px-4 rounded-tr rounded-br py-2 ${
          pagination == page.length
            ? "font-light text-neutral-400"
            : "hover:bg-neutral-200"
        }`}
        disabled={pagination == page.length}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
