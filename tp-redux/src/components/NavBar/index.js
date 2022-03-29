import {Link} from "react-router-dom"
export const NavBar = (props) => {


    return (
        <header className="row">
            <div className="col-9">
                E-commerce
            </div>
            <Link to="/cart" className="col-3">
                Panier {props.count}
            </Link>
        </header>
    )
}