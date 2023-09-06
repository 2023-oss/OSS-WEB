import Header from "../components/header";
import DocumentList from "../components/DocumentList";
import { searchForms, viewForms } from "../lib/api";
import { useEffect, useState } from "react";
import { Form } from "react-router-dom";
import Pagination from "../components/Pagination";
import MyCalendar from "../components/MyCalendar";
import dayjs from "dayjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { styled } from "styled-components";
import Wrapper from "../components/Wrapper";

const StyledWrapper = styled.div`
  width: 1280px;
  height: 40px;
  position: relative;
  margin: 0 auto; // 왜 얘를 하면 가운데 정렬이지..?
  @media (max-width: 1024px) {
    width: 768px;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
  .date-box {
    position: absolute;
    left: 0%;
    font-size: 2rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    img {
      margin-left: 1rem;
    }
  }

  .search-bar {
    position: absolute;
    right: 0;
    display: flex;
  }
`;

export type Form = {
  id: number;
  vpId: string;
  form: string;
  createdDate: string;
};
export type Page = {
  forms: Form[];
  pageNo: number;
  pageSize: number;
  totalElements: number;
  totalPages: number;
  last: boolean;
};

export default function EditDocumentPage() {
  const [forms, setForms] = useState<Form[]>([]);
  const [page, setPage] = useState<Page>({
    forms: [],
    pageNo: 1,
    pageSize: 10, // 예시로 기본 값 설정
    totalElements: 0,
    totalPages: 0,
    last: false,
  });
  const [searchQuery, setSearchQuery] = useState<string>("");

  // 동의서 목록
  const getDocumentList = async (pageNumber: number, searchQuery: string) => {
    searchForms(pageNumber, searchQuery)
      .then((res) => {
        setPage(res.data);
        setForms(res.data.forms);
        console.log("res : ", res.data);
      })
      .catch((err) => {
        console.error("Error:", err.response.data.message);
        alert(err.response.data.message);
      });
  };
  useEffect(() => {
    getDocumentList(1, searchQuery);
  }, []); // deps가 빈 배열이므로 마운트될 때만 실행됨.!

  const handlePageChange = (pageNumber: number) => {
    getDocumentList(pageNumber, searchQuery);
  };

  // 달력
  let now = dayjs();
  now.format();
  const documents = [{}];
  const [calbtn, isCalbtn] = useState(false);
  const [clickCnt, setclickCnt] = useState(0);

  const openCal = () => {
    setclickCnt((prevCnt) => prevCnt + 1);

    if (clickCnt % 2 === 0) {
      isCalbtn(false);
    } else {
      isCalbtn(true);
    }
    console.log(clickCnt);
  };

  // 검색
  const handleSearchQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
  };
  const handleSearch = () => {
    getDocumentList(1, searchQuery);
  };
  return (
    <>
      <Header active={1}></Header>
      <StyledWrapper>
        <div className={"date-box"}>
          <span></span>
          <button onClick={openCal}>
            {calbtn && <MyCalendar></MyCalendar>}
            <img src={"/icon/calender.svg"} alt={"calender"} />
          </button>
        </div>
        <div className="search-bar">
          <input
            type="text"
            value={searchQuery}
            placeholder="회원ID를 입력해주세요."
            onChange={handleSearchQuery}
          />
          <div onClick={handleSearch}>
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
          </div>
        </div>
      </StyledWrapper>

      <DocumentList forms={forms} />
      <Pagination page={page} onPageChange={handlePageChange} />
    </>
  );
}
