import React from "react";
import Botao from "../Botao";
import style from "./Formulario.module.scss";

class Formulario extends React.Component {
  state = {
    tarefa: "",
    tempo: "00:00",
  };

  adicionarTarefa(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("State: ", this.state);
  }

  render(): React.ReactNode {
    return (
      <form action="" className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
        <div className={style.inputContainer}>
          <label htmlFor={style.tarefa}>Tarefa</label>
          <input type="text" id="tarefa" name="tarefa" placeholder="O que você deseja estudar" required />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="tempo">Tempo</label>
          <input
            type="time"
            id="tempo"
            step="1"
            name="tempo"
            value={this.state.tempo}
            onChange={(event) => this.setState({ ...this.state, tempo: event.target.value })}
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>
        <Botao>Começar</Botao>
      </form>
    );
  }
}

export default Formulario;
