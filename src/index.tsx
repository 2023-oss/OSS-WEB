import React from "react";
import "./css/index.css";
import "react-checkbox-tree/lib/react-checkbox-tree.css";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import LoginPage from "./pages/login_page";
import DocumentsPage from "./pages/documents_page";
import EditDocumentPage from "./pages/edit_document_page";
import SortablePage from "./pages/sortable";
import JoinPage from "./pages/join_page";
import FindIdPage from "./pages/findId_page";
import CustomSign from "./components/CustomSign";
import CustomRenderPage from "./pages/CustomRender_page";
const router = createBrowserRouter([
  /**
   * 동의서를 목록
   * */
  {
    path: "/",
    element: <DocumentsPage />,
  },
  /**
   * 관리자 로그인 페이지
   * */
  {
    path: "/login",
    element: <LoginPage />,
  },
  /**
   * 동의서를 템플릿을 생성하는 페이지
   * */
  {
    path: "/edit",
    element: <EditDocumentPage />,
  },
  /**
   * 동의서를 제출하는 페이지
   * */
  {
    path: "/submit",
    element: <EditDocumentPage />,
  },
  {
    path: "/sort",
    element: <SortablePage />,
  },
  {
    path: "/join",
    element: <JoinPage />,
  },
  {
    path: "/findId",
    element: <FindIdPage />,
  },
  {
    path: "/custom/:id/",
    element: <CustomRenderPage />,
  },
]);

createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
