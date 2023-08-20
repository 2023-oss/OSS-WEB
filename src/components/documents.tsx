import * as React from "react";
import * as ReactDOM from "react-dom";

import OrgTreeComponent, { useTree } from "react-drag-hierarchy-tree";

const data = {
  id: 1,
  label: "President",
  children: [
    {
      id: 2,
      label: "Administrative",
      children: [
        {
          id: 3,
          label: "Director",
          children: [],
        },
      ],
    },
    {
      id: 4,
      label: "Finances",
      children: [
        {
          id: 5,
          label: "Seller",
          children: [],
        },
      ],
    },
  ],
};

export default function Documents() {
  const { treeRef } = useTree();

  const onClick = () => {
    treeRef.current?.onExpandNodes();
  };

  return (
    <div>
      <button onClick={onClick}>close/open</button>
      <OrgTreeComponent data={data} ref={treeRef} horizontal />
    </div>
  );
}
