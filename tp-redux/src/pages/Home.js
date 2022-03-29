import {PureComponent} from "react"
import Products from "../components/Products";
class Home extends PureComponent {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }
    render() {
        return (
            <>
                <Products products=""></Products>
            </>
            );
    }
}

export default Home;