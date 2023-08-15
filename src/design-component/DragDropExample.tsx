import React, { useEffect, useState } from "react";
import {
  DragDropContext,
  Draggable,
  DraggableChildrenFn,
  DraggableProps,
  DraggableStateSnapshot,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";
import { BlockStatus, Blocks } from "../pages/CustomBlocks";

export const $ = (...classnames: any[]) => {
  return classnames.filter((v) => !!v).join(" ");
};

interface ExtendedDraggableChildrenFn extends DraggableChildrenFn {
  snapshot: DraggableStateSnapshot;
}

interface ExtendedDraggableProps extends DraggableProps {
  children: ExtendedDraggableChildrenFn;
}

export default function DragDropExample({
  blocks,
  setBlocks,
}: {
  blocks: Blocks;
  setBlocks: (blocks: Blocks) => void;
}) {
  const [enabled, setEnabled] = useState(false);
  // 선택된 블록들을 저장할 상태 배열
  const [selectedBlocks, setSelectedBlocks] = useState<Blocks>();

  const onDragEnd = ({ source, destination }: DropResult) => {
    if (!destination) return;

    const scourceKey = source.droppableId as BlockStatus;
    const destinationKey = destination.droppableId as BlockStatus;

    const _items = JSON.parse(JSON.stringify(blocks)) as typeof blocks;
    const [targetItem] = _items[scourceKey].splice(source.index, 1);
    _items[destinationKey].splice(destination.index, 0, targetItem);
    setBlocks(_items);

    // 선택된 블록들을 업데이트
    const selected = _items.customblocks;
    console.log(selected);
    //setSelectedBlocks([...selectedBlocks, selected]);
  };

  useEffect(() => {
    const animation = requestAnimationFrame(() => setEnabled(true));

    return () => {
      cancelAnimationFrame(animation);
      setEnabled(false);
    };
  }, []);

  if (!enabled) {
    return null;
  }

  function getCardClassName(
    snapshot: DraggableStateSnapshot,
    category: string
  ) {
    const baseClassName =
      "rounded-lg bg-white p-4 transition-shadow dark:bg-[#121212]";

    if (snapshot.isDragging) {
      if (category === "personal-info") {
        return `${baseClassName} bg-opacity-90 shadow-2xl shadow-gray-400 bg-blue-300`;
      } else if (category === "safety") {
        return `${baseClassName} bg-opacity-90 shadow-2xl shadow-gray-400 bg-green-200`;
      } else {
        return `${baseClassName} bg-opacity-90 shadow-2xl shadow-gray-400`;
      }
    } else {
      if (category === "personal-info") {
        return `${baseClassName} shadow bg-blue-300`;
      } else if (category === "safety") {
        return `${baseClassName} shadow bg-green-200`;
      } else {
        return `${baseClassName} shadow`;
      }
    }
  }

  return (
    <div className="p-4">
      <div className="mb-2">
        <h1 className="text-3xl font-bold">CustomBlock</h1>
        <span>동의서를 쉽게 만들어봐요!</span>
      </div>

      <div className="mt-4 flex">
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="grid flex-1 select-none grid-cols-2 gap-4 rounded-lg">
            {Object.keys(blocks).map((key) => (
              <Droppable key={key} droppableId={key}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className={$(
                      "flex flex-col gap-3 rounded-xl bg-gray-200 p-4 ring-1 ring-gray-300 transition-shadow dark:bg-[#000000]",
                      snapshot.isDraggingOver ? "shadow-lg" : "shadow"
                    )}
                  >
                    <span className="text-xs font-semibold">
                      {key.toLocaleUpperCase()}
                    </span>
                    {blocks[key as BlockStatus].map((item, index) => (
                      <Draggable
                        key={item.id}
                        draggableId={item.id}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className={getCardClassName(
                              snapshot,
                              item.category
                            )}
                          >
                            <h5 className="font-semibold">{item.category}</h5>
                            <h5 className="font-semibold">{item.content}</h5>
                            <span className="text-sm text-gray-500">예시</span>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            ))}
          </div>
        </DragDropContext>
      </div>
    </div>
  );
}
