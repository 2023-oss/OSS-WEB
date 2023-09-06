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
import tabPanels from "../data/tab-panels";
import tabs from "../data/tabs";
import { RenderDraggable } from "./RenderDraggable";
import { registerTemplate } from "../lib/api";
import Modal from "@mui/material/Modal";
import SelectedBlockList from "./SelectedBlocks";
import { styled } from "styled-components";
import Button from "@mui/material";
import CustomSign from "./CustomSign";
export const $ = (...classnames: any[]) => {
  return classnames.filter((v) => !!v).join(" ");
};
const StyledmodalBar = styled.div`
  width: 700px;
  margin: 0 auto;
  overflow-y: auto; /* 수직 스크롤을 추가 */
  max-height: 80vh; /* 스크롤 최대 높이 설정 */
  .writeDate {
    display: flex;
    justify-content: center;
  }
  button {
    display: flex;
    justify-content: center;
  }
  .ModalBar {
    display: flex;
    justify-content: center;
  }
  .ModalWrap {
    background-color: lightgray;
    padding: 5px;
    width: 200px;
    border: 1px solid #000;
  }
  .ModalContent {
    background-color: lightgray;
    padding: 5px;
    width: 500px;
    border: 1px solid #000;
  }
  .paymentRender {
    display: flex;
    justify-content: center;
  }
  .paymentWrap {
    background-color: white;
    padding: 5px;
    width: 200px;
    border: 1px solid #000;
    font-weight: bold;
  }
  .paymentContent {
    background-color: white;
    padding: 5px;
    width: 500px;
    border: 1px solid #000;
  }

  .defaultRender {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .defaultContent {
    background-color: white;
    padding: 30px;
    margin-left: 300px;
    font-weight: bold;
    font-size: 20px;
  }
  .personalinfoRender {
    display: flex;
    justify-content: center;
  }
  .personalinfoWrap {
    background-color: white;
    padding: 5px;
    width: 200px;
    border: 1px solid #000;
    font-weight: bold;
  }
  .personalinfoContent {
    background-color: white;
    padding: 5px;
    width: 500px;
    border: 1px solid #000;
  }
  .safetyRender {
    display: flex;
    justify-content: center;
  }
  .safetyWrap {
    background-color: white;
    padding: 5px;
    width: 200px;
    border: 1px solid #000;
    font-weight: bold;
  }
  .safetyContent {
    background-color: white;
    padding: 5px;
    width: 500px;
    border: 1px solid #000;
  }
  .responsibilityRender {
    display: flex;
    justify-content: center;
  }
  .responsibilityWrap {
    background-color: white;
    padding: 5px;
    width: 200px;
    border: 1px solid #000;
    font-weight: bold;
  }
  .responsibilityContent {
    background-color: white;
    padding: 5px;
    width: 500px;
    border: 1px solid #000;
  }
  .etcRender {
    display: flex;
    justify-content: center;
  }
  .etcWrap {
    background-color: white;
    padding: 5px;
    width: 200px;
    border: 1px solid #000;
    font-weight: bold;
  }
  .etcContent {
    background-color: white;
    padding: 5px;
    width: 500px;
    border: 1px solid #000;
  }
  .SignTab {
    display: flex;
    flex-direction: column;
  }
  .SignTab h1 {
    display: flex;
    font-size: 30px;
    font-weight: bold;
    justify-content: center;
  }
  .SignTab .Tab {
    box-shadow: 2px;
    border: 1px solid #000;
    height: 200px;
  }
  .writeDate {
    font-size: 24px;
    font-weight: bold;
  }
`;
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 13,
  border: "none",
};
const StyledButton = styled.div`
  background-color: #5fc1df;
  width: 300px;
  height: 80px;
  margin: 30px;
  color: white;
  text-align: center;
  font-size: 25px;
  font-weight: bold;
  padding-top: 23px;
  border-radius: 10px;
  box-shadow: 6px 6px 4px rgb(0, 0, 0, 0.25);
  &:hover {
    background-color: #489db5;
    transition: all 0.3s;
  }

  &:active {
    background-color: #357a92;
    transition: all 0.3s;
  }
`;

