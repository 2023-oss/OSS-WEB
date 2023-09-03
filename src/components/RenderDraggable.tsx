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
  // editedContent: string;
  handleContentChange: (ex: string, index: number) => void;
  className: string;
  toggleSelect: (clickedBlock: Block) => void;
}

export function RenderDraggable(props: RenderDraggableProps) {
  const [editedContent, setEditedContent] = useState(props.item.content);
  console.log(editedContent);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newContent = e.target.value;
    setEditedContent(newContent);
    props.handleContentChange(newContent, props.index);
  };

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
          value={editedContent}
          onChange={handleInputChange}
        />
      </StyledDiv>
    </div>
  );
}
