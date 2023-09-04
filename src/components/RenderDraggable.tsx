import { DraggableProvided, DraggableStateSnapshot } from "react-beautiful-dnd";
import { Block, BlockStatus } from "./CustomBlocks";
import { styled } from "styled-components";
import { useState } from "react";
// Font Awesome 아이콘 라이브러리 임포트
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
const StyledInput = styled.input`
  width: 90%; /* 너비는 부모 요소의 크기에 맞게 */
  min-height: 30px; /* 최소 높이 */
  padding: 5px;
  box-sizing: border-box;
  border: 1px solid #ccc;
`;
const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledDeleteButton = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 5%;
  &:hover {
    background-color: #489db5;
  }

  &:active {
    background-color: #357a92;
  }
`;

interface StyledBlockProps {
  isClicked: boolean;
}

const StyledBlock = styled.div<StyledBlockProps>`
  position: relative;
  border-radius: 0.5rem; /* rounded-lg */
  background-color: ${(props) =>
    props.isClicked ? "rgba(78, 205, 234, 0.285)" : "white"};
  padding: 1rem; /* p-4 */
  box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.25); /* transition-shadow */
  transition: box-shadow 0.3s ease; /* transition-shadow */
  margin: 5px;
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
  handleDeleteBlock: (index: number) => void;

  toggleSelect: (clickedBlock: Block) => void;
}

export function RenderDraggable(props: RenderDraggableProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newContent = e.target.value;
    props.handleContentChange(newContent, props.item.index);
  };

  return (
    <StyledBlock
      isClicked={props.item.isClicked}
      // className={`${props.className} ${
      //   props.item.isClicked ? "bg-blue-200" : ""
      // }`}
      ref={props.provided.innerRef}
      {...props.provided.draggableProps}
      {...props.provided.dragHandleProps}
      onClick={(e) => {
        props.toggleSelect(props.item);
      }}
    >
      <h5 className="font-semibold">{props.item.category}</h5>
      {props.item.question === "" ? (
        <StyledDiv>
          <StyledInput
            type="text"
            value={props.item.content}
            onChange={handleInputChange}
          />
        </StyledDiv>
      ) : (
        <span className="font-semibold">{props.item.question} : </span>
      )}

      {props.item.status === ("after" as BlockStatus) ? (
        <StyledDeleteButton
          onClick={(e) => {
            props.handleDeleteBlock(props.item.index);
          }}
        >
          <FontAwesomeIcon icon={faTrashCan} size="1x" color="black" />
        </StyledDeleteButton>
      ) : null}
    </StyledBlock>
  );
}
