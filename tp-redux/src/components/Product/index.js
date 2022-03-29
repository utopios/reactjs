import { PureComponent } from "react";
import { Link } from "react-router-dom"
import {useDispatch} from "react-redux"
import { addProductToCart } from "../../redux/actions/CartAction";
// class Product extends PureComponent {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         const { product } = this.props
//         return (
//             <Link className="col-4" to={'/product/' + product.id}>
//                 <div className="row justify-content-center">
//                     <img src={product.img} className="col" />
//                 </div>
//                 <div className="row justify-content-center">
//                     <h3>{product.name}</h3>
//                 </div>
//                 <div className="row justify-content-center">
//                     <span>{product.price} €</span>
//                 </div>
//             </Link>
//         );
//     }
// }


const Product = (props) => {

    const { product } = props
    const dispatch = useDispatch()
    return (
        <div className="col-4" >
            <div className="row justify-content-center">
                <img src={product.img} className="col" />
            </div>
            <div className="row justify-content-center">
                <h3>{product.name}</h3>
            </div>
            <div className="row justify-content-center">
                <span>{product.price} €</span>
            </div>
            <div>
                <button onClick={e => dispatch(addProductToCart(product))}>Ajouter au panier</button>
            </div>
        </div>
    )
}


export default Product