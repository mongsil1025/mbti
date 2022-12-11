import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main } from "./components/Main";
import { Dictionary } from "./components/Dictionary";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/dictionary/:id" element={<Dictionary />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
