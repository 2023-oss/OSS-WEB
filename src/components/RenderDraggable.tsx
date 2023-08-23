import { DraggableProvided, DraggableStateSnapshot } from "react-beautiful-dnd";
import { Block } from "./CustomBlocks";

export default function RenderDraggable(props: {provided: DraggableProvided,
  snapshot: DraggableStateSnapshot,
  item: Block,
  index: number,
  handleContentChange: (itemIndex: number, newContent: string) => void}) {
  return (
    <div
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
        onChange={(e) => props.handleContentChange(props.item.index, e.target.value)}
      />
      <span className="text-sm text-gray-500">예시</span>
    </div>
  );
}
