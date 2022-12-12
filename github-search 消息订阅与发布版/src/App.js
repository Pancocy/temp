
import React, { Component } from "react";
import Search from './Components/Search/'
import Content from './Components/Content/'
export default class App extends Component{
  render(){
    return(
      <div className="App">
      <Search/>
      <Content/>
      </div>
    )
  }
}
