import React, { useState } from "react";
import { Block } from "./CustomBlocks";
import { registerTemplate } from "../lib/api";
import { Dispatch, SetStateAction } from "react";
import { useEffect } from "react";
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

export default function SelectedBlockList(props: SelectedBlockProps) {
  let safetyBlock: any = [];
  let personalInfoBlock: any = [];
  let responsibilityBlock: any = [];
  let paymentBlock: any = [];
  let defaultBlock: any = [];
  let etcBlock: any = [];

  // const [formDataSet, setFormDataSet] = useState({
  //   defaultBlock: [],
  //   personalinfoBlock: [],
  //   safetyBlock: [],
  //   responsibilityBlock: [],
  //   paymentBlock: [],
  //   etcBlock: [],
  // });

  // useEffect(() => {
  //   const newFormDataSet = {
  //     defaultBlock: [],
  //     personalinfoBlock: [],
  //     safetyBlock: [],
  //     responsibilityBlock: [],
  //     paymentBlock: [],
  //     etcBlock: [],
  //   };

  //   setFormDataSet(newFormDataSet);
  // }, [props.selectedBlocks]);

  for (let i = 0; i < props.selectedBlocks.length; i++) {
    if (props.selectedBlocks[i].category === "safety") {
      safetyBlock.push(props.selectedBlocks[i].content);
      props.setFormDataSet({ ...props.formDataSet, safetyBlock: safetyBlock });
    } else if (props.selectedBlocks[i].category === "personal-info") {
      personalInfoBlock.push(props.selectedBlocks[i].content);
      props.setFormDataSet({
        ...props.formDataSet,
        personalinfoBlock: personalInfoBlock,
      });
    } else if (props.selectedBlocks[i].category === "responsibility") {
      responsibilityBlock.push(props.selectedBlocks[i].content);
      props.setFormDataSet({
        ...props.formDataSet,
        responsibilityBlock: responsibilityBlock,
      });
    } else if (props.selectedBlocks[i].category === "payment") {
      paymentBlock.push(props.selectedBlocks[i].content);
      props.setFormDataSet({
        ...props.formDataSet,
        paymentBlock: paymentBlock,
      });
    } else if (props.selectedBlocks[i].category === "default") {
      defaultBlock.push(props.selectedBlocks[i].question);
      props.setFormDataSet({
        ...props.formDataSet,
        defaultBlock: defaultBlock,
      });
    } else {
      etcBlock.push(props.selectedBlocks[i].content);
      props.setFormDataSet({ ...props.formDataSet, etcBlock: etcBlock });
    }
  }

  safetyBlock = safetyBlock.join("<br/>");
  personalInfoBlock = personalInfoBlock.join("<br/>");
  responsibilityBlock = responsibilityBlock.join("<br/>");
  paymentBlock = paymentBlock.join("<br/>");
  defaultBlock = defaultBlock.join("<br/>");
  etcBlock = etcBlock.join("<br/>");

  // props.setFormDataSet({
  //   ...props.formDataSet,
  //   defaultBlock: defaultBlock,
  //   personalinfoBlock: personalInfoBlock,
  //   safetyBlock: safetyBlock,
  //   responsibilityBlock: responsibilityBlock,
  //   paymentBlock: paymentBlock,
  //   etcBlock: etcBlock,
  // });

  const handleRegisterTemplate = () => {
    if (props.formDataSet !== null) {
      registerTemplate(props.formDataSet)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.error("Error:", err.response.data.message);
        });
    }
  };

  return (
    <div>
      <div>
        <h3 style={{ fontSize: "20px", fontWeight: "bold" }}>Default</h3>
        <p dangerouslySetInnerHTML={{ __html: defaultBlock }}></p>
        <h3 style={{ fontSize: "20px", fontWeight: "bold" }}>Personal-info</h3>
        <p dangerouslySetInnerHTML={{ __html: personalInfoBlock }}></p>
        <h3 style={{ fontSize: "20px", fontWeight: "bold" }}>Safety</h3>
        <p dangerouslySetInnerHTML={{ __html: safetyBlock }}></p>
        <h3 style={{ fontSize: "20px", fontWeight: "bold" }}>Responsibility</h3>
        <p dangerouslySetInnerHTML={{ __html: responsibilityBlock }}></p>
        <h3 style={{ fontSize: "20px", fontWeight: "bold" }}>Payment</h3>
        <p dangerouslySetInnerHTML={{ __html: paymentBlock }}></p>
        <h3 style={{ fontSize: "20px", fontWeight: "bold" }}>Etc</h3>
        <p dangerouslySetInnerHTML={{ __html: etcBlock }}></p>
      </div>
    </div>
  );
}
