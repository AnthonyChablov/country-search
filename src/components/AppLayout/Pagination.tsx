import React from 'react';
import PageButton from '../Buttons/PageButton';

interface PaginationProps {
  filteredData: any[];
  currentPage: number;
  countriesPerPage: number;
  paginate: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  filteredData,
  currentPage,
  countriesPerPage,
  paginate,
}) => {
  return (
    <>
      {filteredData && (
        <div className="flex justify-center mt-10">
          <div className="flex flex-wrap justify-center items-center">
            {Array.from(Array(Math.ceil(filteredData.length / countriesPerPage)).keys()).map((pageNumber) => (
              <PageButton
                key={pageNumber}
                currentPage={currentPage}
                pageNumber={pageNumber}
                paginate={paginate}
                
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Pagination;
