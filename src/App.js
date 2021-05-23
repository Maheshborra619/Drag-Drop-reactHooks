import React, { useState } from "react";
import "./App.css";

const arrayList = [1, 2, 3, 4, 5, 6];

function App() {
  const [list, setList] = useState(arrayList);
  const [draggedItem,setDraggedItem] = useState(null);


  function onDraggable(e,i){
      setDraggedItem(list[i]);
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.setData("text/html",e.target.parentNode);
      e.dataTransfer.setDragImage(e.target.parentNode,20,20);
  }

  function dragoverhandle(index){
    const dragoveritem = list[index];

    if(dragoveritem === draggedItem){
      return;
    }

    const items  = list.filter(item =>item !== draggedItem);

    items.splice(index,0,draggedItem);

    setList(items)
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Drag and Drop</h1>
        <ul className="ul">
          {list.map((val, i) => {
            return (
              <li key={i} onDragOver={()=>dragoverhandle(i)} className="li">
                <div draggable onDragStart={(e) => onDraggable(e,i)}>
                  {val}
                </div>
              </li>
            );
          })}
        </ul>
      </header>
    </div>
  );
}

export default App;
