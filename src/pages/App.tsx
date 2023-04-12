import React from "react";
import "./style.css";
import Formulario from "../components/Formulario";
import Lista from "../components/Lista";
import { Cronometro } from "../components/Cronometro";

function App() {
  return (
    <div className="AppStyle">
      <Formulario />
      <Lista />
      <Cronometro />
    </div>
  );
}

export default App;
