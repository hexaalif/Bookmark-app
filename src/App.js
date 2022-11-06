import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Pinbooks from "./Components/Pinbooks/Pinbooks";
import Search from "./Components/Search/Search";
import Header from "./Components/Shared/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addBooked" element={<Pinbooks />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
