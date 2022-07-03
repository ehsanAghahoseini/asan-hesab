


export declare type InputWhitSelectProps = {
    name: string,
    title: string,
    type: string,
    required?: boolean,
    selecet_required?: boolean
    select_name: string,
    children: JSX.Element | JSX.Element[],
}

const InputWhitSelect = ({ name, title, type, required, select_name, selecet_required, children }: InputWhitSelectProps) => {
    return (
        <div className="page-layout-form-item">
            <span className="page-layout-form-item-title">مدت سپرده </span>
            <div className="page-layout-form-item-input-with-select">
                <input type={type} name={name} required={required == true ? true : false} />
                <select name={select_name} required={selecet_required == true ? true : false}>
                    {children}
                </select>
            </div>
        </div>
    )
}

export default InputWhitSelect;

