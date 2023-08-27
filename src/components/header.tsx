import styled from "styled-components";
import Wrapper from "./Wrapper";
import { Link } from "react-router-dom";

const StyledHeader = styled.header<{ active: number }>`
  a {
    color: black;
    text-decoration: none;
  }
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 50px 0;
  .logo {
    flex: 1;
    font-size: 2rem;
    font-weight: bold;
    align-items: center;
  }
  .nav-list {
    align-items: center;
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 1.5rem;
    .nav:nth-child(${(props) => props.active}) {
      border-bottom: 4px solid #03008a;
    }
    .nav {
      font-weight: bold;
      cursor: pointer;
      padding-bottom: 0.75rem;
      border-bottom: 4px solid transparent;
    }
  }
  .account {
    font-size: 1.5rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex: 1;
    padding-bottom: 0.75rem;
    span {
      cursor: pointer;
    }
    span + span {
      margin-left: 1rem;
    }
  }
`;

type HeaderProps = {
  children?: React.ReactElement;
  active: number;
};
export default function Header(props: HeaderProps) {
  return (
    <Wrapper>
      <StyledHeader active={props.active}>
        <div className="logo">OSS</div>
        <div className="nav-list">
          <Link to={"/edit"} className="nav">
            동의서 관리
          </Link>
          <Link to={"/"} className="nav">
            동의서 제작
          </Link>
        </div>
        <div className="account">
          <Link to="/login">로그인</Link>
          <Link to="/join">회원가입</Link>
        </div>
      </StyledHeader>
    </Wrapper>
  );
}
