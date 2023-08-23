import { DraggableProvided, DraggableStateSnapshot } from "react-beautiful-dnd";
import { Block } from "./CustomBlocks";

export function RenderDraggable(
  provided: DraggableProvided,
  snapshot: DraggableStateSnapshot,
  item: Block,
  index: number,
  handleContentChange: (itemIndex: number, newContent: string) => void
) {
  return (
    <div
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      // className={getCardClassName(snapshot, item.category)}
    >
      <h5 className="font-semibold">{item.category}</h5>
      <h5 className="font-semibold">{item.content}</h5>
      <input
        type="text"
        value={item.content}
        onChange={(e) => handleContentChange(item.index, e.target.value)}
      />
      <span className="text-sm text-gray-500">예시</span>
    </div>
  );
}
