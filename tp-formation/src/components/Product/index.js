import { PureComponent } from "react";

class Product extends PureComponent {
    constructor(props) {
        super(props);
    }
    render() { 
        const {product} = this.props
        return ( 
            <div className="col-4">
                <div className="row justify-content-center">
                    <img src={product.img} className="col" />
                </div>
                <div className="row justify-content-center">
                    <h3>{product.name}</h3>
                </div>
                <div className="row justify-content-center">
                    <span>{product.price} €</span>
                </div>
            </div>
         );
    }
}
 
export default Product