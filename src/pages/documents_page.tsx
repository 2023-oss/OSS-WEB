import Header from "../components/header";
import Documents from "../components/DocumentList";
import DocumentList from "../components/DocumentList";
import CustomBlocks from "../components/CustomBlocks";

export default function DocumentsPage() {
  return (
    <>
      <Header active={2}></Header>
      <CustomBlocks></CustomBlocks>
    </>
  );
}
