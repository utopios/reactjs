import React from "react"
import { PureComponent } from "react";

export class ThirdComponent extends PureComponent {
    constructor(props) {
        super(props)
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
            </>
        )
    }
}