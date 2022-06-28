import React from 'react'



class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 0,
        }
    }
 
increaseTime (){
    this.setState({
        time: this.state.time+1
    })
}
    
    render(){
        console.log("Render happened");
        return(
            <>
            
            <div>
                {this.state.time}
            </div>

            <button onClick={() => {this.increaseTime()}}>Click me</button>

            </>
        )
    }
}

export default Timer
