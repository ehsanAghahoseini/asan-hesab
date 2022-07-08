import { useState } from "react"


export declare type InputWhitSelectProps = {
    name: string,
    title: string,
    type: string,
    required?: boolean,
    selecet_required?: boolean
    select_name: string,
    children: JSX.Element | JSX.Element[],
    unit?: string,
    display_value?: boolean
}

const InputWhitSelect = ({ name, title, type, required, select_name, selecet_required, children , unit , display_value }: InputWhitSelectProps) => {
    const [inputValue, setInputValue] = useState(null)

    const handelOnchange = (e: any) => {
        setInputValue(e.target.value)
    }


    return (
        <div className="page-layout-form-item">
            <div className="page-layout-form-item-section">
                <span className="page-layout-form-item-section-title">مدت سپرده </span>
                <div className="page-layout-form-item-section-input-with-select">
                    <input type={type} name={name} required={required == true ? true : false} />
                    <select name={select_name} required={selecet_required == true ? true : false}>
                        {children}
                    </select>
                </div>
            </div>
            <span className={`page-layout-form-item-show-value ${display_value == true && inputValue != null && inputValue != '' && 'page-layout-form-item-show-value-active'}`}>
                {display_value == true && inputValue != null && inputValue != '' && inputValue} {unit}
            </span>
        </div>
    )
}

export default InputWhitSelect;

