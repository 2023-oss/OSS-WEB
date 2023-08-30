import { Link } from "react-router-dom";
import { styled } from "styled-components";
import axios from "axios";
import { login } from "../lib/api";
import { log } from "console";
import { useState } from "react";

export default function LoginPage() {
  const StyledButton = styled.div`
    background-color: #ffa0a0;
    width: 100%;
    color: white;
    text-align: center;
    font-size: 32px;
    font-weight: bold;
    padding: 35px 0px;
    border-radius: 10px;
    box-shadow: 6px 6px 4px rgb(0, 0, 0, 0.25);
  `;
  const StyledLogin = styled.div`
    width: 583px;
    margin: 0 auto;
    .logo {
      display: flex;
      justify-content: center;
      margin-top: 149px;
    }
    .logo img {
      width: 149px;
      height: 149px;
    }
    .input-box {
      display: flex;
      justify-content: center;
    }
    .input-box input {
      margin-top: 42px;
      /* height: 60px; */
      width: 100%;
      font-size: 24px;
      outline: none;
      border: 1px solid black;
      padding: 27px 22px;
      border-radius: 15px;
      box-shadow: 6px 6px 4px rgb(0, 0, 0, 0.25);
      border-color: none;
    }
    .etc {
      display: flex;
      align-items: center;
      margin-top: 19px;
      font-size: 20px;
      margin-bottom: 29px;
    }
    .etc input {
      margin-right: 1rem;
    }
    .bottom-section {
      display: flex;
      justify-content: space-between;
      font-size: 20px;
      color: rgb(0, 0, 0, 0.5);
      font-weight: 500;
      margin-top: 20px;
    }
    .etc2 {
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
    }
  `;

  // const loginBtn = async () => {
  //   const username = "eunsol";
  //   const password = "123123";
  //   try {
  //     const res = await login({ username, password });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e: any) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };
  const loginBtn = () => login;
  const handleSubmit = (e: any) => {
    e.preventDefault();

    // 여기서 로그인 정보를 서버로 보내는 작업 수행

    console.log("사용자명 :", username);
    console.log("비번 :", password);
  };
  console.log(username, password);
  return (
    <StyledLogin>
      <div>
        <Link to={"/"}>
          <div className={"logo"}>
            <img src="/icon/Logo.png"></img>
          </div>
        </Link>
        <div className={"input-box"}>
          <input
            type="text"
            placeholder="아이디"
            onChange={handleUsernameChange}
          ></input>
        </div>
        <div className={"input-box"}>
          <input
            type="text"
            placeholder="비밀번호"
            onChange={handlePasswordChange}
          ></input>
        </div>
        <div className={"etc"}>
          <input type="checkbox"></input>
          자동 로그인
        </div>

        <div className={"btnDiv"}>
          <StyledButton>
            <button onClick={loginBtn}>로그인</button>
          </StyledButton>
        </div>
        <div className={"etc2"}>
          <Link to={"/join"}>
            <span>회원 가입</span>
          </Link>
          <Link to="/">
            <span>아이디 | 비밀번호 찾기</span>
          </Link>
        </div>
      </div>
    </StyledLogin>
  );
}
