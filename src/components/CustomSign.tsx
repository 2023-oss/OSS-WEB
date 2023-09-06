import { Block } from "./CustomBlocks";
import { useState } from "react";
import dayjs from "dayjs";
import { useEffect } from "react";
import { styled } from "styled-components";
import { registerTemplate } from "../lib/api";
import React from "react";
import { searchForms } from "../lib/api";
interface SelectedBlockProps extends React.ComponentPropsWithRef<"div"> {
  selectedBlocks: Block[];
  formDataSet: {
    defaultBlock: string[];
    personalinfoBlock: string[];
    safetyBlock: string[];
    responsibilityBlock: string[];
    paymentBlock: string[];
    etcBlock: string[];
  };
  setFormDataSet: React.Dispatch<
    React.SetStateAction<{
      defaultBlock: string[];
      personalinfoBlock: string[];
      safetyBlock: string[];
      responsibilityBlock: string[];
      paymentBlock: string[];
      etcBlock: string[];
    }>
  >;
}
const StyledButton2 = styled.div`
  background-color: #2bd8aa;

  transform: translateX(50%);
  width: 300px;
  height: 80px;
  margin: 30px;
  color: white;
  text-align: center;
  font-size: 25px;
  font-weight: bold;
  padding-top: 23px;
  border-radius: 10px;
  box-shadow: 6px 6px 4px rgb(0, 0, 0, 0.25);
  &:hover {
    background-color: #1c9c7a;
    transition: all 0.3s;
  }

  &:active {
    background-color: #1c9c7a;
    transition: all 0.3s;
  }
`;

