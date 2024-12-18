import { Route, Routes } from "react-router-dom";
import "./css/App.css";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
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
