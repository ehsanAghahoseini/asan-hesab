import { useState } from "react"
import { commaFire } from "./commaFire"


export declare type InputProps = {
    name: string,
    title: string,
    type: string,
    required?: boolean,
    errorMessage?: string,
    unit?: string,
    display_value?: boolean
}

const Input = ({ name, title, type, required, errorMessage, unit, display_value }: InputProps) => {
    const [inputValue, setInputValue] = useState(null)

    const handelOnchange = (e: any) => {
        setInputValue(e.target.value)
    }

    return (
        <div className="page-layout-form-item">
            <div className="page-layout-form-item-section">
                <span className="page-layout-form-item-section-title">{title}</span>
                <input name={name} onChange={(e: any) => handelOnchange(e)} className="page-layout-form-item-section-input" type={type} required={required == true ? true : false} />
            </div>
            <span className={`page-layout-form-item-show-value ${display_value == true && inputValue != null && inputValue!= '' && 'page-layout-form-item-show-value-active'}`}>
                {display_value == true && inputValue != null && inputValue!= '' && commaFire(inputValue)} {unit}
            </span>
        </div>
    )
}

export default Input;

