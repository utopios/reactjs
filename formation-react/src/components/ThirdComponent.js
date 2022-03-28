import React from "react"
import { PureComponent } from "react";
import { withRouter } from "../utils/WithRouter";

class ThirdComponent extends PureComponent {
    constructor(props) {
        super(props)
    }

    goBack = () => {
        console.log(this.props)
        this.props.navigate('/')
    }
    render() {
        return (
            <>
                <h1>
                    Third Component
                </h1>
                <div>
                    Content of third component
                </div>
                <button onClick={(e) => this.goBack()}>Go Back to First</button>
            </>
        )
    }
}

export default withRouter(ThirdComponent)