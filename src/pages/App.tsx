import React, { useState } from "react";
import "./style.css";
import Formulario from "../components/Formulario";
import Lista from "../components/Lista";
import { Cronometro } from "../components/Cronometro";

function App() {


  const [tarefas, setTarefas] = useState([
    { tarefa: "React", tempo: "02:00:00" },
    { tarefa: "Node", tempo: "03:10:00" },
    { tarefa: "JavaScript", tempo: "02:10:00" },
  ]);


  return (
    <div className="AppStyle">
      <Formulario setTarefas={setTarefas} />
      <Lista tarefas={tarefas} />
      <Cronometro />
    </div>
  );
}

export default App;
