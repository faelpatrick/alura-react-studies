import React from "react";
import style from "./Botao.module.scss";

class Botao extends React.Component<{
  type?: "button" | "submit" | "reset" | undefined,
  onClick?: () => void, 
  children: string
}> {

  render() {

    const { type = "button" } = this.props

    return (
      < button onClick={this.props.onClick} type={type} className={style.botao} > {this.props.children}</button>
    )
  }
}

export default Botao;
