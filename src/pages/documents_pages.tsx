import Header from "../components/header";
import Documents from "../components/DocumentList";

export default function DocumentsPage() {
  return (
    <>
      <Header active={2}></Header>
      <Documents></Documents>
    </>
  );
}
