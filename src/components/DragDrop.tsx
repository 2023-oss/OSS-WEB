import React, { useEffect, useState } from "react";
import {
  DragDropContext,
  Draggable,
  DraggableChildrenFn,
  DraggableProps,
  DraggableProvided,
  DraggableStateSnapshot,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";
import { Block, BlockStatus, Blocks } from "./CustomBlocks";
import { Typography, Tabs, Tab, Box } from "@mui/material";
import styled from "styled-components";
import CategoryTabs from "./CategoryTabs";

export const $ = (...classnames: any[]) => {
  return classnames.filter((v) => !!v).join(" ");
};

interface ExtendedDraggableChildrenFn extends DraggableChildrenFn {
  snapshot: DraggableStateSnapshot;
}

interface ExtendedDraggableProps extends DraggableProps {
  children: ExtendedDraggableChildrenFn;
}

interface TabPanelProps {
  value: number;
  index: number;
  children: React.ReactNode;
}

const TabPanel: React.FC<TabPanelProps> = ({ value, index, children }) => {
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

export default function DragDropExample({
  blocks,
  setBlocks,
}: {
  blocks: Blocks;
  setBlocks: (blocks: Blocks) => void;
}) {
  const [enabled, setEnabled] = useState(false);
  // 선택된 블록들을 저장할 상태 배열
  const [selectedBlocks, setSelectedBlocks] = useState<Block[]>([]);
  const [tabValue, setTabValue] = useState(0);
  const handleDragEnd = ({ source, destination }: DropResult) => {
    if (!destination) {
      return;
    }

    const sourceKey = source.droppableId as BlockStatus;
    const destinationKey = destination.droppableId as BlockStatus;

    if (sourceKey === destinationKey) {
      return; // 같은 droppable 내에서의 이동은 무시
    }
    // customblocks=>boxes 이동 시 삭제
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
    // 서로 다른 droppable 간의 이동은 복사
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

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

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
      {/* <div className="mb-2">
        <h1 className="text-3xl font-bold">CustomBlock</h1>
        <span>동의서를 쉽게 만들어봐요!</span>
      </div> */}

      <div className="mt-4">
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Tabs
            orientation="vertical"
            value={tabValue}
            onChange={handleTabChange}
            aria-label="Vertical tabs example"
          >
            <Tab label="기본" />
            <Tab label="개인정보" />
            <Tab label="안전" />
          </Tabs>
          <DragDropContext onDragEnd={handleDragEnd}>
            <div className="grid flex-1 select-none grid-cols-3 gap-4 rounded-lg">
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
                      {key === "boxes" ? (
                        <>
                          <TabPanel value={tabValue} index={0}>
                            {blocks[key as BlockStatus]
                              .filter((item) => item.category === "default")
                              .map((item, index) => (
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
                              ))}
                            {provided.placeholder}
                          </TabPanel>
                          <TabPanel value={tabValue} index={1}>
                            {blocks[key as BlockStatus]
                              .filter(
                                (item) => item.category === "personal-info"
                              )
                              .map((item, index) => (
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
                              ))}
                            {provided.placeholder}
                          </TabPanel>
                          <TabPanel value={tabValue} index={2}>
                            <>
                              {blocks[key as BlockStatus]
                                .filter((item) => item.category === "safety")
                                .map((item, index) => (
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
                                ))}
                              {provided.placeholder}
                            </>
                          </TabPanel>
                        </>
                      ) : (
                        <>
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
                        </>
                      )}
                    </div>
                  )}
                </Droppable>
              ))}
            </div>
          </DragDropContext>
        </Box>
      </div>
    </div>
  );
}
