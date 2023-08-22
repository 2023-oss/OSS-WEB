import { Block, BlockStatus } from "../components/CustomBlocks";

const initialData: Block[] = [
  {
    id: "block-1",
    status: "boxes",
    category: "personal-info",
    content: "개인정보동의?",
    ex: "예시",
    index: 1,
  },
  {
    id: "block-2",
    status: "boxes",
    category: "personal-info",
    content: "동의하세요!",
    ex: "예시",
    index: 2,
  },
  {
    id: "block-3",
    status: "boxes",
    category: "safety",
    content: "안전",
    ex: "예시",
    index: 3,
  },
  {
    id: "block-4",
    status: "boxes",
    category: "safety",
    content: "책임노",
    ex: "예시",
    index: 4,
  },
];

export default initialData;
