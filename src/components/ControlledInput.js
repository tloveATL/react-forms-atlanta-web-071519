// Code ControlledInput Component Here
import React, { Component } from 'react'

class Form extends Component {
    state = {
    firstName: "John",
    lastName: "Henry"
    }

    handleFirstNameChange = event => {
        this.setState({
        firstName: event.target.value
        })
    }
    
    handleLastNameChange = event => {
        this.setState({
        lastName: event.target.value
        })
    }
    //could combine the above into a single function

    // handleChange = event => {
    //     this.setState({
    //       [event.target.name]: event.target.value
    //     })
    //   }

    render() {
    return (
        <form>
        <input type="text" id="firstName" onChange={event => this.handleFirstNameChange(event)} value={this.state.firstName} />
        <input type="text" id="lastName" onChange={event => this.handleLastNameChange(event)} value={this.state.lastName} />
        </form>
    )
    }
}

export default Form