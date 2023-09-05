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

  safetyBlock = safetyBlock.join("<br/>");
  personalInfoBlock = personalInfoBlock.join("<br/>");
  responsibilityBlock = responsibilityBlock.join("<br/>");
  paymentBlock = paymentBlock.join("<br/>");
  defaultBlock = defaultBlock.join("<br/>");
  etcBlock = etcBlock.join("<br/>");

  console.log("defaultBlock=>", defaultBlock);

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
