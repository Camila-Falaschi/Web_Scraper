import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import "./Styles/app.css"

function App() {
  return (
    <Routes>
      <Route exact path="/" element={ <Home /> } />
    </Routes>
  );
}

export default App;
