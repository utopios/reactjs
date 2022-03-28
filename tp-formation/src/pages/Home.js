import {PureComponent} from "react"
import Products from "../components/Products";
import { fakeData } from "../utils/fakedata";
class Home extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            products : []
        }
    }

    componentDidMount() {
        this.setState({products: [...fakeData]})
    }
    render() {
        return (
            <>
                <Products products={this.state.products}></Products>
            </>
            );
    }
}

export default Home;