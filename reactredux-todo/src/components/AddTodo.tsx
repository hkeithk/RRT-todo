import React, { Component } from 'react';


export default class AddTodo extends Component<{}, {input: string}> {
    constructor(props: any){
        super(props);
        this.state={
            input: ''
        }
    }

    //arrow functions dont need bindin
    handleInputClick = (event: React.FormEvent<HTMLInputElement>) => {
        this.setState({input: event.currentTarget.value})
        console.log(this.state)
    }

    handleSubmit = (event: React.FormEvent<HTMLButtonElement>) => {
        // this.set
    }

    
    
    render() {
        
        return (
            <div>
                <input value={this.state.input} onChange={ event => this.handleInputClick(event)}></input>
                <button>Add Todo</button>
            </div>
        )
    }
}
