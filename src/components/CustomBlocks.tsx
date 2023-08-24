import React, { useState } from "react";
import DragDropExample from "./DragDrop";
import { initialData } from "../data/initial-data";
import DragDrop from "./DragDrop";
export type BlockStatus = "before" | "after";

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
    before: initialData,
    after: [],
  });

  return (
    <div>
      <DragDrop blocks={blocks} setBlocks={setBlocks} />
    </div>
  );
}
