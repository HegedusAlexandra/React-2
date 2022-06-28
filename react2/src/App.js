import logo from './logo.svg';
import './App.css';
import PizzaComponent from './components/PizzaComponent/PizzaComponent'  ;
/* npx generate-react-cli component PizzaComponent */
import Timer from './components/Timer';
function App() {
  return (
    <div className="App">
      <header className="App-header">
          Get name and price:<PizzaComponent pName = "Magyaros" pPrice = "20"/>    
          Timer:<Timer/>
        
        
      </header>
    </div>
  );
}

export default App;
