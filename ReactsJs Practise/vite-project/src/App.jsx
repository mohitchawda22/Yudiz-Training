import { Component } from "react";
import Counter from "./components/Counter";

class App extends Component{

  constructor(){
    super()
    this.state={
      age:0
    }
  }

  componentDidMount(){
    console.log("Component Mounted......"); 
  }

  Increment=()=>{
    this.setState({
      age:this.state.age+1
    });
  }

  componentWillUnmount(){
    console.log("component Will Unmounted.......Removed");
  }

render() {
  return (
    <>
      <Counter number={this.state.age}></Counter>
      <button onClick={()=>this.Increment()}>
      Increment age
      </button>
    </>
  );
}

}

export default App

