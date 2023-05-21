import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Protect from "./protect/Protect";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Main />} />
          <Route path="/9970116791" element={<Protect />}>
            <Route path="" element={<Dashboard />}></Route>
          </Route>

          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
