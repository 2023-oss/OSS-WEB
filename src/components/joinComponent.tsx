import { styled } from "styled-components";
export default function JoinComponent() {
  const ComponentDiv = styled.div`
    .joinBar {
      display: flex;
    }
    hr {
      width: 976px;
      border-width: 0.5px;
      border-color: black;
      text-align: center;
      margin-bottom: 20px;
    }

    .name {
      width: 160px;
      margin-bottom: 24px;
      font-size: 24px;
      font-weight: bold;
    }
    .content {
      font-size: 24px;
      color: grey;
    }
  `;
  return (
    <ComponentDiv>
      <div className={"joinCompo"}>
        <div className={"joinBar"}>
          <div className={"name"}>이름</div>
          <div className={"content"}>헤헤</div>
        </div>
        <hr></hr>
      </div>
    </ComponentDiv>
  );
}
