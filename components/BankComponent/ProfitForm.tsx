import { useState, useRef, useEffect } from "react";
import Input from "../widget/Input";
import InputWhitSelect from "../widget/InputWhitSelect";

const ProfitForm = () => {
    const formRef = useRef(null)
    const [isComposite, setIsComposite] = useState<boolean>(false)

    const onFinishForm = (e: any) => {
        e.preventDefault();
        console.log(formRef.current['price'].value);

    }

    return (
        <form ref={formRef} onSubmit={onFinishForm} className="page-layout-form">

            <Input name="price" title="مبلغ سپرده گذاری (تومان)" type="number" required={true} />

            <Input name="profit" title="نرخ سود سالانه (%)" type="number" required={true} />

            <div className="page-layout-form-item">
                <span className="page-layout-form-item-title">نوع سپرده </span>
                <div className="page-layout-form-item-radio">
                    <label>
                        <span>ساده</span>
                        <input type={'radio'} onChange={() => { setIsComposite(false) }} name="typeDeposit" value={'simple'} checked={isComposite == false && true} />
                    </label>
                    <label>
                        <span>مرکب</span>
                        <input type={'radio'} onChange={() => { setIsComposite(true) }} name="typeDeposit" value={'composite'} checked={isComposite && true} />
                    </label>
                </div>
            </div>

            {isComposite &&
                <Input name="Profit_on_profit" title="نرخ سود روی سود (%) " type="number" required={true} />
            }

            <InputWhitSelect type="number" name='period' required={true} title={'مدت سپرده'} select_name='period_type' selecet_required={true}>
                <option>روز</option>
                <option>ماه</option>
                <option>سال</option>
            </InputWhitSelect>

            <button className="page-layout-form-submit">محاسبه</button>

        </form>
    )
}

export default ProfitForm;