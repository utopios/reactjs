import {Provider} from "react-redux"
import logo from './logo.svg';
import './App.css';
import {store} from "./redux/store"
import Navigation from "./pages/Navigation";
function App() {
  return (
    <Provider store={store}>
      <Navigation></Navigation>
    </Provider>
  );
}

export default App;
