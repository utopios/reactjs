import { PureComponent } from "react";

class FormPerson extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
        }
    }

    handleTextChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        this.setState({ [name]: value })
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
    }

    render() {
        return (
            <>
                <form className="container" onSubmit={this.handleFormSubmit}>
                    <div className="row">
                        <input type="text" name="firstName" onChange={this.handleTextChange} placeholder="First name" />
                    </div>
                    <div className="row">
                        <input type="text" name="lastName" onChange={this.handleTextChange} placeholder="Last name" />
                    </div>
                    <div>
                        <button type="submit">Valider</button>
                    </div>
                </form>
            </>
        );
    }
}

export default FormPerson;