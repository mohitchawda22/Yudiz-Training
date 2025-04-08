import { Component } from "react";

class App extends Component{
  state={
    age:42
  }

  handleAge=()=>{
    this.setState({
    age:this.state.age+1
  });
}
render() {
  return (
    <>
      <button onClick={this.handleAge}>
      Increment age
      </button>
      <p>You are {this.state.age}.</p>
    </>
  );
}

}

export default App

