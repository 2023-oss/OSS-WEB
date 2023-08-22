import { styled } from "styled-components";
import JoinComponent from "../components/joinComponent";
export default function JoinPage() {
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
      font-size: 24px;
    }
  `;

  return (
    <StyledJoin>
      <div>
        <div className={"logo"}>
          <img src="icon\Logo.png"></img>
        </div>
        <div className={"join"}>회원가입</div>
        <JoinComponent />
        <JoinComponent />

        <JoinComponent />

        <JoinComponent />
      </div>
    </StyledJoin>
  );
}
