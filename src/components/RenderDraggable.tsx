import { DraggableProvided, DraggableStateSnapshot } from "react-beautiful-dnd";
import { Block } from "./CustomBlocks";
import { styled } from "styled-components";
import { useState } from "react";
const StyledInput = styled.input`
  width: 100%; /* 너비는 부모 요소의 크기에 맞게 */
  min-height: 30px; /* 최소 높이 */
  padding: 5px;
  box-sizing: border-box;
  border: 1px solid #ccc;
`;
const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
// const [textHandle, settextHandle] = useState("");
// const handleContentChange = (content : any, index : any) = {

//   settextHandle(textHandle);
// }
interface RenderDraggableProps extends React.ComponentPropsWithRef<"div"> {
  provided: DraggableProvided;
  snapshot: DraggableStateSnapshot;
  item: Block;
  index: number;
  handleContentChange: (content: string, index: number) => void;
  className: string;
  toggleSelect: (clickedBlock: Block) => void;
}

export function RenderDraggable(props: RenderDraggableProps) {
  return (
    <div
      className={`${props.className} ${
        props.item.isClicked ? "bg-blue-200" : ""
      }`}
      ref={props.provided.innerRef}
      {...props.provided.draggableProps}
      {...props.provided.dragHandleProps}
      onClick={(e) => {
        props.toggleSelect(props.item);
      }}
    >
      <h5 className="font-semibold">{props.item.category}</h5>
      {props.item.category === "default" ? (
        <span className="font-semibold">{props.item.ex} : </span>
      ) : null}
      <StyledDiv>
        <StyledInput
          type="text"
          value={props.item.content}
          onClick={() => {
            console.log("hi");
          }}
          onChange={(e) =>
            props.handleContentChange(e.target.value, props.index)
          }
        />
      </StyledDiv>
    </div>
  );
}
