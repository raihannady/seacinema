import Navbar from "./components/Navbar";
import "./App.css";
import Movie from "./components/Movie";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./components/Detail";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Movie />} />
        <Route path="/:title" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
