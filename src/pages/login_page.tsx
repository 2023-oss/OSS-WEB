import { Link, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import axios from "axios";
import { login } from "../lib/api";
import { log } from "console";
import { useState } from "react";
import { useEffect } from "react";
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

export default function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [autoLogin, setAutoLogin] = useState(false);

  const handleUsernameChange = (e: any) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  const handleAutoLoginChange = (e: any) => {
    setAutoLogin(e.target.checked); // 체크박스 상태 업데이트
  };

  const loginBtn = () => {
    const loginUser = {
      username: username,
      password: password,
    };

    login(loginUser)
      .then((res) => {
        console.log(res.data);
        alert("로그인에 성공했습니다.");
        navigate("/");
      })
      .catch((err) => {
        console.error("Error:", err.response.data.message);
        alert(err.response.data.message);
      });
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // 여기서 로그인 정보를 서버로 보내는 작업 수행
    loginBtn();
    console.log("사용자명 :", username);
    console.log("비번 :", password);

    if (autoLogin) {
      // 자동 로그인이 활성화되어 있을 경우
      try {
        const response = await login({ username, password });
        const userData = response.data;

        // 사용자 정보를 로컬 스토리지에 저장
        localStorage.setItem("userData", JSON.stringify(userData));
      } catch (error) {
        console.error("자동 로그인 오류:", error);
      }
    }
  };

  useEffect(() => {
    const savedUserData = localStorage.getItem("userData");

    if (savedUserData && autoLogin) {
      const userData = JSON.parse(savedUserData);

      // 서버에 저장된 로그인 정보를 사용하여 자동 로그인
      login(userData)
        .then((response) => {
          // 로그인 성공 후 다음 작업 수행
          // 예: 사용자를 대시보드 페이지로 리디렉션
        })
        .catch((error) => {
          console.error("자동 로그인 오류:", error);
        });
    }
  }, [autoLogin]);
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
            value={username}
          ></input>
        </div>
        <div className={"input-box"}>
          <input
            type="password"
            placeholder="비밀번호"
            onChange={handlePasswordChange}
            value={password}
          ></input>
        </div>
        <div className={"etc"}>
          <input type="checkbox" onChange={handleAutoLoginChange}></input>
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
          <Link to="/findid">
            <span>아이디 | 비밀번호 찾기</span>
          </Link>
        </div>
      </div>
    </StyledLogin>
  );
}
