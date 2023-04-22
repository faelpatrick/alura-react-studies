import ITarefa from "../../types/Tarefa";
import Item from "./Item";
import style from "./Lista.module.scss";

interface Props {
  tarefas: ITarefa[];
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void;
}

function Lista({ tarefas, selecionaTarefa }: Props) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia </h2>

      <ul>
        {tarefas.map((item, index) => (
          <Item key={item.id} {...item} selecionaTarefa={selecionaTarefa}/>
        ))}
      </ul>
    </aside>
  );
}

export default Lista;
