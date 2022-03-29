import { PureComponent } from "react"
import { connect } from "react-redux";
import Products from "../components/Products";
import { loadProducts } from "../redux/actions/ProductsAction";
class Home extends PureComponent {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.loadProducts()
    }
    render() {
        return (
            <>
                {this.props.loading ? (<span>loading</span>) : null}
                <Products products={this.props.products}></Products>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products.products,
        loading: state.products.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadProducts: () => dispatch(loadProducts())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)