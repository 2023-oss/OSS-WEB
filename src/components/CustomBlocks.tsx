import React, { useState } from "react";
import initialData from "../data/initial-data";
import DragDropExample from "./DragDrop";

export type BlockStatus = "boxes" | "customblocks";

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
    boxes: initialData,
    customblocks: [],
  });

  return (
    <div>
      <DragDropExample blocks={blocks} setBlocks={setBlocks} />
    </div>
  );
}
