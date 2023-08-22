import Header from "../components/header";
import DocumentList from "../components/DocumentList";
import CustomBlocks from "../components/CustomBlocks";

export default function EditDocumentPage() {
  return (
    <>
      <Header active={1}></Header>
      {/* <DocumentList></DocumentList> */}
      <CustomBlocks />
    </>
  );
}
