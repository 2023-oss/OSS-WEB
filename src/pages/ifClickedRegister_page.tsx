import React from "react";
import { Block } from "../components/CustomBlocks";

interface blocks {
  name: string;
}

// function RenderBlocks({ blo: blocks }) {
//   return (
//     <div>
//       {blocks.map((block: any) => (
//         <div key={block.id}>
//           {/* 여기에 블록을 렌더링하는 JSX를 추가하세요 */}
//           <h3>{block.category}</h3>
//           <p>{block.content}</p>
//           {/* 추가로 필요한 내용을 렌더링하세요 */}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default function YourComponent() {
//   return (
//     <div>
//       <h1>블록 목록</h1>
//       <RenderBlocks blocks={} />
//     </div>
//   );
// }
