import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllPlayers from "./components/AllPlayers";
import SinglePlayer from "./components/SinglePlayer";
import NavBar from "./components/NavBar";
import NewPlayerForm from "./components/NewPlayerForm";

function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <NavBar />
        </nav>
        <Routes>
          <Route path="/" element={<AllPlayers />} />
          <Route path="/nav" element={<NavBar />} />
          <Route path="/new-player" element={<NewPlayerForm />} />
          <Route path="/players/:id" element={<SinglePlayer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
