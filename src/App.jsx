import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";

function App() {
  return (
    <>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorite" element={<Favorite />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
