import React, { Component } from 'react';


class Counter extends Component {

    componentDidUpdate(prevprops){
        if (prevprops.number!==this.props.number) {
            console.log(prevprops.number);
            console.log("component Updated....");
            console.log(this.props.number);
        }
    }

    render() {
        return (
            <div>
                <h1>{this.props.number}</h1>
            </div>
        );
    }
}

export default Counter
