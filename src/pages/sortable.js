import React, { useRef, useEffect } from "react";
import Sortable from "sortablejs";
import Header from "../components/header";
function SortablePage() {
  const listRef = useRef(null);

  useEffect(() => {
    if (listRef.current) {
      new Sortable(listRef.current, {
        animation: 150,
        easing: "cubic-bezier(1, 0, 0, 1)",
      });
    }
  }, []);

  return (
    <div className="App">
      <Header active={2} />
      <ul ref={listRef}>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
        {/* Add more items as needed */}
      </ul>
    </div>
  );
}

export default SortablePage;
