import React, { Component } from "react";
import Form from "./Component/form";
import './App.css'

class App extends Component{
  render(){
    return(
      <div className="App">
      <h1 className="apph1">FeedBack Form</h1>
      <Form/>
      </div>
    )
  }
}
export default App