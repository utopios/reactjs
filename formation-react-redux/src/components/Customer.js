import { PureComponent } from "react";
import {connect} from "react-redux"

class Customer extends PureComponent {
    constructor(props) {
        super(props);
        
    }
    render() { 
        return ( 
            <div>
                {this.props.customers.map((customer, index) => (<div key={index}>{customer.name}</div>))}    
            </div>
         );
    }
}

const mapStateToProps  = (state) => {
   return  {customers : state.customers.customers }
}



export default connect(mapStateToProps, null)(Customer);