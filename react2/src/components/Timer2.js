// rfc vel séma

import React, { useState } from 'react'



export default function Timer2() {
  
    function increaseTime (){
        setTime(
            time+1
        )
    }

    const [time,setTime] = useState(0)
  
    return (
    <>    
    <div>
        {time}
    </div>

    <button onClick={() => {increaseTime()}}>
        Click me
    </button>
    </>    
  )
}