export default function CustomSign(props: SelectedBlockProps) {
  const [currentDate, setCurrentDate] = useState("");

  let safetyBlock: any = [];
  let personalInfoBlock: any = [];
  let responsibilityBlock: any = [];
  let paymentBlock: any = [];
  let defaultBlock: any = [];
  let etcBlock: any = [];

  useEffect(() => {
    console.log("props.select=>", props.selectedBlocks);
    props.setFormDataSet({
      ...props.formDataSet,
      safetyBlock: safetyBlock,
      personalinfoBlock: personalInfoBlock,
      responsibilityBlock: responsibilityBlock,
      paymentBlock: paymentBlock,
      defaultBlock: defaultBlock,
      etcBlock: etcBlock,
    });
    console.log("props.formDataset", props.formDataSet);
  }, [props.selectedBlocks]);

  for (let i = 0; i < props.selectedBlocks.length; i++) {
    if (props.selectedBlocks[i].category === "safety") {
      safetyBlock.push(props.selectedBlocks[i].content);
    } else if (props.selectedBlocks[i].category === "personal-info") {
      personalInfoBlock.push(props.selectedBlocks[i].content);
    } else if (props.selectedBlocks[i].category === "responsibility") {
      responsibilityBlock.push(props.selectedBlocks[i].content);
    } else if (props.selectedBlocks[i].category === "payment") {
      paymentBlock.push(props.selectedBlocks[i].content);
    } else if (props.selectedBlocks[i].category === "default") {
      defaultBlock.push(props.selectedBlocks[i].question);
    } else {
      etcBlock.push(props.selectedBlocks[i].content);
    }
  }
  const [formDataSet, setFormDataSet] = useState<{
    defaultBlock: string[];
    personalinfoBlock: string[];
    safetyBlock: string[];
    responsibilityBlock: string[];
    paymentBlock: string[];
    etcBlock: string[];
  }>({
    defaultBlock: [],
    personalinfoBlock: [],
    safetyBlock: [],
    responsibilityBlock: [],
    paymentBlock: [],
    etcBlock: [],
  });
  safetyBlock = safetyBlock.join("<br/>");
  personalInfoBlock = personalInfoBlock.join("<br/>");
  responsibilityBlock = responsibilityBlock.join("<br/>");
  paymentBlock = paymentBlock.join("<br/>");
  defaultBlock = defaultBlock.join("<br/>");
  etcBlock = etcBlock.join("<br/>");
  const paymentBlocksArray = Object.values(paymentBlock);
  const defaultBlocksArray = Object.values(defaultBlock);
  const personalinfoBlocksArray = Object.values(personalInfoBlock);
  const safetyBlocksArray = Object.values(safetyBlock);
  const etcBlocksArray = Object.values(etcBlock);
  const responsibilityBlocksArray = Object.values(responsibilityBlock);
  console.log(paymentBlocksArray);
  const paymentHTML: string = paymentBlocksArray.join("");
  const safetyHTML: string = safetyBlocksArray.join("");
  const defaultHTML: string = defaultBlocksArray.join("");
  const personalinfoHTML: string = personalinfoBlocksArray.join("");
  const etcHTML: string = etcBlocksArray.join("");
  const responsibilityHTML: string = responsibilityBlocksArray.join("");

  console.log(paymentHTML);
  useEffect(() => {
    // Get the current date and format it as a string
    const formattedDate = dayjs().format("YYYY M월 DD일"); // Adjust the date format as needed
    setCurrentDate(formattedDate);
  }, []);
  const handleRegisterTemplate = () => {
    console.log("formDataSet:", formDataSet);
    registerTemplate(formDataSet)
      .then((res) => {
        console.log(res.data);
        alert("제출되었습니다");
      })
      .catch((err) => {
        console.error("Error:", err.response.data.message);
      });
  };
  return (
    <div>
      {defaultBlocksArray.length === 0 ? null : (
        <div className={"defaultRender"}>
          <div
            className={"defaultContent"}
            dangerouslySetInnerHTML={{ __html: defaultHTML }}
          ></div>
        </div>
      )}
      <div className={"ModalBar"}>
        <div className={"ModalWrap"}>구분</div>
        <div className={"ModalContent"}>내용</div>
      </div>

      {paymentBlocksArray.length === 0 ? null : (
        <div className={"paymentRender"}>
          <div className={"paymentWrap"}>결제 및 환불</div>
          <div
            className={"paymentContent"}
            dangerouslySetInnerHTML={{ __html: paymentHTML }}
          ></div>
        </div>
      )}
      {personalinfoBlocksArray.length === 0 ? null : (
        <div className={"personalinfoRender"}>
          <div className={"personalinfoWrap"}>개인정보</div>
          <div
            className={"personalinfoContent"}
            dangerouslySetInnerHTML={{ __html: personalinfoHTML }}
          ></div>
        </div>
      )}
      {safetyBlocksArray.length === 0 ? null : (
        <div className={"safetyRender"}>
          <div className={"safetyWrap"}>안전수칙</div>
          <div
            className={"safetyContent"}
            dangerouslySetInnerHTML={{ __html: safetyHTML }}
          ></div>
        </div>
      )}
      {responsibilityBlocksArray.length === 0 ? null : (
        <div className={"responsibilityRender"}>
          <div className={"responsibilityWrap"}>책임면제</div>
          <div
            className={"responsibilityContent"}
            dangerouslySetInnerHTML={{ __html: responsibilityHTML }}
          ></div>
        </div>
      )}
      {etcBlocksArray.length === 0 ? null : (
        <div className={"etcRender"}>
          <div className={"etcWrap"}>기타</div>
          <div
            className={"etcContent"}
            dangerouslySetInnerHTML={{ __html: etcHTML }}
          ></div>
        </div>
      )}
      <div className={"writeDate"}>{currentDate}</div>
      <div className={"agree"} style={{ fontWeight: "bold", fontSize: "20px" }}>
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
      {/* <div className={"SignTab"}>
        <h1>서명</h1>
        <div className={"Tab"}></div>
      </div> */}
      <StyledButton2 onClick={handleRegisterTemplate}>
        Submit Template
      </StyledButton2>
    </div>
  );
}
