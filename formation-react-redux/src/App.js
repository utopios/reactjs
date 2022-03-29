import logo from './logo.svg';
import './App.css';
import { Provider } from "react-redux"
import { store } from "./redux/store"
import Customer from './components/Customer';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Customer></Customer>
      </div>
    </Provider>

  );
}

export default App;
