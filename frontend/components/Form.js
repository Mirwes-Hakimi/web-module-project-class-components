import React from 'react'

export default class Form extends React.Component {
  constructor(){
    super();
    this.state = {
     name: "",

    }
  }
  handleChangeInput = (event) => {
    
   this.setState({
    name: event.target.value,
   })
  }

  handleSubmit = (event) => {
   event.preventDefault();
   /// call addToDo passed from app.js to add the new to do
   this.props.addToDo(this.state.name)
   /// clear the input feild
   this.setState({
    name:"",
   })
  }

  render() {
    return (
      <div>
       <form onSubmit={this.handleSubmit}>
        <input 
        type='text'
        placeholder='Type your to dos' 
        value={this.state.name} /// bind input feild to the state
        onChange={this.handleChangeInput} /// update the state when input change
        />
        <button type='submit'>Submit</button>
      
       </form>
      </div>
    )
  }
}
