import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Home from './pages/Home';
import Navigation from './pages/Navigation';
class App extends Component {
  constructor(props) {
    super(props);
  }
  state = {  }
  render() { 
    return ( 
    <div className='container'>
      {/* <header className='row'>
        <h1 className='text-center col'>Catalogue produits</h1>
        <Home></Home>
      </header> */}
      <Navigation></Navigation>
    </div> 
    );
  }
}
 
export default App;
