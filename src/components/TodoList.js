// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
// everything goes in here

import React from 'react';
import TodoForm from "./TodoForm"
import Todo from './Todo'

export default class TodoList extends React.Component{
    state = {
        todos:[],
        filtering: "all"
    }
    
    addTodo = (todo) => { this.setState({ todos: [todo, ...this.state.todos] }) }

    toggleComplete = id => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) return {...todo, complete: !todo.complete}
                else return todo;
            })
        })
    }

    updateFiltering = (string) => { this.setState( { filtering: string } ) }

  render() {
    let buttonStyle = {
        boxShadow: '0px 0px 0px transparent',
        border: '0px solid transparent',
        textShadow: '0px 0px 0px transparent',
        display: 'inline-block',
        padding: '0.3em 1em',
        margin: '0 0.2em 0.2em 0',
        borderRadius: '2em',
        boxSizing: 'border-box',
        textDecoration: 'none',
        fontWeight: 300,
        color:'#FFFFFF',
        backgroundColor:'#4eb5f1',
        textAlign:'center',
        transition: 'all 0.2s',
        marginTop: 5
    }

    let todos = {} 

    if (this.state.filtering === 'all'){
        todos = this.state.todos

    }else if (this.state.filtering === 'incomplete'){
        todos = this.state.todos.filter(todo => !todo.complete)

    }else if (this.state.filtering === 'complete'){
        todos = this.state.todos.filter(todo => todo.complete)}

    return (
      <>
        {/* Render inputs */}
        <TodoForm onSubmit={this.addTodo}/> 
        {/* Render todos */}
        {todos.map(todo =>

            <Todo 
                key={todo.id}
                toggleComplete={() => this.toggleComplete(todo.id)} 
                todo={todo}
            />

        )}
        <div>
            <button style={buttonStyle} onClick={()=> this.updateFiltering('all')} >All</button>
            <button style={buttonStyle} onClick={()=>this.updateFiltering('incomplete')} >Incomplete</button>
            <button style={buttonStyle} onClick={()=>this.updateFiltering('complete')} >Complete</button>
        </div>
        
      </>
    );
  }
}
