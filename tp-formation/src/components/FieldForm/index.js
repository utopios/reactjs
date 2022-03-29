export const InputFieldForm = (props) => {
    return(
        <div className={'row ' + props.className ? props.className : ''}>
            <label className="col-2">{props.label}</label>
            <input className="col-8 form-control" defaultValue={props.value} type={props.type ? props.type: 'text'} name={props.name} onChange={props.handleTextChange}  />
            {props.fieldError != '' ? (<span>{props.fieldError}</span>) : <></>}
        </div>
    )
}
