import style from "./Botao.module.scss";

interface Props{
  type?: "button" | "submit" | "reset" | undefined,
  onClick?: () => void, 
  children?: string
}

function Botao({onClick, type, children}: Props){
  return(
  <button 
    onClick={onClick} 
    type={type} 
    className={style.botao} 
  >
    {children}
</button>
  )
}

export default Botao;
 