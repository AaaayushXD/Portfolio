// import Navbar from "./components/Navbar"
import React from "react";
import "./index.css";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Work } from "./components/Work";
import { Contact } from "./components/Contact";
import { Footers } from "./components/Footers";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
      <Footers />
    </div>
  );
}

export default App;
