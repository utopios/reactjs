import { PureComponent } from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { NavBar } from "../components/NavBar";
import { foundById } from "../utils/fakedata";
import { Cart } from "./Cart";
import { DetailProduct } from "./DetailProduct";
import Home from "./Home";
class Navigation extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            cart : {
                products : [],
                total : 0
            }
        }
    }

    addProductToCart = (id) => {
        foundById(id).then(res => {
            const tmpCart = {
                products : [...this.state.cart.products, res],
                total : this.state.cart.total + res.price
            }
            this.setState({cart : tmpCart})
        })
    }
    render() { 
        return ( 
            <Router>
                <NavBar count={this.state.cart.products.length}></NavBar>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/product/:id" element={<DetailProduct addProductToCart={this.addProductToCart} />}></Route>
                    <Route path="/cart" element={<Cart cart={this.state.cart} />}></Route>
                </Routes>
            </Router>
         );
    }
}
 
export default Navigation;