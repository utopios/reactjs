import {Link} from "react-router-dom"
import {useSelector} from "react-redux"
export const NavBar = (props) => {
    const {products, total} = useSelector(state => state.cart)

    return (
        <header className="row">
            <div className="col-9">
                E-commerce
            </div>
            <Link to="/cart" className="col-3">
                Panier {products.length}
                total : {total} €
            </Link>
        </header>
    )
}