const StyledResetButton = styled.div`
  justify-content: center;
  bottom: 0px;
  left: 45%;
  /* transform: translateX(5%); // button을 중앙 정렬 */
  background-color: #5fc1df;
  width: 100px;
  height: 30px;

  color: white;
  text-align: center;
  font-size: 15px;
  font-weight: bold;
  padding-top: 3px;
  border-radius: 5px;
  &:hover {
    background-color: #489db5;
    transition: all 0.3s;
  }

  &:active {
    background-color: #357a92;
    transition: all 0.3s;
  }
`;
const StyledGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  flex: 1;
  user-select: none;
  border-radius: 0.5rem;
`;
const StyledDroppableContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  /*gap: 0.75rem; /* Adjust the gap value as needed */
  /*border-radius: 1rem; /* Adjust the border-radius as needed */
  background-color: #eae7e780; /* Set your desired background color */
  padding: 1rem;
  /*border: 1px solid #ccc; /* Set your desired border color */
  transition: box-shadow 0.3s ease; /* Add the desired transition effect */

  &.isDraggingOver {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;
const StyledPadding = styled.div`
  padding: 24px;
`;
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

export default function DragDrop({
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
  const [formDataSet, setFormDataSet] = useState<{
    defaultBlock: string[];
    personalinfoBlock: string[];
    safetyBlock: string[];
    responsibilityBlock: string[];
    paymentBlock: string[];
    etcBlock: string[];
  }>({
    defaultBlock: [],
    personalinfoBlock: [],
    safetyBlock: [],
    responsibilityBlock: [],
    paymentBlock: [],
    etcBlock: [],
  });

  const resetBlocks = () => {
    const updatedBeforeBlocks = blocks["before"].map((item) => ({
      ...item,
      isClicked: false,
    }));

    // "after" 블록 초기화
    const updatedAfterBlocks: any = [];

    setBlocks({
      ...blocks,
      before: updatedBeforeBlocks,
      after: updatedAfterBlocks, // "after" 블록 초기화
    });
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  console.log(formDataSet);
  const toggleSelect = (clickedBlock: Block) => {
    // 무조건 before 상태일 때만 선택 가능
    // after 상태일 때 선택 불가(버튼으로 삭제 가능하게)
    if (clickedBlock.status === "after") {
      return;
    }
    const updatedBlocks = blocks["before"].map((item) =>
      item.id === clickedBlock.id
        ? { ...item, isClicked: !item.isClicked }
        : item
    );
    setBlocks({ ...blocks, before: updatedBlocks });
  };

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
    else if (sourceKey === "after") {
      const newBlocks = { ...blocks };
      // 이동하는 Block 객체 찾기
      const movedBlock = { ...blocks[sourceKey][source.index] };
      console.log(movedBlock);
      // Blocks에 copiedBlock 삭제
      newBlocks[sourceKey].splice(source.index, 1);
      console.log(newBlocks);
      setBlocks(newBlocks);
      setSelectedBlocks(newBlocks["after"]);
    }
    // 서로 다른 droppable 간의 이동은 복사
    else {
      // 이동시키기 전
      const newBlocks = { ...blocks };

      const movedBlocks = blocks["before"].filter((item) => item.isClicked);
      if (movedBlocks.length > 0) {
        const copiedBlocks = movedBlocks.map((movedBlocks) => ({
          ...movedBlocks,
          id: `block-${Date.now()}`,
          isClicked: false,
          status: "after" as BlockStatus,
        }));
        newBlocks[destinationKey].splice(destination.index, 0, ...copiedBlocks);
        newBlocks[sourceKey].forEach((block) => {
          block.isClicked = false;
        });
      } else {
        // 이동하는 Block 객체 찾기
        const movedBlock = { ...blocks[sourceKey][source.index] };
        console.log(movedBlock);
        // movedBlock의 id를 변경해 복사
        const copiedBlock = {
          ...movedBlock,
          id: `block-${Date.now()}`,
          status: "after" as BlockStatus,
        };
        // Blocks에 copiedBlock 저장
        newBlocks[destinationKey].splice(destination.index, 0, copiedBlock);
        //splice(start: number - 시작 인덱스, deleteCount: number -삭제할 요소의 수, ...items: T[] - 추가될 요소): T[];
      }

      setBlocks(newBlocks);
      //setSelectedBlocks(newBlocks["after"]);
    }
  };

  useEffect(() => {
    setSelectedBlocks(blocks["after"]);
  }, [blocks]);
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

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };
  const handleContentChange = (content: string, index: number) => {
    // content 변경을 위한 로직
    console.log(index, content);

    const updatedBlocks = blocks["after"].map((item) =>
      item.index === index ? { ...item, content: content } : item
    );

    setBlocks({ ...blocks, after: updatedBlocks });
  };

  const handleDeleteBlock = (index: number) => {
    const newBlocks = blocks.after.filter((block) => block.index !== index);
    setBlocks({ ...blocks, after: newBlocks });
    //setSelectedBlocks(newBlocks);
  };
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
            {tabs.map((t) => (
              <Tab label={t.category} />
            ))}
          </Tabs>
          <DragDropContext onDragEnd={handleDragEnd}>
            {/* className="grid flex-1 select-none grid-cols-3 gap-4 rounded-lg" */}
            <StyledGridContainer>
              {Object.keys(blocks).map((key) => (
                <Droppable key={key} droppableId={key}>
                  {(provided, snapshot) => (
                    <StyledDroppableContainer
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      className={$(
                        snapshot.isDraggingOver ? "isDraggingOver" : ""
                      )}
                    >
                      <span className="text-xs font-semibold">
                        {key.toLocaleUpperCase()}
                      </span>
                      {key === "before" ? (
                        <>
                          {tabPanels.map((tabPanel) => (
                            <TabPanel value={tabValue} index={tabPanel.index}>
                              {blocks[key as BlockStatus]
                                .filter(
                                  (item) =>
                                    item.category === tabPanel.filterCategory
                                )
                                .map((item, index) => (
                                  <Draggable
                                    key={item.id}
                                    draggableId={item.id}
                                    index={item.index}
                                  >
                                    {(provided, snapshot) => (
                                      <RenderDraggable
                                        provided={provided}
                                        snapshot={snapshot}
                                        item={item}
                                        index={index}
                                        handleContentChange={
                                          handleContentChange
                                        }
                                        handleDeleteBlock={handleDeleteBlock}
                                        toggleSelect={toggleSelect}
                                      ></RenderDraggable>
                                    )}
                                  </Draggable>
                                ))}
                              {provided.placeholder}
                            </TabPanel>
                          ))}
                        </>
                      ) : (
                        <>
                          <StyledPadding>
                            {blocks[key as BlockStatus].map((item, index) => (
                              <Draggable
                                key={item.id}
                                draggableId={item.id}
                                index={item.index}
                              >
                                {(provided, snapshot) => (
                                  <RenderDraggable
                                    provided={provided}
                                    snapshot={snapshot}
                                    item={item}
                                    index={index}
                                    handleContentChange={handleContentChange}
                                    handleDeleteBlock={handleDeleteBlock}
                                    toggleSelect={toggleSelect}
                                  ></RenderDraggable>
                                )}
                              </Draggable>
                            ))}
                            {provided.placeholder}
                          </StyledPadding>
                          <StyledResetButton onClick={resetBlocks}>
                            Reset
                          </StyledResetButton>
                        </>
                      )}
                    </StyledDroppableContainer>
                  )}
                </Droppable>
              ))}
              <StyledDroppableContainer>
                <SelectedBlockList
                  selectedBlocks={selectedBlocks}
                  formDataSet={formDataSet}
                  setFormDataSet={setFormDataSet}
                />
              </StyledDroppableContainer>
            </StyledGridContainer>
          </DragDropContext>
        </Box>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <StyledButton onClick={handleOpen}>Register Template</StyledButton>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              style={{
                display: "flex",
                justifyContent: "center",
                fontWeight: "bold",
                fontSize: "28px",
              }}
            >
              개인정보 제공 및 활용 동의서
            </Typography>

            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <div>
                <StyledmodalBar>
                  <CustomSign
                    selectedBlocks={selectedBlocks}
                    formDataSet={formDataSet}
                    setFormDataSet={setFormDataSet}
                  />
                </StyledmodalBar>
              </div>
            </Typography>
          </Box>
        </Modal>
      </div>
    </div>
  );
}
