import React, { Component } from 'react';


class Tarefas extends Component {

	constructor() {
		super()
		this.state = {
			tarefas: [
				"Fazer um loop com numeros pares",
				"Fazer uma lista de dados"
			],
			tarefa: ""
		}

		this.handleChange = this.handleChange.bind(this)
		this.criarTarefa = this.criarTarefa.bind(this)
	}

	
  render() {
  	return (
    	<div className="box-to-do">
				<div className="box-add-list">
					<input onChange={ this.handleChange } value={this.state.tarefa} placeholder="Nova Tarefa"/>
					<button onClick={ this.criarTarefa }>Criar Tarefa</button>
				</div>
				<ul>
					{this.state.tarefas.map(tarefa => <li key={ tarefa }>{tarefa}</li>)}
				</ul>
    	</div>
  	)
  }
	
	handleChange(event) {
		this.setState({
			tarefa: event.target.value
		});
	}
	criarTarefa() {
		const {tarefa, tarefas} = this.state; // metod destruction
		this.setState({
			tarefa: "",
			tarefas: [].concat(tarefas, tarefa)
		})
	}

}

export default Tarefas;