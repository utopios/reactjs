import { PureComponent } from "react";
import {connect} from "react-redux"
import { addCustomer } from "../redux/actions/customerActions";
class Customer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            name : ''
        }
    }
    render() { 
        return ( 
            <div>
                {this.props.customers.map((customer, index) => (<div key={index}>{customer.name}</div>))}
                
                    <input type="text" name="name" onChange={e => this.setState({[e.target.name]:e.target.value})} />
                    <button onClick={e => {
                        this.props.addCustomer({name:this.state.name})
                    }}>Valider</button>
                
            </div>
         );
    }
}

const mapStateToProps  = (state) => {
   return  {customers : state.customers.customers }
}

const mapDispatchToProps = (dispatch) => {
   return  {addCustomer : (customer) => dispatch(addCustomer(customer)) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Customer);