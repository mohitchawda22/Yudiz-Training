import { Component } from "react";
import Counter from "./components/Counter";

class App extends Component{

  constructor(){
    super()
    this.state={
      count:0
    }
  }

  componentDidMount(){
    console.log("Component Mounted......"); 
  }

  Increment=()=>{
    this.setState({
      count:this.state.count+1
    });
  }

  componentWillUnmount(){
    console.log("component Will Unmounted.......Removed");
  }

render() {
  return (
    <>
      <button onClick={()=>this.Increment()}>
      Increment age
      </button>
      <Counter number={this.state.count}></Counter>
    </>
  );
}

}

export default App

