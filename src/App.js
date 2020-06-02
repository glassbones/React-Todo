import React from 'react';
import TodoList from "./components/TodoList"
  // you will need a place to store your state in this component.

  // design `App` to be the parent component of your application.

  // this component is going to take care of state, and any change handlers you need to work with your state
export default class App extends React.Component{
  render() {
    return (
      <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center', height: '100vh', }}>
        <TodoList/>
      </div>
    );
  }
}

