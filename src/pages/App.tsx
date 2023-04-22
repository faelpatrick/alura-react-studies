import React, { useState } from "react";
import "./style.css";
import Formulario from "../components/Formulario";
import Lista from "../components/Lista";
import { Cronometro } from "../components/Cronometro";
import ITarefa from "../types/Tarefa";

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([
    // { tarefa: "React", tempo: "02:00:00" },
    // { tarefa: "Node", tempo: "03:10:00" },
    // { tarefa: "JavaScript", tempo: "02:10:00" },
  ]);
  const [selecionado, setSelecionado] = useState<ITarefa>();

  function selecionaTarefa(tarefaSelecionada: ITarefa) {
    setSelecionado(tarefaSelecionada);
    setTarefas((tarefasAnteriores) =>
      tarefasAnteriores.map((tarefa) => ({
        ...tarefa,
        selecionado: tarefa.id === tarefaSelecionada.id ? true : false,
      }))
    );
  }

  return (
    <div className="AppStyle">
      <Formulario setTarefas={setTarefas} />
      <Lista tarefas={tarefas} selecionaTarefa={selecionaTarefa} />
      <Cronometro selecionado={selecionado} />
    </div>
  );
}

export default App;
