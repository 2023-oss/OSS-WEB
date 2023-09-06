import styled from "styled-components";
import Wrapper from "./Wrapper";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Form } from "../pages/edit_document_page";

const StyledDocumentList = styled.div`
  th {
    border-bottom: 2px solid black;
    padding-bottom: 15px;
  }
  td {
    padding: 15px 0;
    border-bottom: 1px solid black;
  }
  table {
    margin-top: 1rem;
    width: 100%;
  }
  td {
    text-align: center;
  }
  button {
    background-color: white;
    border: none;
  }
`;

export default function DocumentList({ forms }: { forms: Form[] }) {
  const getDate = (date: string): string => {
    const dateObject = new Date(date);

    const year = dateObject.getFullYear();
    const month = String(dateObject.getMonth() + 1).padStart(2, "0"); // 월은 0부터 시작하므로 +1을 해줍니다.
    const day = String(dateObject.getDate()).padStart(2, "0");
    const hours = String(dateObject.getHours()).padStart(2, "0");
    const minutes = String(dateObject.getMinutes()).padStart(2, "0");

    const formattedTimeString = `${year}-${month}-${day} ${hours}:${minutes}`;
    return formattedTimeString;
  };

  return (
    <Wrapper>
      <StyledDocumentList>
        <table>
          <tr>
            <th>번호</th>
            <th>작성날짜</th>
            <th>회원ID</th>
            <th>동의서</th>
          </tr>
          {forms.map((form: Form) => (
            <tr>
              <td>{form.id}</td>
              <td>{getDate(form.createdDate)}</td>
              <td>{form.vpId}</td>
              <td>
                <Link to={`/custom/${form.id}`}>
                  <img src={"/icon/file.svg"} alt={"file"} />
                </Link>
              </td>
              <br />
            </tr>
          ))}
          {/* {data.map((user: User) => (
            <tr>
              <td>{user.date}</td>
              <td>{user.writers}</td>
              <td>{user.title}</td>
              <td>{user.phone}</td>
              <td>
                <img src={"/icon/file.svg"} alt={"file"} />
              </td>
              <br />
            </tr>
          ))} */}
        </table>
      </StyledDocumentList>
    </Wrapper>
  );
}
