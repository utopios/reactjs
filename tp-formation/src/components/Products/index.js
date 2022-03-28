import { PureComponent } from "react";
import Product from "../Product";

class Products extends PureComponent {
    constructor(props) {
        super(props);
    }
    
    render() { 
        return ( 
            <div className="row">
                {this.props.products.map((product,index) => (<Product product={product} key={index} />))}
            </div>
         );
    }
}
 
export default Products;