import React from 'react'
import { nanoid } from 'nanoid'
//this is where you create todos

export default class TodoForm extends React.Component{

    state = {
        text:''
    };

    changeHandler = e => this.setState({ [e.target.name] : e.target.value });

    submitHandler = e => {
        e.preventDefault();
        let nano = nanoid()
        this.props.onSubmit({
            id: nano,
            text: this.state.text,
            complete: false,
        })
        this.setState({ text:'' })

        //submit form
    }
    
    render(){
        return(
            <form onSubmit={this.submitHandler}>
                <input 
                    name='text'
                    value={this.state.text}
                    onChange={this.changeHandler}
                    placeholder= "Please type a todo">
                </input>
                <input type='submit'/>
            </form>

        );
    }
}