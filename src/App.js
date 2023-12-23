import Logout from "./component/logout";
import {Routes, Route } from "react-router-dom";
function App() {
  return (
    <Routes>
    <Route path="/" element={<Logout/>} />
    </Routes>
  );
}

export default App;
