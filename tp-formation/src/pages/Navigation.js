import { PureComponent } from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { NavBar } from "../components/NavBar";
import { Cart } from "./Cart";
import { DetailProduct } from "./DetailProduct";
import Home from "./Home";
class Navigation extends PureComponent {
    constructor(props) {
        super(props);
    }
    render() { 
        return ( 
            <Router>
                <NavBar></NavBar>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/product/:id" element={<DetailProduct />}></Route>
                    <Route path="/cart" element={<Cart />}></Route>
                </Routes>
            </Router>
         );
    }
}
 
export default Navigation;