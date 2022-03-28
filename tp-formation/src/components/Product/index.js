import { PureComponent } from "react";
import {Link} from "react-router-dom"
class Product extends PureComponent {
    constructor(props) {
        super(props);
    }
    render() { 
        const {product} = this.props
        return ( 
            <Link className="col-4" to={'/product/'+product.id}>
                <div className="row justify-content-center">
                    <img src={product.img} className="col" />
                </div>
                <div className="row justify-content-center">
                    <h3>{product.name}</h3>
                </div>
                <div className="row justify-content-center">
                    <span>{product.price} €</span>
                </div>
            </Link>
         );
    }
}
 
export default Product