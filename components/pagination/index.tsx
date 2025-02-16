import React, { useState } from "react";
import { RoundedButton } from "ui/buttons";
import { LeftArrowIcon, RightArrowIcon } from "ui/icons";

type PaginationProps = {
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  onPageChange,
}) => {
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
      <RoundedButton
        key={page}
        onClick={() => handlePageClick(page)}
        color="#f0efda"
        width="25px"
      >
        {page}
      </RoundedButton>
    ));
  };

  return (
    <div>
      <LeftArrowIcon onClick={handlePrev} />
      {renderPageNumbers()}
      <RightArrowIcon onClick={handleNext} />
    </div>
  );
};

export default Pagination;

// Uso del componente:
// <Pagination totalItems={100} itemsPerPage={10} onPageChange={(page) => console.log('Página:', page)} />
