import Header from "../components/header";
import DocumentList from "../components/DocumentList";
import { viewForms } from "../lib/api";
import { useEffect, useState } from "react";
import { Form } from "react-router-dom";

export type Form = {
  id: number;
  name: string;
  phone: string;
  date: string;
};
export default function EditDocumentPage() {
  const [forms, setForms] = useState<Form[]>([]);
  const getDocumentList = () => {
    viewForms(4, 1).then((res) => {
      setForms(res.data.forms);
      console.log("res : ", res.data);
    });
  };

  useEffect(() => {
    getDocumentList();
  }, []); // deps가 빈 배열이므로 마운트될 때만 실행됨.!
  return (
    <>
      <Header active={1}></Header>
      {/* <DocumentList></DocumentList> */}
      <DocumentList forms={forms} />
    </>
  );
}
