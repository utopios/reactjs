import { PureComponent, useState } from "react";
import { connect, useDispatch } from "react-redux"
import { addCustomer, addCustomerAsync } from "../redux/actions/customerActions";
// class FormCustomer extends PureComponent {
//     constructor(props) {
//         super(props);
//         this.state = {
//             name: ''
//         }
//     }

//     render() {
//         return (
//             <div>
//                 <input type="text" name="name" onChange={e => this.setState({ [e.target.name]: e.target.value })} />
//                 <button onClick={e => {
//                     this.props.addCustomer({ name: this.state.name })
//                 }}>Valider</button>
//             </div>
//         );
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return { addCustomer: (customer) => dispatch(addCustomer(customer)) }
// }
// export default connect(null, mapDispatchToProps)(FormCustomer);


const FormCustomer = (props) => {
    const [name, setName] = useState('')
    //useDispatch est un hook react redux pour dispatcher une action
    const dispatch = useDispatch()
    return (
        <div>
            <input type="text" name="name" onChange={e => setName(e.target.value)} />
            <button onClick={e => {
                dispatch(addCustomerAsync({name: name}))      
            }}>Valider</button>
        </div>
    )
}

export default FormCustomer