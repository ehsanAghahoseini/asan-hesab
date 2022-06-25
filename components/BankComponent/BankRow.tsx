import Head from "next/head";
import { ContextState } from "../context/ContextMain";
import { useContext } from "react";
import { useRouter } from "next/router";

const BankRow: any = () => {
    return (
        <>
            <div className="row-app">
                <div className="row-app-head">محاسبات بانکی</div>
                <div className="row-app-cont">
                    <div className="row-app-cont-item">
                        <div className="row-app-cont-item-inner"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BankRow;