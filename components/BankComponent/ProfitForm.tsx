import { useState, useRef, useEffect } from "react";
import Drower from "../widget/Drower";
import Input from "../widget/Input";
import InputWhitSelect from "../widget/InputWhitSelect";

const ProfitForm = () => {
    const formRef: any = useRef(null)
    const [isComposite, setIsComposite] = useState<boolean>(false)
    const [visibleResult, setVisibleResult] = useState<boolean>(false)
    const [result, setResult] = useState<number>(0)

    const calucatorComposite = (price: number, profit: number, period: number, period_type: string, Profit_on_profit: number) => {

    }

    const calucatorSimple = (price: number, profit: number, period: number, period_type: string) => {
        let result = 0;
        result = (price * profit) / 36500;
        if (period_type === 'day') {
            result = result * period;
        }
        if (period_type === 'month') {
            result = result * period * 30;
        }
        if (period_type === 'year') {
            result = result * period * 365;
        }
        setResult(+result.toFixed(3))
        setVisibleResult(true)

    }


    const onFinishForm = (e: any) => {
        e.preventDefault();
        let price = +formRef.current['price'].value;
        let profit = +formRef.current['profit'].value;
        let period = +formRef.current['period'].value;
        let period_type = formRef.current['period_type'].value;
        if (isComposite) {
            let Profit_on_profit = +formRef.current['Profit_on_profit'].value;
            calucatorComposite(price, profit, period, period_type, Profit_on_profit)
        }
        else {
            calucatorSimple(price, profit, period, period_type)
        }
    }

    return (
        <>
            <form ref={formRef} onSubmit={onFinishForm} className="page-layout-form">

                <Input name="price" title="مبلغ سپرده گذاری (تومان)" type="number" required={true} />

                <Input name="profit" title="نرخ سود سالانه (%)" type="number" required={true} />

                <div className="page-layout-form-item">
                    <span className="page-layout-form-item-title">نوع سپرده </span>
                    <div className="page-layout-form-item-radio">
                        <label>
                            <span>ساده</span>
                            <input type={'radio'} onChange={() => { setIsComposite(false) }} name="typeDeposit" value={'simple'} defaultChecked />
                        </label>
                        <label>
                            <span>مرکب</span>
                            <input type={'radio'} onChange={() => { setIsComposite(true) }} name="typeDeposit" value={'composite'} />
                        </label>
                    </div>
                </div>

                {isComposite &&
                    <Input name="Profit_on_profit" title="نرخ سود روی سود (%) " type="number" required={true} />
                }

                <InputWhitSelect type="number" name='period' required={true} title={'مدت سپرده'} select_name='period_type' selecet_required={true}>
                    <option value={'day'}>روز</option>
                    <option value={'month'}>ماه</option>
                    <option value={'year'}>سال</option>
                </InputWhitSelect>

                <button className="page-layout-form-submit">محاسبه</button>

            </form>

            <Drower name={'نتیجه'} uId={'show-profit'} visible={visibleResult} setVisible={setVisibleResult}>
                <div className=" derower-result-one">
                    <div className="derower-result-one-table">
                        <div className="derower-result-one-table-row">
                            <div className="derower-result-one-table-row-head">سود سپرده </div>
                            <div className="derower-result-one-table-row-cont">{result}</div>
                        </div>
                    </div>
                    <div className="derower-result-one-btn">
                        <div onClick={()=>{setVisibleResult(false)}} className="derower-result-one-btn-item">بستن</div>
                    </div>
                </div>
            </Drower>
        </>
    )
}

export default ProfitForm;