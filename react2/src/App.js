import logo from './logo.svg';
import './App.css';
import PizzaComponent from './components/PizzaComponent/PizzaComponent' ;
/* npx generate-react-cli component PizzaComponent */

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <PizzaComponent pName = "Magyaros" pPrice = "20"/>
      </header>
    </div>
  );
}

export default App;
