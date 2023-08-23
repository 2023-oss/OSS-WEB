import { DraggableProvided, DraggableStateSnapshot } from "react-beautiful-dnd";
import { Block } from "./CustomBlocks";
import React, { useEffect, useState } from "react";

export default function RenderDraggable(props: {
  provided: DraggableProvided;
  snapshot: DraggableStateSnapshot;
  item: Block;
}) {
  const [block, setBlock] = useState<Block>(props.item);
  const handleContentChange = (newContent: string) => {
    // content 변경을 위한 로직
    setBlock({ ...block, content: newContent });
    console.log("updatedBlock", block);
  };
  return (
    <div
      ref={props.provided.innerRef}
      {...props.provided.draggableProps}
      {...props.provided.dragHandleProps}
      // className={getCardClassName(snapshot, item.category)}
    >
      <h5 className="font-semibold">{block.category}</h5>
      <h5 className="font-semibold">{block.content}</h5>
      <input
        type="text"
        value={block.content}
        onChange={(e) => handleContentChange(e.target.value)}
      />
      <span className="text-sm text-gray-500">예시</span>
    </div>
  );
}
