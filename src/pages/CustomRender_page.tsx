import styled from "styled-components";
import { searchForms, searchFormsAll } from "../lib/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export default function CustomRenderPage() {
  const StyledDiv = styled.div`
    width: 720px;
    margin: 0 auto;

    flex-direction: column;
    background-color: white;
    box-shadow: 2px;
    display: flex;
    border-radius: 10px;
    box-shadow: 7px 7px 5px 10px #444;
    padding: 30px;
    height: 100vh;

    h1 {
      font-size: 24px;
      font-weight: bold;
      justify-content: center;
      display: flex;
      padding: 20px;
      margin-bottom: 10px;
    }
    .ModalBar {
      display: flex;
      justify-content: center;
    }
    .ModalWrap {
      background-color: lightgray;
      padding: 5px;
      width: 200px;
      border: 1px solid #000;
    }
    .ModalContent {
      background-color: lightgray;
      padding: 5px;
      width: 500px;
      border: 1px solid #000;
    }
    .paymentRender {
      display: flex;
      justify-content: center;
    }
    .paymentWrap {
      background-color: white;
      padding: 5px;
      width: 200px;
      border: 1px solid #000;
      font-weight: bold;
    }
    .paymentContent {
      background-color: white;
      padding: 5px;
      width: 500px;
      border: 1px solid #000;
    }

    .defaultRender {
      display: flex;
      justify-content: center;
    }
    .defaultWrap {
      background-color: white;
      padding: 5px;
      width: 130px;
      margin-left: 380px;
      font-weight: bold;
      margin-bottom: 20px;
    }
    .defaultContent {
      width: 300px;
      font-weight: bold;
      font-size: 20px;
    }
    .personalinfoRender {
      display: flex;
      justify-content: center;
    }
    .personalinfoWrap {
      background-color: white;
      padding: 5px;
      width: 200px;
      border: 1px solid #000;
      font-weight: bold;
    }
    .personalinfoContent {
      background-color: white;
      padding: 5px;
      width: 500px;
      border: 1px solid #000;
    }
    .safetyRender {
      display: flex;
      justify-content: center;
    }
    .safetyWrap {
      background-color: white;
      padding: 5px;
      width: 200px;
      border: 1px solid #000;
      font-weight: bold;
    }
    .safetyContent {
      background-color: white;
      padding: 5px;
      width: 500px;
      border: 1px solid #000;
    }
    .responsibilityRender {
      display: flex;
      justify-content: center;
    }
    .responsibilityWrap {
      background-color: white;
      padding: 5px;
      width: 200px;
      border: 1px solid #000;
      font-weight: bold;
    }
    .responsibilityContent {
      background-color: white;
      padding: 5px;
      width: 500px;
      border: 1px solid #000;
    }
    .etcRender {
      display: flex;
      justify-content: center;
    }
    .etcWrap {
      background-color: white;
      padding: 5px;
      width: 200px;
      border: 1px solid #000;
      font-weight: bold;
    }
    .etcContent {
      background-color: white;
      padding: 5px;
      width: 500px;
      border: 1px solid #000;
    }
    .SignTab {
      display: flex;
      flex-direction: column;
    }
    .SignTab h1 {
      display: flex;
      font-size: 30px;
      font-weight: bold;
      justify-content: center;
    }
    .SignTab .Tab {
      box-shadow: 2px;
      border: 1px solid #000;
      height: 200px;
    }
    .writeDate {
      font-size: 24px;
      font-weight: bold;
    }
    .agree {
      margin-top: 20px;
    }
  `;
  const ParentStyledDiv = styled.div`
    background-color: lightgray; /* 원하는 회색 색상 코드로 변경하세요 */
    height: 100vh;
  `;
  const [CustomSign, setCustomSign] = useState<any>();
  const params = useParams();

  const getData = async () => {
    searchFormsAll().then((res) => {
      console.log("res : ", res.data);
      console.log(res.data.forms, "이양");

      const s = res.data.forms.find((d: any) => d.id === Number(params.id));

      console.log("id: ", s);

      setCustomSign({
        ...s,
        form: JSON.parse(s.form),
      });
    });
  };
  useEffect(() => {
    getData();
  }, []); // deps가 빈 배열이므로 마운트될 때만 실행됨.!

  const mockData = {
    responsibilityBlock: "",
    paymentBlock: "",
    personalinfoBlock:
      "제공하신 정보는 해당 업체 이용정보 및 공지사항 전달, 이벤트 관련 정보 제공 등을 위해 사용합니다.<br/>개인정보 제공자가 동의한 내용을 다른 목적으로 활용하지 않습니다<br/>귀하는 이에 대한 동의를 거부할 수 있으며, 거부 시 해당업체 정보 제공이 불가능합니다.<br/>본 계약서에 기재된 내용 외 구두 약속 또는 서면 약정은 효력이 발생하지 않습니다.",
    safetyBlock:
      "본 시설이용시 시설관리자 및 안전요원의 통제에 성실히 따르며 이행하지 않을 시 강제 퇴장 될 수 있습니다.<br/>임산부,노약자,어린이및 지병이 있는 경우 시설 이용이 불가 합니다.<br/>시설 및 기구 이용시 무리한 행동은 하지 않으며 밀거나 장난치는 행위는 사고로 발생할 수 있으며 금지합니다.<br/> 만 13세 이하 어린이의 경우 법적 보호자 탑승이 필수입니다.",
    etcBlock: "",
    defaultBlock: [
      { name: "이름", value: "강은솔" },
      { name: "성별", value: "남" },
      { name: "전화번호", value: "01026632953" },
      { name: "주소", value: "서울" },
    ],
  };

  if (!CustomSign) {
    return <></>;
  }
  return (
    <ParentStyledDiv>
      <StyledDiv>
        <h1>개인정보 제공 및 활용 동의서</h1>
        {CustomSign.form.defaultBlock.length === 0
          ? null
          : CustomSign.form.defaultBlock.map((item: any, index: number) => (
              <div className={"defaultRender"}>
                <div className={"defaultWrap"}>{item.name} : </div>
                <div className={"defaultContent"}>{item.value}</div>
              </div>
            ))}

        <div className={"ModalBar"}>
          <div className={"ModalWrap"}>구분</div>
          <div className={"ModalContent"}>내용</div>
        </div>
        {mockData.paymentBlock.length === 0 ? null : (
          <div className={"paymentRender"}>
            <div className={"paymentWrap"}>결제 및 환불</div>
            <div
              className={"paymentContent"}
              dangerouslySetInnerHTML={{ __html: mockData.paymentBlock }}
            ></div>
          </div>
        )}
        {mockData.personalinfoBlock.length === 0 ? null : (
          <div className={"personalinfoRender"}>
            <div className={"personalinfoWrap"}>개인정보</div>
            <div
              className={"personalinfoContent"}
              dangerouslySetInnerHTML={{ __html: mockData.personalinfoBlock }}
            ></div>
          </div>
        )}
        {mockData.safetyBlock.length === 0 ? null : (
          <div className={"safetyRender"}>
            <div className={"safetyWrap"}>안전수칙</div>
            <div
              className={"safetyContent"}
              dangerouslySetInnerHTML={{ __html: mockData.safetyBlock }}
            ></div>
          </div>
        )}
        {mockData.responsibilityBlock.length === 0 ? null : (
          <div className={"responsibilityRender"}>
            <div className={"responsibilityWrap"}>책임면제</div>
            <div
              className={"responsibilityContent"}
              dangerouslySetInnerHTML={{ __html: mockData.responsibilityBlock }}
            ></div>
          </div>
        )}
        {mockData.etcBlock.length === 0 ? null : (
          <div className={"etcRender"}>
            <div className={"etcWrap"}>기타</div>
            <div
              className={"etcContent"}
              dangerouslySetInnerHTML={{ __html: mockData.etcBlock }}
            ></div>
          </div>
        )}

        <div
          className={"agree"}
          style={{ fontWeight: "bold", fontSize: "20px" }}
        >
          모두 동의합니다
          <input
            type="checkbox"
            style={{
              width: "1.5rem",
              height: "1rem",
              border: "1.5px solid gainsboro",
            }}
          ></input>
        </div>
      </StyledDiv>
    </ParentStyledDiv>
  );
}
