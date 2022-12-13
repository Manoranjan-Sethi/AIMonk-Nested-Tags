import { useState } from "react";
import "./App.css";
import tree from "./Data/data";
import ShowData from "./Components/ShowData";

function App() {
  const [data, setData] = useState(tree);
  // console.log(data);
  return (
    <div className="App">
      <ShowData data={data} />
    </div>
  );
}

export default App;
