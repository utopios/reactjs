import logo from './logo.svg';
import './App.css';
import { Provider } from "react-redux"
import { store } from "./redux/store"
import Customer from './components/Customer';
import FormCustomer from './components/FormCustomer';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Customer></Customer>
        <FormCustomer></FormCustomer>
      </div>
    </Provider>

  );
}

export default App;
