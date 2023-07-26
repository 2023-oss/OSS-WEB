import Header from "../components/header";
import DocumentList from "../components/DocumentList";

export default function EditDocumentPage(){
    return (
        <>
            <Header active={2}></Header>
            <DocumentList></DocumentList>
        </>
    )
}