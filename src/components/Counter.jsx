import React, { Component } from "react";

export class Counter extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       count: 1
    }
  }

  increment(){
    
    // this.setState({
    //   count : this.state.count + 1
    // }, 
    // ()=>{
    //   console.log(this.state.count) // callback function, render after the state is changed and state is updated
    // })
    
    // console.log("outside callback ", this.state.count) // it is printed first because above function is asynchronous



    this.setState((prevState)=>{
      return {count: prevState.count + 1}
    }, ()=>{console.log('callback ', this.state.count);
    })

    console.log("outside", this.state.count);
    
  }

  render() {
    return <div>
        <h1>Counter</h1>
        <h2>Count : {this.state.count}</h2>
        <button onClick={()=>this.increment()}>Increment</button>
    </div>;
  }
}

export default Counter;
