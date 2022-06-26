import Head from "next/head";
import { ContextState } from "../context/ContextMain";
import { useContext } from "react";
import { useRouter } from "next/router";

export declare type RowComponentProps = {
    title: string ,
}

const RowComponent: any = ({title}:RowComponentProps) => {
    return (
        <>
            <div className="row-app">
                <div className="row-app-head">{title}</div>
                <div className="row-app-cont">
                    {[0, 0].map((item: any, index: number) =>
                        <div key={index} className="row-app-cont-item">
                            <div className="row-app-cont-item-inner">
                                <svg x="0px" y="0px" viewBox="0 0 510.327 510.327">
                                    <use xlinkHref='/assets/svg/dollar-coins.svg#dollar' />
                                </svg>
                                <span className="row-app-cont-item-inner-title">محاسبه سود سپرده بانکی</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default RowComponent;