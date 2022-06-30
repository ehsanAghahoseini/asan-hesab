
const ProfitForm = () => {
    return (
        <form className="page-layout-form">

            <div className="page-layout-form-item">
                <span className="page-layout-form-item-title">مبلغ سپرده گذاری (تومان) </span>
                <input className="page-layout-form-item-input" type={'number'}  />
            </div>

            <div className="page-layout-form-item">
                <span className="page-layout-form-item-title">نرخ سود سالانه (%) </span>
                <input className="page-layout-form-item-input" type={'number'}  />
            </div>
        </form>
    )
}

export default ProfitForm;