import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
export default function FindIdPage() {
  const StyledFind = styled.div`
    width: 800px;
    margin: 0 auto;
    .logofind {
      display: flex;
      justify-content: center;
      margin-top: 39px;
    }
    .logofind img {
      width: 175px;
      height: 175px;
    }
    .input-radio {
      display: flex;

      margin-top: 70px;
    }
    .input-radio h1 {
      font-size: 24px;
    }
    .input-radio input {
      width: 32px;
      height: 32px;
    }

    .nameBar label {
      width: 160px;

      margin-bottom: 24px;
      font-size: 24px;
      font-weight: bold;
    }
    .phoneBar label {
      width: 160px;
      margin-bottom: 24px;
      font-size: 24px;
      font-weight: bold;
    }
    .content {
      display: flex;
      font-size: 24px;

      margin-bottom: 24px;
    }
    .nameBar .phoneBar .verBar {
      display: flex;
    }
    .nameBar {
      margin-left: 50px;
    }
    .phoneBar {
      margin-left: 50px;
    }
    .pwTitle {
      display: flex;
      justify-content: center;
      font-size: 40px;
      font-weight: bold;
      margin-top: 12.48px;
    }
    .find {
      display: flex;
      justify-content: center;
      font-size: 20px;
      margin-top: 12px;
    }
    .nameBar input {
      margin-top: 42px;
      height: 51px;
      width: 50%;
      font-size: 24px;
      outline: none;
      border: solid grey;
      padding: 27px 22px;
      border-color: none;
    }
    .phoneBar input {
      margin-top: 42px;
      height: 51px;
      width: 50%;
      font-size: 24px;
      outline: none;
      border: solid grey;
      padding: 27px 22px;
      border-color: none;
    }
    .verBar input {
      margin-top: 42px;
      height: 51px;
      width: 50%;
      font-size: 24px;
      outline: none;
      background-color: #d9d9d9;
      border: solid grey;
      padding: 27px 22px;
      margin-left: 216px;
    }
    hr {
      margin-top: 71px;
      border-width: 0.5px;
      border-color: black;
    }
  `;
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const handleSubmit = () => {
    // 여기에서 사용자가 입력한 인증 코드와 다른 정보를 사용하여 비밀번호를 찾는 로직을 구현하세요.
    // 서버와의 통신을 통해 비밀번호를 초기화하거나, 사용자에게 비밀번호를 표시하는 등의 작업을 수행하세요.
  };
  const handleVerifyCode = () => {};
  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
  };
  return (
    <StyledFind>
      <Link to={"/"}>
        <div className={"logofind"}>
          <img src="/icon/titleLogo.png"></img>
        </div>
      </Link>
      <div className={"pwTitle"}>비밀번호 찾기</div>
      <div className={"find"}>비밀번호 찾는 방법을 선택해주세요 </div>
      <div className={"input-radio"}>
        <input type="radio"></input>
        <h1>회원정보에 등록한 휴대전화로 인증</h1>
      </div>

      <div className={"nameBar"}>
        <label>이름</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className={"phoneBar"}>
        <label>전화번호</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button
          style={{
            backgroundColor: "#D9D9D9",
            padding: "10px",
            marginLeft: "24px",
            height: "51px",
            fontSize: "20px",
          }}
          onClick={handleVerifyCode}
        >
          인증번호 받기
        </button>
      </div>

      <div className={"verBar"}>
        <input
          type="text"
          value={verificationCode}
          onChange={(e) => setVerificationCode(e.target.value)}
          placeholder="인증번호 6자리 숫자 입력"
        />
      </div>
      <hr />
      <div className={"input-radio"}>
        <input type="radio"></input>
        <h1>본인확인 이메일로 인증</h1>
      </div>

      <div className={"nameBar"}>
        <label>이름</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className={"phoneBar"}>
        <label>이메일 주소</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button
          style={{
            backgroundColor: "#D9D9D9",
            padding: "10px",
            marginLeft: "24px",
            height: "51px",
            fontSize: "20px",
          }}
          onClick={handleVerifyCode}
        >
          인증번호 받기
        </button>
      </div>

      <div className={"verBar"}>
        <input
          type="text"
          value={verificationCode}
          onChange={(e) => setVerificationCode(e.target.value)}
          placeholder="인증번호 6자리 숫자 입력"
        />
      </div>
    </StyledFind>
  );
}
