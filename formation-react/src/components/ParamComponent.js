// import { useParams } from "react-router-dom"

import { PureComponent } from "react";
import { withRouter } from "../utils/WithRouter";

// export const ParamComponent = (props) => {
//     const params = useParams()
//     return(
//        <div>
//            Value of param id {params.id}
//        </div>
//     )
// }

class ParamComponent extends PureComponent {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
        <div>
           Value of param id {this.props.params.id}
       </div>
         );
    }
}
 
export default withRouter(ParamComponent);