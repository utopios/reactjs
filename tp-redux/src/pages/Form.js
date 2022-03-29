import { PureComponent } from "react";
import { InputFieldForm } from "../components/FieldForm";
import { addProduct } from "../utils/fakedata";
import { withRouter } from "../utils/WithRouter";

class Form extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            desc: '',
            img: '',
            price: '',
            discount: '',
            formErrors : {name : '', desc : '', img : '', price : '', discount : ''},
            formValid : false
        }
    }

    handleTextChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        let tmpFormErrors = this.state.formErrors
        if(value == '') {
            tmpFormErrors[name] = 'Merci de saisir le champs '+ name
        }else {
            tmpFormErrors[name] = ''
        }
        this.setState({[name]: value, formErrors : tmpFormErrors}, () => {
            let tmpFormValid  = true
            for(let i in tmpFormErrors) {
                if(tmpFormErrors[i] != '') {
                    tmpFormValid = false
                    break;
                }
            }
            this.setState({formValid : tmpFormValid})
        })
    }

    handleSubmitForm = (e) => {
        e.preventDefault()
        if(this.state.formValid) {
            const {name, desc, img, price, discount} = this.state
            addProduct({
                name, desc, img, price, discount
            })
            this.props.navigate('/')
        }
        
    }
    render() {
        const {formErrors} = this.state
        return (
            <form onSubmit={this.handleSubmitForm} className="container">
                <InputFieldForm label="name" value={this.state.name} name='name' handleTextChange={this.handleTextChange} fieldError={formErrors.name} ></InputFieldForm>
                <InputFieldForm  label="desc" value={this.state.desc} name='desc' handleTextChange={this.handleTextChange} fieldError={formErrors.desc} ></InputFieldForm>
                <InputFieldForm  label="img" value={this.state.img} name='img' handleTextChange={this.handleTextChange} fieldError={formErrors.img} ></InputFieldForm>
                <InputFieldForm  label="price" type='number' value={this.state.price} name='price' handleTextChange={this.handleTextChange} fieldError={formErrors.price} ></InputFieldForm>
                <InputFieldForm  label="discount" type='number' value={this.state.discount} name='discount' handleTextChange={this.handleTextChange} fieldError={formErrors.discount} ></InputFieldForm>
                <div className="row">
                    <button className="col form-control btn btn-primary" type="submit">Valider</button>
                </div>
            </form>
        );
    }
}

export default withRouter(Form);