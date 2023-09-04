import Header from "../components/header";
import DocumentList from "../components/DocumentList";
import { viewForms } from "../lib/api";
import { useEffect, useState } from "react";
import { Form } from "react-router-dom";
import Pagination from "../components/Pagination";

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
  const getDocumentList = async (pageNumber: number) => {
    viewForms(4, pageNumber).then((res) => {
      setPage(res.data);
      setForms(res.data.forms);
      console.log("res : ", res.data);
    });
  };
  useEffect(() => {
    getDocumentList(1);
  }, []); // deps가 빈 배열이므로 마운트될 때만 실행됨.!

  const handlePageChange = (pageNumber: number) => {
    getDocumentList(pageNumber);
  };

  return (
    <>
      <Header active={1}></Header>
      <DocumentList forms={forms} />
      <Pagination page={page} onPageChange={handlePageChange} />
    </>
  );
}
