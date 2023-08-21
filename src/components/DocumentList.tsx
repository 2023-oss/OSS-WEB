import styled from "styled-components";
import Wrapper from "./Wrapper";
import { User, data } from "../data/userList";
const StyledDocumentList = styled.div`
  .date-box {
    font-size: 2rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    img {
      margin-left: 1rem;
    }
  }
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
`;

export default function DocumentList() {
  const documents = [{}];

  return (
    <Wrapper>
      <StyledDocumentList>
        <div className={"date-box"}>
          <span>2023년 7월 25일</span>
          <img src={"/icon/calender.svg"} alt={"calender"} />
        </div>
        <table>
          <tr>
            <th>작성날짜</th>
            <th>이름</th>
            <th>제목</th>
            <th>연락처</th>
            <th>동의서</th>
          </tr>
          {data.map((user: User) => (
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
          ))}
        </table>
      </StyledDocumentList>
    </Wrapper>
  );
}