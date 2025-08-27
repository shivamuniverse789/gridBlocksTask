import { useState } from "react";
import "./App.css";
import GridItem from "./components/GridItem";

function App() {
  const[clearSelection, setClearSelection] = useState(false)
  const btnClickHandler = () => {
    setClearSelection(true)
  }
  const updateClearSelection = () => {
    setClearSelection(false)
  }
  return (
    <div className="App">
      <div className="grid-container">
        <GridItem clearSelection={clearSelection} updateClearSelection={updateClearSelection}/>
        <GridItem clearSelection={clearSelection} updateClearSelection={updateClearSelection}/>
        <GridItem clearSelection={clearSelection} updateClearSelection={updateClearSelection}/>
        <GridItem clearSelection={clearSelection} updateClearSelection={updateClearSelection}/>
        <GridItem clearSelection={clearSelection} updateClearSelection={updateClearSelection}/>
        <GridItem clearSelection={clearSelection} updateClearSelection={updateClearSelection}/>
        <GridItem clearSelection={clearSelection} updateClearSelection={updateClearSelection}/>
        <GridItem clearSelection={clearSelection} updateClearSelection={updateClearSelection}/>
        <GridItem clearSelection={clearSelection} updateClearSelection={updateClearSelection}/>
      </div>
      <button className="clearBtn" onClick={btnClickHandler}>Clear</button>
    </div>
  );
}

export default App;
