import { DraggableProvided, DraggableStateSnapshot } from "react-beautiful-dnd";
import { Block } from "./CustomBlocks";
import React, { useEffect, useState } from "react";

interface RenderDraggableProps extends React.ComponentPropsWithRef<"div"> {
  provided: DraggableProvided;
  snapshot: DraggableStateSnapshot;
  item: Block;
  index: number;
  handleContentChange: (content: string, index: number) => void,
  className: string;
}

export function RenderDraggable(props: RenderDraggableProps) {
  // const [block, setBlock] = useState<Block>(props.item);
  // const handleContentChange = (newContent: string) => {
  //   // content 변경을 위한 로직
  //   setBlock({ ...block, content: newContent });
  //   console.log("updatedBlock", block);
  // };
  return (
    <div
      className={props.className}
      ref={props.provided.innerRef}
      {...props.provided.draggableProps}
      {...props.provided.dragHandleProps}
      // className={getCardClassName(snapshot, item.category)}
    >
      <h5 className="font-semibold">{props.item.category}</h5>
      <h5 className="font-semibold">{props.item.content}</h5>
      <input
        type="text"
        value={props.item.content}
        onChange={(e) => props.handleContentChange(e.target.value, props.index)}
      />
      <span className="text-sm text-gray-500">예시</span>
    </div>
  );
}
