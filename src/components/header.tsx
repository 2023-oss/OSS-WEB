import styled from "styled-components";
import Wrapper from "./Wrapper";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../lib/api";

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
  .logo img {
    width: 93px;
    height: 93.81px;
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
    a + a {
      margin-left: 1rem;
    }
  }
`;

type HeaderProps = {
  children?: React.ReactElement;
  active: number;
};
export default function Header(props: HeaderProps) {
  const navigate = useNavigate();
  const getCookie = (): string => {
    const cookies = document.cookie.split(";");
    console.log(cookies);
    for (let cookie of cookies) {
      let trimmedCookie = cookie.trim();
      if (trimmedCookie.startsWith("access_token=")) {
        let accessToken = trimmedCookie.substring("access_token=".length);

        console.log("accessToken: " + accessToken);
        return accessToken;
      }
    }
    return "";
  };

  const handleLogout = () => {
    logout().then((res) => {
      console.log(res.data);
      navigate("/login");
    });
  };
  return (
    <Wrapper>
      <StyledHeader active={props.active}>
        <div className="logo">
          <Link to={"/"}>
            <img src="/icon/titleLogo.png"></img>
          </Link>
        </div>
        <div className="nav-list">
          <Link to={"/edit"} className="nav">
            동의서 관리
          </Link>
          <Link to={"/"} className="nav">
            동의서 제작
          </Link>
        </div>

        {getCookie() === "" ? (
          <div className="account">
            <Link to="/login">
              <span>로그인</span>
            </Link>
            <Link to="/join">
              <span>회원가입</span>
            </Link>
          </div>
        ) : (
          <div className="account">
            <a href="#" onClick={handleLogout}>
              <span>로그아웃</span>
            </a>
          </div>
        )}
      </StyledHeader>
    </Wrapper>
  );
}
