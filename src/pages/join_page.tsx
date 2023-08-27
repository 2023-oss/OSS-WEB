import { styled } from "styled-components";
import JoinComponent from "../components/joinComponent";
import { useState } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

export default function JoinPage() {
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
  const StyledJoin = styled.div`
    width: 976px;
    margin: 0 auto;
    .logo {
      display: flex;
      justify-content: center;
      margin-top: 44px;
    }
    .logo img {
      width: 152px;
      height: 146px;
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
    .join {
      font-size: 40px;
      display: flex;
      justify-content: center;
      margin-top: 26px;
    }
    .joinBar {
      display: flex;
    }
    hr {
      width: 976px;
      border-width: 0.5px;
      border-color: black;
      text-align: center;
      margin-bottom: 68px;
    }
    .join {
      margin-bottom: 75px;
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
    .content input {
      width: 700px;
      border: none;
      border-color: pink;
      outline: none;
    }
    .typeFont {
      font-size: 16px;
      padding: 12px;
    }
  `;
  const [cmpType, setCmpType] = useState("");

  return (
    <StyledJoin>
      <div>
        <div className={"logo"}>
          <img src="icon\Logo.png"></img>
        </div>
        <div className={"join"}>회원가입</div>

        <div className={"joinCompo"}>
          <div className={"joinBar"}>
            <div className={"name"}>이름</div>
            <div className={"content"}>
              <input placeholder="이름을 입력하세요"></input>
            </div>
          </div>
          <hr></hr>
        </div>
        <div className={"joinCompo"}>
          <div className={"joinBar"}>
            <div className={"name"}>아이디</div>
            <div className={"content"}>
              <input placeholder="6~12자의 영문, 숫자만 사용 가능합니다"></input>
            </div>
          </div>
          <hr></hr>
        </div>
        <div className={"joinCompo"}>
          <div className={"joinBar"}>
            <div className={"name"}>비밀번호</div>
            <div className={"content"}>
              <input placeholder="8~20자의 숫자, 특수문자, 영문자만 사용 가능합니다"></input>
            </div>
          </div>
          <hr></hr>
        </div>

        <div className={"joinCompo"}>
          <div className={"joinBar"}>
            <div className={"name"}>기업명</div>
            <div className={"content"}>
              <input></input>
            </div>
          </div>
          <hr></hr>
        </div>

        <div className={"joinCompo"}>
          <div className={"joinBar"}>
            <div className={"name"}>기업 유형</div>
            <div className={"content"}>
              <FormControl sx={{ width: 300 }}>
                <InputLabel id="demo-simple-select-label">Type</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={cmpType}
                  label="Type"
                >
                  <MenuItem value={10}>레저</MenuItem>
                  <MenuItem value={20}>산악등반</MenuItem>
                  <MenuItem value={30}>수영</MenuItem>
                </Select>
              </FormControl>
              <div className={"typeFont"}>
                유형에 맞는 템플릿을 제공해드립니다
              </div>
            </div>
          </div>
          <hr></hr>
        </div>

        <div className={"joinCompo"}>
          <div className={"joinBar"}>
            <div className={"name"}>이메일</div>
            <div className={"content"}>
              <input placeholder="xxxx@.com의 형식으로 입력해주세요"></input>
            </div>
          </div>
          <hr></hr>
        </div>
      </div>

      <StyledButton>
        <button>회원가입</button>
      </StyledButton>
    </StyledJoin>
  );
}
