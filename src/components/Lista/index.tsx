import React, { useState } from "react";
import "./style.scss";
import Item from "./Item";
import Video all from "../Teste.tsx";

function Lista() {
  const [tarefas, setTarefas] = useState([
    { tarefa: "React", tempo: "02:00:00" },
    { tarefa: "Node", tempo: "03:10:00" },
    { tarefa: "JavaScript", tempo: "02:10:00" },
  ]);

  function handleTask() {
    setTarefas([...tarefas, { tarefa: "TypeScript", tempo: "01:30:00" }]);
  }
  return (
    <aside className="listaTarefas">
      <h2 onClick={() => handleTask()}>Estudos do dia </h2>
      <ul>
        {tarefas.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </ul>
    </aside>
<Video all />
  );
}

export default Lista;
