
import { useState } from 'react';
import './App.css';
import PizzaComponent from './components/PizzaComponent/PizzaComponent'  ;
/* npx generate-react-cli component PizzaComponent */
import Timer from './components/Timer';

import Timer2 from './components/Timer2';


function App() {
  /* const state = useState(true)
  const showTimer = state[0]
  const setShowTimer = state[1] */

  const[showTimer,setShowTimer]=useState(true)

  return (
    <div className="App">
      <header className="App-header">
          Get name and price:<PizzaComponent pName = "Magyaros" pPrice = "20"/>    
          
          Timer:{showTimer ? <Timer/> : <div>No timer</div>}
          <button onClick={()=>{setShowTimer(false)}}>hide</button>
          
          Timer2:<Timer2/>
        
        
      </header>
    </div>
  );
}

export default App;
