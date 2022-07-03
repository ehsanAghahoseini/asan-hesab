

export declare type InputProps = {
    name:string ,
    title: string,
    type: string,
    required?: boolean,
}

const Input = ({name ,title , type , required}:InputProps) => {
    return (
        <div className="page-layout-form-item">
            <span className="page-layout-form-item-title">{title}</span>
            <input name={name} className="page-layout-form-item-input" type={type} required={required == true ? true : false} />
        </div>
    )
}

export default Input;

