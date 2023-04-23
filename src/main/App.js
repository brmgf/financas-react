import React from "react";

import 'bootswatch/dist/flatly/bootstrap.css';
import '../custom.css'
import './rotas'
import Rotas from "./rotas";
import NavBar from "../components/navbar";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <Rotas />
      </div>
    </>

  )
}

export default App;
