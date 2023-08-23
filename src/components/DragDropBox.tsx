import { useEffect, useState } from "react";
import { Block, BlockStatus, Blocks } from "./CustomBlocks";
import {
  DraggableProvided,
  DraggableStateSnapshot,
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";
import { Typography, Tabs, Tab, Box } from "@mui/material";
import tabPanels from "../data/tab-panels";
import tabs from "../data/tabs";

interface TabPanelProps {
  value: number;
  index: number;
  children: React.ReactNode;
}

const TabPanel: React.FC<TabPanelProps> = ({ value, index, children }) => {
  console.log("value", value);
  console.log("index", index);
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && (
        <Typography component="div" sx={{ p: 3 }}>
          {children}
        </Typography>
      )}
    </div>
  );
};

export const $ = (...classnames: any[]) => {
  return classnames.filter((v) => !!v).join(" ");
};

export default function DragDropBox({
  blocks,
  setBlocks,
}: {
  blocks: Blocks;
  setBlocks: (blocks: Blocks) => void;
}) {
  const [enabled, setEnabled] = useState(false);
  const [selectedBlocks, setSelectedBlocks] = useState<Block[]>([]);
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    console.log(newValue);
    setTabValue(newValue);
  };

  const handleDragEnd = ({ source, destination }: DropResult) => {
    if (!destination) {
      return;
    }
    const sourceKey = source.droppableId as BlockStatus;
    const destinationKey = destination.droppableId as BlockStatus;

    if (sourceKey === destinationKey) {
      return;
    }
    // 우 => 좌 이동은 삭제
    else if (sourceKey === "customblocks") {
      const newBlocks = { ...blocks };
      // 이동하는 Block 객체 찾기
      const movedBlock = { ...blocks[sourceKey][source.index] };
      console.log(movedBlock);
      // Blocks에 copiedBlock 삭제
      newBlocks[sourceKey].splice(source.index, 1);
      console.log(newBlocks);
      setBlocks(newBlocks);
      setSelectedBlocks(newBlocks["customblocks"]);
    }
    // 좌 => 우 이동은 복사
    else {
      // 이동시키기 전
      const newBlocks = { ...blocks };
      console.log("before : ", newBlocks);

      // 이동하는 Block 객체 찾기
      const movedBlock = { ...blocks[sourceKey][source.index] };
      console.log(movedBlock);
      // movedBlock의 id를 변경해 복사
      const copiedBlock = { ...movedBlock, id: `block-${Date.now()}` };
      // Blocks에 copiedBlock 저장
      newBlocks[destinationKey].splice(destination.index, 0, copiedBlock);
      //splice(start: number - 시작 인덱스, deleteCount: number -삭제할 요소의 수, ...items: T[] - 추가될 요소): T[];

      console.log("after : ", newBlocks);
      setBlocks(newBlocks);
      setSelectedBlocks(newBlocks["customblocks"]);
      console.log("selected blocks", selectedBlocks);
    }
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

    if (category === "personal-info") {
      return `${baseClassName} shadow bg-blue-200`;
    } else if (category === "safety") {
      return `${baseClassName} shadow bg-green-300`;
    } else {
      return `${baseClassName} shadow`;
    }
  }

  // Draggable 컴포넌트의 내부값 set
  const renderDraggable = (
    provided: DraggableProvided,
    snapshot: DraggableStateSnapshot,
    item: Block,
    index: number
  ) => (
    <div
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      className={getCardClassName(snapshot, item.category)}
    >
      <h5 className="font-semibold">{item.category}</h5>
      <h5 className="font-semibold">{item.content}</h5>
      <span className="text-sm text-gray-500">예시</span>
    </div>
  );

  return (
    <div className="p-4">
      <div className="mt-4">
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Tabs
            orientation="vertical"
            value={tabValue}
            onChange={handleTabChange}
            aria-label="Vertical tabs example"
          >
            {tabs.map((t) => (
              <Tab label={t.category} />
            ))}
          </Tabs>
          <DragDropContext onDragEnd={handleDragEnd}>
            <div className="grid flex-1 select-none grid-cols-3 gap-4 rounded-lg">
              {Object.keys(blocks).map((key) =>
                key !== "customblocks" ? (
                  <>
                    {tabPanels.map((tabPanel) => (
                      <TabPanel value={tabValue} index={tabPanel.index}>
                        {key === tabPanel.filterCategory && ( // 해당 탭에 블록이 있을 때만 렌더링
                          <Droppable key={key} droppableId={key}>
                            {(provided, snapshot) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                className={$(
                                  "flex flex-col gap-3 rounded-xl bg-gray-200 p-4 ring-1 ring-gray-300 transition-shadow dark:bg-[#000000]",
                                  snapshot.isDraggingOver
                                    ? "shadow-lg"
                                    : "shadow"
                                )}
                              >
                                <span className="text-xs font-semibold">
                                  {key.toLocaleUpperCase()}엥
                                </span>
                                {blocks[key as BlockStatus].map(
                                  (item, index) => (
                                    <Draggable
                                      key={item.id}
                                      draggableId={item.id}
                                      index={index}
                                    >
                                      {(provided, snapshot) =>
                                        renderDraggable(
                                          provided,
                                          snapshot,
                                          item,
                                          index
                                        )
                                      }
                                    </Draggable>
                                  )
                                )}
                                {provided.placeholder}
                              </div>
                            )}
                          </Droppable>
                        )}
                      </TabPanel>
                    ))}
                  </>
                ) : (
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
                            {(provided, snapshot) =>
                              renderDraggable(provided, snapshot, item, index)
                            }
                          </Draggable>
                        ))}
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                )
              )}
            </div>
          </DragDropContext>
        </Box>
      </div>
    </div>
  );
}
