import React from "react";
import Botao from "../Botao";
import "./style.scss";

class Formulario extends React.Component {
  render(): React.ReactNode {
    return (
      <form action="" className="novaTarefa">
        <div className="inputContainer">
          <label htmlFor="tarefa">Tarefa</label>
          <input type="text" id="tarefa" name="tarefa" placeholder="O que você deseja estudar" required />
        </div>
        <div className="inputContainer">
          <label htmlFor="tempo">Tempo</label>
          <input type="time" id="tempo" step="1" name="tempo" min="00:00:00" max="01:30:00" required />
        </div>
        <Botao />
      </form>
    );
  }
}

export default Formulario;
