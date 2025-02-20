import React, { useState } from "react";
import { LeftArrowIcon, RightArrowIcon } from "ui/icons";
import styles from "./pagination.module.css";

export default function Pagination({ totalItems, itemsPerPage, onPageChange }) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      handlePageClick(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      handlePageClick(currentPage + 1);
    }
  };

  const renderPageNumbers = () => {
    return Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
      <button
        className={styles["pagination__button"]}
        key={page}
        onClick={() => handlePageClick(page)}
      >
        {page}
      </button>
    ));
  };

  return (
    <div
      className={styles["pagination__div"]}
      style={{ display: totalItems >= 6 ? "flex" : "none" }}
    >
      <LeftArrowIcon
        className={styles["pagination__arrow"]}
        onClick={handlePrev}
      />
      {renderPageNumbers()}
      <RightArrowIcon
        className={styles["pagination__arrow"]}
        onClick={handleNext}
      />
    </div>
  );
}
