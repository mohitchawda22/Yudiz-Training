import React, { Component } from 'react';



class Counter extends Component {

    constructor(){
        super()
        this.state={
            count:0
        }

    }
    componentWillUnmount(){
        console.log("component is unmounted");
        
    }
    componentDidMount(){
        console.log("component is mountingg.....");
    }
    increment=()=>{
        this.setState({count:this.state.count+1}) 
    }

    render() {
        return (
            <div>
                <h1>Counter:</h1>
                <button onClick={()=>this.increment()}>{this.state.count}</button>
            </div>
        );
    }
}

export default Counter
