import { styled } from "styled-components";

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
    box-shadow: 6px 6px 4px rgb(0, 0, 0, .25);
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
  .bottom-section{
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    color: rgb(0, 0, 0, .5);
    font-weight: 500;
    margin-top: 20px;
  }
`

const StyledButton = styled.div`
  background-color: #FFA0A0;
  width: 100%;
  color: white;
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  padding: 35px 0px;
  border-radius: 10px;
  box-shadow: 6px 6px 4px rgb(0, 0, 0, .25);
`
export default function LoginPage() {
  return (
    <StyledLogin>
      <div className="logo">
        <img src="icon\Logo.png"></img>
      </div>
      <div className="input-box">
        <input type="text" placeholder="아이디"></input>
      </div>
      <div className="input-box">
        <input type="text" placeholder="비밀번호"></input>
      </div>
      <div className="etc">
        <input type="checkbox"></input>
        자동 로그인
      </div>
      <StyledButton>
        로그인
      </StyledButton>
      <div className="bottom-section">
        <div>
          회원가입
        </div>
        <div>
          아이디 / 비밀번호 찾기
        </div>
      </div>
    </StyledLogin>
  );
}
