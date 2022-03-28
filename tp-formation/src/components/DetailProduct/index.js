import { PureComponent } from "react";
import { Link } from "react-router-dom";

class DetailProduct extends PureComponent {
    constructor(props) {
        super(props);
    }
    
    render() { 
        const {img, price, name, desc, discoutPrice, discount} = this.props.product
        return ( 
            <div className="row">
                <div className="col-6">
                    <img src={img} />
                </div>
                <div className="col-6">
                    <h1 className="row">
                        <span className="col"> {name}</span>
                    </h1>
                    <div className="row">
                        <div className="col">
                            {desc}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            {price} €
                        </div>
                        <div className="col">
                            {discount}
                        </div>
                        <div className="col">
                            {discoutPrice} €
                        </div>
                    </div>
                    <div className="row">
                        <button className="col btn btn-danger">Add to cart</button>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default DetailProduct;