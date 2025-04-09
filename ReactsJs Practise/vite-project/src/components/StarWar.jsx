import React, { Component } from 'react';


class StarWar extends Component {

    state = {
        count: 1,
        character: {}
    }
    
    add = () => {
        this.setState(prevState => ({count: prevState.count + 1}))
    }
    
    subtract = () => {
        this.setState(prevState => ({count: prevState.count - 1}))
    }
    
    getStarWarsCharacter = (id) => {
        fetch(`https://swapi.dev/api/people/${id}`)
            .then(res => res.json())
            .then(data => this.setState({character: data}))
    }
    
    componentDidMount() {
        this.getStarWarsCharacter(this.state.count)
        console.log("Mounted");
        
    }
    
    componentDidUpdate(prevProps, prevState) {
        if(prevState.count !== this.state.count) {
            this.getStarWarsCharacter(this.state.count)
            console.log("Updated")
        } 
    }
    render() {
        return (
            <div>
                <div>
                    <button onClick={this.subtract}>–</button>
                    <div className="counter--count">
                        <h1>{this.state.count}</h1>
                    </div>
                    <button onClick={this.add}>+</button>
                </div>
                <h1>{this.state.character.name || "Loading..."}</h1>
            </div>
        );
    }
}

export default StarWar