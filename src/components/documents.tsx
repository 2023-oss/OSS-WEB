import * as React from "react";
import * as ReactDOM from "react-dom";
// import Sortable from "sortablejs";

import { DragDropContext } from 'react-beautiful-dnd';

class App extends React.Component {
  onDragStart = () => {...}
  onDragEnd = () => {...}

  render() {
    return (
      <DragDropContext
        onDragStart={this.onDragStart}
        onDragEnd={this.onDragEnd}
      >
        <div>Hello world</div>
      </DragDropContext>
    )
  }
}