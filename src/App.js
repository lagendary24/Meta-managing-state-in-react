import Fruits from "./Fruits";
import FruitsCounter from "./FruitsCounter";
import React, { useState } from 'react';

function App() {
  const [fruits, setFruits] = useState([
    { fruitName: 'apple', id: 1 },
    { fruitName: 'apple', id: 2 },
    { fruitName: 'plum', id: 3 },
  ]);
  return (
    <div className="App">
      <h1>Where should the state go?</h1>
      <Fruits  />
      <FruitsCounter />
    </div>
  );
}

export default App;
