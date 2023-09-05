import React from "react";
import { Page } from "../pages/edit_document_page";
import styled from "styled-components";

type PaginationProps = {
  page: Page;
  onPageChange: (pageNo: number) => void;
};

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const PageNumber = styled.span`
  font-weight: bold;
  color: #4c4aaa;
  cursor: pointer;
  margin: 0 5px;
`;

const Pagination: React.FC<PaginationProps> = ({ page, onPageChange }) => {
  const { pageNo, totalPages } = page;

  if (totalPages <= 1) {
    return null; // 페이지가 1개 이하면 페이징 컴포넌트를 표시하지 않음
  }

  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <PaginationWrapper>
      {pageNumbers.map((number) => (
        <PageNumber
          key={number}
          className={number === pageNo ? "active" : ""}
          onClick={() => onPageChange(number)}
        >
          {number}
        </PageNumber>
      ))}
    </PaginationWrapper>
  );
};

export default Pagination;
