import React, { Component } from "react";
import './Main.css';

export default class Main extends Component {

  state = {
    novaTarefa: '',
  };

  handleChance = (evento) => {
    this.setState({
      novaTarefa: evento.target.value,
    });
  }

  render() {
    //const { novaTarefa } = this.state;
    return (
      <div className="main">
        <h1>Lista de Tarefas</h1>

        <form action='#'>
          <input type="text" onChange={this.handleChance} />
          <button type="submit" >Salvar</button>
        </form>
      </div>
    );
  }
}
