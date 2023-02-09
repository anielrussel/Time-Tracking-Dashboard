import React, { useState } from "react";
import "./App.css";
import Cards from "./components/cards/Cards";
import Dashboard from "./components/dashboard/Dashboard";
import data from "./components/data";

function App() {
  const [selectedTimeFrame, setSelectedTimeFrame] = useState("daily");

  const cardElements = data.map((cards) => (
    <Cards
      key={cards.title}
      item={cards}
      selectedTimeFrame={selectedTimeFrame}
    />
  ));

  const updateSelectedTimeFrame = (newTimeFrame) => {
    setSelectedTimeFrame(newTimeFrame);
  };
  
  return (
    <div className="App">
      <Dashboard onSelectedTimeFrameChange={updateSelectedTimeFrame} />
      <div className="app-cards">{cardElements}</div>
    </div>
  );
}

export default App;
