import { PureComponent } from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { NavBar } from "../components/NavBar";
import Form from "./Form";
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
                    {/* <Route path="/product/:id" element={<DetailProduct />}></Route>
                    <Route path="/cart" element={<Cart cart={this.state.cart} />}></Route> */}
                    <Route path="/Form" element={<Form/>}></Route>
                </Routes>
            </Router>
         );
    }
}
 
export default Navigation;