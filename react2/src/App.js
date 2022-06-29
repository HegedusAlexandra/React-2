
import './App.css';
import PizzaComponent from './components/PizzaComponent/PizzaComponent'  ;
/* npx generate-react-cli component PizzaComponent */
import Timer from './components/Timer';

import Timer2 from './components/Timer2';


function App() {
  return (
    <div className="App">
      <header className="App-header">
          Get name and price:<PizzaComponent pName = "Magyaros" pPrice = "20"/>    
          Timer:<Timer/>
          Timer:<Timer/>
          Timer2:<Timer2/>
        
        
      </header>
    </div>
  );
}

export default App;
