import React, { useId, useState } from "react";
import Botao from "../Botao";
import style from "./Formulario.module.scss";
import ITarefa from "../../types/Tarefa";
import { v4 as uuidv4 } from "uuid";

interface Props{
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}

function Formulario({setTarefas }: Props){
  const [tarefa,setTarefa] = useState("")
  const [tempo,setTempo] = useState("00:00")


  function  adicionarTarefa(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTarefas((tarefasAntigas) => [
      ...tarefasAntigas,
      {
        tarefa,
        tempo,
        selecionado: false,
        completado: false,
        id: uuidv4(),
      },
    ]);
    setTarefa("")
    setTempo("00:00");
  }
  return (
    <form action="" className={style.novaTarefa} onSubmit={adicionarTarefa}>
      <div className={style.inputContainer}>
        <label htmlFor={style.tarefa}>Tarefa</label>
        <input
          type="text"
          id="tarefa"
          name="tarefa"
          value={tarefa}
          onChange={(event) =>
            setTarefa(event.target.value)
          }
          placeholder="O que você deseja estudar"
          required
        />
      </div>

      <div className={style.inputContainer}>
        <label htmlFor="tempo">Tempo</label>
        <input
          type="time"
          id="tempo"
          step="1"
          name="tempo"
          value={tempo}
          onChange={(event) => setTempo(event.target.value)}
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <Botao type="submit">Adicionar</Botao>
    </form>
  );
}



export default Formulario;
