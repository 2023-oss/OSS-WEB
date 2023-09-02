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

    .name {
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
    .nameBar {
      display: flex;
      justify-content: center;
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
  `;
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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
        <div className={"name"}>이름</div>
        <div className={"content"}>
          <input placeholder="이름을 입력하세요" type="text"></input>
        </div>
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={handleEmailChange} />
      </div>
      <div className={"etc"}>
        <input type="checkbox"></input>
        자동 로그인
      </div>
    </StyledFind>
  );
}
