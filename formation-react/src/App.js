import logo from './logo.svg';
import './App.css';
import { FirstComponent } from './components/FirstComponent';
import { SecondComponent } from './components/SecondComponent';
import { ThirdComponent } from './components/ThirdComponent';
import { Person } from './components/Person';

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
      </header>
      <FirstComponent></FirstComponent>
      <SecondComponent></SecondComponent>
      <ThirdComponent></ThirdComponent>
      <h2>Liste de personnes</h2>
      <Person firstName="toto" lastName="tata"></Person>
      <Person firstName="titi" lastName="minet"></Person>
    </div>
  );
}

export default App;
