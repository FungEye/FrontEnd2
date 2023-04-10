import "./App.css";
import { Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import Box from "./components/Box";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/FrontEnd" element={<Welcome />} />
        <Route path="/FrontEnd/box" element={<Box />} />
      </Routes>
    </div>
  );
}

export default App;
