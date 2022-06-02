import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Songs from "./pages/Songs";
import Menubar from "./pages/Menubar";
import Song from "./pages/Song";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Menubar />}>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/songs" element={<Songs />}>
          <Route path = ":songID" element={<Song />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;