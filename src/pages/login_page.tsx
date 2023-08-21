import "../css/login.css";
import styled from "styled-components";

export default function LoginPage() {
  const StyledLogin = styled.div`
    .logo {
      display: flex;
      justify-content: center;
      margin-top: 149px;
    }
    .logo img {
      width: 149px;
      height: 149px;
    }
    .idInput {
      display: flex;
      justify-content: center;
    }
    .idInput input {
      margin-top: 64.48px;
      width: 583px;
      height: 60px;
      font-size: 18px;
      padding: 10px;
      border-radius: 15px;
      box-shadow: 2px 2px 2px 2px gray;
      border-color: none;
    }
    .pwdInput {
      display: flex;
      justify-content: center;
    }
    .pwdInput input {
      margin-top: 42px;
      width: 583px;
      height: 60px;
      font-size: 18px;
      padding: 10px;
      border-radius: 15px;
      box-shadow: 2px 2px 2px 2px gray;
      border-color: none;
    }
    .etc {
      display: flex;
    }
    .etc input {
      margin-top: 19px;
      justify-content: left;
    }
    button {
      border: none;
      width: 583px;
      height: 108px;
      background-color: #ffa0a0;
    }
    .btnDiv {
      display: flex;
      justify-content: center;
    }
  `;
  return (
    <StyledLogin>
      <div>
        <div className={"logo"}>
          <img src="icon\Logo.png"></img>
        </div>
        <div className={"idInput"}>
          <input type="text" placeholder="아이디"></input>
        </div>
        <div className={"pwdInput"}>
          <input type="text" placeholder="비밀번호"></input>
        </div>
        <div className={"etc"}>
          <input type="checkbox"></input>
          자동 로그인
        </div>
        <div className={"btnDiv"}>
          <button>로그인</button>
        </div>
      </div>
    </StyledLogin>
  );
}
