
const ProfitForm = () => {
    return (
        <form className="page-layout-form">

            <div className="page-layout-form-item">
                <span className="page-layout-form-item-title">مبلغ سپرده گذاری (تومان) </span>
                <input className="page-layout-form-item-input" type={'number'} />
            </div>

            <div className="page-layout-form-item">
                <span className="page-layout-form-item-title">نرخ سود سالانه (%) </span>
                <input className="page-layout-form-item-input" type={'number'} />
            </div>

            <div className="page-layout-form-item">
                <span className="page-layout-form-item-title">نوع سپرده </span>
                <div className="page-layout-form-item-radio">
                    <label>
                        <span>ساده</span>
                        <input type={'radio'} name="type" value={'simple'} checked />
                    </label>
                    <label>
                        <span>مرکب</span>
                        <input type={'radio'} name="type" value={'simple'} />
                    </label>
                </div>
            </div>

            <div className="page-layout-form-item">
                <span className="page-layout-form-item-title">مدت سپرده </span>
                <div className="page-layout-form-item-input-with-select">
                    <input type={'number'} />
                    <select>
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