import {useSelector} from "react-redux"
// import { PureComponent } from "react";
// import {connect} from "react-redux"

// class Customer extends PureComponent {
//     constructor(props) {
//         super(props);

//     }
//     render() { 
//         return ( 
//             <div>
//                 {this.props.customers.map((customer, index) => (<div key={index}>{customer.name}</div>))}    
//             </div>
//          );
//     }
// }

// const mapStateToProps  = (state) => {
//    return  {customers : state.customers.customers }
// }



// export default connect(mapStateToProps, null)(Customer);

//Avec des hooks redux

const Customer = (props) => {
    const {customers, loading} = useSelector(state => state.customers)
    return (
        <div>
            <span>loading : {loading ? 'en cours' : 'terminé'}</span>
            {customers.map((customer, index) => (<div key={index}>{customer.name}</div>))}
        </div>
    )
}

export default Customer