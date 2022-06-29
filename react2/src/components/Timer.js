import React, { useState } from 'react'

class Timer extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            time: 0,
        }

    setInterval(() => {
        this.increaseTime()
    },1000)
    }
        
    increaseTime (){
        this.setState({
            time: this.state.time+1
        })
    }

    componentDidMount () {
        console.log("component created");
    }

    componentWillUnmount () {
        console.log("el fog tűnni");
    }

    componentDidUpdate () {
        console.log("something changed");
    }
    
    render(){
    
        return(
            <>
            
            <div>
                {this.state.time}
            </div>

            <button onClick={() => {this.increaseTime()}}>
                Click me
            </button>

            </>
        )
    }
}

export default Timer
