import React, { Component } from "react";
import './Main.css';
// Form
import { FaPlus } from 'react-icons/fa';

// Tarefas
import { FaEdit, FaWindowClose } from 'react-icons/fa';

export default class Main extends Component {

  state = {
    novaTarefa: '',
    tarefas: [],
    index: -1,
  };

  handleSubmit = (evento) => {
    evento.preventDefault();
    //console.log("Oi");
    const { tarefas, index } = this.state;
    let { novaTarefa } = this.state;
    novaTarefa = novaTarefa.trim();

    if (tarefas.indexOf(novaTarefa) !== -1){
      return;
    }
    const novasTarefas = [...tarefas];
    if (index === -1) {
      this.setState({
        tarefas: [...novasTarefas, novaTarefa],
        novaTarefa: '',
      });
    } else {
      novasTarefas[index] = novaTarefa;

      this.setState({
        tarefas: [...novasTarefas],
        index: -1,
      });
    }
  }

  handleDelete = (evento, index) => {
    const { tarefas } = this.state;
    const novasTarefas = [...tarefas];

    novasTarefas.splice(index, 1);

    this.setState({
      tarefas: [...novasTarefas],
    });

    return;
  }

  handleEdit = (evento, index) => {
    const { tarefas } = this.state;
    this.setState({
      index,
      novaTarefa: tarefas[index],
    });

  }




  handleChance = (evento) => {
    this.setState({
      novaTarefa: evento.target.value,
    });
  }

  render() {
    const { novaTarefa, tarefas } = this.state;
    return (
      <div className="main">
        <h1>Lista de Tarefas {  }</h1>

        <form  onSubmit={ this.handleSubmit } action='#' className="form">
          <input
            type="text"
            onChange={this.handleChance}
            value={ novaTarefa }
          />
          <button type="submit" >
            <FaPlus />
          </button>
        </form>

        <ul className="tarefas" >
          { tarefas.map((tarefa, index) => (
            <li key={ tarefa } >
              { tarefa }
            <span>
                <FaEdit
                  className="edit" onClick={ (evento) => this.handleEdit(evento, index) }
                />

                <FaWindowClose
                  className="delete" onClick={ (evento) => this.handleDelete(evento, index) }
                />

            </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
