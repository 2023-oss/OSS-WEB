import { styled } from "styled-components";
import JoinComponent from "../components/joinComponent";
import { useState } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { signUp } from "../lib/api";
import { Link, useNavigate } from "react-router-dom";

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

export default function JoinPage() {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [pw, setPw] = useState("");
  const [userName, setUserName] = useState("");
  const [company, setCompany] = useState("");
  const [companyType, setCompanyType] = useState("");
  const [email, setEmail] = useState("");
  const [selectedFile, setSelectedFile] = useState();

  const handleIdChange = (e: any) => {
    setUserId(e.target.value);
  };
  const handlePwChange = (e: any) => {
    setPw(e.target.value);
  };
  const handleCmpChange = (e: any) => {
    setCompany(e.target.value);
  };
  const handleCmpTypeChange = (e: any) => {
    setCompanyType(e.target.value);
  };
  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };
  const handleUserNameChange = (e: any) => {
    setUserName(e.target.value);
  };
  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const join = () => {
    const formData = new FormData();
    if (selectedFile) {
      formData.append("img", selectedFile);
    } else {
      alert("브랜드 이미지를 선택해주세요.");
    }
    console.log("selectedFile=>", selectedFile);

    const user = {
      userId: userId,
      pw: pw,
      userName: userName,
      company: company,
      companyType: companyType,
      email: email,
    };
    formData.append(
      "user",
      new Blob([JSON.stringify(user)], { type: "application/json" })
    );
    console.log("user=>", user);

    console.log("formData=>", formData);

    signUp(formData)
      .then((res) => {
        console.log(res.data);
        alert("회원가입에 성공했습니다.");
        navigate("/login");
      })
      .catch((error) => {
        console.error("Error : ", error);
      });
  };

  return (
    <StyledJoin>
      <div>
        <Link to={"/"}>
          <div className={"logo"}>
            <img src="icon\Logo.png"></img>
          </div>
        </Link>
        <div className={"join"}>회원가입</div>

        <div className={"joinCompo"}>
          <div className={"joinBar"}>
            <div className={"name"}>이름</div>
            <div className={"content"}>
              <input
                type="text"
                placeholder="이름을 입력하세요"
                value={userName}
                onChange={handleUserNameChange}
              ></input>
            </div>
          </div>
          <hr></hr>
        </div>
        <div className={"joinCompo"}>
          <div className={"joinBar"}>
            <div className={"name"}>아이디</div>
            <div className={"content"}>
              <input
                type="text"
                placeholder="6~12자의 영문, 숫자만 사용 가능합니다"
                value={userId}
                onChange={handleIdChange}
              ></input>
            </div>
          </div>
          <hr></hr>
        </div>
        <div className={"joinCompo"}>
          <div className={"joinBar"}>
            <div className={"name"}>비밀번호</div>
            <div className={"content"}>
              <input
                type="password"
                placeholder="8~20자의 숫자, 특수문자, 영문자만 사용 가능합니다"
                value={pw}
                onChange={handlePwChange}
              ></input>
            </div>
          </div>
          <hr></hr>
        </div>

        <div className={"joinCompo"}>
          <div className={"joinBar"}>
            <div className={"name"}>기업명</div>
            <div className={"content"}>
              <input
                type="text"
                value={company}
                onChange={handleCmpChange}
              ></input>
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
                  type="text"
                  value={companyType}
                  label="Type"
                  onChange={handleCmpTypeChange}
                >
                  <MenuItem value="클라이밍">클라이밍</MenuItem>
                  <MenuItem value="스쿠버 다이빙">스쿠버 다이빙</MenuItem>
                  <MenuItem value="캠프 참가">캠프 참가</MenuItem>
                  <MenuItem value="승마 학교">승마 학교</MenuItem>
                  <MenuItem value="의료 서비스">의료 서비스</MenuItem>
                  <MenuItem value="부동산 임대">부동산 임대</MenuItem>
                  <MenuItem value="결혼식장 이용">결혼식장 이용</MenuItem>
                  <MenuItem value="자녀 학교 여행">자녀 학교 여행</MenuItem>
                  <MenuItem value="예술 작품 전시">예술 작품 전시</MenuItem>
                  <MenuItem value="골프 클럽 멤버십">골프 클럽 멤버십</MenuItem>
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
              <input
                type="text"
                placeholder="xxxx@.com의 형식으로 입력해주세요"
                value={email}
                onChange={handleEmailChange}
              ></input>
            </div>
          </div>
          <hr></hr>
        </div>
      </div>

      <div className={"joinCompo"}>
        <div className={"joinBar"}>
          <div className={"name"}>기업이미지</div>
          <div className={"content"}>
            <input type="file" onChange={handleFileChange} accept="image/*" />
          </div>
        </div>
      </div>

      <StyledButton>
        <button onClick={join}>회원가입</button>
      </StyledButton>
    </StyledJoin>
  );
}
