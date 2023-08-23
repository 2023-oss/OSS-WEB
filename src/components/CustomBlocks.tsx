import React, { useState } from "react";
import DragDropExample from "./DragDrop";
import DragDropTest from "./DragDrop_test";
import {
  initialData,
  // personalInfoData,
  // safetyData,
} from "../data/initial-data";
import DragDropBox from "./DragDropBox";
import { initial } from "lodash";

export type BlockStatus =
  | "default"
  // | "personalInfo"
  // | "safety"
  // | "responsibility"
  // | "payment"
  // | "etc"
  | "customblocks";

export type Block = {
  id: string;
  status: BlockStatus;
  category: string;
  content: string;
  ex: string;
  index: number;
};

export type Blocks = {
  [key in BlockStatus]: Block[];
};

export default function CustomBlocks() {
  const [blocks, setBlocks] = useState<Blocks>({
    default: initialData,
    // default: [],
    // personalInfo: personalInfoData,
    // safety: safetyData,
    // responsibility: [],
    // payment: [],
    // etc: [],
    customblocks: [],
  });

  return (
    <div>
      <DragDropExample blocks={blocks} setBlocks={setBlocks} />
    </div>
  );
}
