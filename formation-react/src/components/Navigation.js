import { createBrowserHistory } from "history";
import { PureComponent } from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import { FirstComponent } from "./FirstComponent";
import ParamComponent from "./ParamComponent";
import { SecondComponent } from './SecondComponent'
import  ThirdComponent  from "./ThirdComponent";
class Navigation extends PureComponent {
    constructor(props) {
        super(props);
    }
    state = {}
    
    //history = createBrowserHistory()
    render() {
        return (
            <>
                <Router>
                    <header>
                        <h1>Menu</h1>
                        <Link to="/">link to first component</Link>
                        <Link to="/second">link to second component</Link>
                        <Link to="/third">link to third component</Link>
                    </header>
                    <Routes>
                        <Route path='/' element={<FirstComponent />}>
                            {/* <FirstComponent></FirstComponent> */}
                        </Route>
                        <Route path='/second' element={<SecondComponent />}></Route>
                        {/* version 6 */}
                        <Route path='/third' element={<ThirdComponent />}></Route>
                        {/* version 5
                        <Route path='/third' component={<ThirdComponent />}></Route> */}
                        <Route path="/withParam/:id" element={<ParamComponent/>}></Route>
                    </Routes>
                </Router>
            </>
        );
    }
}

export default Navigation;