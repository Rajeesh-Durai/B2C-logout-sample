import {BrowserRouter, Routes, Route } from "react-router-dom";
import Button from "./component/Button";
function App() {
  return (
    <>
      dbfjs
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Button />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
