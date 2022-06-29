import Head from "next/head";
import { ContextState } from "../context/ContextMain";
import { useContext } from "react";
import { useRouter } from "next/router";

export declare type RowComponentProps = {
    title: string,
    listData: any,
    filter?: string,
}

const RowComponent: any = ({ title, listData, filter }: RowComponentProps) => {
    return (
        <>
            <div className="row-app">
                <div className="row-app-head">{title}</div>
                <div className="row-app-cont">
                    {listData.map((item: any, index: number) =>
                        <>
                            {filter && filter == item.category &&
                                <div key={index} className="row-app-cont-item">
                                    <div className="row-app-cont-item-inner">
                                        <div className="row-app-cont-item-inner-head">
                                            <svg x="0px" y="0px" viewBox={item.view_icon}>
                                                <use xlinkHref={item.src_icon} />
                                            </svg>
                                        </div>
                                        <span className="row-app-cont-item-inner-title">{item.name}</span>
                                    </div>
                                </div>
                            }
                        </>
                    )}
                </div>
            </div>
        </>
    )
}

export default RowComponent;