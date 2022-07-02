import { useState } from "react";

const ProfitForm = () => {
    const [formValue, setFormValue] = useState<any>({
        'price': null,
        'profit': null,
        'typeDeposit': 0,
        'period': null,
        'period_type': null,
    });

    const handelFormValue = (key: any, value: any) => {
        let data: any = { ...formValue };
        data[key] = value;
        setFormValue(data)
    }

    const onFinishForm = (e: any) => {
        e.preventDefault();
        console.log(e.target[2].value);

    }

    return (
        <form onSubmit={onFinishForm} className="page-layout-form">

            <div className="page-layout-form-item">
                <span className="page-layout-form-item-title">مبلغ سپرده گذاری (تومان) </span>
                <input value={formValue?.price} onChange={(e: any) => handelFormValue('price', parseInt(e.target.value))} className="page-layout-form-item-input" type={'number'} required />
            </div>

            <div className="page-layout-form-item">
                <span className="page-layout-form-item-title">نرخ سود سالانه (%) </span>
                <input value={formValue?.profit} onChange={(e: any) => handelFormValue('profit', parseInt(e.target.value))} className="page-layout-form-item-input" type={'number'} required />
            </div>

            <div className="page-layout-form-item">
                <span className="page-layout-form-item-title">نوع سپرده </span>
                <div className="page-layout-form-item-radio">
                    <label>
                        <span>ساده</span>
                        <input type={'radio'} onChange={() => handelFormValue('typeDeposit', 0)} name="typeDeposit" value={'simple'} checked={formValue?.typeDeposit == 0 && true} />
                    </label>
                    <label>
                        <span>مرکب</span>
                        <input type={'radio'} onChange={() => handelFormValue('typeDeposit', 1)} name="typeDeposit" value={'composite'} checked={formValue?.typeDeposit == 1 && true} />
                    </label>
                </div>
            </div>

            {formValue?.typeDeposit == 1 &&
                <div className="page-layout-form-item">
                    <span className="page-layout-form-item-title">نرخ سود روی سود (%) </span>
                    <input value={formValue?.depositProfit} onChange={(e: any) => handelFormValue('depositProfit', parseInt(e.target.value))} className="page-layout-form-item-input" type={'number'} required />
                </div>
            }

            <div className="page-layout-form-item">
                <span className="page-layout-form-item-title">مدت سپرده </span>
                <div className="page-layout-form-item-input-with-select">
                    <input type={'number'} value={formValue?.period} onChange={(e: any) => handelFormValue('period', parseInt(e.target.value))} required />
                    <select value={formValue?.period_type} onChange={(e: any) => handelFormValue('period_type', e.target.value)}>
                        <option>روز</option>
                        <option>ماه</option>
                        <option>سال</option>
                    </select>
                </div>
            </div>

            <button className="page-layout-form-submit">محاسبه</button>

        </form>
    )
}

export default ProfitForm;